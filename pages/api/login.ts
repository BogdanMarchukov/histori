import {NextApiRequest, NextApiResponse} from "next"
import {ErrorType, initAccountDto, userType} from "../../serverTypes/serverTypes"
import {userDto, UserHandler} from '../../models/UserHandler'
import {tokenDtoType, TokenHandler} from "../../models/TokenHandler"
import cookie from "cookie"
import dbConnect from "../../utils/dbConnect";
import {Schema} from "mongoose";
import {avatarDtoType, AvatarHandler} from "../../models/AvatarHandler";
const bcrypt = require('bcrypt')

dbConnect();



export type ResponseTypeLogin = {
    _id: Schema.Types.ObjectId
    id: string
    emailDto: string
    passwordDto: string
    isActivation: boolean
    activatedLink: string
    role: string[]
    __v: number
    surname: string
    userName: string
    patronymic: string
    address: string
    tel: string
    accessToken: string
}

export default async function handlerNext (req: NextApiRequest, res: NextApiResponse<ErrorType | initAccountDto>) {
    if (req.method === 'POST') {
        const {email, password}: {email: string, password: string} = req.body
        const user: userType = await UserHandler.searchByEmail(email) // поиск клиента на сервере
        if (user) {
            const userHandler = new UserHandler(user)
            const {passwordDto, _id, emailDto, id, isActivation, role} = userHandler.userDto()
            const passwordCompare: boolean = await bcrypt.compare(password, passwordDto) // проверка пароля

            if(!passwordCompare) {
                res.status(403).json({error: true, errorMassage: "Не верный логин или пароль"})
            } else {
                const tokenHandler = new TokenHandler(_id)
                tokenHandler.generateTokens() // создание токена
                await tokenHandler.replaceToken() // перезапись токена
                const avatarHandler = new AvatarHandler(await AvatarHandler.gerAvatar(id)) // получение пути Аватар
                const tokenDto: tokenDtoType = await tokenHandler.tokenDTO()
                const userDto: userDto = userHandler.userDto()
                const avatarDto: avatarDtoType = avatarHandler.avatarDto()

                res.setHeader("Set-Cookie", [
                    cookie.serialize("token", tokenHandler.refreshToken || '', {
                        httpOnly: true,
                        secure: false,
                        maxAge: 30 * 24 * 60 * 60 * 1000,
                        path: "/"
                    }),
                    cookie.serialize("role", JSON.stringify(role), {
                        httpOnly: true,
                        secure: false,
                        maxAge: 30 * 24 * 60 * 60 * 1000,
                        path: "/"
                    })
                ])

                res.status(200).json({...tokenDto,...userDto, ...avatarDto } ) // отправка на клиент данные пользователя

            }
        } else {
            res.status(403).json({error: true, errorMassage: "Не верный логин или пароль"})
        }
    } else {
        res.status(405).json({error: true, errorMassage: 'Данный метод запрещен'})
    }


}
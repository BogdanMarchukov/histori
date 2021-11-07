import {NextApiRequest, NextApiResponse} from "next"
import {ErrorType, userType} from "../../serverTypes/serverTypes"
import {userDto, UserHandler} from '../../models/UserHandler'
import {TokenHandler} from "../../models/TokenHandler"
import cookie from "cookie"
import dbConnect from "../../utils/dbConnect";
import testMiddleware from '../../serverMiddleware/testMiddleware'
import {Schema} from "mongoose";
const bcrypt = require('bcrypt')

dbConnect();


export default function initMiddleware(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        testMiddleware(req, res, handlerNext)
    } else {
        res.status(405).json({error: true, errorMassage: 'Данный метод запрещен'})
    }

}
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

async function handlerNext (req: NextApiRequest, res: NextApiResponse<ErrorType | ResponseTypeLogin>) {

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

                res.status(200).json({...userHandler.userDto(), accessToken: tokenHandler.accessToken ?? ''} ) // отправка на клиент данные пользователя

            }
        } else {
            res.status(403).json({error: true, errorMassage: "Не верный логин или пароль"})
        }

}
import {NextApiRequest, NextApiResponse} from "next"
import {ErrorType, userType} from "../../serverTypes/serverTypes"
import {UserHandler} from '../../models/UserHandler'
import {TokenHandler} from "../../models/TokenHandler"
import cookie from "cookie"
import dbConnect from "../../utils/dbConnect";
const bcrypt = require('bcrypt')
type ResponseData = {
    email:string
    id: string
    isActivation: boolean
    accessToken: string
    refreshToken: string
    role: string[]

}
dbConnect();

export default async function handler (req: NextApiRequest, res: NextApiResponse<ErrorType | ResponseData>) {
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
                res.status(200).json({email: emailDto, id, isActivation, role, accessToken: tokenHandler.accessToken ?? '', refreshToken: tokenHandler.refreshToken ?? ''}) // отправка на клиент данные пользователя

            }
        } else {
            res.status(403).json({error: true, errorMassage: "Не верный логин или пароль"})
        }
    }

}
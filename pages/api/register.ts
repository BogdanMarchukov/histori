import type {NextApiRequest, NextApiResponse} from 'next'
import {userDto, UserHandler} from '../../models/UserHandler'
import dbConnect from '../../utils/dbConnect'
import {TokenHandler} from '../../models/TokenHandler'
import {MailHandler} from "../../models/MailHandler"
import cookie from 'cookie'
import {ErrorType, userType} from "../../serverTypes/serverTypes"
import {ResponseTypeLogin} from "./login";




dbConnect();



export default async function handler(req: NextApiRequest, res: NextApiResponse<ErrorType | ResponseTypeLogin>) {
    if (req.method === 'POST') {
        const {email, password}: { email: string, password: string } = req.body
        const candidate = await UserHandler.searchByEmail(email) // проверка на регистрацию по email
        if (!candidate) {
            const newUserResult: userType = await UserHandler.createUser(email, password, ['user']) // создаем нового пользователя
            const user = new UserHandler(newUserResult)
            const {_id, role, id, isActivation, activatedLink} = user.userDto()
            const tokenHandler = new TokenHandler(_id)
            tokenHandler.generateTokens() // генерация нового токена
            try {
                await tokenHandler.saveToken() // сохранение токена в БД
                const mailHandler = new MailHandler(email, `${process.env.API_URL}/api/activate/${activatedLink}`) // отправка письма пользоавтелю
                try {
                    await mailHandler.sendMail() // отправка письма пользоавтелю
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
                            maxAge: 30 * 24 * 60 * 60 * 1001,
                            path: "/"
                        })
                    ])
                    res.status(201).json({...user.userDto(), accessToken: tokenHandler.accessToken ?? ''}) // отправка на клиент данные нового пользователя
                } catch (e) {
                    res.status(501).json({error: true, errorMassage: 'Ошибка email сервиса'})
                }

            } catch (e) {
                res.status(500)
            }

        } else {
            res.status(404).json({error: true, errorMassage: 'Пользователь уже зарегистрирован'})
        }

    }

}
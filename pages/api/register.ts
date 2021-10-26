import type {NextApiRequest, NextApiResponse} from 'next'
import {UserHandler} from '../../models/UserHandler'
import dbConnect from '../../utils/dbConnect'
import {TokenHandler} from '../../models/TokenHandler'
import {MailHandler} from "../../models/MailHandler"
import cookie from 'cookie'
import {ErrorType, userType} from "../../serverTypes/serverTypes";
import {useUserDto} from '../../hooks/server/useUserDto'

const uuid = require('uuid')


dbConnect();


type ResponseData = {
    email: string
    id: string
    isActivation: boolean
    accessToken: string
    refreshToken: string
    role: string[]

}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ErrorType | ResponseData>) {
    if (req.method === 'POST') {
        const {email, password}: { email: string, password: string } = req.body
        const user = new UserHandler(null, email, password, uuid.v4())
        const candidate = await user.searchByEmail() // проверка на регистрацию по email
        if (!candidate) {
            const newUserResult: userType = await user.createUser() // создаем нового пользователя
            const {emailDto, _id, role, id, isActivation, activatedLink} = useUserDto(newUserResult) // получаем данные user с сервера
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
                            maxAge: 30 * 24 * 60 * 60 * 1000,
                            path: "/"
                        })
                    ])
                    res.status(200).json({
                        email: emailDto,
                        id,
                        isActivation,
                        role,
                        accessToken: tokenHandler.accessToken ?? '',
                        refreshToken: tokenHandler.refreshToken ?? ''
                    }) // отправка на клиент данные нового пользователя
                } catch (e) {
                    res.status(501).json({error: true, errorMassage: 'Ошибка email сервиса'})
                }

            } catch (e) {
                res.status(500)
            }

        } else {
            res.status(200).json({error: true, errorMassage: 'Пользователь уже зарегистрирован'})
        }

    }

}
import type {NextApiRequest, NextApiResponse} from 'next'
import {UserHandler} from '../../models/UserHandler'
import dbConnect from '../../utils/dbConnect'
import {Schema} from 'mongoose'
import {TokenHandler} from '../../models/TokenHandler'
import {UserDto} from "../../DTO/UserDto";
import {MailHandler} from "../../models/MailHandler";
const uuid = require('uuid')


dbConnect();

type Error = {
    error: boolean
    errorMassage: string
}

type ResponseData = {
    email:string
    id: string
    isActivated: boolean
    error: boolean
    accessToken: string | null
    refreshToken: string | null
    activatedLink: string | null

}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Error | ResponseData>) {
    if (req.method === 'POST') {
        const {email, password}: { email: string, password: string } = req.body
        const user = new UserHandler(null, email, password, uuid.v4())
        const candidate = await user.searchByEmail() // проверка на регистрацию по email
        if (!candidate) {
            const newUserResult = await user.createUser() // создаем нового пользователя
            const {_id}: {_id: Schema.Types.ObjectId} = newUserResult // получение id нового пользователя
            const tokenHandler = new TokenHandler(_id)
            tokenHandler.generateTokens() // генерация нового токена
            try {
                await tokenHandler.saveToken() // сохранение токена в БД
                const responseData = new UserDto(newUserResult) // парсим данные
                const mailHandler = new MailHandler(responseData.email, `${process.env.API_URL}/api/activate/${responseData.activatedLink}`) // отправка письма пользоавтелю
                try {
                    await mailHandler.sendMail() // отправка письма пользоавтелю
                    res.status(200).json({...responseData, accessToken: tokenHandler.accessToken, refreshToken: tokenHandler.refreshToken}) // отправка на клиент данные нового пользователя
                }
                catch (e){
                    res.status(501).json({error: true, errorMassage: 'Ошибка email сервиса'})
                }

            } catch (e){
                res.status(500)
            }

        } else {
            res.status(200).json({error: true, errorMassage: 'Пользователь уже зарегистрирован'})
        }

    }

}
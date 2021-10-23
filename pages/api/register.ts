import type {NextApiRequest, NextApiResponse} from 'next'
import {UserHandler} from '../../models/UserHandler'
import dbConnect from '../../utils/dbConnect'
import {Schema} from 'mongoose'
import {TokenHandler} from '../../models/TokenHandler'
const uuid = require('uuid')


dbConnect();

type Error = {
    error: boolean
    errorMassage: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Error>) {
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
            } catch (e){

            }


        } else {
            res.status(200).json({error: true, errorMassage: 'Пользователь уже зарегистрирован'})
        }

    }

}
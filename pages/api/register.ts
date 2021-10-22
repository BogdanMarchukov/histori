import type {NextApiRequest, NextApiResponse} from 'next'
import {UserHandler} from '../../models/UserHandler'
import dbConnect from '../../utils/dbConnect'
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
            const newUserResult = await user.createUser()
            console.log(newUserResult, '1233')
        } else {
            res.status(200).json({error: true, errorMassage: 'Пользователь уже зарегистрирован'})
        }

    }

}
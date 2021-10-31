import {NextApiRequest, NextApiResponse} from "next";
import {TokenHandler} from "../models/TokenHandler";

const jwt = require('jsonwebtoken')

export default async function refreshTokenMiddleware(req: NextApiRequest, res: NextApiResponse, next: (req: NextApiRequest, res: NextApiResponse) => void) {
    const token = req.body.token
    console.log(token)
    if (token) {
        try {
            const id = await jwt.verify(token, process.env.JWT_REFRESH_SECRET)
            const tokenVerify = await TokenHandler.searchTokenMongo(id)
            if (tokenVerify) {
                req.body.userId = id
                next(req, res)
            } else {
                    res.json({error: true, errorMassage: 'Тоекн не найдин'})
            }

        } catch (e) {
            res.json({error: true, errorMassage: 'Токен истек'})
        }
    } else {
        res.json({error: true, errorMassage: 'Пользователь не автаризован'})
    }

}
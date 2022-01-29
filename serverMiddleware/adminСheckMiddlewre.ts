import {NextApiRequest, NextApiResponse} from "next";
import {TokenHandler} from '../models/TokenHandler';
import {UserHandler} from "../models/UserHandler";
import {ErrorType} from "../serverTypes/serverTypes";

const User = require('../models/mongoose/User')

export async function adminCheckMiddleware(req: NextApiRequest, res: NextApiResponse, next: any): Promise <boolean | ErrorType>{
    return new Promise(async (resolve, reject) => {
        const {authorization} = req.headers
        if (authorization) {
            try {
                const userId = await TokenHandler.decodedPayloadAccess(authorization) // userId from cookies

                try {
                    const user  = await User.findById(userId.payload)
                    const userHandler = new UserHandler(user) // поиск пользователя по id


                    if ( userHandler.userDto().role.includes('admin')) { // проверка роли на admin
                        resolve(true)
                    } else {
                        res.statusCode = 403
                        res.json({error: true, errorMassage: 'доступ запрещен'})
                        reject()
                    }

                } catch (e) {
                    res.status(401).json({error: true, errorMassage: 'не авторизован'})
                    reject()
                }

            } catch (e) {
                res.status(401).json({error: true, errorMassage: 'не авторизован'})
                reject()
            }
        } else {
            res.status(401).json({error: true, errorMassage: 'не авторизован'})
            reject()
        }



    })

}
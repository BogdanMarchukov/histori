import {NextApiRequest, NextApiResponse} from "next";
import {TokenHandler} from '../models/TokenHandler';
import {UserHandler} from "../models/UserHandler";
import {ErrorType} from "../serverTypes/serverTypes";

const User = require('../models/mongoose/User')

export async function adminCheckMiddleware(req: NextApiRequest, res: NextApiResponse, next: any): Promise <boolean | ErrorType>{
    return new Promise(async (resolve, reject) => {
        const {token} = req.cookies

        try {
            const userId = await TokenHandler.decodedPayloadRefresh(token) // userId from cookies

            try {
                const user  = await User.findById(userId.payload)
                const userHandler = new UserHandler(user) // поиск пользователя по id


                if ( userHandler.userDto().role.includes('admin')) { // проверка роли на admin
                    resolve(true)
                } else {
                    res.statusCode = 403
                    res.json({error: true, errorMassage: 'доступ запрещен'})
                }

            } catch (e) {
                reject({error: true, errorMassage: 'пользователь не найден'})
            }

        } catch (e) {
            reject({error: true, errorMassage: 'токен не верный'})
        }

    })

}
import {NextApiRequest, NextApiResponse} from "next";
import {TokenHandler} from '../models/TokenHandler';
import {UserHandler} from "../models/UserHandler";
import {ErrorType} from "../serverTypes/serverTypes";

const User = require('../models/mongoose/User')

export async function roleCheckMiddleware(req: NextApiRequest, res: NextApiResponse, next: any): Promise<string[] | ErrorType>{
    return new Promise(async (resolve, reject) => {
        const {token} = req.cookies
        try {
            const userId = await TokenHandler.decodedPayloadRefresh(token)
            try {
                const userHandler = new UserHandler(await User.findById(userId.payload))
                resolve(userHandler.userDto().role)

            } catch (e) {
                reject({error: true, errorMassage: 'пользователь не найден'})
            }

        } catch (e) {
            reject({error: true, errorMassage: 'токен не верный'})
        }

    })

}
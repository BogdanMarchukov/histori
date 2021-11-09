import {NextApiRequest, NextApiResponse} from "next";
import {TokenHandler} from "../models/TokenHandler";



export async function authorizationMiddleware(req: NextApiRequest, res: NextApiResponse, next: (req: NextApiRequest, res: NextApiResponse)=> void){
    const {authorization} = req.headers
    if (!authorization) {
        res.status(401).json({error: true, errorMassage: 'не авторизован'})
    } else {
            const token = await TokenHandler.decodedPayloadAccess(authorization)
            if (token instanceof Error){
                res.status(401).json({error: true, errorMassage: 'Токен не валидный'})
            } else {
                const {payload} = token
                if (req.body){
                    req.body = {...req.body, userId: payload }
                } else {
                    req.body = {userId: payload}
                }

                next(req, res)
            }

        }
}
import {NextApiRequest, NextApiResponse} from "next";
import {TokenHandler} from "../models/TokenHandler";



export async function authorizationMiddleware(req: NextApiRequest, res: NextApiResponse, next: any){
    const {authorization} = req.headers
    return new Promise<any>(async (resolve, reject) => {
        if (!authorization) {
            res.status(401).json({error: true, errorMassage: 'не авторизован'})
            reject()
        } else {
            const token = await TokenHandler.decodedPayloadAccess(authorization)
            if (token instanceof Error){
                res.status(401).json({error: true, errorMassage: 'Токен не валидный'})
                reject()
            } else {
                const {payload}:{payload: string} = token
                resolve(payload)
            }




        }
    })


}
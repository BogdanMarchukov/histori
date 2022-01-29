import {NextApiRequest, NextApiResponse} from "next";
import {TokenHandler} from "../models/TokenHandler";



export async function authorizationMiddleware(req: NextApiRequest, res: NextApiResponse, next: any){
    const {authorization} = req.headers
    return new Promise<any>(async (resolve, reject) => {
        if (authorization === 'null') {
            res.status(401).json({error: true, errorMassage: 'не авторизован'})
            reject()
        }
        else {
            if (typeof authorization === "string") {
                try {
                    const token = await TokenHandler.decodedPayloadAccess(authorization)
                    if (token instanceof Error){
                        res.status(401).json({error: true, errorMassage: 'Токен не валидный'})
                        reject()
                    } else {
                        const {payload}:{payload: string} = token
                        resolve(payload)
                    }
                } catch (e) {
                    res.status(401).json({error: true, errorMassage: 'Токен не валидный'})
                }

           }





        }
    })


}
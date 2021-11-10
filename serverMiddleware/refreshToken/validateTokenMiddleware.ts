import {NextApiRequest, NextApiResponse} from "next"
import {TokenHandler} from "../../models/TokenHandler"




export async function validateTokenMiddleware(req: NextApiRequest, res: NextApiResponse, next: any) {
    const {token} = req.cookies
    return new Promise<any>(( async (resolve, reject) => {
        if (token) {
            const payloadToken = await TokenHandler.decodedPayloadRefresh(token)
            if (payloadToken instanceof Error) {
                // @ts-ignore
                res.status(307).json({redirect: true, patch: process.env.API_URL})
                reject()
            } else {
                const {payload} = payloadToken
               resolve(payload)
            }


        } else {

            // @ts-ignore
            res.status(307).json({redirect: true, patch: process.env.API_URL})
            reject()
        }
    }))



}
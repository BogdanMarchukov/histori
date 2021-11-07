import {NextApiRequest, NextApiResponse} from "next"
import {TokenHandler} from "../../models/TokenHandler"




export async function validateTokenMiddleware(req: NextApiRequest, res: NextApiResponse, next: (req: NextApiRequest, res: NextApiResponse) => void) {
    const {token} = req.cookies
    if (token) {
        const payloadToken = await TokenHandler.decodedPayloadRefresh(token)
        if (payloadToken instanceof Error) {
            // @ts-ignore
           res.status(307).json({redirect: true, patch: process.env.API_URL})
        } else {
            const {payload} = payloadToken
            req.body = {userId: payload}
            next(req, res)
        }


    } else {

        // @ts-ignore
        res.status(307).json({redirect: true, patch: process.env.API_URL})
    }


}
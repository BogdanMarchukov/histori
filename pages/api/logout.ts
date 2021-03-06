import {NextApiRequest, NextApiResponse} from "next";
import {ErrorType} from "../../serverTypes/serverTypes";
import cookie from "cookie";
import {TokenHandler} from '../../models/TokenHandler'
import { ObjectId } from "mongodb";
import dbConnect from "../../utils/dbConnect";
dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse<ErrorType>){
    if (req.method === 'GET') {
        const {token, role} = req.cookies
        if (token) {
            const {payload}: {payload: string} = await TokenHandler.decodedPayloadRefresh(token)
            const id = new ObjectId(payload)
            const tokenHandler = new TokenHandler(id)
            await tokenHandler.deleteTokenMongo()
            res.status(200)
            .setHeader("Set-Cookie", [
                cookie.serialize("token",  '', {
                    httpOnly: true,
                    secure: false,
                    maxAge: 0,
                    path: "/"
                }),
                cookie.serialize("role", '', {
                    httpOnly: true,
                    secure: false,
                    maxAge: 0,
                    path: "/"
                })
            ])
            res.json({error: false, errorMassage: ''})
        }
        else res.json({error: false, errorMassage: ''})
    }


}
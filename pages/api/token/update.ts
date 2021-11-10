import {NextApiRequest, NextApiResponse} from "next";
import {validateTokenMiddleware} from "../../../serverMiddleware/refreshToken/validateTokenMiddleware";
import {ObjectId} from "mongodb";
import {TokenHandler} from "../../../models/TokenHandler";
import cookie from "cookie";
import Cors from "cors";
const cors = Cors({
    methods: ['GET'],
})


export default async function handlerUpdateToken(req: NextApiRequest, res: NextApiResponse) {
    try {
        const userId = await validateTokenMiddleware(req, res, cors)
        const id = new ObjectId(userId)
        const tokenHandler = new TokenHandler(id)
        tokenHandler.generateTokens()
        await tokenHandler.replaceToken()

        const responseUser = await fetch(`${process.env.API_URL}/api/init/user`, {
            method: 'POST',
            body: JSON.stringify({userId: {payload: userId}}),
            headers: {
                'Content-type': 'application/json'
            }
        })
        const userData = await responseUser.json()
        res.setHeader("Set-Cookie",
            cookie.serialize("token", tokenHandler.refreshToken || '', {
                httpOnly: true,
                secure: false,
                maxAge: 30 * 24 * 60 * 60 * 1000,
                path: "/"
            }))
        res.status(200)
            .json({...tokenHandler.tokenDTO(), ...userData})
    } catch (e) {

    }

}
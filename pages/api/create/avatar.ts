import {NextApiRequest, NextApiResponse} from "next"
import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware";


export default async function avatarInit(req: NextApiRequest, res: NextApiResponse){
    await authorizationMiddleware(req, res, avatarHandler)
}


function avatarHandler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body.userId)
    res.json({text: 'все ок'})
}
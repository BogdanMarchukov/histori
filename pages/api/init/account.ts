import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware"
import {NextApiRequest, NextApiResponse} from "next"
import dbConnect from "../../../utils/dbConnect"
import User from '../../../models/mongoose/User'
import {UserHandler} from "../../../models/UserHandler";

dbConnect();

export default async function  initMiddleware(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        await authorizationMiddleware(req, res, handlerInitUser)
    }
    else {
        res.status(405).json({error: true, errorMassage: 'Метод запрещен'})
    }
}

async function handlerInitUser(req: NextApiRequest, res: NextApiResponse){
    const {userId} = req.body
    const userDb = await User.findById(userId)
    const userHandler = new UserHandler(userDb)
    res.status(200).json(userHandler.userDto())
}
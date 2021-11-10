import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware"
import {NextApiRequest, NextApiResponse} from "next"
import dbConnect from "../../../utils/dbConnect"
import User from '../../../models/mongoose/User'
import {UserHandler} from "../../../models/UserHandler";
import Cors from "cors";

dbConnect();


const cors = Cors({
    methods: ['GET'],
})


export default async function handlerInitUser(req: NextApiRequest, res: NextApiResponse){
    try {
        const result = await authorizationMiddleware(req, res, cors)
        const userDb = await User.findById(result)
        const userHandler = new UserHandler(userDb)
        res.status(200).json(userHandler.userDto())
    } catch (e) {
        console.log(e, 'error')

    }

}
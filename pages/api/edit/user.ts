import {NextApiRequest, NextApiResponse} from "next"
import dbConnect from "../../../utils/dbConnect"
import Cors from "cors";
import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware"
import {UserHandler} from "../../../models/UserHandler"

dbConnect();

const cors = Cors({
    methods: ['POST']
})


export default async function apiUserHandler(req: NextApiRequest, res: NextApiResponse) {
    const tokenPayload = await authorizationMiddleware(req, res, cors)
    const reqUserData = new Object(req.body)
    try {
        await UserHandler.updateUser(tokenPayload, reqUserData)
    }
    catch (e) {
        res.status(404)
            .json({error: true, errorMassage: 'Пользователь не найден'})
    }

    res.status(200)
        .json({state: 'ok'}) // todo остановился тут

}
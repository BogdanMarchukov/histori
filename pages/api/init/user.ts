import {NextApiRequest, NextApiResponse} from "next"
import dbConnect from "../../../utils/dbConnect";
import {TokenHandler} from '../../../models/TokenHandler'
import {UserHandler} from '../../../models/UserHandler'
import {userType} from "../../../serverTypes/serverTypes";

dbConnect();

export default async function initMiddleware(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        await handler(req, res)
    } else {
        res.status(405).json({error: true, errorMassage: 'Данный метод запрещен'})
    }
}

async function handler(req: NextApiRequest, res: NextApiResponse){
    const {payload} = req.body.userId
    const mongoToken = await TokenHandler.searchTokenMongo(payload)
    if (mongoToken) {
        const {_id} = mongoToken
        const userMongo:userType = await UserHandler.searchByEmail(null, _id)
        const userHandler = new UserHandler(userMongo)
        res.status(200).json(JSON.stringify(userHandler.userDto()))

    } else {
        res.status(403).json({error: true, errorMassage: 'Пользователь не найден'})
    }

}
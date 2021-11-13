import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware"
import {NextApiRequest, NextApiResponse} from "next"
import dbConnect from "../../../utils/dbConnect"
import User from '../../../models/mongoose/User'
import {userDto, UserHandler} from "../../../models/UserHandler";
import Cors from "cors";
import {avatarDtoType, AvatarHandler} from "../../../models/AvatarHandler";
import {initAccountDto} from "../../../serverTypes/serverTypes";

dbConnect();


const cors = Cors({
    methods: ['GET'],
})



export default async function handlerInitUser(req: NextApiRequest, res: NextApiResponse){
    try {
        const result = await authorizationMiddleware(req, res, cors)
        const userDb = await User.findById(result)
        const userHandler = new UserHandler(userDb)
        const avatar = await AvatarHandler.gerAvatar(userHandler.id)
        const avatarHandler = new AvatarHandler(avatar)
        const responseData: initAccountDto = {
            ...userHandler.userDto(),
            ...avatarHandler.avatarDto()
        }
        res.status(200).json(responseData)
    } catch (e) {
        console.log(e, 'error')

    }

}
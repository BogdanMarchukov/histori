import {NextApiRequest, NextApiResponse} from "next"
import dbConnect from "../../../../utils/dbConnect"
import Cors from "cors";
import {authorizationMiddleware} from "../../../../serverMiddleware/authorizationMiddleware";

dbConnect();

const cors = Cors({
    methods: ['POST']
})




export default async function handlerImgAvatar(req: NextApiRequest, res: NextApiResponse){
     await authorizationMiddleware(req, res, cors)
    res.json({state: 'ok'}) // todo остановился тут

}
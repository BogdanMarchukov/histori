import {NextApiRequest, NextApiResponse} from "next"
import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware";
import {saveImgFileMiddleware, testMiddleware} from "../../../serverMiddleware/file/saveImgFileMiddleware";
import Cors from 'cors';

const cors = Cors({
    methods: ['GET', "POST"],
})





export default async function avatarHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await authorizationMiddleware(req, res, cors)
        res.json({text: 'все ок'})
    }
    catch (e) {
        console.log(e)
    }



    //console.log(req.body)


}
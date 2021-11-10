import {NextApiRequest, NextApiResponse} from "next"
import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware";
import {saveImgFileMiddleware} from "../../../serverMiddleware/file/saveImgFileMiddleware";
import Cors from 'cors';
import {saveFileType} from "../../../serverTypes/serverTypes";

const cors = Cors({
    methods: ['GET', "POST"],
})

export const config = {
    api: {
        bodyParser: false,
    }
}




export default async function avatarHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
         const userId: string = await authorizationMiddleware(req, res, cors)
        try {
            const pathName: saveFileType = await saveImgFileMiddleware(req, res, cors)
            res.json({status: 'ok'})
        } catch (e) {

        }

    }
    catch (e) {
        console.log(e)
    }



    //console.log(req.body)


}
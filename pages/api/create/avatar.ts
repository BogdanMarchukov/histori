import {NextApiRequest, NextApiResponse} from "next"
import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware"
import {saveImgFileMiddleware} from "../../../serverMiddleware/file/saveImgFileMiddleware"
import Cors from 'cors'
import {mongoAvatarType, saveFileType, statusFile} from "../../../serverTypes/serverTypes"
import {AvatarHandler} from '../../../models/AvatarHandler'


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
            const avatarHandler = new AvatarHandler(undefined, pathName.userId, pathName.patch)
            try {
                const newAvatar: mongoAvatarType = await avatarHandler.saveAvatar()

                const userAvatar: statusFile = {saveResult: true, patch: newAvatar.avatarPath}
                res.json(userAvatar)
               
            } catch (e) {
                console.log(e, 'error тут')
                res.status(415)
                res.json({error: true, errorMassage: 'Ошибка сохранения!'})
            }
        } catch (e) {
             res.status(415)
            res.json({error: true, errorMassage: 'Ошибка сохранения!'})
        }

    }
    catch (e) {
        console.log(e)
    }



    //console.log(req.body)


}
import {NextApiRequest, NextApiResponse} from "next"
import {TokenHandler} from '../../models/TokenHandler'
import {multerStorage} from "../../multer/storege";
import {any} from "prop-types";
const multer = require('multer')

export async function saveImgFileMiddleware(req: any, res: NextApiResponse, next: any) {


    return new Promise<any>(async (resolve, reject) => {
        const {token} = req.cookies
        const {payload} = await TokenHandler.decodedPayloadRefresh(token)
        const upload = multer({storage: multerStorage('public/img/avatar', payload)}).single('userAvatar')
        upload(req, res, (error: Error) => {
            if (error) {
                reject(error)
            } else {
                resolve({userId: payload, patch: req.file.path})

            }

        })
    })

}
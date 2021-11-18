import {NextApiResponse} from "next"
import {TokenHandler} from '../../models/TokenHandler'
import {multerStorage} from "../../multer/storege";
import {filter} from "../../multer/filter";

const {v4: uuidv4} = require('uuid');

const multer = require('multer')

export async function saveImgFileMiddleware(req: any, res: NextApiResponse, next: any) {

    const {configStorage} = multerStorage('public/img/avatar', uuidv4())
    const {configFilter} = filter(['image/jpeg', 'image/png', 'image/svg+xml'])


    return new Promise<any>(async (resolve, reject) => {
        const {token} = req.cookies
        const {payload} = await TokenHandler.decodedPayloadRefresh(token)
        const upload = multer({storage: configStorage, fileFilter: configFilter, fileSize: 10000000}).single('userAvatar')
        upload(req, res, (error: Error) => {
            if (error) {
                reject(error)
            } else {
                resolve({userId: payload, patch: `${req.file.filename}` })

            }

        })
    })

}
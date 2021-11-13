import fs from 'fs'
import path from 'path'
import {NextApiRequest, NextApiResponse} from "next"
import dbConnect from "../../../utils/dbConnect"

dbConnect();






export default async function handlerImgAvatar(req: NextApiRequest, res: NextApiResponse){
    const pathUserAvatar = req.query.path
    const filePath = path.join(__dirname, process.env.SERVER_AVATAR_PATCH ?? '', `${pathUserAvatar}`)
    const imageBuffer = fs.readFileSync(filePath)
    res.setHeader('Content-Type', 'image/jpg')
    res.send(imageBuffer)


}
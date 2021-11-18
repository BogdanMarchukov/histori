import fs from 'fs'
import path from 'path'
import {NextApiRequest, NextApiResponse} from "next"
import dbConnect from "../../../utils/dbConnect"

dbConnect();

export default async function handlerImgAvatar(req: NextApiRequest, res: NextApiResponse){
    console.log(req.query.fileName, 'query++++++++++++')
    const fileName = `${req.query.fileName}`

        const filePath = path.join(__dirname, process.env.SERVER_AVATAR_PATCH ?? '', `${fileName}`)
        try {

            const imageBuffer = await fs.readFileSync(filePath)
            res.setHeader('Content-Type', 'image/jpg')
            res.status(200)
            res.send(imageBuffer)


        }
        catch (e){
            console.log(e, '++++++++++++++++Error')
            res.status(404)

        }






}
import {NextApiRequest, NextApiResponse} from "next"



const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, 'public/img')
    },
    filename: function (req:any, file:any, cb: any) {

        cb(null, file.fieldname)
    }
})




export async function saveImgFileMiddleware(req: NextApiRequest, res: NextApiResponse, next: any){
    console.log(req, 'request')
    return new Promise<any>((resolve, reject) => {
        const upload = multer({storage}).single('userAvatar')
        upload(req, res, (error: Error)=>{
            if (error){
                reject()
                console.log(error)
            }else {
                resolve({saveFile: true, patch: ''})
                console.log('файл сохранен')

            }

        })
    })

}
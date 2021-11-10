import {NextApiRequest, NextApiResponse} from "next"


const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, 'public/img')
    },
    filename: function (req:any, file:any, cb: any) {

        cb(null, 'avatar121212')
    }
})

export function testMiddleware(req: NextApiRequest, res: NextApiResponse, next: any) {
    req.body = {...req.body, test2: 'test2'}
}



export function saveImgFileMiddleware(req: NextApiRequest, res: NextApiResponse, next: any){
    // const upload = multer({storage}).single('userAvatar')
    // console.log(req.body)
    // upload(req, res, (error: Error)=>{
    //     if (error){
    //         console.log(error)
    //     }else {
    //         console.log('файл сохранен')
    //
    //     }
    //
    // })
    req.body = {...req.body, test: 'test'}
    console.log('saveImgFileMiddleware')


}
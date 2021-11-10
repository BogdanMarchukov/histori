import path from "path";

const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, path.join('public', 'img'))
    },
    filename: function (req:any, file:any, cb: any) {
        console.log(req.body.userId + 'avatar')
        cb(null, 'dkskdskdk')
    }
})
const imgStorage = storage

export default imgStorage


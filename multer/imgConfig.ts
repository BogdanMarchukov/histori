

const multer = require('multer')

const imgStorage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        cb(null, 'public/img')
    },
    filename: function (req:any, file:any, cb: any) {
        console.log(req.body.userId + 'avatar')
        cb(null, 'dddddd')
    }
})

export default imgStorage




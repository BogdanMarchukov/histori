const multer = require('multer')

export function multerStorage<T extends string>(pathName: T, userId: T) {
    return multer.diskStorage({
            destination: function (req: any, file: any, cb: any) {
                cb(null, pathName)
            },
            filename: function (req: any, file: any, cb: any) {
                const extension: string[] = file.originalname.toString().split(".")
                cb(null, `${userId}.${extension[extension.length - 1]}`)
            }
        })

}
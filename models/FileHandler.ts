const fs =  require('fs')
const path = require('path')

interface fileHandlerType {
    path: string
}


class FileHandler{

    constructor(public file:fileHandlerType) {}

    //==================удаление файла======================================
    removeFile(): Promise<boolean>{
        return new Promise(((resolve, reject) => {
            const rmPath = path.join(__dirname, process.env.DELETE_AVATAR_PATCH)
            fs.rm(path.join(rmPath, this.file.path), (err:Error)=> {
                if (err) {
                    reject(err)

                }else resolve(true)
            })
        }))

    }
}
//*******************************************************************************************

export {FileHandler}
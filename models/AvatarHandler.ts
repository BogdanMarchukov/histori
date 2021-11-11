import {ObjectId} from 'mongodb'
import dbConnect from "../utils/dbConnect";
import {mongoAvatarType} from "../serverTypes/serverTypes";
const Avatar = require('../models/mongoose/Avatar')



class AvatarHandler {
    constructor(
        public avatarId: string,
        public pathAvatar: string,
        public _id = new ObjectId(avatarId)
    ) {}

    //====================== сохранение пути аватара в БД======================
    async saveAvatar(): Promise<mongoAvatarType> {
        return new Promise(async (resolve, reject) => {

            const mongoAvatar = await Avatar.findById(this._id)
            if (mongoAvatar) {
                mongoAvatar.avatarPath = this.pathAvatar
                const newAvatar:mongoAvatarType = await mongoAvatar.save()
                resolve(newAvatar)
            } else {
                const avatar = new Avatar({
                    _id: new ObjectId(this.avatarId),
                    avatarPath: this.pathAvatar
                })
                try {
                    const avatarData: mongoAvatarType = await avatar.save()
                    resolve(avatarData)
                } catch (e) {
                    reject(e)
                }
            }

        })
    }


}


export {AvatarHandler}
const User = require('../models/mongoose/User')
const bcrypt = require('bcrypt')
import {Schema} from 'mongoose'



class UserHandler {
    constructor(
        public id: Schema.Types.ObjectId | null = null,
        public email: string | null = null,
        public password: string | null = null,
        public uuid: string | null = null

    ) {}


    async searchByEmail(){ // поиск пользователя из БД по email
        try {
            return await User.findOne({email: this.email}).exec()
        } catch (e){
            return e
        }
    }

    async createUser(){ // создание нового пользователя
        const hashPassword = await bcrypt.hash(this.password, 3)
        const newUser = new User({
            email: this.email,
            password: hashPassword,
            activatedLink: this.uuid
        })
        try {
            return await newUser.save()
        } catch (e) {
            return e
        }
    }




}
export {UserHandler}



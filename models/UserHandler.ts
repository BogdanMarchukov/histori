import {userType} from "../serverTypes/serverTypes";
const uuid = require('uuid')
const User = require('../models/mongoose/User')
const bcrypt = require('bcrypt')
import {Schema} from 'mongoose'

type userDto = {
    _id: Schema.Types.ObjectId
    id: string
    emailDto: string
    passwordDto: string
    isActivation: boolean
    activatedLink: string
    role: string[]
    __v: number
}

class UserHandler {
    id: string
    _id: Schema.Types.ObjectId
    email: string
    password: string
    isActivation: boolean
    activatedLink: string
    role: string[]
    __v: number

    constructor(user: userType) {
        this._id= user._id
        this.email = user.email
        this.password = user.password
        this.isActivation = user.isActivation
        this.activatedLink = user.activatedLink
        this.role = user.role
        this.__v = user.__v
        this.id = user._id.valueOf().toString()
    }


    static async searchByEmail(email:string){ // поиск пользователя из БД по email
        try {
            return await User.findOne({email}).exec()
        } catch (e){
            return e
        }
    }

    static async createUser(email: string, password: string, role: string[]){ // создание нового пользователя
        const hashPassword = await bcrypt.hash(password, 3)
        const newUser = new User({
            email,
            password: hashPassword,
            activatedLink: uuid.v4(),
            role: role
        })
        try {
            return await newUser.save()
        } catch (e) {
            return e
        }
    }

    userDto(): userDto {
        return {
            _id: this._id,
            emailDto:this.email,
            passwordDto: this.password,
            isActivation: this.isActivation,
            activatedLink: this.activatedLink,
            role: this.role,
            __v: this.__v,
            id: this.id
        }
    }




}
export {UserHandler}



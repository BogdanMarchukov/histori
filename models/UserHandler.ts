import {userType} from "../serverTypes/serverTypes";
import {Schema} from 'mongoose'

const uuid = require('uuid')
const User = require('../models/mongoose/User')
const bcrypt = require('bcrypt')

export type userDto = {
    _id: Schema.Types.ObjectId
    id: string
    emailDto: string
    passwordDto: string
    isActivation: boolean
    activatedLink: string
    role: string[]
    __v: number
    surname: string
    userName: string
    patronymic: string
    address: string
    tel: string
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
    surname: string
    userName: string
    patronymic: string
    address: string
    tel: string

    constructor(user: userType) {
        this._id= user._id ?? null
        this.email = user.email ?? null
        this.password = user.password ?? null
        this.isActivation = user.isActivation ?? null
        this.activatedLink = user.activatedLink ?? null
        this.role = user.role ?? null
        this.__v = user.__v ?? null
        this.id = user._id.valueOf().toString() ?? null
        this.surname = user.surname ?? null
        this.userName = user.userName ?? null
        this.patronymic = user.patronymic ?? null
        this.address = user.address ?? null
        this.tel = user.tel ?? null
    }


    static async searchByEmail(email:string| null = null, id: Schema.Types.ObjectId | null = null){ // поиск пользователя из БД по email или id
        try {
            if (email){
                return await User.findOne({email})
            }
            if (id) {
                return await User.findById(id)
            }
        } catch (e){

            return null
        }
    }

    static async updateUser(id: string, data: object): Promise<userType>{
      return new Promise( async (resolve, reject)=>{
         const updateUser = await User.updateOne({_id: id}, data)
          if (updateUser){
              resolve(updateUser)
          }else {
              reject(null)
          }
      } )


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
            id: this.id,
            patronymic: this.patronymic,
            tel: this.tel,
            address: this.address,
            userName: this.userName,
            surname: this.surname
        }
    }




}
export {UserHandler}



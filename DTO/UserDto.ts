import {Schema} from 'mongoose'

interface newObject {
    email: string
    password: string
    isActivation: boolean
    activatedLink: string
    _id: Schema.Types.ObjectId
}

class UserDto{
    email:string
    id: string
    isActivated: boolean
    error: boolean
    activatedLink: string
    constructor(user: newObject) {
        this.email = user.email
        this.id = user._id.valueOf().toString()
        this.isActivated = user.isActivation
        this.error = false
        this.activatedLink = user.activatedLink
    }



}

export {UserDto}
import {userType} from "../../serverTypes/serverTypes"
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

export function useUserDto(responseUser: userType): userDto {
    return {
        _id: responseUser._id,
        id: responseUser._id.valueOf().toString(),
        emailDto: responseUser.email,
        passwordDto: responseUser.password,
        isActivation: responseUser.isActivation,
        activatedLink: responseUser.activatedLink,
        role: responseUser.role,
        __v: responseUser.__v
    }
}
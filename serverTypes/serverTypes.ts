import {Schema} from 'mongoose'

export type userType = {
    _id: Schema.Types.ObjectId
    email: string
    password: string
    isActivation: boolean
    activatedLink: string
    role: string[]
    __v: number
}

export type ErrorType = {
    error: boolean
    errorMassage: string
}

export type TokensType = {
    _id: Schema.Types.ObjectId
    refreshToken: string
    __V: number
}
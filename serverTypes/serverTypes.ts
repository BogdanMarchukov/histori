import {Schema} from 'mongoose'

export interface userType {
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
}

export type ErrorType = {
    error: boolean
    errorMassage: string
}

export type RedirectType = {
    redirect: boolean
    patch: string
}

export type TokensType = {
    _id: Schema.Types.ObjectId
    refreshToken: string
    __V: number
}

export interface updateUserReducerType {
    accessToken: string
    activatedLink: string
    address: string | null
    emailDto: string
    id: string
    isActivation: boolean
    passwordDto: string
    patronymic: string | null
    refreshToken: string
    role: string[]
    surname: string | null
    tel: string | null
    userName: string | null
    __v: number
    _id: string
}
import {Schema} from 'mongoose'
import {userDto} from "../models/UserHandler";
import {avatarDtoType} from "../models/AvatarHandler";
import {tokenDtoType} from "../models/TokenHandler";
import {RawDraftContentState} from "draft-js";
import {ObjectId} from "mongodb";

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

export interface saveFileType {
    userId: string
    patch: string
}


export interface ArticleType {
    _id: ObjectId
    article: RawDraftContentState
    tableCells: string[]
    keyWords?: string[]
    name: string
    __v: number
}

export interface ArticleListType {
    _id: ObjectId
    __v: number
    articleList: Array<object>
}



export interface statusFile {
    saveResult: boolean
    patch: string
}

export interface mongoAvatarType {
    _id: Schema.Types.ObjectId
    avatarPath: string
    __v: number
}

export type initAccountDto = userDto & avatarDtoType & tokenDtoType
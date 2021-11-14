import {Schema} from 'mongoose'
const Token = require('../models/mongoose/Token')
import { ObjectId } from "mongodb";

const jwt = require('jsonwebtoken')

export interface tokenDtoType {
    accessToken: string
    refreshToken: string
}


class TokenHandler {
    constructor(
        public id: Schema.Types.ObjectId | ObjectId,
        public accessToken: string | null = null,
        public refreshToken: string | null = null
    ) {}

    // генерация нового токена
    generateTokens(){
        this.accessToken = jwt.sign({payload : this.id.valueOf()}, process.env.JWT_ACCESS_SECRET, {expiresIn: '30min'})
        this.refreshToken = jwt.sign({payload: this.id.valueOf()}, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})

    }

    //  сохранение токена в БД
    async saveToken(){
        const token = await Token.findOne({refreshToken:this.refreshToken})
        if (!token) {
            const tokenNew = new Token({
                _id: this.id,
                refreshToken: this.refreshToken
            })
            return await tokenNew.save()
        } else {
            token.refreshToken = this.refreshToken
            return await token.save()
        }
    }

    async replaceToken() { // перезапись токена в БД
        try {
            const userToken = await Token.findOne({_id:this.id})
            userToken.refreshToken = this.refreshToken
            await userToken.save()
        } catch (e) {
            throw e
        }
    }

    static async decodedPayloadRefresh(token: string) { // декодирование payload
        try {
            return await jwt.verify(token, process.env.JWT_REFRESH_SECRET)
        }
        catch (e){
            return e
        }
    }

    static async decodedPayloadAccess(token: string) { // декодирование payload Access токен
        try {
            return await jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        }
        catch (e){
            return e
        }
    }

    static async searchTokenMongo(id: string){ // поиск токина по id
        return Token.findOne({_id: new ObjectId(id)})
    }

    async deleteTokenMongo() { // удаления токена из БД
        try {
            const token = await Token.findOne({_id: this.id})
            token.refreshToken = ''
            token.save()
        } catch (e) {
            throw e
        }
    }

    tokenDTO(): tokenDtoType {
        if (typeof this.refreshToken === 'string' && typeof this.accessToken === 'string'){
            return {
                accessToken: this.accessToken,
                refreshToken: this.refreshToken

            }
        } else {
            return {
                accessToken: '',
                refreshToken: ''
            }
        }

    }




}

export {TokenHandler}
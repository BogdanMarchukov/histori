import {Schema} from 'mongoose'
const Token = require('../models/mongoose/Token')


const jwt = require('jsonwebtoken')


class TokenHandler {
    constructor(
        public id: Schema.Types.ObjectId,
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

    async replaceToken() {
        try {
            const userToken = await Token.findOne({_id:this.id})
            userToken.refreshToken = this.refreshToken
            await userToken.save()
        } catch (e) {
            throw e
        }

    }




}

export {TokenHandler}
const {Schema, model, models} = require('mongoose')

const user = new Schema({

    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    isActivation: {
        type: Boolean,
        default: false
    },
    activatedLink: {
        type: String
    },
    role: {
        required: true,
        type: Array
    },
    surname: {
        required: false,
        type: String
    },
    userName: {
        required: false,
        type: String
    },
    patronymic: {
        required: false,
        type: String
    },
    address: {
        required: false,
        type: String
    },
    tel: {
        required: false,
        type: String
    }
})



module.exports = models.User ||  model('User', user)
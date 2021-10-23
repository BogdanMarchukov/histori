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
    }
})



module.exports = models.User ||  model('User', user)
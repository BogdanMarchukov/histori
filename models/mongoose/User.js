const {Schema, model, models} = require('mongoose')

const user = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActivation: {
        type: Boolean,
        default: false
    },
    activatedLink: {
        type: String,
        required: true
    }
})



module.exports = models.User ||  model('User', user)
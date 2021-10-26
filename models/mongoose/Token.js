const {Schema, model, models} = require('mongoose')

const token = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    refreshToken: {
        type: String,
        required: false
    }
})



module.exports = models.Token ||  model('Token', token)
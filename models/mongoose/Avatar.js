const {Schema, model, models} = require('mongoose')

const avatar = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true
    },
    avatarPath: {
        type: String,
        required: false
    }
})



module.exports = models.Avatar ||  model('Avatar', avatar)
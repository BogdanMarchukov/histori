import {RawDraftContentState} from "draft-js";

const {Schema, model, models} = require('mongoose')

const societyArticle = new Schema({
    article: {
        type: RawDraftContentState,
        required: true
    },
    tableCells: {
        type: Array,
        required: true
    },
    keyWords: {
        type: Array,
        required: false
    },
    name: String
})



module.exports = models.SocietyArticle ||  model('SocietyArticle', societyArticle)
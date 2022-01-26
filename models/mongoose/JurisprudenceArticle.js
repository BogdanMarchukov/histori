import {RawDraftContentState} from "draft-js";


const {Schema, model, models} = require('mongoose')





const jurisprudenceArticle = new Schema(
    {
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
    }
)



module.exports = models.JurisprudenceArticle ||  model('JurisprudenceArticle', jurisprudenceArticle)
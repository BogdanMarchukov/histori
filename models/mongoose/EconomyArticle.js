import {RawDraftContentState} from "draft-js";



const {Schema, model, models} = require('mongoose')




const economyArticle = new Schema(
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



module.exports = models.EconomyArticle ||  model('EconomyArticle', economyArticle)
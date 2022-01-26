



const {Schema, model, models} = require('mongoose')




const jurisprudenceArticleList = new Schema(
    {
        articleList: Array
    }
)


module.exports = models.JurisprudenceArticleList || model('JurisprudenceArticleList', jurisprudenceArticleList)
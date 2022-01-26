


const {Schema, model, models} = require('mongoose')




const economyArticleList = new Schema(
    {
        articleList: Array
    }
)


module.exports = models.EconomyArticleList || model('EconomyArticleList', economyArticleList)


const {Schema, model, models} = require('mongoose')

const societyArticleList = new Schema({
    articleList: Array

})


module.exports = models.SocietyArticleList || model('SocietyArticleList', societyArticleList)
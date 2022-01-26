

const {Schema, model, models} = require('mongoose')




const storyArticleList = new Schema(
    {
        articleList: Array
    }
)


module.exports = models.StoryArticleList || model('StoryArticleList', storyArticleList)
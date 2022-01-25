import {RawDraftContentState} from "draft-js";
import {ArticleListType, ArticleType} from "../serverTypes/serverTypes";
import {Class} from "type-fest";

const SocietyArticle = require('./mongoose/SocietyArticle')
const SocietyArticleList = require('./mongoose/SocietyArticleList')

interface inputDataType {
    categoryName: string
    article: RawDraftContentState
    tableCells: string[]

}

interface saveDataObjectType {
    article: RawDraftContentState
    tableCells: string[]
    name: string
}

type articleSchemaType =
    | typeof SocietyArticle

type listSchemaType =
    | typeof SocietyArticleList

class ArticleHandler {
    constructor(
        public inputData: inputDataType | null = null,
        public id: string | null = null,
        public command: string | null = null
    ) {
    }

    private saveDataObject(): saveDataObjectType | null { // данные для сохранения статьи в БД

        if (this.inputData) {
            return {
                article: this.inputData.article,
                name: this.inputData.article.blocks[0].text,
                tableCells: this.inputData.tableCells
            }
        } else return null

    }

    // ==================== редактирование данных ========================================
   private async editArticle(articleSchema:articleSchemaType, listSchema: listSchemaType ) {
        try {
            let articleMongo = await articleSchema.findById(this.id)
            articleMongo.article.blocks = this.inputData?.article.blocks
            articleMongo.article.entityMap = this.inputData?.article.entityMap
            articleMongo.tableCells = this.inputData?.tableCells
            await articleMongo.save()
            const societyArticleList = await listSchema.findOne() // если есть данные дабавляет новые в список статей
            societyArticleList.articleList = [
                ...societyArticleList.articleList,
                {[articleMongo._id.valueOf().toString()]: articleMongo.name}
            ]
            return true

        } catch (e) {
            console.log(e, 'error editArticle')
        }


    }



///=================== функция сохранения статьи и списка статей в указанную категорию =======================
    private async articleDir(schema: articleSchemaType, listClass: listSchemaType): Promise<{article: ArticleType, articleList: ArticleListType}> {
        const societyArticle = new schema(
            this.saveDataObject()
        )

        const newArticle: ArticleType = await societyArticle.save()  // сохранение статьи в БД

        let societyArticleList = await listClass.find() // поиск списка статей
        if (societyArticleList.length === 0) { // если список пуст
            const societyArticleList = new listClass({
                articleList: [{[newArticle._id.valueOf().toString()]: newArticle.name}]
            })
            const newList = await societyArticleList.save()
            return {
                article: newArticle,
                articleList: newList
            }
        } else {
            const societyArticleList = await listClass.findOne() // если есть данные дабавляет новые в список статей
            societyArticleList.articleList = [
                ...societyArticleList.articleList,
                {[newArticle._id.valueOf().toString()]: newArticle.name}
            ]

            await societyArticleList.save()
            return {
                article: newArticle,
                articleList: societyArticleList
            }

        }

    }
    ///======================================================================

    async saveArticle() { // сохранение в базу данных
        if (this.inputData) {
            switch (this.inputData.categoryName) {
                case 'society':
                    if (this.command === 'edit') {
                        return await this.editArticle(SocietyArticle, SocietyArticleList)
                    }
                   return  await this.articleDir(SocietyArticle, SocietyArticleList)

            }
        }
    }

}

export {ArticleHandler}
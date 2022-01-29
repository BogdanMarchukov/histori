import {RawDraftContentState} from "draft-js";
import {ArticleListType, ArticleType, ErrorType} from "../serverTypes/serverTypes";
import {Class} from "type-fest";
import {log} from "util";

const SocietyArticle = require('./mongoose/SocietyArticle')
const SocietyArticleList = require('./mongoose/SocietyArticleList')
const StoryArticle = require('./mongoose/StoryArticle')
const StoryArticleList = require('./mongoose/StoryArticleList')
const EconomyArticle = require('./mongoose/EconomyArticle')
const EconomyArticleList = require('./mongoose/EconomyArticleList')
const JurisprudenceArticle = require('./mongoose/JurisprudenceArticle')
const JurisprudenceArticleList = require('./mongoose/JurisprudenceArticleList')

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
        public command: string | null = null,
        public dirName: string | null = null
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
    private async editArticle(articleSchema: articleSchemaType, listSchema: listSchemaType) {
        try {
            let articleMongo = await articleSchema.findById(this.id)
            articleMongo.article = this.inputData?.article
            articleMongo.tableCells = this.inputData?.tableCells
            articleMongo.name = this.inputData?.article.blocks[0].text
            await articleMongo.save()
            const articleListMongo = await listSchema.findOne() // если есть данные дабавляет новые в список статей
            articleListMongo.articleList = articleListMongo.articleList.map((list: object) => {
                if (Object.keys(list)[0] === articleMongo._id.valueOf().toString()) {
                    return {[articleMongo._id.valueOf().toString()]: articleMongo.name}
                } else return list
            })
            return Promise.all([articleMongo.save(), articleListMongo.save()])

        } catch (e) {
            console.log(e, 'error editArticle')
        }


    }

    // ===============================удаление из БД==================================
    private async deleteArticle(schema: articleSchemaType, listClass: listSchemaType) {
        const id = this.id
        async function getList() {
            return new Promise<ArticleListType | ErrorType>( async (resolve, reject) => {
                try {
                    const articleListMongo: any = await listClass.findOne()
                    resolve(articleListMongo)
                } catch (e) {
                    reject(e)
                }
            })
        }
        async function delPost() {
            return new Promise( async (resolve, reject) => {
                try {
                    const result = await schema.deleteOne({_id: id})
                    resolve(true)
                }catch (e) {
                    reject(false)
                }
            })
        }
        try {
            const deleteResultArray = await Promise.all([getList(), delPost()])

                //@ts-ignore
             deleteResultArray[0].articleList = deleteResultArray[0].articleList.filter( (listObjItem: object ) => {
                return Object.keys(listObjItem)[0] !== id;
             } )
            //@ts-ignore
            console.log( deleteResultArray[0].articleList, 'ArticleList+++')
            //@ts-ignore
             await deleteResultArray[0].save()
        } catch (e) {
            console.log(e, 'ArticleHandler== Error')
            return {error: true, errorMassage: 'Не удалось удалить'}
        }

    }



///=================== функция сохранения статьи и списка статей в указанную категорию =======================
    private async saveArticle(schema: articleSchemaType, listClass: listSchemaType): Promise<{ article: ArticleType, articleList: ArticleListType }> {
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

    async actionArticle() { // сохранение/удаление/редактирование в/из базу данных
        if (this.inputData || this.dirName) {
            switch (this.inputData?.categoryName ?? this.dirName) {
                case 'society':
                    if (this.command === 'edit') {
                        return await this.editArticle(SocietyArticle, SocietyArticleList)
                    }
                    if (this.command === 'delete') {
                        return await this.deleteArticle(SocietyArticle, SocietyArticleList)
                    }
                    return await this.saveArticle(SocietyArticle, SocietyArticleList)
                case 'story':
                    if (this.command === 'edit') {
                        return await this.editArticle(StoryArticle, StoryArticleList)
                    }
                    if (this.command === 'delete') {
                        return await this.deleteArticle(StoryArticle, StoryArticleList)
                    }
                    return await this.saveArticle(StoryArticle, StoryArticleList)
                case 'jurisprudence':
                    if (this.command === 'edit') {
                        return await this.editArticle(JurisprudenceArticle, JurisprudenceArticleList)
                    }
                    if (this.command === 'delete') {
                        return await this.deleteArticle(JurisprudenceArticle, JurisprudenceArticleList)
                    }
                    return await this.saveArticle(JurisprudenceArticle, JurisprudenceArticleList)
                case 'economy':
                    if (this.command === 'edit') {
                        return await this.editArticle(EconomyArticle, EconomyArticleList)
                    }
                    if (this.command === 'delete') {
                        return await this.deleteArticle(EconomyArticle, EconomyArticleList)
                    }
                    return await this.saveArticle(EconomyArticle, EconomyArticleList)

            }
        }
    }

}

export {ArticleHandler}
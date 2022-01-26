import {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../../../../utils/dbConnect";
import {ArticleListType, ArticleType} from "../../../../serverTypes/serverTypes";
import {log} from "util";
const SocietyArticle = require('../../../../models/mongoose/SocietyArticle')
const SocietyArticleList = require('../../../../models/mongoose/SocietyArticleList')
const EconomyArticle = require('../../../../models/mongoose/EconomyArticle')
const EconomyArticleList = require('../../../../models/mongoose/EconomyArticleList')
const JurisprudenceArticle = require('../../../../models/mongoose/JurisprudenceArticle')
const JurisprudenceArticleList = require('../../../../models/mongoose/JurisprudenceArticleList')
const StoryArticle = require('../../../../models/mongoose/StoryArticle')
const StoryArticleList = require('../../../../models/mongoose/StoryArticleList')

dbConnect();

export default async function postsHandler(req: NextApiRequest, res: NextApiResponse){
   // @ts-ignore
    const {query: {id, dir}}:{query: {id: string, dir: string}} = req


   function dirName(dir: string, category: 'Article' | 'List'){
        switch (dir){
            case 'society':
                if (category === 'Article') {
                    return SocietyArticle
                } else {
                    return SocietyArticleList
                }
            case 'story':
                if (category === 'Article') {
                    return StoryArticle
                } else {
                    return StoryArticleList
                }
            case 'jurisprudence':
                if (category === 'Article') {
                    return JurisprudenceArticle
                } else {
                    return JurisprudenceArticleList
                }
            case 'economy':
                if (category === 'Article') {
                    return EconomyArticle
                } else {
                    return EconomyArticleList
                }
        }
   }

try {
        let article: ArticleType
        if (id === '0') {
             article = await dirName(dir, 'Article').findOne({})
        } else {
            article = await dirName(dir, 'Article').findById(id)
        }
    const articleList: ArticleListType = await dirName(dir, 'List').findOne({})
    res.status(200)
    res.json({article, articleList : articleList.articleList, dir})
} catch (e) {
    res.json({error: true, errorMassage: 'Статья отсутствуют'})
}

}
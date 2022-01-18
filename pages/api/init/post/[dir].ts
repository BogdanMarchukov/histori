import {NextApiRequest, NextApiResponse} from "next";
import dbConnect from "../../../../utils/dbConnect";
import {ArticleListType, ArticleType} from "../../../../serverTypes/serverTypes";
const SocietyArticle = require('../../../../models/mongoose/SocietyArticle')
const SocietyArticleList = require('../../../../models/mongoose/SocietyArticleList')

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
    res.json({error: true, errorMassage: 'Остатьи отсутствуют'})
}

}
import Cors from "cors";
import {NextApiRequest, NextApiResponse} from "next";
import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware";
import {adminCheckMiddleware} from "../../../serverMiddleware/adminСheckMiddlewre";
import {ArticleHandler} from '../../../models/ArticleHandler'


const cors = Cors({
    methods: ['GET', "POST"],
})


export default async function articleHandler(req: NextApiRequest, res: NextApiResponse) {

       await authorizationMiddleware(req, res, cors) // авторизация
    try{
        const role = await adminCheckMiddleware(req, res, cors)// проверка прав admin
        const articleHandler = new ArticleHandler(req.body)
        const saveArticle = await articleHandler.actionArticle() // сохранение в БД
        res.statusCode = 200
        res.json(saveArticle)
    }
    catch (e){
        if (e){
            if(typeof e === 'object'){
                // @ts-ignore
                if('error' in e){
                    res.statusCode = 501
                    res.json({e})
                }
            }
        }

    }



}
import Cors from "cors";
import {NextApiRequest, NextApiResponse} from "next";
import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware";
import {adminCheckMiddleware} from "../../../serverMiddleware/adminСheckMiddlewre";
import {ArticleHandler} from '../../../models/ArticleHandler'


const cors = Cors({
    methods: ['GET', "POST"],
})


export default async function articleHandler(req: NextApiRequest, res: NextApiResponse) {


    try{
        await authorizationMiddleware(req, res, cors) // авторизация
        const role = await adminCheckMiddleware(req, res, cors)// проверка прав admin
        const articleHandler = new ArticleHandler(req.body)
        const saveArticle = await articleHandler.actionArticle() // сохранение в БД
        res.statusCode = 200
        res.json(saveArticle)
    }
    catch (e){


    }



}
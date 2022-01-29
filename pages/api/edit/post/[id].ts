import {NextApiRequest, NextApiResponse} from "next";
import Cors from "cors";
import {authorizationMiddleware} from "../../../../serverMiddleware/authorizationMiddleware";
import {adminCheckMiddleware} from "../../../../serverMiddleware/adminСheckMiddlewre";
import {ArticleHandler} from "../../../../models/ArticleHandler";
import {ArticleType, responseArticle} from "../../../../serverTypes/serverTypes";

const cors = Cors({
    methods: ["POST"]
})

export default async function editHandler(req: NextApiRequest, res: NextApiResponse) {


        // @ts-ignore
        const {id}: { id: string } = req.query
    try {
        await authorizationMiddleware(req, res, cors) // авторизация
        await adminCheckMiddleware(req, res, cors)// проверка прав admin
        const articleHandler = new ArticleHandler(req.body, id, 'edit')
        // @ts-ignore
        const result: [ArticleType, Array<object>] | boolean = await articleHandler.actionArticle()
        if (typeof result === 'object') {
            const outputData: responseArticle = {
                article: result[0],
                articleList: result[1],
                dir: articleHandler.inputData?.categoryName ?? ''
            }
            res.status(200)
            res.json(outputData)
        } else {
            res.status(501)
            res.json({error: true, errorMassage: 'Не Выпорненно'})
        }

    } catch (e) {}




}
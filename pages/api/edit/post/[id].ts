import {NextApiRequest, NextApiResponse} from "next";
import Cors from "cors";
import {authorizationMiddleware} from "../../../../serverMiddleware/authorizationMiddleware";
import {adminCheckMiddleware} from "../../../../serverMiddleware/adminСheckMiddlewre";
import {ArticleHandler} from "../../../../models/ArticleHandler";

const cors = Cors({
    methods: ["POST"]
})

export default async function editHandler(req: NextApiRequest, res: NextApiResponse) {

    // @ts-ignore
    const {id}: { id: string } = req.query
    await authorizationMiddleware(req, res, cors) // авторизация
    await adminCheckMiddleware(req, res, cors)// проверка прав admin
    const articleHandler = new ArticleHandler(req.body, id, 'edit')
    const result = await articleHandler.saveArticle()
    console.log(result, 'editHandler++++++++++++++++')


}
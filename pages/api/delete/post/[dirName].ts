import Cors from "cors";
import {NextApiRequest, NextApiResponse} from "next";
import {authorizationMiddleware} from "../../../../serverMiddleware/authorizationMiddleware";
import {adminCheckMiddleware} from "../../../../serverMiddleware/adminСheckMiddlewre";
import {ArticleHandler} from "../../../../models/ArticleHandler";


const cors = Cors({
    methods: ["POST"]
})


export default async function deletePostHandler(req: NextApiRequest, res: NextApiResponse) {
    // @ts-ignore
    const {dirName, id}: {dirName: string, id: string} = req.query

    await authorizationMiddleware(req, res, cors)
    await adminCheckMiddleware(req, res, cors)

    const articleHandler = new ArticleHandler(null, id, 'delete', dirName)

   await articleHandler.actionArticle()





}
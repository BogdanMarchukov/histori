import Cors from "cors";
import {NextApiRequest, NextApiResponse} from "next";
import {authorizationMiddleware} from "../../../serverMiddleware/authorizationMiddleware";
import {roleCheckMiddleware} from "../../../serverMiddleware/roleСheckMiddlewre";


const cors = Cors({
    methods: ['GET', "POST"],
})


export default async function articleHandler(req: NextApiRequest, res: NextApiResponse) {
    let userRole = []
        const userId: string = await authorizationMiddleware(req, res, cors)
        roleCheckMiddleware(req, res, cors)
            .then(role => {
                if (Array.isArray(role)) {
                    userRole = role
                }
            })
            .catch(e => {
                res.statusCode = 501
                res.json({error: true, errorMassage: e})
            })

    // todo найти роль. Продолжить тут
        res.json({test: 'test'})
}
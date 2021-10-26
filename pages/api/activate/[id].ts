import {NextApiRequest, NextApiResponse} from "next"
import User from '../../../models/mongoose/User'
import {ErrorType} from "../../../serverTypes/serverTypes";



export default async function handler(req: NextApiRequest, res: NextApiResponse<ErrorType>) {

        const {id} = req.query
        try {
            const user = await User.findOne({activatedLink: id})
            if (user) {
                user.isActivation = true
                await user.save()
                // @ts-ignore
                res.redirect(process.env.API_URL)
            }
            else {

                res.status(400).json({error: true, errorMassage: 'Пользователь не найден'})
            }
        }catch (e){
            res.status(501).json({error: true, errorMassage: `Ошибка активации ${e}`})
        }


}
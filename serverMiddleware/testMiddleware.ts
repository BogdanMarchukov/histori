import {NextApiRequest, NextApiResponse} from "next";

export default function testMiddleware(req: NextApiRequest, res: NextApiResponse, next:(req: NextApiRequest, res: NextApiResponse)=> void) {
    const error = false
    if (error) {
        res.json({test: 'jdiksiwnsksjk'})
    } else {
        req.body.test = 'test1234567'
        next(req, res)
    }
}
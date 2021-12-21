import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) =>{
    try{
        const{method} = req;

        res.status(200).json()
    } catch (error) {
        res.status(500).json({statusCode: 500, message: error.message})
    }
};
import { NextApiRequest, NextApiResponse } from "next";
import jwt from 'jsonwebtoken'

const KEY = 'askjbsoinadb;aslknas'

export default function (req: NextApiRequest, res: NextApiResponse) {
    
    if (!req.body) return res.status(404).json({'error': 'Username & password reqired'})

    const { username, password } = req.body;

    res.json({
        token: jwt.sign({
            username,
            admin: username === 'admin' && password === 'admin'
        }, KEY)
    })
    
}
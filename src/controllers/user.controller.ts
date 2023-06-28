import { getRandomUser } from "../services/user.service";
import { db } from "../database/database.connection";
import { Request, Response } from "express";
import { User } from 'protocols/User'
export async function getUser(req: Request, res: Response) {
    try{
        const user = await getRandomUser() as User;
        res.send(user);
    } catch (e){
        res.sendStatus(500)
    }
}

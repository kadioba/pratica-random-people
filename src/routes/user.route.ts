import { getUser } from '../controllers/user.controller'
import { Request, Response, Router } from 'express'

const userRouter = Router()

userRouter.get("/person", getUser);


export default userRouter
import { Router } from "express";
import userRouter from "./user.route";

const indexRouter = Router();

indexRouter.use(userRouter);

export default indexRouter;
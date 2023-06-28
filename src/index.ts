import express, { Request, Response } from "express"
import indexRouter from "./routes/index";

const app = express();

app.use(indexRouter)

const port: number = Number(process.env.PORT) || 5000;
app.listen((port), () => console.log(`Server is up and running on port ${port}`))
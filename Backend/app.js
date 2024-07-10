import express from "express"
import cookieParser from "cookie-parser"

const app=express()


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

import userRouter from "./routes/user.routes.js"

app.use('/api/v1/user',userRouter)


export default app
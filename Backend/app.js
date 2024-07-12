import express from "express"
import cookieParser from "cookie-parser"

const app=express()


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

import userRouter from "./routes/user.routes.js"

app.use('/api/v1/user',userRouter)


import sendRequest from "./routes/request.routes.js"

app.use('/api/v1/friend',sendRequest)

export default app
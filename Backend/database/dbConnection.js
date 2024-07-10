import mongoose from "mongoose"
import { DB_NAME } from "../utils.js"

const connectToDB=async function()
{
    try {

        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        console.log("Database Connected Successfully")

    } catch (error) {
        console.log(error.message)
    }
}

export default connectToDB
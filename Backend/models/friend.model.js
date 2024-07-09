import mongoose from "mongoose";

const friendSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    friendId:[
        {
            type:mongoose.Types.ObjectId,
            ref:"User"
        }
    ]
})

export const Friend=mongoose.model("Friend",friendSchema)
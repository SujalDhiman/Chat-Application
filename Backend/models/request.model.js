import mongoose from "mongoose"

const friendRequestSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    request:[
        {
            message:{
                type:String
            },
            senderId:{
                type:mongoose.Types.ObjectId,
                ref:"User"
            },
            seen:{
                type:boolean
            },
            sentAt:{
                type:Date
            }
        }
    ]
})

export const friendRequest=mongoose.model("FriendRequest",friendRequestSchema)
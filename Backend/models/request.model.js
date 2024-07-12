import mongoose from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"

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
                type:Boolean,
                default:false
            },
            sentAt:{
                type:Date
            }
        }
    ]
})

friendRequestSchema.plugin(mongooseAggregatePaginate)

export const friendRequest=mongoose.model("FriendRequest",friendRequestSchema)
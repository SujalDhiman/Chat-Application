import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const friendSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User"
    },
    friends:[
        {
            friendId:{
                type:mongoose.Types.ObjectId,
                    ref:"User"
                }
        }
    ]
})

friendSchema.plugin(mongooseAggregatePaginate)
export const Friend=mongoose.model("Friend",friendSchema)
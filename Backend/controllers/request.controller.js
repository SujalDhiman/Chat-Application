import mongoose from "mongoose"
import {User} from "../models/user.model.js"
import { friendRequest } from "../models/request.model.js"


export const sendRequest=async function(req,res)
{
    const {userId,message,senderId,seen=false,sentAt}=req.body

    if(userId === "" || message === "" || senderId === "" || sentAt === "")
        return res.status(400).json({
        success:false,
        message:"All details are required"})
    
    let findRequestedFriend=await User.findById(userId);

    if(!findRequestedFriend)
        return res.status(400).json({
        success:true,
        message:"Friend not found check friend name"})
    
    findRequestedFriend=await friendRequest.findOne({userId: new mongoose.Types.ObjectId(userId)})

    if(findRequestedFriend !== null)
    {
        
        let checkRequest=findRequestedFriend.request.filter((obj)=>obj.senderId === new mongoose.Types.ObjectId(senderId))

        console.log(checkRequest)
        
        if(checkRequest.length > 0)
            return res.status(200).json({
            success:true,
            message:"Friend Request Already Sent"})

        const newRequest={
            message,
            senderId,
            seen,
            sentAt
        }

        let newRequests=findRequestedFriend.request

        newRequests=[...newRequests,newRequest]

        findRequestedFriend.request=newRequests

        await findRequestedFriend.save({validateBeforeSave:false})

        return res.status(200).json({
            success:false,
            message:"Friend request sent successfully"
        })
    }
    else
    {
        const newRequestCreated=await friendRequest.create({
            userId,
            request:[
                {
                    message,
                    senderId,
                    seen,
                    sentAt
                }
            ]
        })
        return res.status(200).json({
            success:true,
            message:"Request Send Successfully"
        })
    }
}

export const getInboxDetails=async function(req,res){

    let {id}=req.params

    if(!id)
        return res.status(400).json({
        success:false,
        message:"Something went wrong"})

    
    const userInboxDetails=await friendRequest.aggregate([
                {
                    $match:{
                        userId:new mongoose.Types.ObjectId(id)
                    }
                },
                {
                  $unwind: "$request"
                },
                {
                  $lookup: {
                    from: "users",
                    localField: "request.senderId",
                    foreignField: "_id",
                    as: "data",
                  }
                },
                {
                  $unwind:"$data"
                },
                {
                  $addFields: {
                    response:
                      {
                        $mergeObjects:[
                          "$data","$request"
                        ]
                      }
                  }
                },
                {
                  $project:{
                    "response.email":0,
                    "response.password":0,
                    "request":0,
                    "data":0,
                    "response.createdAt":0,
                    "response.updatedAt":0,
                    "response._id":0
                  }
                },
                {
                  $group: {
                    _id: "userId",
                    data:{
                      $push:"$response"
                    }
                  }
                }
    ])

    if(!userInboxDetails)
        return res.status(400).json({
        success:false,
        message:"Error in fetching inbox details try to refresh"})

    
    return res.status(200).json({
        success:true,
        message:"Inbox details fetched",
        userInboxDetails
    })
    
}

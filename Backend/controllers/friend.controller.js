import mongoose from "mongoose"
import { Friend } from "../models/friend.model.js"

export const acceptRequest=async function(req,res){
    
    try {
        const {userId,friendId}=req.params

        if(userId === "" || friendId === "")
            return res.status(400).json({
            success:false,
            message:"Error in accepting request"})
        
        let user=await Friend.findOne({userId:new mongoose.Types.ObjectId(userId)})
        
        let friend=await Friend.findOne({userId:new mongoose.Types.ObjectId(friendId)})

        if(!user && !friend)
        {
            user=await Friend.create({
                userId,
                friends:[
                    {
                        friendId
                    }
                ]
            })

            friend=await Friend.create({
                userId:friendId,
                friends:[
                    {
                        friendId:userId
                    }
                ]
            })

            return res.status(200).json({
                success:true,
                message:"Friend request accepted"
            })
        }
        else if(!user && friend)
        {
            user=await Friend.create({
                userId,
                friends:[
                    {
                        friendId
                    }
                ]
            })

            let friendList=friend.friends
            friendList=[...friendList,{friendId:userId}]

            friend.friends=friendList

            await friend.save({validateBeforeSave:false})

            return res.status(200).json({
                success:true,
                message:"Friend request accepted"
            })

        }

        else if(!friend && user)
        {
            friend=await Friend.create({
                userId:friendId,
                friends:[
                    {
                        friendId:userId
                    }
                ]
            })

            let friendList=user.friends
            friendList=[...friendList,{friendId:friendId}]

            user.friends=friendList

            await user.save({validateBeforeSave:false})

            return res.status(200).json({
                success:true,
                message:"Friend request accepted"
            })

        }

        else
        {

            let friendList=user.friends
            let flag1=friendList.filter((obj)=>obj.friendId === new mongoose.Types.ObjectId(friendId))

            if(!flag1)
            {
                friendList=[...friendList,{friendId:friendId}]

                user.friends=friendList

                await user.save({validateBeforeSave:false})
            }

            friendList=friend.friends
            let flag2=friendList.filter((obj)=>obj.friendId === new mongoose.Types.ObjectId(userId))

            if(!flag2)
            {
            friendList=[...friendList,{friendId:userId}]

            friend.friends=friendList

            await friend.save({validateBeforeSave:false})

            return res.status(200).json({
                success:true,
                message:"Friend request accepted"
            })
            }

            return res.status(200).json({
                success:true,
                message:"You are already friend"
            })
        }
    } catch (error) {
        console.log(error.message)
    }
}


export const showFriends=async function(req,res)
{
    try {
        const {userId}=req.params
        
        if(!userId)
            return res.status(400).json({
            success:false,
            error:"Error in displaying friends"})
        
        
        const friendData=await Friend.aggregate([
                {
                  $match:{
                    userId:new mongoose.Types.ObjectId(userId)
                  }
                },
                {
                  $unwind:"$friends"
                },
                {
                  $lookup: {
                    from: "users",
                    localField: "friends.friendId",
                    foreignField: "_id",
                    as: "data",
                    pipeline:[
                      {
                        $project:{
                          password:0,
                          createdAt:0,
                          updatedAt:0
                        }
                      }
                    ]
                  }
                },
                {
                  $unwind:"$data"
                },
                {
                  $addFields: {
                    friendsData:{
                      $mergeObjects:["$data","$friends"]
                    }
                  }
                },
                {
                  $project:{
                    data:0,
                    friends:0
                  }
                },
                {
                  $group:{
                    _id:"$userId",
                    data:{
                      $push:"$friendsData"
                    }
                  }
                }
        ])

        if(!friendData)
            return res.status(200).json({
            success:true,
            message:"no friends"})
        
        return res.status(200).json({
            success:true,
            message:"your friends are ",
            friendData
        })

    } catch (error) {
        console.log(error.message)
    }
}
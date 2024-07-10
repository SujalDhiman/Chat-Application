import mongoose from "mongoose"
import { User } from "../models/user.model.js"
import cookieParser from "cookie-parser"

export const registerUser=async function(req,res)
{
    try {

        const {name,email,password}=req.body

        if(name === "" || email === "" || password === "")
            return res.status(400).json({
            success:false,
            message:"All fields should be filled"})
        
        //checking
        const findExistingUser=await User.findOne({
            $or:[{name},{email},{password}]
        })

        if(findExistingUser)
            return res.status(400).json({
                success:false,
                message:"User already registered"})
            
        const user=await User.create({
            name,
            email,
            password
        })

        if(user.password) user.password=undefined

        if(user)
            return  res.status(200).json({
                success:true,
                message:"User registered Successfully",
                user})
        
        else
            return res.status(400).json({
                success:false,
                message:"Error in registration try again"})
    } catch (error) {
        console.log(error.message)
    }
}

export const loginUser=async function(req,res)
{
    try {
        const {name,password}=req.body

        if(password === "" || name === "")
            return res.status(400).json({
            success:false,
            message:"Fill the field"})
        
        
        const findUser=await User.findOne({name})

        if(findUser === null)
            return res.status(400).json({
            success:false,
            message:"User does not exist"})
        
        
        const checkPassword=await findUser.checkPassword(password)

        if(!checkPassword)
            return res.status(400).json({
                success:false,
                message:"Invalid Password"})
        
        
        const userToken=await findUser.generateToken()
        
        if(userToken)
        {
            let options={
                expiresIn:Date.now()+(5*24*60**60*1000),
                httpOnly:true
            }
            return res.status(200).cookie("accessToken",userToken,options)
            .json({
                success:true,
                message:"Login Successful",
                checkPassword
            })
        }
        else
        {
            return res.status(500).json({
                success:false,
                message:"Error in registering user"
            })
        }
        
    } catch (error) {
        console.log(error.message)
    }
}
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        unique:[true,"Name Already Taken"],
        required:true
    },
    email:{
        type:String,
        unique:[true,"Email Already Registered"],
        required:true
    },
    password:{
        type:String,
        unique:[true,"Choose New Password"],
        required:true,
    },
    photo:{
        secure_url:String,
        public_id:String,
    },
    status:{
        type:String
    }
},{timestamps:true})


userSchema.pre('save',async function(next){
    if(this.isModified('password'))    
       this.password=await bcrypt.hash(this.password,10);
    
    return next();
})

userSchema.methods.checkPassword=async function(gotPassword){
    return await bcrypt.compare(gotPassword,this.password); 
}

userSchema.methods.generateToken=async function()
{
    try {
        const token=await jwt.sign({
            id:this._id,
            userName:this.name
        },process.env.JWT_SECRET,{
            expiresIn:Date.now()+(1*60*60*1000)
        })

        return token;
    } catch (error) {
        console.log("error in creating token")
    }
}

export const User=mongoose.model("User",userSchema)


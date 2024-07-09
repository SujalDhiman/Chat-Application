import mongoose from "mongoose";
import bcrypt from "bcrypt"

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


export const User=mongoose.model("User",userSchema)


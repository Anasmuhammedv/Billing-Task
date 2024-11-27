import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
       type:String
    },
    address:{
       type:String
    }
})

const userModel = new mongoose.model("users",userSchema)

export default userModel
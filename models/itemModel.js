import mongoose from 'mongoose'

const itemSchema = mongoose.Schema({
    name:{
        // type:mongoose.Types.ObjectId,
        // ref:"users"
        type:String
    },
    price:{
        type:Number
    },
    imageUrl:{
       type:String
    }
})
const itemModel =new mongoose.model("items",itemSchema)
export default itemModel
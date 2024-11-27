import mongoose from "mongoose";

const billSchema = mongoose.Schema({
    items:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"items"
    }],
    status:{
        type:String,
        enum:["paid","pending"]
    },
   
    customerName:{
        type:String
    },
    address:{
        type:String
    }
    

})
const billModel = new mongoose.model("bills",billSchema)
export default billModel
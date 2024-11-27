import mongoose from 'mongoose'
export const mongoDbConnect = async()=>{
    
mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/Billing")
.then("mongo db connected")
.catch(err=>console.log(err)
)
}
import express from 'express'
import mongoose from 'mongoose'
import itemRouter from './routers/itemRouter.js'
import userRouter from './routers/userRoutes.js'
import billRouter from './routers/billRouter.js'

const app = express()
app.use(express.json())
app.use('/api',itemRouter)
app.use('/api',userRouter)
app.use('/api',billRouter)

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/Billing")
.then("mongo db connected")
.catch(err=>console.log(err))

app.listen(process.env.PORT || 4000,()=>{
    console.log("server running on port 4000")


})


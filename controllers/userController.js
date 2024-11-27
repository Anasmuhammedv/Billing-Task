import userModel from "../models/userModel.js"

export const createUser = async(req,res)=>{

    try {
        const {name,email,address} = req.body

        const newUser = new userModel({
            name:name,
            email:email,
            address:address
        })
        await newUser.save()
        return res.status(200).json({messsage:"user created successfully",data:newUser})
    } catch (error) {
        console.log(error);
        return res.status(404).json(error)
        
    }
   
}
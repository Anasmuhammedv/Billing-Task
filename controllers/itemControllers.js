import itemModel from "../models/itemModel.js"


//create item
export const createItem = async(req,res)=>{
    try {
        // const {id} = req.params
        const {name,price,imageUrl} = req.body

        const newItem = new itemModel({
            name:name,
            price:price,
            imageUrl:imageUrl,
        })
        await newItem.save()
    
        return res.status(201).json({message:"item added successfully",data:newItem})
    } catch (error) {
        console.log(error);
        
    }
  
}

//getallitem


export const getAllItem = async(req,res)=>{
    try {
        const allItems = await itemModel.find()
        return res.status(200).json({message:"all item fetched successfully",allItems})
    } catch (error) {
        console.log(error);
        return res.status(404).json({message:"internal server error",error:error})
        
    }
     
}
import billModel from "../models/billModel.js";

export const createBill = async(req,res)=>{
    try {
        const{name,address,customerName,items,status} = req.body

        const bills = new billModel({
            name:name,
            address:address,
            customerName:customerName,
            status:status,
            items:items
        })
        await bills.save()
        const id = bills._id
        console.log(id,"this is id");
        
        const totalAmount =await billModel.find({_id:id}).populate("items")
        

        const totalAmounts = totalAmount[0].items.map(d=>d.price).reduce((acc,curr)=>acc+curr)
       
    return res.status(201).json({message:"bill appilied successfully",data:bills,totalAmount:totalAmounts})
    } catch (error) {
        console.log(error);
        
    }

    
}

export const getReports = async(req,res)=>{
    try {
        console.log("hai");
        
        const {id} = req.params
        
        const report = await billModel.find({_id:id})
        const totalAmount =await billModel.find({_id:id}).populate("items")
        const totalAmounts = totalAmount[0].items.map(d=>d.price).reduce((acc,curr)=>acc+curr)
        
        return res.status(200).json({message:"report is shown below",data:report,totalAmount:totalAmounts})
    } catch (error) {
        return res.status(404).json(error)
    }
  
}
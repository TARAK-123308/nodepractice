const {Reciepe} = require("../model/reciepeModel"); //we use curly then you write export or module.export
const { ObjectId } = require("mongodb");


exports.addReciepe = async(req,res)=>{
    const {name,description,ingredients,instructions} = req.body;
    const newReciepe = new Reciepe({
        name,
        description,
        ingredients,
        instructions
    })
    await newReciepe.save();
    res.status(201).json({message:"Success", newReciepe})
}

exports.getReciepe= async(req,res)=>{
    try {
        const users = await Reciepe.find();
        res.json(users);
      } catch {
        res.send("Users not found");
    }
};

exports.updateReciepe = async(req,res)=>{
    try{
        const id = new ObjectId(req.params.id);
        const update = await Reciepe.updateOne({_id:id},{$set:{name:"Curd"}});
        res.status(201).json(update);
    }catch(err){
        res.json({message:"update failed"})
    }
    
};
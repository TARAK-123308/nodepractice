const {hash, compare} = require('bcrypt');
const {User} = require('../model/userModel');
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.JWT_SECRET || "mysecret";



exports.getUsers = async (req, res)=>{
    const users = await User.find();
    res.status(200).json({message:"Success",user:users})
}

exports.registerUser = async(req, res)=>{
    const {name,email, password, gender, mobile} = req.body;
    const hashPwd = await hash(password, 12);
    const newUser = new User({
        name,
        email,
        password:hashPwd,
        gender, 
        mobile
    })
    const accessToken = jwt.sign({userId:newUser._id,userEmail:newUser.email},SECRET_KEY,{expiresIn:"1h"})
    await newUser.save();
    res.status(201).json({message:"Success",accessToken, newUser})
}


exports.login = async(req,res)=>{
    const {name,password} = req.body;
    if(!name){
        return res.json({message:"name is required"})
    }
    if(!password){
        return res.json({message:"password must be there"})
    }
    const user = await User.findOne({ name: name });
      if(!user){
        throw new Error("User does not exist");
      }
    
      const match = await compare(password,user.password)
      if(!match){
        res.status(401).json({message: "Password doesn't match"})
    }
    const accessToken = jwt.sign(
    {userId: user._id, email: user.email},
    SECRET_KEY,
    {expiresIn:'10m'}
);
res.status(200).json({message:"Successfully LoggedIn",accessToken,user:{userId:user._id, name: user.name, email: user.email},
});
}





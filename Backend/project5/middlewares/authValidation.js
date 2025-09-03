const jwt = require("jsonwebtoken");
const SECRET_KEY = "mysecret";

module.exports = (req,res,next) =>{
    const token = req.headers.authorization;
    console.log(token);
    
    try{
        const decode = jwt.verify(token, SECRET_KEY);
        req.user = decode;
        console.log(req.user);
        next();
    }catch(err){
        res.json({message:err.message});
    }
};
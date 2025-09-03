exports.ErrorHandler = (err,req,res,next)=>{
console.log(err.stack);
res.status(404).json({message :err.message})
}
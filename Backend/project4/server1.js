const express = require('express');
const dotEnv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const empolyeeRoutes = require('./Routes/employRoutes')
const app = express();
dotEnv.config()
app.use(bodyParser.json())
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Db connected successfully");
    
}).catch((error)=>{
console.log(error);

})
app.use('/employees',empolyeeRoutes)
app.use('/users', require('./Routes/userRoutes'));
const port = process.env.port || 3002
app.listen(port,()=>{
    console.log(`server is running at ${port}`);
    
})
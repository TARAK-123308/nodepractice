const express = require('express');

const app = express();
const port = 5834;

app.use(express.json());

app.get("/",(req,res)=>{
    console.log(req.url,req.method);
    res.send("<h1>Welcome to home page</h1>");
})

app.get("/about",(req,res)=>{
    console.log(req.url,req.method);
    res.send("<h1>Welcome to About page</h1>");
})

app.get("/user",(req,res)=>{
    console.log(req.url,req.method);
    res.send("<h1>Welcome to Home page</h1>");
})

app.listen(port,()=>{
    console.log(`server is running .... ${port}`);
})
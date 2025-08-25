const {readFile} = require("fs");
readFile("E:/nodepractice1/MyPractice/Data/example.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }console.log(data);
})
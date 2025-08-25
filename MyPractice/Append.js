const {appendFile}=require('fs')
appendFile("E:/nodepractice1/MyPractice/Data/example.txt","nwe qwertyuiop",(err,data)=>{
    if(err){
        console.log(err);
        return;        
    }console.log(data);})
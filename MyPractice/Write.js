const {writeFile}= require('fs')
writeFile("E:/nodepractice1/MyPractice/Data/aditya.txt","Iam just adding this",(err,data)=>{
    if(err){
        console.log(err);
        return;        
    }console.log(data);
})
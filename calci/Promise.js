const mypromise = new Promise((resolve, reject) => {
    let num = Math.random();
    if(num > 0.5){
        resolve("Success");
    }else{
        reject("Failure");
    }
})
mypromise.then((msg)=>{
console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(setTimeout(()=>{
    console.log("Done");
},2000));

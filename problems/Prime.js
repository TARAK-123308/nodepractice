function IsPrime(Number){
    if(Number <= 1){console.log("Not a Prime Number ")};
    for(let i = 2;i < Math.sqrt(Number); i++){
        if(Number % i == 0){
            console.log("Not a Prime Number");
            return;
        }
    }
    console.log("Prime Number ");
}
IsPrime(3);
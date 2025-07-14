function voteCheck(num){
    if(num < 18 ) throw new Error("Age should be greater than 18");
    if(num > 100 ) throw new Error("Age should be less than 100");
    if(isNaN(num)) throw new Error("age must be a number ");
    return "you can  vote";
}

let ages = [12, "A",101 , 18]
for(let age of ages){
try{
    console.log(voteCheck(age))
} catch(Error){
    console.log(Error.message);
}
}
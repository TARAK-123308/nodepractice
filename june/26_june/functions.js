let prompt=require('prompt-sync')();

function SumOfFactors(number ){
let count = 0;
let sumOfFactors = 0;
for(let i = 1; i <= number;i++){
    if(number % i == 0)
       sumOfFactors+=i;  
}
return (sumOfFactors);
}


let s = prompt(" Enter the value : ");
let result = SumOfFactors(s);
console.log("Sum of factors is : ",result);
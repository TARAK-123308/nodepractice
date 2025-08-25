function Amicable(num1,num2){
      let resn1 = FactorsSum(num1);
      let resn2 = FactorsSum(num2);
      if(resn1 == num2 && resn2 == num1)
        console.log("Amicable Number");
}

function FactorsSum(Number){
    let res = 0;
   for(let i = 1;i < Number;i++){
    if(Number % i === 0 ){
        res += i;
    }
   } 
   return res;
}

Amicable(220,284);
function Factors(Number){
   for(let i = 1;i <= Number;i++){
    if(Number % i === 0 ){
        console.log(i);
    }
   }             
}

Factors(284);
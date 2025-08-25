function Factors(Number){
    let SF = 0;
   for(let i = 1;i <= Number;i++){
    if(Number % i === 0 ){
        SF += i;
    }
   }   
   console.log(SF);          
}

Factors(123);
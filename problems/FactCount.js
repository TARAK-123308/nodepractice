function Factors(Number){
    let Count = 0;
   for(let i = 1;i <= Number;i++){
    if(Number % i === 0 ){
        Count++
    }
   }   
   console.log(Count);          
}

Factors(12);
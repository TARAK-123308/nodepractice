function Factors(Number){
    let SEF = 0;
   for(let i = 1;i <= Number;i++){
    if(Number % i === 0 ){
        if(i % 2 === 1)
            {SEF += i;}
    }
   }   
   console.log(SEF);          
}

Factors(12);
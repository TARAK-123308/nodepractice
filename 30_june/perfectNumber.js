let c = 28;
let count = 0;
for(let i = 1; i < c;i++){
    if(c % i == 0){
        count += i;
    }
}
   if(count == c){
        console.log("Perfect NUmber ");
    }
    else console.log("Not a perfect Number ");

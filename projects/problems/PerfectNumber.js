function Perfect(Number){
let count = 0;
for(let i = 1; i < Number;i++){
    if(Number % i == 0){
        count += i;
    }
}
   if(count == Number){
        console.log("Perfect NUmber ");
    }
    else console.log("Not a perfect Number ");
}

let s = process.argv[2];
Perfect(s);
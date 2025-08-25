function Tables(num){
    for(let i = 1;i <= 20; i++){
     console.log(`${num} * ${i} = ${num * i}`)
    }
    console.log(" ")
}

let start = 10;
let end = 20 
if(start > end ) return false;
else{
for(let i = start;i <= end;i++){
    Tables(i);
}
}
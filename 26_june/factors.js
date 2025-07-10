let c = 220
let count = 0;
for(let i = 1; i <= c;i++){
    if(c % i == 0){
        console.log(i);
        count++;
    }
}
console.log(count);

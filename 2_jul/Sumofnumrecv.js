function sumOfNum(num){
    if(num == 1) return 1;
    return num + sumOfNum(num - 1); 
}

let result = sumOfNum(4);
console.log(result);
function factorial (num){
    if(num == 1) return num;
     return num * factorial(num - 1);
    }

let res = factorial(5);
console.log(res);
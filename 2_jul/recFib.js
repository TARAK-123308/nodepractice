function recfib(num){
    if(num === 0) return 0;
    if(num === 1) return 1;
    return recfib(num - 1) + recfib(num - 2);
}


let res = recfib(5)
console.log(res)


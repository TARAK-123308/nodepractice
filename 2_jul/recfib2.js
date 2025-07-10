function recfib_2(num, a = 0,b = 1,seq = []){
    if(num === 0) return seq;
    seq.push(a)
    return recfib_2(num - 1,b,a + b,seq);
}


console.log(recfib_2(5))
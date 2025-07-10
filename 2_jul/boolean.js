function Boolean(a,b,c){
    if(((a | c) && (b | a)) && ((a|b) && (b | c))) return true;
    else return false;
}

console.log(Boolean(0,0,0))
console.log(Boolean(0,0,1))
console.log(Boolean(0,1,0))
console.log(Boolean(0,1,1))
console.log(Boolean(1,0,0))
console.log(Boolean(1,0,1))
console.log(Boolean(1,1,0))
console.log(Boolean(1,1,1))



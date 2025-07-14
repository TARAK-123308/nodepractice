function divisibilityByZero(num1, num2){
    try{
        if(num2 == 0 || num1 == 0) throw new Error("Cnat be divided by Zero");
        else if (isNaN(num1) || isNaN(num2)){
            throw new Error("Both are not a numbers");
        }
        return num1/num2;
}catch(error)
{
     console.log(error.message);
}
}

console.log(divisibilityByZero(13,12));
console.log()
console.log(divisibilityByZero('a',13));
console.log(divisibilityByZero(0,13));
console.log(divisibilityByZero(12,'a'));


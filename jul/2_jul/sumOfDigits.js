function sumOfDigits(num){
   if(num == 0 ) return 0;
   return num % 10 + sumOfDigits(Math.floor(num / 10));
}
let result = sumOfDigits(412);
console.log(result);
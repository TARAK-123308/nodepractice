//sum of squares of natural numbers
let sumOfSquare = 0;
for(let i = 1; i < 100; i++){
    sumOfSquare += i * i;
}
console.log("sum of squares is : " + sumOfSquare);

//sum of even squares
let sumOfEvenSquare = 0;
for(let i = 1; i < 100; i++){
    if( i % 2==0){
    sumOfEvenSquare += i * i;}
}
console.log("sum of Even squares is : " + sumOfEvenSquare);

//squares of sum of individual digits
let n = 123;
let r = 0;
let s = 0;
for( let i = 0; n > 0; i++){
    r = n % 10;
    n = Math.floor(n / 10);
    s = s + (r * r); 
}
console.log(s);
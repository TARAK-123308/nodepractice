// let value = function(num){
//     return num % 2 == 0;
// }

// console.log(value(12));

// let value = (num1, num2) => num1 + num2;
// console.log(value(1, 2)); 

let arr = {}
let s = ["tarak","1",2,3,4,5];
s.toString();
for(let i = s.length;i >= 0;i--){
arr[i]  = s.splice(1);
}
console.log(arr[0])
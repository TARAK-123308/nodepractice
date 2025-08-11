const nums = [10, 55, 32, 99, 4, 70];

const something = nums.filter(nums =>nums > 50);
console.log(something);

const squares = nums.map(num=> num ** 2);
console.log(squares)

const Problems = nums.filter(num=>num % 2 == 0).map(num => "even : " + num);
console.log(Problems);
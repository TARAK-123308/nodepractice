function fibonacci(num){
   let a = 0;
   let b = 1;
   let c = 0;
   let count = 0;
   let arr = [];
   while (count < num){
   arr.push(a);
   c = a + b;
   a = b;
   b = c;
   count ++;
   }
   console.log(arr);
}
fibonacci(5);




let s = "Hai bro";
s=s.toLocaleUpperCase();
let sum = 0;
for(let i = 0;i < s.length; i++){
    sum += s.charCodeAt(i);
}
console.log(sum);
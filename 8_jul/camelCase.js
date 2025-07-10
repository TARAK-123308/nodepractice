let str = "tarak sri chandrahas";
let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
  let upper = words[i].slice(0, 1).toUpperCase();
        let rest = words[i].slice(1); 
        words[i] = upper + rest;
}

let result = words.join(" ");
console.log(result);
let str = "tarak sri chandrahas";
str = str.split(" ").reverse();
let newstr = "";

for(let i = 0;i < str.length;i++){
    newstr += str[i].split("").reverse().join("").toUpperCase()+ " ";
}
console.log(newstr);

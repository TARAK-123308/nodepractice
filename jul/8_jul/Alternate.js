let str = "tarak sri chandrahas "
arr = str.split("");
for(let i = 0;i < arr.length; i += 2 ){
    arr[i] = arr[i].toUpperCase();
}
str = arr.join("");
console.log(str)
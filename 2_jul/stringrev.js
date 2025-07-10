function stringrev(str) {
    if (str.length <= 1) return str;
    return stringrev(str.slice(1)) + str[0];
}

let result = stringrev("Tarak");
console.log(result); 

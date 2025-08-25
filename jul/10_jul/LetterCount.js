function letterCount(str){
    let result = {}
    for(let char of str){
       if (result[char]) {
       result[char]++;
       } else {
        result[char] = 1;
       }
}
        // result[char] = result[char] ? result[char] + 1 : 1;

        // result[char] = (result[char] || 0) + 1;
        return result;

    }
    
console.log(letterCount("tarak sri chandrahas"))



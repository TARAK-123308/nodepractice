function pyramid(num){
    let pattern = "";
    for(let row = 1;row <= num;row++){
       pattern += " ".repeat(num - row);
       pattern += "*".repeat(2 * row - 1);
       pattern += "\n"
    }
    return pattern;
}
console.log(pyramid(5));
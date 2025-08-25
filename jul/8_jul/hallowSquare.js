function pattern1(num){
    let pattern = "";
for(let row = 1;row <= num; row++){
    for(let col = 1;col <= num;col ++){
      if(row == 1 || row == num || col == 1 || col == num) {
    pattern += "*";
}
      else{
      pattern += " "
      }
    }
    pattern += "\n";
}
    return pattern;
}
console.log(pattern1(5)); 
function pattern1(num){
    let pattern = "";
for(let row = 1;row <= num; row++){
    pattern += " ".repeat(num - row)
    pattern += "*".repeat(row)
    pattern += "\n";
}
    return pattern;
}
console.log(pattern1(5)); 



function butterflyPattern(n) {
    for (let i = 1; i <= n; i++) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2*(n - i));
        console.log(stars + spaces + stars);
    }

    for (let i = n; i >= 1; i--) {
        let stars = "*".repeat(i);
        let spaces = " ".repeat(2*(n - i));
        console.log(stars + spaces + stars);
    }
}

butterflyPattern(5);
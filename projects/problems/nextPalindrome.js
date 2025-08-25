function nextPalindrome(num) {
    let c = 0;
    num++; 
    while (c != 1) {
        if (palindrome(num)) {
            c++;
            return num;
        }
        num++;
    }
}
function palindrome(num) {
    let num1 = num;
    let r = 0;
    let s = 0;
    while (num != 0) {
        r = num % 10;
        num = Math.floor(num / 10);
        s = (s * 10) + r;
    }
    if (num1 === s) return true;
    return false;
}

let result = nextPalindrome(121);
console.log(result);

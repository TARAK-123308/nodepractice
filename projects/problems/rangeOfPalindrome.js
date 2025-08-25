function rangeOfPalindrome(num1, num2) {
   
    for (let i = num1 + 1; i <= num2; i++) {
        if (isPalindrome(i)) {
            console.log(i);
        }
    }
}


function isPalindrome(num) {
    let original = num;
    let reversed = 0;

    while (num != 0) {
        let r = num % 10;
        num = Math.floor(num / 10);
        reversed = reversed * 10 + r;
    }

    return original === reversed;
}

rangeOfPalindrome(10,20);

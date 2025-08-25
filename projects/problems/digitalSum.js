function digitSum(num) {
    while (num >= 10) {
        let temp = 0;
        while (num != 0) {
            temp += num % 10;
            num = Math.floor(num / 10);
        }
        num = temp;
    }
    return num;
}

let result = digitSum(987);
console.log(result);

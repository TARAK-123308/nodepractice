let str = "wow";

function palindrome(str){
    let str2 = str.split("").reverse().join("");;
    if(str === str2) return true;
    else return false;
}

console.log(palindrome(str));
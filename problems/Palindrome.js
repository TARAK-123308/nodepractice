function Palindrome(Number){
    let sum = 0,temp=0,temp1 = Number;
    while(Number != 0){
        temp = Number % 10;
        Number = Math.floor(Number / 10);
        sum = (sum * 10) + temp;
    }
    if(temp1 === sum) console.log("Palindrome Number");
    else console.log("Not A Palindrome Number");
    
}

Palindrome(212);
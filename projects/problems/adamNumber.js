function adamNumber(num){
     let squareof1 = num * num; // square of the number
     let num2 = reverse(num);   // reversing of the given number
     let squareof2 = num2 * num2;  // square of the reverse
     let result = reverse(squareof2);  // reverse of the result
     if(squareof1 == result)
        console.log("Adam number");
    else console.log("Not an Adam number ")
}

function reverse(Number){
    let sum = 0,temp=0;
    while(Number != 0){
        temp = Number % 10;
        Number = Math.floor(Number / 10);
        sum = (sum * 10) + temp;
    }
    return sum;
}
adamNumber(12);
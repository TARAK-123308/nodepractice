function reverse(Number){
    let sum = 0,temp=0;
    while(Number != 0){
        temp = Number % 10;
        Number = Math.floor(Number / 10);
        sum = (sum * 10) + temp;
    }
    console.log(sum);
}

reverse(21);
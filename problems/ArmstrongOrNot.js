function Sum(number)
{
    let num1=number;
    num1 = num1.toString();
    let c=num1.length;
    let r = 0,sum = 0;
    while(number !=0)
    {
        r = number % 10;
        number = Math.floor(number / 10);
        sum += r ** c;
    }
    if(sum === number) console.log("Armstrong NUmber " );
    else console.log(" Not an armstrong number ");


}

Sum(3458);
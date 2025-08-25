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
    console.log(sum);


}

Sum(3458);
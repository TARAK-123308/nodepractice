function Sum(number)
{
    let r = 0,sum = 0;
    while(number !=0)
    {
        r = number % 10;
        number = Math.floor(number / 10);
        sum += r;
    }
    console.log(sum);
}

Sum(123);
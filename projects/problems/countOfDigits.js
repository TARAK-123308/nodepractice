function Count(number)
{
    let r = 0,Count = 0;
    while(number != 0)
    {
        r = number % 10;
        number = Math.floor(number / 10);
        Count ++;
    }
    console.log(Count);
}

Count(58);
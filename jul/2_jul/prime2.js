function IsPrime(num){
    if(num <= 1) return false;
    for(let i = 2;i <= Math.sqrt(num); i++){
        if(num % i == 0) return false;
    }
    return true;
}

function second(arr){
    let max = arr[0];
    let secmax;
    
}
function IsPrime(Number) {
    if (Number <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(Number); i++) {
        if (Number % i === 0) {
            return false;
        }
    }
    return true;
}
function PrimeRange(limit) {
    for (let num = 1; num <= limit; num++) {
        if (IsPrime(num)) {
            console.log(num + " is a Prime Number");
        }
    }
}

PrimeRange(400);
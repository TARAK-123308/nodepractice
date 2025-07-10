function isPrime(num) {
    num = Number(num); 

    if (num <= 1) {
        console.log("Not a prime number");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("Not a prime number");
            return;
        }
    }

    console.log("Prime number");
}

let num = process.argv[2];
isPrime(num);

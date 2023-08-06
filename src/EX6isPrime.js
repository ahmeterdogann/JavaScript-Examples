function isPrime(val) {
    if (val % 2 == 0)
        return val == 2;
    
    if (val % 3 == 0)
        return val == 3;

    if (val % 5 == 0)
        return val == 5;

    if (val % 7 == 0)
        return val == 7;

    for (let i = 11; i <= Math.sqrt(val); i += 2) {
        if (val % i == 0)
            return false;
    }

    return true;
}


console.log(isPrime(2));
console.log(isPrime(101));
console.log(isPrime(51));
console.log(isPrime(19));
console.log(isPrime(56));
console.log(isPrime(900));
console.log(isPrime(169));


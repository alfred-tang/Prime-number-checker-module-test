function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true; // 2 and 3 are prime numbers

    // Check for even numbers greater than 2
    if (num % 2 === 0) return false;

    // Check for factors from 3 to the square root of num
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }

    return true; // num is prime
}

module.exports = { isPrime };
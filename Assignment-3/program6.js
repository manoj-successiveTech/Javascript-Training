// 6. Write a program to display prime numbers from 1 to 50


function numPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i < num; i++) { // Check divisibility up to num-1
        if (num % i === 0) {
            return false; // Not prime if divisible
        }
    }
    return true; // Prime if not divisible by any number
}

console.log("Prime numbers from 1 to 50:"); // Print prime numbers from 1 to 50

for (let i = 1; i <= 50; i++) {
    // Corrected the condition to call numPrime(i) properly
    if (numPrime(i)) {
        console.log(i);
    }
}
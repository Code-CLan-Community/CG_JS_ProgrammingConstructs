function primeInRange(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

primeInRange(10, 30);
// Output: 11, 13, 17, 19, 23, 29
function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i * i <= num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    var reverse = 0, temp = num;
    while (temp > 0) {
        reverse = (reverse * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }
    return reverse;
}

var number = 31; 

if (isPrime(number)) {
    console.log(number + " is Prime");
    var palindrome = getPalindrome(number);
    if (isPrime(palindrome)) {
        console.log("Number " + number + " is also Plaindrome Prime");
    } else {
        console.log("Number " + number + " is NOT Plaindrome Prime");
    }
} else {
    console.log(number + " is NOT Prime");
}

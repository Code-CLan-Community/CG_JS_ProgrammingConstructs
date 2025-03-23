function isPalindrome(num) {
    var temp = num;
    var reverse = 0;

    while (temp > 0) {
        reverse = (reverse * 10) + (temp % 10);
        temp = Math.floor(temp / 10);
    }

    return num === reverse;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false

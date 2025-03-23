var year = 2024; // Leap Year

if (year >= 1000 && year <= 9999) {
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        console.log(year + " is a Leap Year.");
    } else {
        console.log(year + " is NOT a Leap Year.");
    }
} else {
    console.log("Invalid year! Please enter a 4-digit year.");
}

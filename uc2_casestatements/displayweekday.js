function getWeekDay(num) {
    switch (num) {
        case 1: return "Sunday";
        case 2: return "Monday";
        case 3: return "Tuesday";
        case 4: return "Wednesday";
        case 5: return "Thursday";
        case 6: return "Friday";
        case 7: return "Saturday";
        default: return "Invalid input";
    }
}

console.log(getWeekDay(5)); // Output: Thursday

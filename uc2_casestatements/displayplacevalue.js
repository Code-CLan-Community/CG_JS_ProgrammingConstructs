function getPlaceValue(num) {
    switch (num) {
        case 1: return "Unit";
        case 10: return "Ten";
        case 100: return "Hundred";
        case 1000: return "Thousand";
        case 10000: return "Ten Thousand";
        default: return "Invalid input";
    }
}

console.log(getPlaceValue(100)); // Output: Hundred

var low = 1;
var high = 100;
var mid;
var input = 50;

while (low <= high) {
    mid = Math.floor((low + high) / 2);
    console.log("Is your number " + mid + "?");

    if (mid == input) {
        console.log("Magic Number Found: " + mid);
        break;
    } else if (mid > input) {
        console.log("Lower");
        high = mid - 1;
    } else {
        console.log("Higher");
        low = mid + 1;
    }
}

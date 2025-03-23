var n = 8; 
var power = 1;
var count = 0;

while (power <= 256 && count <= n) {
    console.log("2^" + count + " = " + power);
    power *= 2;
    count++;
}

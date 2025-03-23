var num1 = Math.floor(Math.random() * 900) + 100;
var num2 = Math.floor(Math.random() * 900) + 100;
var num3 = Math.floor(Math.random() * 900) + 100;
var num4 = Math.floor(Math.random() * 900) + 100;
var num5 = Math.floor(Math.random() * 900) + 100;

var min = num1, max = num1;

if (num2 < min) min = num2;
if (num2 > max) max = num2;

if (num3 < min) min = num3;
if (num3 > max) max = num3;

if (num4 < min) min = num4;
if (num4 > max) max = num4;

if (num5 < min) min = num5;
if (num5 > max) max = num5;

console.log("Numbers: ", num1, num2, num3, num4, num5);
console.log("Min: ", min);
console.log("Max: ", max);

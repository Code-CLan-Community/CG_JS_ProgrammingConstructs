var day = 21; 
var month = 3; 

var isSpring = false;

if ((month == 3 && day >= 20) || (month == 4) || (month == 5) || (month == 6 && day <= 20)) {
    isSpring = true;
}

console.log(isSpring);

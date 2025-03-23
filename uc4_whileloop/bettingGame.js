var money = 100;
var bets = 0;
var wins = 0;

while (money > 0 && money < 200) {
    bets++;
    if (Math.random() < 0.5) {
        money++;
        wins++;
    } else {
        money--;
    }
}
console.log("Total Bets: " + bets);
console.log("Total Wins: " + wins);
console.log("Final Money: " + money);

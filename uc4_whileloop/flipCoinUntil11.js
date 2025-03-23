var heads = 0, tails = 0;

while (heads < 11 && tails < 11) {
    var flip = Math.random();
    if (flip < 0.5) {
        heads++;
    } else {
        tails++;
    }
}

console.log("Final Score - Heads: " + heads + ", Tails: " + tails);

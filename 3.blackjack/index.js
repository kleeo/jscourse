let cardOne = 2;
let cardTwo = 1+1;
let sum = cardOne + cardTwo;
let hasBlackjack = false;
let isAlive = true;
let continueMessage = "Do you want to draw a new card?";
let victoryMessage = "You've won!";
let failureMessage = "You've lost! :(";
let message = "";

if (sum <= 20) {
    message = continueMessage;
} else if (sum === 21) {
    message = victoryMessage;
    hasBlackjack = true;
} else {
    message = failureMessage;
    isAlive = false;
}

console.log(message);
let cardOne = 9;
let cardTwo = 11;
let sum = cardOne + cardTwo;
let hasBlackjack = false;
let isAlive = true;

let continueMessage = "Do you want to draw a new card?";
let victoryMessage = "You've won!";
let failureMessage = "You've lost!";
let message = "";

let messageElement = document.getElementById("message");
let sumElement = document.getElementById("sum");
let cardsElement = document.getElementById("cards");
let newCardButton= document.getElementById("newCardBtn");

function startGame() {
    sumElement.textContent = "Sum: " + sum;
    cardsElement.textContent = "Cards: " + cardOne + ", " + cardTwo;
    if (sum <= 20) {
        message = continueMessage;
    } else if (sum === 21) {
        message = victoryMessage;
        hasBlackjack = true;
    } else {
        message = failureMessage;
        isAlive = false;
        newCardButton.setAttribute("disabled", "disabled");
        newCardButton.setAttribute("class", "grayed");
    }

    messageElement.textContent = message;
}

function newCard() {
    let card = 7;
    sum += card;
    startGame();
}
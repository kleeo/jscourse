let resultElement = document.getElementById("result");
let num1Element = document.getElementById("num1");
let num2Element = document.getElementById("num2");
let num1 = 1;
let num2 = 2;
initialize();
function add() {
    let numbers = getNumbers();
    displayResult("Sum: " + (numbers[0] + numbers[1]));
}

function subtract() {
    let numbers = getNumbers();
    displayResult("Difference: " + (numbers[0] - numbers[1]));
}

function multiply() {
    let numbers = getNumbers();
    displayResult("Multiplication: " + (numbers[0] * numbers[1]));
}

function divide() {
    let numbers = getNumbers();
    displayResult("Division: " + (numbers[0] / numbers[1]));
}

function displayResult(result) {
    resultElement.textContent = result;
}

function initialize() {
    num1Element.textContent = num1;
    num2Element.textContent = num2;
}

function getNumbers() {
    let num1 = parseInt(num1Element.value);
    let num2 = parseInt(num2Element.value);
    let numbers = [num1, num2];
    return numbers;
}
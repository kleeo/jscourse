let count = 0;
let countElement = document.getElementById("count-el");
let historyElement = document.getElementById("save-el");
function increment() {
    countElement.textContent = ++count;
}
function save() {
    historyElement.textContent += count + " - ";
    count = 0;
    countElement.textContent = 0;
}


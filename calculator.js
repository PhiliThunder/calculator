//Operation variables
let firstNum = null;
let secondNum = null;
let operator = null;
//Basic math functions
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
//Operation function
function operate(operator, firstNum, secondNum) {
    if (!operator || !firstNum || !secondNum) {
        return "ERROR";
    }
    if (operator == "+") {
        return add(firstNum, secondNum);
    }
    if (operator == "-") {
        return subtract(firstNum, secondNum);
    }
    if (operator == "*") {
        return multiply(firstNum, secondNum);
    }
    if (operator == "/") {
        return divide(firstNum, secondNum);
    }
}
//Display handling
const display = document.querySelector(".display");
let displayContent = [];
function displayPopulate(symbol) {
    displayContent.push(symbol);
    displayContent = displayContent.join("");
    display.textContent = displayContent;
    displayContent = displayContent.split("");
}
const numberInput = document.querySelectorAll(".numbers");
numberInput.forEach(number => {
    number.addEventListener('click', (symbolSupplier))
});
function symbolSupplier(event) {
    const symbolsToSend = event.target.textContent;
    //const stringed = symbolsToSend.toUpperCase();
    displayPopulate(symbolsToSend);
}
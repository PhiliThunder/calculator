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
//Number buttons
const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(number => {
    number.addEventListener('click', (symbolSupplier))
});
function symbolSupplier(event) {
    const symbolsToSend = event.target.textContent;
    //const stringed = symbolsToSend.toUpperCase();
    displayPopulate(symbolsToSend);
}
//Operator buttons
const operatorButtons = document.querySelectorAll(".operators");
operatorButtons.forEach(operator => {
    operator.addEventListener('click', (operatorHandler))
});
let operatorChosen = null;
let firstAndOpLength = null;
function operatorHandler(event) {
    firstNum = parseInt(displayContent.join("")); //Save current input number
    console.log(firstNum + " firstnum");
    displayPopulate(event.target.textContent);
    operatorChosen = event.target.textContent; //Saves operator type
    firstAndOpLength = displayContent.length; //Counts length of the first number and the operator
    console.log(firstAndOpLength + " firstAndOpLength");
}
//Equals button
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener('click', (equalsHandler));
let equalsIsPressed = false;
function equalsHandler() {
    secondNum = parseInt(displayContent.slice(firstAndOpLength).join(""));
    console.log(secondNum + " secondNum");
    equalsIsPressed = true;
    result = operate(operatorChosen, firstNum, secondNum);
    console.log(result);
    display.textContent = result.toString(); //Show result
    //Reset values
    firstNum = null;
    secondNum = null;
    displayContent = [];
}
//All Clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', (allClear));
function allClear() {
    firstNum = null;
    secondNum = null;
    displayContent = [];
    display.textContent = "0";
}
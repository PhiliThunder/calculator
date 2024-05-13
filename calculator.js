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
let inputValues = "";
function clearInputValues() {
    inputValues = "";
}
//Display handling
const display = document.querySelector(".display");
function displayPopulate(symbol) {
    const lastCharacter = display.textContent.slice(-1);
    console.log("lastChar: " + lastCharacter)
    console.log("isNaN: " + isNaN(symbol) + symbol);
    if (lastCharacter === '+' && isNaN(symbol) || //Makes sure multiple operators cannot be displayed on screen after eachother
        lastCharacter === '-' && isNaN(symbol) || 
        lastCharacter === '*' && isNaN(symbol) || 
        lastCharacter === '/' && isNaN(symbol)) {
        display.textContent = display.textContent.slice(0, -1) + symbol;
        removedSymbol = lastCharacter;
    } else {
        if (display.textContent === "0") {//Removes the default 0 before adding new symbols
            display.textContent = "";
        }
        display.textContent += symbol;
    }
}
function displayResult() {
    let resultRounded = result;
    if (result.toString().length > 16) { //Simple decimal limiter, works fine in most cases to prevent overflow
        resultRounded = Math.round(result * 1e12) / 1e12;
    } 
    display.textContent = resultRounded.toString();
}
function clearDisplay() {
    display.textContent = "0";
}
//Number buttons
const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(number => {
    number.addEventListener('click', (numberHandler))
});
function numberHandler(event) {
    if (display.textContent == result) { 
        allClear(); //Clears all if result has been shown and no new operator was pressed
    }
    const numberToSend = event.target.textContent;
    inputValues += numberToSend;
    displayPopulate(numberToSend);
}
//Operation variables
let firstNum = null;
let secondNum = null;
let operator = null;
let firstOperation = true;
let result = 0;
function debugLogAll() {
    console.log("inputVals: " + inputValues)
    console.log("firstN " + firstNum);
    console.log("secN " + secondNum);
    console.log("operator " + operator);
    console.log("firstOp? " + firstOperation);
    console.log("result: " + result);
}
//Operator buttons and function
const operatorButtons = document.querySelectorAll(".operators");
operatorButtons.forEach(operator => {
    operator.addEventListener('click', (operationHandler))
});
function operationHandler(event) {
    if (firstOperation == true && inputValues.length > 0) {
        firstNum = Number(inputValues);
        operator = event.target.textContent;
        displayPopulate(operator);
        clearInputValues();
        firstOperation = false;
    } else if (inputValues.length > 0) {
        secondNum = Number(inputValues);
        result = operate(operator, firstNum, secondNum);
        displayResult();
        firstNum = result;
        secondNum = null;
        clearInputValues();
        operator = event.target.textContent;
        displayPopulate(operator);
    } else {
        operator = event.target.textContent;
        displayPopulate(operator);
    }
}
//Equals button and function
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener('click', (equals));
function equals() {
    if (secondNum == null && firstNum == null) {

    } else if(secondNum == null) {
        secondNum = Number(inputValues);
        result = operate(operator, firstNum, secondNum);
        displayResult();
        firstNum = result;
        secondNum = null;
        clearInputValues();
    } else { //in case secondNum is already set, but it should never be. So maybe unnecessary? 
        result = operate(operator, firstNum, secondNum);
        displayResult();
        firstNum = result;
        secondNum = null;
        clearInputValues();
    }
}
//All Clear button and function
const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', (allClear));
function allClear() {
    firstNum = null;
    secondNum = null;
    clearInputValues();
    clearDisplay();
    operator = null;
    firstOperation = true;
    result = 0;
}
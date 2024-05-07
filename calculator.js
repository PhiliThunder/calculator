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
let inputArray = [];
function displayPopulate(symbol) {
    inputArray.push(symbol);
    inputArray = inputArray.join("");
    display.textContent = inputArray;
    inputArray = inputArray.split("");
}
//Number buttons
const numberButtons = document.querySelectorAll(".numbers");
numberButtons.forEach(number => {
    number.addEventListener('click', (symbolSupplier))
});
function symbolSupplier(event) {
    const symbolsToSend = event.target.textContent;
    displayPopulate(symbolsToSend);
}
//Operator buttons
const operatorButtons = document.querySelectorAll(".operators");
operatorButtons.forEach(operator => {
    operator.addEventListener('click', (operatorHandler))
});
let operatorChosen = null;
let firstAndOpLength = null;
let subsequentOperation = false;
function operatorHandler(event) {
    if (operatorChosen != null) {
        operatorChosen = event.target.textContent; //Saves operator type
        console.log(operatorChosen);
        displayPopulate(event.target.textContent);
        intermediateEquals();
        subsequentOperation = true;
    } else {
    firstNum = parseInt(inputArray.join("")); //Save current input number
    console.log(firstNum + " firstnum");
    displayPopulate(event.target.textContent);
    operatorChosen = event.target.textContent; //Saves operator type
    console.log(operatorChosen);
    firstAndOpLength = inputArray.length; //Counts length of the first number and the operator
    console.log(firstAndOpLength + " firstAndOpLength");
    }
}
//Equals button
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener('click', (equals));
function equals() {
    secondNum = parseFloat(inputArray.slice(firstAndOpLength).join(""));
    console.log(secondNum + " secondNum");
    console.log(operatorChosen);
    result = operate(operatorChosen, firstNum, secondNum);
    console.log(result + " result");
    display.textContent = result.toString(); //Show result
    //Reset values
    firstNum = result;
    secondNum = null;
    inputArray = [firstNum];
}
//Function for calculation when clicking operator after another operator but before equals button
function intermediateEquals() {
    secondNum = parseFloat(inputArray);
    console.log(secondNum + " secondNum");
    console.log(operatorChosen);
    result = operate(operatorChosen, firstNum, secondNum);
    console.log(result + " intermediate result");
    firstNum = result;
    console.log(firstNum + " new firstnum");
}
//All Clear button
const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', (allClear));
function allClear() {
    firstNum = null;
    secondNum = null;
    inputArray = [];
    display.textContent = "0";
    operatorChosen = null;
    subsequentOperation = false;
}
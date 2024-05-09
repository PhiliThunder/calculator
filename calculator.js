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
    inputValues += symbol;
    display.textContent = inputValues;
}
function displayResult() {
    result.toString();
    display.textContent = result;
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
    const numbersToSend = event.target.textContent;
    displayPopulate(numbersToSend);
}
//Operation variables
let firstNum = null;
let secondNum = null;
let operator = null;
let firstOperation = true;
let operatorsActive = true;

let result = 0;
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
    }
}
//All Clear button
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
//Equals button and function
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener('click', (equals));
function equals() {
    if (secondNum == null && firstNum == null) {
        
    } else if(secondNum == null) {
        secondNum = Number(inputValues);
        result = operate(operator, firstNum, secondNum);
        displayResult();
        result = firstNum;
        clearInputValues();
    } else {
        result = operate(operator, firstNum, secondNum);
        displayResult();
        result = firstNum;
        clearInputValues();
    }
}
/*OLD METHOD:
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
    firstNum = parseInt(inputValues.join("")); //Save current input number
    console.log(firstNum + " firstnum");
    displayPopulate(event.target.textContent);
    operatorChosen = event.target.textContent; //Saves operator type
    console.log(operatorChosen);
    firstAndOpLength = inputValues.length; //Counts length of the first number and the operator
    console.log(firstAndOpLength + " firstAndOpLength");
    }
}
//Equals button
const equalsButton = document.querySelector(".equals");
equalsButton.addEventListener('click', (equals));
function equals() {
    secondNum = parseFloat(inputValues.slice(firstAndOpLength).join(""));
    console.log(secondNum + " secondNum");
    console.log(operatorChosen);
    result = operate(operatorChosen, firstNum, secondNum);
    console.log(result + " result");
    display.textContent = result.toString(); //Show result
    //Reset values
    firstNum = result;
    secondNum = null;
    inputValues = [firstNum];
}
//Function for calculation when clicking operator after another operator but before equals button
function intermediateEquals() {
    secondNum = parseFloat(inputValues);
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
    inputValues = [];
    display.textContent = "0";
    operatorChosen = null;
    subsequentOperation = false;
}
*/
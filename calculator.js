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
let inputValues = [];
function clearInputValues() {
    inputValues = [];
}
//Display handling
const display = document.querySelector(".display");
function displayPopulate(symbol) {
    inputValues.push(symbol);
    inputValues = inputValues.join("");
    display.textContent = inputValues;
    inputValues = inputValues.split("");
}
function displayResult(result) {
    result = result.toString();
    display.textContent = result;
}
function clearDisplay() {
    display.textContent = "";
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
/*When an operator is pressed the first time:
- Number in inputValues should be saved as firstNum
- Operatortype should be saved
- Operator should be pushed to display
- inputValues should be reset
- Ability to press operator should be deactivated, as long as there are no numbers in inputValues
When an operator is pressed a second or subsequent time:
- Number in inputValues should be saved as secondNum
- Operation should be done on the two numbers, using the previously saved operator choice, save to Result value
- Display should update to result
- Number from Result should be set to as firstNum
- inputValues should be reset
- Ability to press operator should be deactivated, as long as there are no numbers in inputValues
- 
*/

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
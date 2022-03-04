const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOutput = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');


function outputResult(result, text) {
    currentResultOutput.textContent = result;
    currentCalculationOutput.textContent = text;
}

const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput () {
    return parseFloat(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = parseFloat(userInput.value);
    const initalResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initalResult, enteredNumber)
}

function subtract() {
    const enteredNumber = parseFloat(userInput.value);
    const initalResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initalResult, enteredNumber)
}

function multiply() {
    const enteredNumber = parseFloat(userInput.value);
    const initalResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initalResult, enteredNumber)
}

function divide() {
    const enteredNumber = parseFloat(userInput.value);
    const initalResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initalResult, enteredNumber)
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
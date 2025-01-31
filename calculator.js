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

var firstNumber;
var operator;
var secondNumber;
var result;

const screen = document.querySelector('#screen');
const buttons = document.querySelector('#buttons');
const allNumberButtons = buttons.querySelectorAll('.number');
const addButton = buttons.querySelector('#add');
const subtractButton = buttons.querySelector('#subtract');
const multiplyButton = buttons.querySelector('#multiply');
const divideButton = buttons.querySelector('#divide');
const equalsButton = buttons.querySelector('#equals');
const percentageButton = buttons.querySelector('#percent');

buttons.addEventListener('click', (event) => {
    const isNumber = event.target.className === 'number';
    if (!isNumber) {
        return;
    }

    screen.textContent += event.target.value;
    addButton.disabled = false;
    subtractButton.disabled = false;
    multiplyButton.disabled = false;
    divideButton.disabled = false;
});

addButton.addEventListener('click', (event) => {
    if (firstNumber === undefined) {
        firstNumber = Number(screen.textContent);
        result = firstNumber;
    } else {
        firstNumber = result;
        secondNumber = Number(screen.textContent);
        result = add(firstNumber, secondNumber);
    }

    screen.textContent = '';

    operator = '+';
    addButton.disabled = true;
  });

  subtractButton.addEventListener('click', (event) => {
    if (firstNumber === undefined) {
        firstNumber = Number(screen.textContent);
        result = firstNumber;
    } else {
        firstNumber = result;
        secondNumber = Number(screen.textContent);
        result = subtract(firstNumber, secondNumber);
    }

    screen.textContent = '';

    operator = '-';
    subtractButton.disabled = true;
  });

  multiplyButton.addEventListener('click', (event) => {
    if (firstNumber === undefined) {
        firstNumber = Number(screen.textContent);
        result = firstNumber;
    } else {
        firstNumber = result;
        secondNumber = Number(screen.textContent);
        result = multiply(firstNumber, secondNumber);
    }

    screen.textContent = '';

    operator = '*';
    multiplyButton.disabled = true;
  });

  divideButton.addEventListener('click', (event) => {
    if (firstNumber === undefined) {
        firstNumber = Number(screen.textContent);
        result = firstNumber;
    } else {
        firstNumber = result;
        secondNumber = Number(screen.textContent);
        result = divide(firstNumber, secondNumber);
    }

    screen.textContent = '';

    operator = '/';
    divideButton.disabled = true;
  });

  percentageButton.addEventListener('click', () => {
    firstNumber = Number(currentNumber) * 0.01;
    result.textContent = `${firstNumber}`;
  });

  equalsButton.addEventListener('click', () => {
    if (firstNumber === undefined) {
        return;
    } else if (operator === '+') {
        firstNumber = result;
        secondNumber = Number(screen.textContent);
        result = add(firstNumber, secondNumber);
        addButton.disabled = false;
    } else if (operator === '-') {
        firstNumber = result;
        secondNumber = Number(screen.textContent);
        result = subtract(firstNumber, secondNumber);
        subtractButton.disabled = false;
    } else if (operator === '*') {
        firstNumber = result;
        secondNumber = Number(screen.textContent);
        result = multiply(firstNumber, secondNumber);
        multiplyButton.disabled = false;
    } else if (operator === '/') {
        firstNumber = result;
        secondNumber = Number(screen.textContent);
        result = divide(firstNumber, secondNumber);
        divideButton.disabled = false;
    }

    console.log(result);
    screen.textContent = `${result}`;

    allNumberButtons.forEach((button) => button.disabled = true);
  });

const clear = document.querySelector('#clear');

clear.addEventListener('click', () => {
    screen.textContent = '';
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    addButton.disabled = false;
    subtractButton.disabled = false;
    multiplyButton.disabled = false;
    divideButton.disabled = false;
    allNumberButtons.forEach((button) => button.disabled = false);
});
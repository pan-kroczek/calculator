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
var operator = '';
var secondNumber;
var equalsClicked = false;

function operate(num1, num2) {
    if (operator === '+') {
        return add(num1, num2);
    } else if (operator === '-') {
        return subtract(num1, num2);
    } else if (operator === '*') {
        return multiply(num1, num2);
    } else if (operator === '/') {
        return divide(num1, num2);
    }
};

function clearScreen() {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = '';
    screen.textContent = '';
}

const screen = document.querySelector('#screen');
const buttons = document.querySelector('#buttons');
const allNumberButtons = buttons.querySelectorAll('.number');
const allOperatorButtons = buttons.querySelectorAll('.operator');
const equalsButton = buttons.querySelector('#equals');
const clearButton = buttons.querySelector('#clear');
const percentButton = buttons.querySelector('#percent');

allNumberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (equalsClicked === true) {
            clearScreen();
            screen.textContent += button.value;
            equalsClicked = false;
        } else {
            screen.textContent += button.value;
        }
    });
});

allOperatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (firstNumber === undefined) {
            firstNumber = Number(screen.textContent);
        } else if (equalsClicked === true) {
            secondNumber = 0;
            equalsClicked = false;
        } else if (operator === '/' && secondNumber === 0) {
            screen.textContent = '3RR0R';
            return;
        } else {
            secondNumber = Number(screen.textContent);
            firstNumber = operate(firstNumber, secondNumber);
        }

        operator = button.value;
        screen.textContent = '';
    });
});

equalsButton.addEventListener('click', () => {
    secondNumber = Number(screen.textContent);

    if (firstNumber === undefined || screen.textContent === '3RR0R') {
        return;
    } else if (operator === '/' && secondNumber === 0) {
        screen.textContent = '3RR0R';
        return;
    }


    screen.textContent = `${operate(firstNumber, secondNumber)}`;
    firstNumber = Number(screen.textContent);
    equalsClicked = true;
});

clearButton.addEventListener('click', clearScreen);

percentButton.addEventListener('click', () => {
    if (firstNumber === undefined) {
        screen.textContent = `${Number(screen.textContent) * 0.01}`;
    } else {
        firstNumber = firstNumber * 0.01;
        screen.textContent = firstNumber;
    }
});
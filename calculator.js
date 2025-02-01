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

const screen = document.querySelector('#screen');
const buttons = document.querySelector('#buttons');
const allNumberButtons = buttons.querySelectorAll('.number');
const allOperatorButtons = buttons.querySelectorAll('.operator');
const equalsButton = buttons.querySelector('#equals');
const clearButton = buttons.querySelector('#clear');
const percentButton = buttons.querySelector('#percent');
const pointButton = buttons.querySelector('#point');

function clearScreen() {
    firstNumber = undefined;
    secondNumber = undefined;
    operator = '';
    screen.textContent = '';
    pointButton.disabled = false;
}

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
        operator = button.value;

        if (firstNumber === undefined) {
            firstNumber = Number(screen.textContent);
        } else if (equalsClicked === true) {
            secondNumber = 0;
            equalsClicked = false;
        } else if (operator === '/' && secondNumber === 0) {
            console.log()
            screen.textContent = '3RR0R';
            return;
        } else {
            secondNumber = Number(screen.textContent);
            firstNumber = operate(firstNumber, secondNumber);
        }

        screen.textContent = '';
        pointButton.disabled = false;
    });
});

equalsButton.addEventListener('click', () => {
    secondNumber = Number(screen.textContent);

    if (firstNumber === undefined || screen.textContent === '3RR0R' || equalsClicked === true) {
        return;
    } else if (operator === '/' && secondNumber === 0) {
        screen.textContent = '3RR0R';
        equalsClicked = true;
        return;
    } else {
        screen.textContent = `${Math.round(operate(firstNumber, secondNumber) * 1000) / 1000}`;
        firstNumber = Number(screen.textContent);
        equalsClicked = true;
    }

    pointButton.disabled = true;
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

pointButton.addEventListener('click', (e) => {
    if (screen.textContent === '') {
        screen.textContent = '0.';
        equalsClicked = false;
    } else {
        screen.textContent += e.target.value;
    }

    e.target.disabled = true;
});
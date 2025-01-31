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

allNumberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        screen.textContent += button.value;
    });
});

allOperatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (firstNumber === undefined) {
            firstNumber = Number(screen.textContent);
        } else if (firstNumber != undefined) {
            secondNumber = Number(screen.textContent);
            firstNumber = operate(firstNumber, secondNumber);
        }

        operator = button.value;
        screen.textContent = '';
        console.log(`num1 = ${firstNumber}`);
        console.log(operator);
    });
});

equalsButton.addEventListener('click', () => {
    secondNumber = Number(screen.textContent);
    console.log(`num2 = ${secondNumber}`);
    screen.textContent = `${operate(firstNumber, secondNumber)}`;
    console.log(screen.textContent);
    firstNumber = Number(screen.textContent);
    console.log(`result = num1 = ${firstNumber}`);
});

console.log(equalsButton.attributes);

// const screen = document.querySelector('#screen');
// const buttons = document.querySelector('#buttons');
// const allNumberButtons = buttons.querySelectorAll('.number');
// const addButton = buttons.querySelector('#add');
// const subtractButton = buttons.querySelector('#subtract');
// const multiplyButton = buttons.querySelector('#multiply');
// const divideButton = buttons.querySelector('#divide');
// const equalsButton = buttons.querySelector('#equals');
// const percentageButton = buttons.querySelector('#percent');

// buttons.addEventListener('click', (event) => {
//     const isNumber = event.target.className === 'number';
//     if (!isNumber) {
//         return;
//     }

//     screen.textContent += event.target.value;
//     addButton.disabled = false;
//     subtractButton.disabled = false;
//     multiplyButton.disabled = false;
//     divideButton.disabled = false;
// });

// addButton.addEventListener('click', (event) => {
//     if (firstNumber === undefined || result != undefined) {
//         firstNumber = Number(screen.textContent);
//     } else {
//         secondNumber = Number(screen.textContent);
//         firstNumber += secondNumber;
//     }

//     screen.textContent = '';

//     operator = '+';
//     addButton.disabled = true;
//   });

//   subtractButton.addEventListener('click', (event) => {
//     if (firstNumber === undefined || result != undefined) {
//         firstNumber = Number(screen.textContent);
//     } else {
//         secondNumber = Number(screen.textContent);
//         firstNumber -= secondNumber;
//     }

//     screen.textContent = '';

//     operator = '-';
//     subtractButton.disabled = true;
//   });

//   multiplyButton.addEventListener('click', (event) => {
//     if (firstNumber === undefined) {
//         firstNumber = Number(screen.textContent);
//         result = firstNumber;
//     } else {
//         firstNumber = result;
//         secondNumber = Number(screen.textContent);
//         result = multiply(firstNumber, secondNumber);
//     }

//     screen.textContent = '';

//     operator = '*';
//     multiplyButton.disabled = true;
//   });

//   divideButton.addEventListener('click', (event) => {
//     if (firstNumber === undefined) {
//         firstNumber = Number(screen.textContent);
//         result = firstNumber;
//     } else {
//         firstNumber = result;
//         secondNumber = Number(screen.textContent);
//         result = divide(firstNumber, secondNumber);
//     }

//     screen.textContent = '';

//     operator = '/';
//     divideButton.disabled = true;
//   });

//   percentageButton.addEventListener('click', () => {
//     firstNumber = Number(currentNumber) * 0.01;
//     result.textContent = `${firstNumber}`;
//   });

//   equalsButton.addEventListener('click', () => {
//     if (firstNumber === undefined) {
//         return;
//     } else if (operator === '+') {
//         secondNumber = Number(screen.textContent);
//         result = add(firstNumber, secondNumber);
//         addButton.disabled = false;
//     } else if (operator === '-') {
//         secondNumber = Number(screen.textContent);
//         result = subtract(firstNumber, secondNumber);
//         subtractButton.disabled = false;
//     } else if (operator === '*') {
//         secondNumber = Number(screen.textContent);
//         result = multiply(firstNumber, secondNumber);
//         multiplyButton.disabled = false;
//     } else if (operator === '/') {
//         secondNumber = Number(screen.textContent);
//         result = divide(firstNumber, secondNumber);
//         divideButton.disabled = false;
//     }

//     screen.textContent = `${result}`;

//     // allNumberButtons.forEach((button) => button.disabled = true);
//   });

// const clear = document.querySelector('#clear');

// clear.addEventListener('click', () => {
//     screen.textContent = '';
//     firstNumber = undefined;
//     secondNumber = undefined;
//     operator = undefined;
//     addButton.disabled = false;
//     subtractButton.disabled = false;
//     multiplyButton.disabled = false;
//     divideButton.disabled = false;
//     allNumberButtons.forEach((button) => button.disabled = false);
// });
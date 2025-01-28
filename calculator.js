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
var currentNumber = '';

const result = document.querySelector('#result');
const buttons = document.querySelector('#buttons');
const addButton = buttons.querySelector('#add');
const subtractButton = buttons.querySelector('#subtract');
const multiplyButton = buttons.querySelector('#multiply');
const divideButton = buttons.querySelector('#divide');
const equalButton = buttons.querySelector('#equals');

// buttons.addEventListener('click', (event) => {
//     const isNumber = event.target.className === 'number';
//     const isOperator = event.target.className === 'operator';
//     if (!isNumber && !isOperator) {
//       return;
//     }
  
//     result.textContent += event.target.value;
//     currentNumber = result.textContent;
//     console.log(currentNumber);
//   });

buttons.addEventListener('click', (event) => {
    const isNumber = event.target.className === 'number';
    if (!isNumber) {
      return;
    }
    
    result.textContent += event.target.value;
    currentNumber = result.textContent;
    console.log(currentNumber);
    addButton.disabled = false;
  });

addButton.addEventListener('click', (event) => {
    if (firstNumber === undefined) {
        firstNumber = Number(currentNumber);
    } else {
        firstNumber = add(firstNumber, Number(currentNumber));
    }
    clearScreen();
    operator = '+';
    console.log(firstNumber);
    console.log(operator);
    addButton.disabled = true;
  });

  equalButton.addEventListener('click', () => {
    if (firstNumber === undefined) {
        return;
    } else if (operator === '+') {
        secondNumber = Number(currentNumber);
        result.textContent = `${add(firstNumber, secondNumber)}`;
        addButton.disabled = false;
    } else if (operator === '-') {
        secondNumber = Number(currentNumber);
        result.textContent = `${subtract(firstNumber, secondNumber)}`;
    } else if (operator === '*') {
        secondNumber = Number(currentNumber);
        result.textContent = `${multiply(firstNumber, secondNumber)}`;
    } else if (operator === '/') {
        secondNumber = Number(currentNumber);
        result.textContent = `${divide(firstNumber, secondNumber)}`;
    }
  });

const clear = document.querySelector('#clear');

function clearScreen() {
    result.textContent = '';
    currentNumber = '';
}

clear.addEventListener('click', () => {
    clearScreen();
    firstNumber = undefined;
    operator = undefined;
});
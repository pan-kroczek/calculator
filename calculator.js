function add(num1, num2) {
    return num1 + num2;
}

console.log(add(1, 2));

function subtract(num1, num2) {
    return num1 - num2;
}

console.log(subtract(3, 4));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(2, 4));

function divide(num1, num2) {
    return num1 / num2;
}

console.log(divide(4, 2));

var firstNumber;
var operator;
var secondNumber;
var equation = '';

const result = document.querySelector('#result');

const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (event) => {
    const isNumber = event.target.className === 'number';
    const isOperator = event.target.className === 'operator';
    if (!isNumber && !isOperator) {
      return;
    }
  
    result.textContent += event.target.value;
    equation = result.textContent;
    console.log(equation);
  });

const clear = document.querySelector('#clear');

function clearScreen() {
    result.textContent = '';
    equation = '';
}

clear.addEventListener('click', clearScreen);
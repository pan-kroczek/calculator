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

const result = document.querySelector('#result');

result.textContent = '';

const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (event) => {
    const isNumber = event.target.className === 'number';
    const isOperator = event.target.className === 'operator';
    if (!isNumber && !isOperator) {
      return;
    }
  
    result.textContent += event.target.value;
    console.log(event.target.value);
  });

const clearScreen = document.querySelector('#clear');

clearScreen.addEventListener('click', () => {
    result.textContent = '';
});
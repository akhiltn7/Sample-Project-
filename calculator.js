const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const resultInput = document.getElementById('result');

addButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 + num2;
  resultInput.value = result;
});

subtractButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 - num2;
  resultInput.value = result;
});

multiplyButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const result = num1 * num2;
  resultInput.value = result;
});

divideButton.addEventListener('click', () => {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  if (num2 === 0) {
    resultInput.value = 'Error: Division by zero!';
  } else {
    const result = num1 / num2;
    resultInput.value = result;
  }
});
const button = document.getElementById('change-color-btn');

button.addEventListener('click', function() {
  document.body.style.backgroundColor = 'skyblue';
});


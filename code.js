let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function operate(operator) {
  if (displayValue !== '') {
    if (displayValue.slice(-1) !== '+' && displayValue.slice(-1) !== '-' &&
        displayValue.slice(-1) !== '*' && displayValue.slice(-1) !== '/') {
      appendToDisplay(operator);
    }
  }
}

function calculate() {
  if (displayValue !== '') {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = result.toString();
  }
}
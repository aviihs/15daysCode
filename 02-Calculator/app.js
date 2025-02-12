const display = document.querySelector('.display');
let currentInput = '0';  
let previousInput = '';
let operator = '';
let resetAfterResult = false;  

function updateDisplay() {
  display.textContent = currentInput;
}
function handleNumber(number) {
  if (resetAfterResult) {
    currentInput = number;  
    resetAfterResult = false;  
  } else {
    if (currentInput === '0') {
      currentInput = number; 
    } else {
      currentInput += number;  
    }
  }
  updateDisplay();
}

function handleOperator(op) {
  if (currentInput === '') return;  
  if (previousInput !== '') {
    calculate();  
  }
  if (operator === '') {
    previousInput = currentInput;  
  }
  operator = op;
  currentInput += ` ${op} `; 
  updateDisplay();
}

function calculate() {
  let result;

  if (previousInput === '' || currentInput === '' || operator === '') {
    alert('Invalid input! Please enter a complete expression.');
    return;
  }

  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput.split(' ')[2]); 

  if (isNaN(prev) || isNaN(current)) {
    alert('Invalid input! Please check the numbers and try again.');
    return;
  }

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case 'x':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert('Cannot divide by zero!');
        return;
      }
      result = prev / current;
      break;
    case '%':
      result = (prev * current) / 100;
      break;
    case '^':
      result = Math.pow(prev, current);
      break;
    default:
      return;
  }

  currentInput = result.toString();  
  operator = '';  
  previousInput = '';  
  resetAfterResult = true;  
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  previousInput = '';
  operator = '';
  resetAfterResult = false;  
  updateDisplay();
}

function handleDecimal() {
  if (resetAfterResult) {
    currentInput = '0.';  
    resetAfterResult = false;
  } else {
    if (!currentInput.includes('.')) {  
      currentInput += '.';  
    }
  }
  updateDisplay();
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value >= '0' && value <= '9') {
      handleNumber(value);  
    } else if (value === '+') {
      handleOperator('+');
    } else if (value === '-') {
      handleOperator('-');
    } else if (value === 'x') {
      handleOperator('x');
    } else if (value === '/') {
      handleOperator('/');
    } else if (value === '%') {
      handleOperator('%');
    } else if (value === '^') {
      handleOperator('^');
    } else if (value === '=') {
      calculate();  
    } else if (value === 'C') {
      clearDisplay();  
    } else if (value === '.') {
      handleDecimal();     }
  });
});

document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') {
    handleNumber(e.key);   } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '%' || e.key === '^') {
    handleOperator(e.key === '*' ? 'x' : e.key);   } else if (e.key === 'Enter') {
    calculate();  
  } else if (e.key === 'Backspace' || e.key === 'c' || e.key === 'C') {
    clearDisplay();  
  } else if (e.key === '.') {
    handleDecimal();  
  }
});

updateDisplay();
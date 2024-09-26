import React, { useState } from 'react';

function Calculator() {
  const [inputValue, setInputValue] = useState('');
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOperationClick = (op) => {
    setFirstNumber(parseFloat(inputValue));
    setOperation(op);
    setInputValue('');
  };

  const handleResultClick = () => {
    if (firstNumber === null || operation === null || inputValue === '') return;

    const secondNumber = parseFloat(inputValue);
    let result = 0;

    switch (operation) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      default:
        return;
    }

    setInputValue(result.toString());
    setFirstNumber(null);
    setOperation(null);
  };

  const handleClear = () => {
    setInputValue('');
    setFirstNumber(null);
    setOperation(null);
  };

  return (
    <div>
      <h1>Простой калькулятор</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите число"
      />
      <br />
      <button onClick={() => handleOperationClick('+')}>+</button>
      <button onClick={() => handleOperationClick('-')}>-</button>
      <button onClick={() => handleOperationClick('*')}>*</button>
      <button onClick={() => handleOperationClick('/')}>/</button>
      <br />
      <button onClick={handleResultClick}>=</button>
      <button onClick={handleClear}>C</button>
    </div>
  );
}

export default Calculator;
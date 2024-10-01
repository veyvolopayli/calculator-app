import React, { useState } from 'react';
import CalcButton from './CalcButton';
import Display from './Display';

export default function Calculator() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [isNewOperation, setIsNewOperation] = useState(false);
  const [lastOperator, setLastOperator] = useState(null);

  const keys = [
    ['%', 'AC', 'DEL', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['+/-', 0, '.', '='],
  ];

  const operators = ['/', '*', '+', '-', '.'];

  const handleButtonClick = (key) => {
    if (key === '.' && lastOperator === '.') return;
    if (operators.includes(key)) {
      setLastOperator(key);
    }
    if (typeof key === 'number' || key === '.') {
      handleNumberClick(key.toString());
    } else if (operators.includes(key)) {
      handleOperationClick(key);
    } else {
      handleSpecialClick(key);
    }
  };

  const handleNumberClick = (value) => {
    if (isNewOperation) {
      setCurrentValue(value);
      setIsNewOperation(false);
    } else {
      setCurrentValue((prev) => (prev === '0') ? value : prev + value);
    }
  };

  const handleOperationClick = (op) => {
    if (operation && !isNewOperation) {
      const result = calculate();
      setPreviousValue(result);
      setCurrentValue(result);
    } else {
      setPreviousValue(currentValue);
    }
    setOperation(op);
    setIsNewOperation(true);
  };

  const calculate = () => {
    const prev = parseFloat(previousValue.toString());
    const current = parseFloat(currentValue);

    if (isNaN(prev) || isNaN(current)) return;

    let result;
    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    return result.toString();
  };

  const handleEqualClick = () => {
    const result = calculate();
    if (result) {
      setCurrentValue(result);
      setOperation(null);
      setIsNewOperation(true);
      setLastOperator(null);
    }
  };

  const handleClearClick = () => {
    setCurrentValue('0');
    setPreviousValue(null);
    setOperation(null);
    setIsNewOperation(false);
    setLastOperator(null);
  };

  const handleDeleteClick = () => {
    setCurrentValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
  };

  const handleSpecialClick = (key) => {
    switch (key) {
      case 'AC':
        handleClearClick();
        break;
      case '+/-':
        handleInvertSign();
        break;
      case '%':
        handlePercentage();
        break;
      case '=':
        handleEqualClick();
        break;
      case 'DEL':
        handleDeleteClick();
        break;
      default:
        break;
    }
  };

  const handleInvertSign = () => {
    setCurrentValue((prev) => (prev === '0' ? '0' : (parseFloat(prev) * -1).toString()));
  };

  const handlePercentage = () => {
    setCurrentValue((prev) => (prev === '0' ? '0' : (parseFloat(prev) / 100).toString()));
  };

  return (
    <div className="calculator">
      <Display value={currentValue}/>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((key, keyIndex) => (
            <CalcButton
              key={keyIndex}
              label={key}
              clickAction={handleButtonClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
import React, { useState } from 'react';
import CalcButton from './CalcButton';

export default function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const operators = ['/', '*', '+', '-', '.']

  const keys = [
    ['AC', '+/-', '%', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    [0, '.', '='],
  ];

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult);
      } catch {
        setResult('Error');
      }
    } else if (label === 'AC') {
      setExpression('');
      setResult('');
    } else {
      setExpression(prev => prev + label);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        { expression || "0" }
      </div>
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
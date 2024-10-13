import React, { useCallback } from 'react';
import CalcButton from './CalcButton';
import { calculatorStore } from '../store/CalculatorStore';

const Buttons = () => {
  const keys = [
    ['%', 'AC', 'DEL', '/'],
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['+/-', 0, '.', '='],
  ];

  const handleButtonClick = useCallback((key) => {
    if (typeof key === 'number' || key === '.') {
      calculatorStore.handleNumberClick(key.toString());
    } else if (['/', '*', '+', '-'].includes(key)) {
      calculatorStore.handleOperationClick(key);
    } else {
      calculatorStore.handleSpecialClick(key);
    }
  }, []);

  return (
    <>
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="button-row">
          {row.map((key) => (
            <CalcButton
              key={key}
              label={key}
              clickAction={handleButtonClick}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Buttons;
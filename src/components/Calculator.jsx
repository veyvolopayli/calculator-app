import React from 'react';
import { calculatorStore } from '../store/CalculatorStore';
import Display from './Display';
import Buttons from './Buttons';

const Calculator = () => {
  return (
    <div className="calculator">
      <Display value={calculatorStore.currentValue} />
      <Buttons />
    </div>
  );
};

export default Calculator;

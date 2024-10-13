import React from 'react';
import { observer } from 'mobx-react-lite';
import { calculatorStore } from '../store/CalculatorStore';

const Display = observer(() => {
  return (<div className="display">{calculatorStore.currentValue}</div>);
});

export default Display;

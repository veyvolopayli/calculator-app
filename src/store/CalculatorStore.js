import { makeAutoObservable } from 'mobx';

class CalculatorStore {
  currentValue = '0';
  previousValue = null;
  operation = null;
  isNewOperation = false;
  lastOperator = null;

  constructor() {
    makeAutoObservable(this);
  }

  handleNumberClick(value) {
    if (value === '.' && this.currentValue.includes('.')) return;

    if (this.isNewOperation) {
      this.currentValue = value;
      this.isNewOperation = false;
    } else {
      this.currentValue = this.currentValue === '0' ? value : this.currentValue + value;
    }
  }

  handleOperationClick(op) {
    if (this.operation && !this.isNewOperation) {
      const result = this.calculate();
      this.previousValue = result;
      this.currentValue = result;
    } else {
      this.previousValue = this.currentValue;
    }
    this.operation = op;
    this.isNewOperation = true;
  }

  calculate() {
    const prev = parseFloat(this.previousValue);
    const current = parseFloat(this.currentValue);

    if (isNaN(prev) || isNaN(current)) return;

    let result;
    switch (this.operation) {
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
  }

  handleEqualClick() {
    const result = this.calculate();
    if (result) {
      this.currentValue = result;
      this.operation = null;
      this.isNewOperation = true;
      this.lastOperator = null;
    }
  }

  handleClearClick() {
    this.currentValue = '0';
    this.previousValue = null;
    this.operation = null;
    this.isNewOperation = false;
    this.lastOperator = null;
  }

  handleDeleteClick() {
    this.currentValue = this.currentValue.length > 1 ? this.currentValue.slice(0, -1) : '0';
  }

  handleSpecialClick(key) {
    switch (key) {
      case 'AC':
        this.handleClearClick();
        break;
      case '+/-':
        this.handleInvertSign();
        break;
      case '%':
        this.handlePercentage();
        break;
      case '=':
        this.handleEqualClick();
        break;
      case 'DEL':
        this.handleDeleteClick();
        break;
      default:
        break;
    }
  }

  handleInvertSign() {
    this.currentValue = this.currentValue === '0' ? '0' : (parseFloat(this.currentValue) * -1).toString();
  }

  handlePercentage() {
    this.currentValue = this.currentValue === '0' ? '0' : (parseFloat(this.currentValue) / 100).toString();
  }
}

export const calculatorStore = new CalculatorStore();

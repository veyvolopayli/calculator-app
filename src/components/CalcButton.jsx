import './CalcButton.css';

const CalcButton = ({ label, clickAction }) => {
  return (
    <button className="calculator-button" onClick={() => clickAction(label)}>
      {label}
    </button>
  );
};

export default CalcButton;

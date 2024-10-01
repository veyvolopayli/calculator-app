import './CalcButton.css';

export default function CalcButton({ label, clickAction }) {
  return (
    <button className="calculator-button" onClick={() => clickAction(label)}>
      {label}
    </button>
  );
}
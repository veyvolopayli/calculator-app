import React, { useState } from 'react';
import CalcButton from "./components/CalcButton";

export default function Calculator() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (label) => {
        if (label === '=') {
            try {
                const evalResult = eval(expression);
                setResult(evalResult);
            } catch {
                setResult('Error');
            }
        } else if (label === 'C') {
            setExpression('');
            setResult('');
        } else {
            setExpression(prev => prev + label);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <div style={{
                fontSize: '24px',
                border: '1px solid black',
                width: '260px',
                margin: '0 auto',
                padding: '10px',
                height: '50px',
                overflow: 'hidden'
            }}>
                {expression || result || '0'}
            </div>

            <div style={{ marginTop: '20px' }}>
                <div>
                    <CalcButton label="1" onClick={handleButtonClick} />
                    <CalcButton label="2" onClick={handleButtonClick} />
                    <CalcButton label="3" onClick={handleButtonClick} />
                    <CalcButton label="+" onClick={handleButtonClick} />
                </div>
                <div>
                    <CalcButton label="4" onClick={handleButtonClick} />
                    <CalcButton label="5" onClick={handleButtonClick} />
                    <CalcButton label="6" onClick={handleButtonClick} />
                    <CalcButton label="-" onClick={handleButtonClick} />
                </div>
                <div>
                    <CalcButton label="7" onClick={handleButtonClick} />
                    <CalcButton label="8" onClick={handleButtonClick} />
                    <CalcButton label="9" onClick={handleButtonClick} />
                    <CalcButton label="*" onClick={handleButtonClick} />
                </div>
                <div>
                    <CalcButton label="0" onClick={handleButtonClick} />
                    <CalcButton label="." onClick={handleButtonClick} />
                    <CalcButton label="/" onClick={handleButtonClick} />
                    <CalcButton label="=" onClick={handleButtonClick} />
                </div>
                <div>
                    <CalcButton label="C" onClick={handleButtonClick} />
                </div>
            </div>
        </div>
    );
}
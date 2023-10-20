// Calculator.js

import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    setExpression(prevExpression => prevExpression + value);
  };

  const evaluateExpression = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  const clearExpression = () => {
    setExpression('');
  };

  return (
    <div className="calculator">
      <div className="display">{expression || '0'}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => evaluateExpression()}>=</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => clearExpression()}>C</button>
        
      </div>
    </div>
  );
};

export default Calculator;

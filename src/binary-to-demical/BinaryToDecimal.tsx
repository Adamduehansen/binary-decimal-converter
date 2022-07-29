import React, { useState } from 'react';
import { convertToDecimal, isBinaryNumber } from './convertToDecimal';

function BinaryToDecimal(): JSX.Element {
  const [input, setInput] = useState('0');
  const [decimal, setDecimal] = useState(0);

  const onInputChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    if (!isBinaryNumber(value)) {
      return;
    }
    setInput(value);
    setDecimal(() => convertToDecimal(value));
  };

  return (
    <>
      <div>
        <label htmlFor='binary-input'>Binary Input</label>
        <input
          type='text'
          id='binary-input'
          value={input}
          onChange={onInputChange}
        />
      </div>
      <div>Decimal: {decimal}</div>
    </>
  );
}

export default BinaryToDecimal;

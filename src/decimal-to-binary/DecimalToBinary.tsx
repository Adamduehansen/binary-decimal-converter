import React, { useState } from 'react';
import { convertToBinary } from './convertToBinary';

function isOnlyNumbers(input: string) {
  return /^[0-9]+$/.test(input);
}

function DecimalToBinary() {
  const [input, setInput] = useState(0);
  const [binary, setBinary] = useState('0');

  const onInputChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (value.length > 1 && !isOnlyNumbers(value)) {
      return;
    }

    const enteredNumber = parseInt(value);

    if (value.length === 0) {
      setInput(enteredNumber);
      setBinary('0');
      return;
    }

    setInput(enteredNumber);
    setBinary(() => convertToBinary(enteredNumber));
  };

  return (
    <>
      <div>
        <label htmlFor='decimal-input'>Decimal Input</label>
        <input
          type='number'
          id='decimal-input'
          value={input}
          onChange={onInputChange}
        />
      </div>
      <div>
        Binary: <span>{binary}</span>
      </div>
    </>
  );
}

export default DecimalToBinary;

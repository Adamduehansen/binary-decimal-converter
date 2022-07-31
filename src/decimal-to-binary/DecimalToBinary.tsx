import React, { useState } from 'react';
import Input from '../components/Input';
import { convertToBinary } from './convertToBinary';

function isNumeric(value: string) {
  return /^-?\d+$/.test(value);
}

function DecimalToBinary() {
  const [input, setInput] = useState('0');
  const [binary, setBinary] = useState('0');

  const onInputChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (value === '') {
      setInput('');
      setBinary('0');
    }

    if (!isNumeric(value)) {
      return;
    }

    setInput(value);
    setBinary(() => convertToBinary(parseInt(value)));
  };

  return (
    <>
      <Input
        label='Decimal Input'
        id='decimal-input'
        value={input}
        onChange={onInputChange}
      />
      <div>
        Binary: <span>{binary}</span>
      </div>
    </>
  );
}

export default DecimalToBinary;

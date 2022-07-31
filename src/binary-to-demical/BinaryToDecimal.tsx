import React, { useState } from 'react';
import Input from '../components/Input';
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
      <Input
        label='Binary Input'
        id='binary-input'
        value={input}
        onChange={onInputChange}
        autoFocus
      />
      <div className='text-gray-800'>
        Decimal: <span className='text-emerald-500'>{decimal}</span>
      </div>
    </>
  );
}

export default BinaryToDecimal;

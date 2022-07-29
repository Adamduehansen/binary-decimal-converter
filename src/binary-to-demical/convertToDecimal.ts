export const isBinaryNumber = function (input: string) {
  return input.split('').every((char) => {
    return char === '0' || char === '1';
  });
};

const reduceToBinary = function (previous: number, current: string): number {
  return previous * 2 + parseInt(current, 2);
};

export const convertToDecimal = function (input: string): number {
  if (!isBinaryNumber(input)) {
    throw new Error('Input is not binary');
  }

  return input.split('').reduce(reduceToBinary, 0);
};

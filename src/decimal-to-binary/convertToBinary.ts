export const convertToBinary = function (input: number): string {
  let calculated = input / 2;
  const remainder = Number(calculated % 1 !== 0).toString();
  calculated = Math.floor(calculated);

  if (calculated === 0) {
    return remainder;
  }

  return convertToBinary(calculated) + remainder;
};

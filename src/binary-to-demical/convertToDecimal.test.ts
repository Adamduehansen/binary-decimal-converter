import { convertToDecimal, isBinaryNumber } from './convertToDecimal';

describe('convertToDecimal', () => {
  describe('isBinaryNumber', () => {
    test.each(['0110', '1101', '01'])(
      'should return true when input is binary',
      (input) => {
        const result = isBinaryNumber(input);
        expect(result).toBe(true);
      }
    );

    test.each(['194', '5167', '78231'])(
      'should return false when input is not binary',
      (input) => {
        const result = isBinaryNumber(input);
        expect(result).toBe(false);
      }
    );
  });

  test.each(['664', '6123', '863'])(
    'should throw error when input is not binary',
    (input) => {
      expect(() => convertToDecimal(input)).toThrowError('Input is not binary');
    }
  );

  test.each([
    ['0', 0],
    ['1', 1],
    ['10', 2],
    ['11', 3],
    ['1101101', 109],
  ])('should convert decimal to binary', (input, expected) => {
    const result = convertToDecimal(input);
    expect(result).toEqual(expected);
  });
});

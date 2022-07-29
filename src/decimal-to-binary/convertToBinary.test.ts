import { convertToBinary } from './convertToBinary';

describe('convertToBinary', () => {
  test.each([
    [0, '0'],
    [1, '1'],
    [2, '10'],
    [3, '11'],
    [109, '1101101'],
  ])('should convert binary to decimal', (input, expected) => {
    const result = convertToBinary(input);
    expect(result).toEqual(expected);
  });
});

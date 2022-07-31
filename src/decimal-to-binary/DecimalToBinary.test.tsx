import { fireEvent, render, screen } from '@testing-library/react';
import DecimalToBinary from './DecimalToBinary';

describe('DecimalToBinary', () => {
  test.each([
    ['1', '1'],
    ['a', '0'],
  ])('should accept only number inputs', (value, expected) => {
    // Arrange
    render(<DecimalToBinary />);

    // Act
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: {
        value: value,
      },
    });

    // Assert
    expect(input).toHaveValue(expected);
  });

  test.each([
    ['0', '0'],
    ['1', '1'],
    ['2', '10'],
    ['3', '11'],
    ['109', '1101101'],
  ])('should output calculated decimal', (value, expected) => {
    // Arrange
    render(<DecimalToBinary />);

    // Act
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: {
        value: value,
      },
    });

    // Assert
    expect(screen.getByText(expected)).toBeInTheDocument();
  });
});

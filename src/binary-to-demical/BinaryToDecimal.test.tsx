import { fireEvent, render, screen } from '@testing-library/react';
import BinaryToDecimal from './BinaryToDecimal';

describe('BinaryToDecimal', () => {
  test.each(['1', '0'])('should accept inputs', (value) => {
    // Arrange
    render(<BinaryToDecimal />);

    // Act
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: {
        value: value,
      },
    });

    // Assert
    expect(input).toHaveValue(value);
  });

  test('should not accept other inputs than 0 and 1', () => {
    // Arrange
    render(<BinaryToDecimal />);

    // Act
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: {
        value: '2',
      },
    });

    // Assert
    expect(input).toHaveValue('0');
  });

  test('should output binary', () => {
    // Arrange
    render(<BinaryToDecimal />);

    // Act
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: {
        value: '1101101',
      },
    });

    // Arrange
    expect(screen.getByText(/109/)).toBeInTheDocument();
  });
});

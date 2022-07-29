import BinaryToDecimal from './binary-to-demical/BinaryToDecimal';
import DecimalToBinary from './decimal-to-binary/DecimalToBinary';

function App(): JSX.Element {
  return (
    <main>
      <div role='tablist'>
        <button
          role='tab'
          aria-selected='true'
          aria-controls='binary-to-decimal-tabpanel'
        >
          Binary to decimal
        </button>
        <button
          role='tab'
          aria-selected='false'
          aria-controls='decimal-to-binary-tabpanel'
        >
          Decimal to binary
        </button>
      </div>
      <div role='tabpanel' id='binary-to-decimal-tabpanel'>
        <BinaryToDecimal />
      </div>
      <div role='tabpanel' id='decimal-to-binary-tabpanel'>
        <DecimalToBinary />
      </div>
    </main>
  );
}

export default App;

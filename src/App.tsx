import BinaryToDecimal from './binary-to-demical/BinaryToDecimal';
import TabPanel from './components/tabs/TabPanel';
import Tabs from './components/tabs/Tabs';
import DecimalToBinary from './decimal-to-binary/DecimalToBinary';

function App(): JSX.Element {
  return (
    <main className='p-2'>
      <header className='mb-4'>
        <h1 className='text-2xl'>Binary and decimal converter</h1>
      </header>
      <Tabs>
        <TabPanel tabTitle='Binary → Decimal'>
          <BinaryToDecimal />
        </TabPanel>
        <TabPanel tabTitle='Decimal → Binary'>
          <DecimalToBinary />
        </TabPanel>
      </Tabs>
    </main>
  );
}

export default App;

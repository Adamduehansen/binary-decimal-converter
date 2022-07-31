import BinaryToDecimal from './binary-to-demical/BinaryToDecimal';
import TabPanel from './components/tabs/TabPanel';
import Tabs from './components/tabs/Tabs';
import DecimalToBinary from './decimal-to-binary/DecimalToBinary';

function App(): JSX.Element {
  return (
    <main>
      <Tabs>
        <TabPanel tabTitle='Binary to Decimal'>
          <BinaryToDecimal />
        </TabPanel>
        <TabPanel tabTitle='Decimal to Binary'>
          <DecimalToBinary />
        </TabPanel>
      </Tabs>
    </main>
  );
}

export default App;

import { useEffect } from 'react';
import BinaryToDecimal from './binary-to-demical/BinaryToDecimal';
import TabPanel from './components/tabs/TabPanel';
import Tabs from './components/tabs/Tabs';
import DecimalToBinary from './decimal-to-binary/DecimalToBinary';

function App(): JSX.Element {
  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (localStorage.getItem('theme') === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  function toggleDarkMode() {
    const classAdded = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', classAdded ? 'dark' : 'light');
  }

  return (
    <main className='p-2 md:h-screen md:w-screen md:flex md:justify-center'>
      <div className='md:w-[500px]'>
        <header className='mb-4'>
          <h1 className='text-2xl dark:text-white'>
            Binary and Decimal Converter
          </h1>
        </header>
        <Tabs>
          <TabPanel tabTitle='Binary → Decimal'>
            <BinaryToDecimal />
          </TabPanel>
          <TabPanel tabTitle='Decimal → Binary'>
            <DecimalToBinary />
          </TabPanel>
        </Tabs>
      </div>
      <button onClick={toggleDarkMode}>Toggle</button>
    </main>
  );
}

export default App;

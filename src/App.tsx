import { useEffect, useRef } from 'react';
import BinaryToDecimal from './binary-to-demical/BinaryToDecimal';
import TabPanel from './components/tabs/TabPanel';
import Tabs from './components/tabs/Tabs';
import DecimalToBinary from './decimal-to-binary/DecimalToBinary';

function App(): JSX.Element {
  const darkModeButtonSvgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (
      localStorage.getItem('theme') === 'dark' ||
      (localStorage.getItem('theme') === null &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      darkModeButtonSvgRef.current!.classList.add('fill-white');
    }
  }, []);

  function toggleDarkMode() {
    const classAdded = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', classAdded ? 'dark' : 'light');
    darkModeButtonSvgRef.current!.classList.toggle('fill-white');
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
      <button onClick={toggleDarkMode} className='fixed bottom-2 right-2'>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          viewBox='0 0 32 32'
          ref={darkModeButtonSvgRef}
          className='fill-white'
        >
          <title>brightness-contrast</title>
          <path d='M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM16 21v-10c2.757 0 5 2.243 5 5s-2.243 5-5 5zM16 26c1.105 0 2 0.895 2 2v2c0 1.105-0.895 2-2 2s-2-0.895-2-2v-2c0-1.105 0.895-2 2-2zM16 6c-1.105 0-2-0.895-2-2v-2c0-1.105 0.895-2 2-2s2 0.895 2 2v2c0 1.105-0.895 2-2 2zM30 14c1.105 0 2 0.895 2 2s-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2h2zM6 16c0 1.105-0.895 2-2 2h-2c-1.105 0-2-0.895-2-2s0.895-2 2-2h2c1.105 0 2 0.895 2 2zM25.899 23.071l1.414 1.414c0.781 0.781 0.781 2.047 0 2.828s-2.047 0.781-2.828 0l-1.414-1.414c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0zM6.101 8.929l-1.414-1.414c-0.781-0.781-0.781-2.047 0-2.828s2.047-0.781 2.828 0l1.414 1.414c0.781 0.781 0.781 2.047 0 2.828s-2.047 0.781-2.828 0zM25.899 8.929c-0.781 0.781-2.047 0.781-2.828 0s-0.781-2.047 0-2.828l1.414-1.414c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-1.414 1.414zM6.101 23.071c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-1.414 1.414c-0.781 0.781-2.047 0.781-2.828 0s-0.781-2.047 0-2.828l1.414-1.414z'></path>
        </svg>
      </button>
    </main>
  );
}

export default App;

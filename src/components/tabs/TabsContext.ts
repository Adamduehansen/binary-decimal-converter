import { createContext } from 'react';

type TabsContextProps = {
  selectedTabId: string;
  setSelectedTabId: (id: string) => void;
};

const TabsContext = createContext<TabsContextProps>({
  selectedTabId: '',
  setSelectedTabId: () => {},
});

export default TabsContext;

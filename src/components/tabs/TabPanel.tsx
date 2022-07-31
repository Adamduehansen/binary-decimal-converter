import { useContext } from 'react';
import createTabPanelId from '../../lib/createTabPanelId';
import TabsContext from './TabsContext';

export type TabPanelProps = React.PropsWithChildren<{
  tabTitle: string;
}>;

function TabPanel({ tabTitle, children }: TabPanelProps): JSX.Element | null {
  const { selectedTabId } = useContext(TabsContext);
  const tabPanelId = createTabPanelId(tabTitle);

  if (tabPanelId !== selectedTabId) {
    return null;
  }

  return (
    <div role='tabpanel' id={tabPanelId} className='p-2'>
      {children}
    </div>
  );
}

export default TabPanel;

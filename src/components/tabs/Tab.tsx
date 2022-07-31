import { useContext } from 'react';
import createTabPanelId from '../../lib/createTabPanelId';
import TabsContext from './TabsContext';

type Props = {
  title: string;
};

function Tab({ title }: Props): JSX.Element {
  const { selectedTabId, setSelectedTabId } = useContext(TabsContext);
  const tabId = createTabPanelId(title);

  return (
    <button
      role='tab'
      aria-selected={tabId === selectedTabId}
      aria-controls={tabId}
      onClick={() => setSelectedTabId(tabId)}
    >
      {title}
    </button>
  );
}

export default Tab;

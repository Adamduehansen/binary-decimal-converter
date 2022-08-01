import classNames from 'classnames';
import { useContext } from 'react';
import createTabPanelId from './createTabPanelId';
import TabsContext from './TabsContext';

type Props = {
  title: string;
};

function Tab({ title }: Props): JSX.Element {
  const { selectedTabId, setSelectedTabId } = useContext(TabsContext);
  const tabId = createTabPanelId(title);
  const selected = tabId === selectedTabId;

  return (
    <button
      role='tab'
      aria-selected={selected}
      aria-controls={tabId}
      className={classNames('w-full bg-gray-200', {
        'bg-emerald-500 text-white': selected,
      })}
      onClick={() => setSelectedTabId(tabId)}
    >
      {title}
    </button>
  );
}

export default Tab;

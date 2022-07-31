import React, { useState } from 'react';
import createTabPanelId from '../../lib/createTabPanelId';
import Tab from './Tab';
import { TabPanelProps } from './TabPanel';
import TabsContext from './TabsContext';

function getFirstTabPanelId(children: React.ReactNode) {
  return function () {
    const firstTabPanel = React.Children.toArray(
      children
    )[0] as React.ReactElement<TabPanelProps>;
    return createTabPanelId(firstTabPanel.props.tabTitle);
  };
}

function Tabs({ children }: React.PropsWithChildren): JSX.Element {
  const [selectedTabId, setSelectedTabId] = useState(
    getFirstTabPanelId(children)
  );

  return (
    <TabsContext.Provider
      value={{
        selectedTabId: selectedTabId,
        setSelectedTabId: setSelectedTabId,
      }}
    >
      <div className='border'>
        <div role='tablist' className='flex justify-around h-16'>
          {React.Children.map(children, (child) => {
            const childProps = (child as React.ReactElement<TabPanelProps>)
              .props;
            const tabTitle = childProps.tabTitle;
            return <Tab title={tabTitle} />;
          })}
        </div>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export default Tabs;

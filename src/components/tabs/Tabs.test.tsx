import { fireEvent, render, screen } from '@testing-library/react';
import TabPanel from './TabPanel';
import Tabs from './Tabs';

describe('Tabs', () => {
  test('should show content of tab panel', () => {
    // Arrange
    render(
      <Tabs>
        <TabPanel tabTitle='any-tab-title'>
          <div>any-tab-panel-content</div>
        </TabPanel>
      </Tabs>
    );

    // Act
    const tabPanelContent = screen.getByText('any-tab-panel-content');

    // Assert
    expect(tabPanelContent).toBeInTheDocument();
  });

  test('should only render content of first tab when mounted', () => {
    // Arrange
    render(
      <Tabs>
        <TabPanel tabTitle='any-tab-title-1'>
          <div>any-tab-panel-content-1</div>
        </TabPanel>
        <TabPanel tabTitle='any-tab-title-2'>
          <div>any-tab-panel-content-2</div>
        </TabPanel>
      </Tabs>
    );

    // Act
    const expectedContent = screen.getByText('any-tab-panel-content-1');
    const hiddenContent = screen.queryByText('any-tab-panel-content-2');

    // Assert
    expect(expectedContent).toBeInTheDocument();
    expect(hiddenContent).not.toBeInTheDocument();
  });

  test('should switch content to clicked tab', () => {
    // Arrange
    render(
      <Tabs>
        <TabPanel tabTitle='any-tab-title-1'>
          <div>any-tab-panel-content-1</div>
        </TabPanel>
        <TabPanel tabTitle='any-tab-title-2'>
          <div>any-tab-panel-content-2</div>
        </TabPanel>
      </Tabs>
    );

    // Act
    const tabToClick = screen.getByRole('tab', {
      name: 'any-tab-title-2',
    });
    fireEvent.click(tabToClick);
    const tabPanelContent = screen.getByText('any-tab-panel-content-2');

    // Assert
    expect(tabPanelContent).toBeInTheDocument();
  });
});

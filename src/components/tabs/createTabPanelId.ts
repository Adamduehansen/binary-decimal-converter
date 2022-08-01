import composeFunction from '../../lib/composeFunction';

const createTabPanelId = composeFunction<string>(
  (value: string) => value.toLowerCase(),
  (value: string) => value.replaceAll(' ', '-'),
  (value: string) => value + '-tabpanel'
);

export default createTabPanelId;

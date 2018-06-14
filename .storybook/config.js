import {configure} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

setOptions({
  name: 'INFINITE CALENDAR',
  url: 'https://github.com/clauderic/react-infinite-calendar',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
});

configure(() => require('../src/.stories/index.js'), module);

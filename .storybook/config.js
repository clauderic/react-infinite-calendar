import {configure} from '@storybook/react';
import {setOptions} from '@storybook/addon-options';

setOptions({
  name: 'INFINITE CALENDAR',
  url: 'https://github.com/clauderic/react-infinite-calendar',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: false,
  showSearchBox: false,
  downPanelInRight: false,
  sortStoriesByKind: false,
});

configure(() => require('../src/.stories/index.js'), module);

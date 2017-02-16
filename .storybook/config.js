import {configure} from '@kadira/storybook';
import {setOptions} from '@kadira/storybook-addon-options';

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

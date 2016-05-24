<div align="center" style="margin-bottom: 30px;">
<img src="https://s3.amazonaws.com/f.cl.ly/items/0e0n28182s3b2a082X0K/logo.png" width="250"/>

<h1>React Infinite Calendar</h1>
<h3>Examples available here: <a href="#">http://clauderic.github.io/react-infinite-calendar/</a></h3>
</div>

[![license](https://img.shields.io/github/license/mashape/apistatus.svg?maxAge=2592000)]()
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Features
---------------

* **Infinite scroll** – Just keep scrollin', just keep scrollin'
* **Flexible** – Min/max date, disabled dates, disabled days, etc.
* **Localization and translation** – En français, s'il vous plait!
* **Customizeable** – Customize and theme to your heart's content.
* **Keyboard support** – ⬆️ ⬇️ ⬆️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ ↩️
* **Events and callbacks** – beforeSelect, onSelect, onScroll, yadda yadda yadda.

And mucho, mucho mas 🎉
<div style="padding:30px">
<img src="https://s3.amazonaws.com/f.cl.ly/items/391d102o3b0L0f1C1w0n/preview.gif" width="300" />
</div>

Installation
------------

Using [npm](https://www.npmjs.com/):

	$ npm install react-infinite-calendar --save


Then, using a module bundler that supports either CommonJS or ES2015 modules, such as [webpack](https://github.com/webpack/webpack):

```js
// Using an ES6 transpiler like Babel
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // Make sure to import the default stylesheet

// Not using an ES6 transpiler
var InfiniteCalendar = require('react-infinite-calendar');
require('react-infinite-calendar/styles.css');
```

Alternatively, an UMD build is also available:
```html
<link rel="stylesheet" href="react-infinite-calendar/styles.css">
<script src="react-infinite-calendar/dist/umd/react-infinite-calendar.js"></script>
```

Usage
------------
### Basic Example

```js
import React from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
var today = new Date();
var minDate = Number(new Date()) - (24*60*60) * 7; // One week before today

render(
  <InfiniteCalendar
    width={400}
    height={600}
    selectedDate={today}
    disabledDays={[0,6]}
    minDate={minDate}
    keyboardSupport={true}
  />,
  document.getElementById('root')
);
```
For more usage examples, see [http://clauderic.github.io/react-infinite-calendar/](http://clauderic.github.io/react-infinite-calendar/)

### Prop Types
| Property | Type | Default | Description |
|:---|:---|:---|:---|
| selectedDate | [Valid Date](http://momentjs.com/docs/#/parsing/) | new Date() | Value of the date that appears to be selected. Supports any input format supported by [moment.js](http://momentjs.com/docs/#/parsing/) |
| min | [Valid Date](http://momentjs.com/docs/#/parsing/) | {year: 1980, month: 0, day: 0} | The minimum month that can be scrolled to. Supports any input format supported by [moment.js](http://momentjs.com/docs/#/parsing/)|
| max | [Valid Date](http://momentjs.com/docs/#/parsing/) | {year: 2050, month: 11, day: 31} | The maximum month that can be scrolled to. Supports any input format supported by [moment.js](http://momentjs.com/docs/#/parsing/) |
| minDate | [Valid Date](http://momentjs.com/docs/#/parsing/) | {year: 1980, month: 0, day: 0} | The minimum date that is selectable. Supports any input format supported by [moment.js](http://momentjs.com/docs/#/parsing/) |
| maxDate | [Valid Date](http://momentjs.com/docs/#/parsing/) | {year: 2050, month: 11, day: 31} | The maximum date that is selectable. Supports any input format supported by [moment.js](http://momentjs.com/docs/#/parsing/) |
| locale | Object | See [locale.js](https://github.com/clauderic/react-infinite-calendar/blob/master/src/locale.js) | By default, React Infinite Calendar comes with the `English` locale strings. You can use this to change the language, or change the first day of the week. See [moment.js documentation](http://momentjs.com/docs/#/i18n/) for more details |
| theme | Object | See [theme.js](https://github.com/clauderic/react-infinite-calendar/blob/master/src/theme.js) | Basic customization of the colors |
| width | Number | 400 | Width of the calendar |
| height | Number | 600 | Height of the calendar |
| rowHeight | Number | 56 | Height of each row in the calendar (each week is considered a `row`) |
| className | String |  | Optional CSS class name to append to the root `InfiniteCalendar` element. |
| overscanMonthCount | Number | 4 | Number of months to render above/below the visible months. Tweaking this can help reduce flickering during scrolling on certain browers/devices. |
| disabledDays | Array of Numbers | | Array of days of the week that should be disabled. For example, to disable Monday and Sunday: `[0, 6]` |
| disabledDates | Array of [Valid Dates](#) | | Array of arbitrary dates that should be disabled. Supports any input format supported by [moment.js](http://momentjs.com/docs/#/parsing/). For example: `['2016-01-08', new Date(), '20160520', {year: 2015, month: 03, day: 15}]` |
| beforeSelect | Function | | Callback invoked before the state is mutated. Can be used to prevent the state from being changed by returning false. Example: `function(date) { return true / false; }` |
| onSelect | Function | | Callback invoked after beforeSelect() returns true, but before the state of the calendar updates |
| afterSelect | Function | | Callback invoked after the state of the calendar has sucessfully been updated |
| onScroll | Function | | Callback invoked when the scroll offset changes. `function (scrollTop: number) {}` |
| onScrollEnd | Function | | Callback invoked `150ms` after the last onScroll event is triggered. `function (scrollTop: number) {}` |
| keyboardSupport | Boolean | true | Keyboard support (`left`, `right`, `up`, `down`) |
| autoFocus | Boolean | true | Whether the Calendar root should be auto-focused when it mounts. This is useful when `keyboardSupport` is enabled (the calendar must be focused to listen for keyboard events) |
| tabIndex | Number | 1 | Tab-index of the calendar |
| layout | String | 'portrait' | Layout of the calendar. Should be one of `'portrait'` or `'landscape'` |
| showHeader | Boolean | true | Show/hide the header |
| shouldHeaderAnimate | Boolean | true | Enable/Disable the header animation |
| showOverlay | Boolean | true | Show/hide the month overlay when scrolling |
| showTodayHelper | Boolean | true | Show/hide the floating back to `Today` helper |

Dependencies
------------
React Infinite Calendar has few dependencies. It relies on the great work done by [`react-virtualized/VirtualScroll`](https://github.com/bvaughn/react-virtualized) for handling virtual scrolling logic and [`Moment.js`](https://github.com/moment/moment/) for handling date manipulation. It also has the following peer dependencies: [`react`](https://www.npmjs.com/package/react), [`react-dom`](https://www.npmjs.com/package/react-dom), [`react-addons-shallow-compare`](https://www.npmjs.com/package/react-addons-shallow-compare), and [`react-addons-css-transition-group`](https://www.npmjs.com/package/react-addons-css-transition-group).

Contributions
------------
Yes please! Feature requests / pull requests are welcome.

<div align="center">
<sub>
Made with <span style="color:#F84356">❤︎</span> in the heart of Montreal by <a href="https://github.com/clauderic">Claudéric Demers</a>.</a>
</sub>
</div>

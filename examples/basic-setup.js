import React from 'react';
import {render} from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

// All props are optional, so this is the minimum setup you need
render(<InfiniteCalendar />, document.querySelector('#root'));

import React from 'react';
import {render} from 'react-dom';
import InfiniteCalendar, {
  Calendar,
  withRange,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

render(
  <InfiniteCalendar
    Component={withRange(Calendar)}
    selected={{
      start: new Date(2017, 1, 10),
      end: new Date(2017, 1, 18),
    }}
  />,
  document.querySelector('#root')
);

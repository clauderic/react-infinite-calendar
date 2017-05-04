import React from 'react';
import {render} from 'react-dom';
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const MultipleDatesCalendar = withMultipleDates(Calendar);
  
render(
  <InfiniteCalendar
    Component={MultipleDatesCalendar}
    /*
     * The `interpolateSelection` prop allows us to map the resulting state when a user selects a date.
     * By default, it adds the date to the selected dates array if it isn't already selected.
     * If the date is already selected, it removes it.
     *
     * You could re-implement this if this isn't the behavior you want.
     */
    interpolateSelection={defaultMultipleDateInterpolation}
    selected={[new Date(2017, 1, 10), new Date(2017, 1, 18), new Date()]}
  />,
  document.querySelector('#root')
);

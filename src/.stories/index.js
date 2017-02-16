import React from 'react';
import {addDecorator, storiesOf} from '@kadira/storybook';
import InfiniteCalendar from '../';
import styles from './stories.scss';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import endOfMonth from 'date-fns/end_of_month';
import subMonths from 'date-fns/sub_days';

const CenterDecorator = (story) => <div className={styles.center}>{story()}</div>;
addDecorator(CenterDecorator);

const today = new Date();
storiesOf('Basic settings', module)
  .add('Default Configuration', () => (
    <InfiniteCalendar />
  ))
  .add('Initially Selected Date', () => (
    <InfiniteCalendar selectedDate={addDays(today, 7)} />
  ))
  .add('Blank Initial State', () => (
    <InfiniteCalendar selectedDate={null}/>
  ))
  .add('Min Date', () => (
    <InfiniteCalendar
      min={subMonths(today, 2)} // Minimum month to render
      minDate={addDays(today, 1)} // Minimum selectable date
    />
  ))
  .add('Max Date', () => (
    <InfiniteCalendar
      max={endOfMonth(addMonths(today, 1))} // Maximum rendered month
      maxDate={today} // Maximum selectable date
    />
  ))

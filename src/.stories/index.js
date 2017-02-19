import React from 'react';
import {addDecorator, storiesOf} from '@kadira/storybook';
import InfiniteCalendar from '../';
import styles from './stories.scss';

// Date manipulation utils
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import endOfMonth from 'date-fns/end_of_month';
import format from 'date-fns/format';
import isBefore from 'date-fns/is_before';
import subDays from 'date-fns/sub_days';
import subMonths from 'date-fns/sub_days';

const CenterDecorator = story => <div className={styles.center}>{story()}</div>;
addDecorator(CenterDecorator);

const today = new Date();
storiesOf('Basic settings', module)
  .add('Default Configuration', () => <InfiniteCalendar />)
  .add('Initially Selected Date', () => (
    <InfiniteCalendar selectedDate={addDays(today, 5)} />
  ))
  .add('Blank Initial State', () => <InfiniteCalendar selectedDate={null} />)
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
  .add('Disable Specific Dates', () => (
    <InfiniteCalendar
      disabledDates={[
        subDays(today, 10),
        subDays(today, 5),
        subDays(today, 6),
        addDays(today, 5),
        addDays(today, 6),
        addDays(today, 7),
        addDays(today, 2),
      ]}
    />
  ))
  .add('Disable Specific Weekdays', () => (
    <InfiniteCalendar disabledDays={[0, 6]} />
  ))
  .add('Keyboard Support', () => (
    <InfiniteCalendar keyboardSupport={true} />
  ));

storiesOf('Internationalization', module)
  .add('Locale', () => (
    <InfiniteCalendar
      locale={{
        blank: 'Aucune date sélectionnée',
        headerFormat: 'dddd, D MMM',
        locale: require('date-fns/locale/fr'),
        todayLabel: {
          long: "Aujourd'hui",
          short: 'Auj.',
        },
        weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
      }}
    />
  ))
  .add('First Day of the Week', () => (
    <InfiniteCalendar
      locale={{
        weekStartsOn: 1,
      }}
    />
  ));

storiesOf('Customization', module)
  .add('Theming', () => (
    <InfiniteCalendar
      theme={{
        floatingNav: {
          background: 'rgba(105, 74, 228, 0.91)',
          chevron: '#FFA726',
          color: '#FFF',
        },
        headerColor: 'rgb(127, 95, 251)',
        selectionColor: 'rgb(146, 118, 255)',
        textColor: {
          active: '#FFF',
          default: '#333',
        },
        weekdayColor: 'rgb(146, 118, 255)',
      }}
    />
  ))
  .add('Flexible Size', () => (
    <InfiniteCalendar
      width={(window.innerWidth <= 700) ? window.innerWidth : 700}
      height={window.innerHeight - 147}
      rowHeight={70}
    />
  ))
  .add('Select Year First', () => (
    <InfiniteCalendar display={'years'} selectedDate={null}/>
  ))
  .add('Dynamic Selection Color', () => (
    <InfiniteCalendar
      selectedDate={subDays(today, 1)}
      theme={{
        selectionColor: (date) => {
          return (isBefore(today, date)) ? '#EC6150' : '#559FFF';
        },
      }}
    />
  ));

storiesOf('Display Options', module)
  .add('Landscape Layout', () => (
    <InfiniteCalendar
      displayOptions={{
        layout: 'landscape',
      }}
      width={600}
      height={350}
    />
  ))
  .add('Disable Header', () => (
    <InfiniteCalendar
      displayOptions={{
        showHeader: false,
      }}
    />
  ))
  .add('Disable Header Animation', () => (
    <InfiniteCalendar
      displayOptions={{
        shouldHeaderAnimate: false,
      }}
    />
  ))
  .add('Disable Month Overlay', () => (
    <InfiniteCalendar
      displayOptions={{
        showOverlay: false,
      }}
    />
  ))
  .add('Disable Floating Today Helper', () => (
    <InfiniteCalendar
      displayOptions={{
        showTodayHelper: false,
      }}
    />
  ));

storiesOf('Events', module)
  .add('On Select', () => (
    <InfiniteCalendar onSelect={(date) => alert(`You selected: ${format(date, 'ddd, MMM Do YYYY')}`)} />
  ))
  .add('Dynamic Selection Validation', () => ([
    <label key='label'>You can use the <code>shouldPreventSelect</code> event for custom validation.</label>,
    <InfiniteCalendar
        key='calendar'
        shouldPreventSelect={(date) => !confirm(`You selected: ${format(date, 'ddd, MMM Do YYYY')}\n\nWould you like to allow this date to be selected?`)}
    />,
  ]))
  .add('On Scroll', () => ([
    <label key='label'>Check your console logs.</label>,
    <InfiniteCalendar key='calendar' onScroll={(scrollTop) => console.info('onScroll() – Scroll top:', scrollTop)} />,
  ]));

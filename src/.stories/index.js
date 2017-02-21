import React, {Component} from 'react';
import {addDecorator, storiesOf} from '@kadira/storybook';
import InfiniteCalendar, {withDateSelection, withKeyboardSupport, withMultipleDates} from '../';
import styles from './stories.scss';

// Date manipulation utils
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import endOfMonth from 'date-fns/end_of_month';
import format from 'date-fns/format';
import isBefore from 'date-fns/is_before';
import subMonths from 'date-fns/sub_days';

const CenterDecorator = story => <div className={styles.center}>{story()}</div>;
addDecorator(CenterDecorator);

const today = new Date();

class CalendarWrapper extends Component {
  static defaultProps = {
    Component: withDateSelection(InfiniteCalendar),
    handleSelect: (selected, instance) => instance.setState({selected}),
  };
  state = {
    selected: typeof this.props.selected !== 'undefined'
      ? this.props.selected
      : new Date(),
  };
  render() {
    const {Component, handleSelect} = this.props;
    const {selected} = this.state;

    return <Component {...this.props} selected={selected} onSelect={(date) => handleSelect(date, this)} />;
  }
}

storiesOf('Basic settings', module)
  .add('Default Configuration', () => <CalendarWrapper />)
  .add('Initially Selected Date', () => <CalendarWrapper selected={addDays(today, 5)} />)
  .add('Blank Initial State', () => <CalendarWrapper selected={null} />)
  .add('Min Date', () => (
    <CalendarWrapper
      min={subMonths(today, 2)} // Minimum month to render
      minDate={addDays(today, 1)} // Minimum selectable date
      selectedDate={addDays(today, 5)}
    />
  ))
  .add('Max Date', () => (
    <CalendarWrapper
      max={endOfMonth(addMonths(today, 1))} // Maximum rendered month
      maxDate={today} // Maximum selectable date
    />
  ))
  .add('Disable Specific Dates', () => (
    <CalendarWrapper
      disabledDates={[-10, -5, -6, 5, 6, 7, 2].map(amount =>
        addDays(today, amount)
      )}
    />
  ))
  .add('Disable Specific Weekdays', () => (
    <CalendarWrapper disabledDays={[0, 6]} />
  ));

storiesOf('Higher Order Components', module)
  .add('Multiple date selection', () => {
    return (
      <CalendarWrapper
        selected={[today, addDays(today, 2)]}
        handleSelect={(date, instance) => {
          const selected = instance.state.selected;
          const selectedMap = selected.map(date => format(date, 'YYYY-MM-DD'));
          const index = selectedMap.indexOf(format(date, 'YYYY-MM-DD'));

          instance.setState({
            selected: index === -1
              ? [...selected, date]
              : [...selected.slice(0, index), ...selected.slice(index+1)],
          });
        }}
        Component={withMultipleDates(InfiniteCalendar)}
      />
    );
  })
  .add('Keyboard Support', () => {
    return <CalendarWrapper Component={withKeyboardSupport(InfiniteCalendar)} />;
  });

storiesOf('Internationalization', module)
  .add('Locale', () => (
    <CalendarWrapper
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
    <CalendarWrapper
      locale={{
        weekStartsOn: 1,
      }}
    />
  ));

storiesOf('Customization', module)
  .add('Theming', () => (
    <CalendarWrapper
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
    <CalendarWrapper
      width={window.innerWidth <= 700 ? window.innerWidth : 700}
      height={window.innerHeight - 147}
      rowHeight={70}
    />
  ))
  .add('Select Year First', () => (
    <CalendarWrapper display={'years'} selectedDate={null} />
  ))
  .add('Dynamic Selection Color', () => (
    <CalendarWrapper
      selectedDate={addDays(today, -1)}
      theme={{
        selectionColor: date => {
          return isBefore(date, today) ? '#EC6150' : '#559FFF';
        },
      }}
    />
  ));

storiesOf('Display Options', module)
  .add('Landscape Layout', () => (
    <CalendarWrapper
      displayOptions={{
        layout: 'landscape',
      }}
      width={600}
      height={350}
    />
  ))
  .add('Disable Header', () => (
    <CalendarWrapper
      displayOptions={{
        showHeader: false,
      }}
    />
  ))
  .add('Disable Header Animation', () => (
    <CalendarWrapper
      displayOptions={{
        shouldHeaderAnimate: false,
      }}
    />
  ))
  .add('Disable Month Overlay', () => (
    <CalendarWrapper
      displayOptions={{
        showOverlay: false,
      }}
    />
  ))
  .add('Disable Floating Today Helper', () => (
    <CalendarWrapper
      displayOptions={{
        showTodayHelper: false,
      }}
    />
  ));

storiesOf('Events', module)
  .add('On Select', () => (
    <CalendarWrapper
      onSelect={date =>
        alert(`You selected: ${format(date, 'ddd, MMM Do YYYY')}`)}
    />
  ))
  .add('On Scroll', () => [
    <label key="label">Check your console logs.</label>,
    <CalendarWrapper
      key="calendar"
      onScroll={scrollTop =>
        console.info('onScroll() – Scroll top:', scrollTop)}
    />,
  ]);

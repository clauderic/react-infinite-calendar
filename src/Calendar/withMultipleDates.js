import {compose, withProps, withPropsOnChange, withState} from 'recompose';
import {withDefaultProps} from './';
import {sanitizeDate, withImmutableProps} from '../utils';
import enhanceHeader from '../Header/withMultipleDates';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

// Enhance Day component to display selected state based on an array of selected dates
export const enhanceDay = withPropsOnChange(['selected'], props => ({
  isSelected: props.selected.indexOf(props.date) !== -1,
}));

// Enhance year component
const enhanceYears = withProps(({displayDate}) => ({
  selected: displayDate ? parse(displayDate) : null,
}));

// Enhancer to handle selecting and displaying multiple dates
export const withMultipleDates = compose(
  withDefaultProps,
  withState('scrollDate', 'setScrollDate', getInitialDate),
  withState('displayDate', 'setDisplayDate', getInitialDate),
  withImmutableProps(({
    DayComponent,
    HeaderComponent,
    YearsComponent,
  }) => ({
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: enhanceHeader(HeaderComponent),
    YearsComponent: enhanceYears(YearsComponent),
  })),
  withProps(({displayDate, onSelect, setDisplayDate, scrollToDate, ...props}) => ({
    passThrough: {
      Day: {
        onClick: (date) => handleSelect(date, {onSelect, setDisplayDate}),
      },
      Header: {
        setDisplayDate,
      },
      Years: {
        displayDate,
        onSelect: (year, e, callback) => handleYearSelect(year, callback),
        selected: displayDate,
      },
    },
    selected: props.selected
      .filter(date => sanitizeDate(date, props))
      .map(date => format(date, 'YYYY-MM-DD')),
  })),
);

function handleSelect(date, {onSelect, setDisplayDate}) {
  onSelect(date);
  setDisplayDate(date);
}

function handleYearSelect(date, callback) {
  callback(parse(date));
}

function getInitialDate({selected, initialSelectedDate}) {
  return selected.length ? initialSelectedDate || selected[0] : new Date();
}
//why is this needed when it could all technically be housed within this HOC's handle select function
export function defaultMultipleDateInterpolation(date, selected) {
  const selectedMap = selected.map(date => format(date, 'YYYY-MM-DD'));
  const index = selectedMap.indexOf(format(date, 'YYYY-MM-DD'));

  return (index === -1)
    ? [...selected, date]
    : [...selected.slice(0, index), ...selected.slice(index+1)];
}

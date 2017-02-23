import {compose, mapProps, withHandlers, withProps, withState} from 'recompose';
import {withDefaultProps} from './';
import {sanitizeDate, withImmutableProps} from '../utils';
import enhanceHeader from '../Header/withMultipleDates';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

// Enhance Day component to display selected state based on an array of selected dates
export const enhanceDay = mapProps(props => ({
  ...props,
  isSelected: props.selected.indexOf(props.date) !== -1,
}));

// Enhance year component
const enhanceYears = compose(
  mapProps(({selected, onYearSelect, displayDate, ...props}) => ({
    ...props,
    onSelect: onYearSelect,
    selectedYear: displayDate ? parse(displayDate).getFullYear() : null,
  })),
);

// Enhancer to handle selecting and displaying multiple dates
export const withMultipleDates = compose(
  withDefaultProps,
  withState('scrollDate', 'setScrollDate', getInitialDate),
  withState('displayDate', 'setDisplayDate', getInitialDate),
  withImmutableProps(({
    DayComponent,
    displayDate,
    HeaderComponent,
    setDisplayDate,
    YearComponent,
  }) => ({
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: compose(
      withProps({
        setDisplayDate,
      }),
      enhanceHeader,
    )(HeaderComponent),
    YearComponent: enhanceYears(YearComponent),
  })),
  withProps(props => ({
    selected: props.selected
      .filter(date => sanitizeDate(date, props))
      .map(date => format(date, 'YYYY-MM-DD')),
  })),
  withHandlers({
    onDayClick: props => date => handleSelect(date, props),
    onYearSelect: props =>
      (year, e, scrollToDate) => handleYearSelect(year, props, scrollToDate),
  }),
);

function handleSelect(date, {onSelect, setDisplayDate}) {
  onSelect(date);
  setDisplayDate(date);
}

function handleYearSelect(year, props, scrollToDate) {
  const {displayDate} = props;

  scrollToDate(parse(displayDate).setYear(year));
}

function getInitialDate({selected}) {
  return selected.length ? selected[0] : new Date();
}

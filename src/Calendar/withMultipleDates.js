import {compose, mapProps, withHandlers, withProps, withState} from 'recompose';
import {withDefaultProps} from './';
import {sanitizeDate} from '../utils';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

export const withSelectedState = mapProps(props => ({
  ...props,
  isSelected: props.selected.indexOf(props.date) !== -1,
}));


const withSelectedYear = compose(
  mapProps(({selected, onYearSelect, ...props}) => ({
    ...props,
    onSelect: onYearSelect,
    selectedYear: selected.length ? parse(selected[0]).getFullYear() : null,
  }))
);

// Enhancer to handle selecting and displaying a single date
export const withMultipleDates = compose(
  withDefaultProps,
  withHandlers({
    DayComponent: ({DayComponent}) => withSelectedState(DayComponent),
    onDayClick: props => date => handleSelect(date, props),
    onYearSelect: props => (year, e, callback) => handleYearSelect(year, props, callback),
    YearComponent: ({YearComponent}) => withSelectedYear(YearComponent),
  }),
  withProps((props) => ({
    selected: props.selected
      .filter(date => sanitizeDate(date, props))
      .map(date => format(date, 'YYYY-MM-DD')),
  })),
  withState('scrollDate', 'scrollToDate', props =>
    props.selected.length
      ? props.selected[0]
      : new Date()
  ),
);

function handleSelect(date, props) {
  props.onSelect(date);
}

function handleYearSelect(year, props, callback) {
  const {selected, onSelect} = props;

  onSelect(parse(selected).setYear(year), callback);
}

import {compose, mapProps, withHandlers, withProps, withState} from 'recompose';
import {withDefaultProps} from './';
import {sanitizeDate} from '../utils';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

export const withSelectedState = mapProps(props => ({
  ...props,
  isSelected: props.selected === props.date,
}));

const withSelectedYear = compose(
  mapProps(({selected, onYearSelect, ...props}) => ({
    ...props,
    onSelect: onYearSelect,
    selectedYear: parse(selected).getFullYear(),
  }))
);

// Enhancer to handle selecting and displaying a single date
export const withDateSelection = compose(
  withDefaultProps,
  withHandlers({
    DayComponent: ({DayComponent}) => withSelectedState(DayComponent),
    onDayClick: props => date => props.onSelect(date),
    onYearSelect: props => year => handleYearSelect(year, props),
    YearComponent: ({YearComponent}) => withSelectedYear(YearComponent),
  }),
  withProps((props) => {
    const selected = sanitizeDate(props.selected, props);

    return {
      selected: selected && format(selected, 'YYYY-MM-DD'),
    };
  }),
  withState('scrollDate', 'scrollToDate', props => props.selected),
);


function handleYearSelect(year, props) {
  const {selected, onSelect} = props;

  onSelect(parse(selected).setYear(year));
}

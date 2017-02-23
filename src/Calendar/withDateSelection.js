import {
  compose,
  withHandlers,
  withProps,
  withPropsOnChange,
  withState,
} from 'recompose';
import {withDefaultProps} from './';
import {sanitizeDate, withImmutableProps} from '../utils';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

export const enhanceDay = withPropsOnChange(['selected'], props => ({
  isSelected: props.selected === props.date,
}));

const enhanceYear = (Component, {onSelect, setScrollDate}) => compose(
  withPropsOnChange(['selected'], ({selected}) => ({
    selectedYear: parse(selected).getFullYear(),
  })),
  withImmutableProps((props) => ({
    onSelectYear: year =>
      handleYearSelect(year, {...props, onSelect, setScrollDate}),
  })),
)(Component);

// Enhancer to handle selecting and displaying a single date
export const withDateSelection = compose(
  withDefaultProps,
  withState('scrollDate', 'setScrollDate', props => props.selected),
  withImmutableProps(({
    DayComponent,
    onSelect,
    setScrollDate,
    YearComponent,
  }) => ({
    DayComponent: enhanceDay(DayComponent),
    YearComponent: enhanceYear(YearComponent, {onSelect, setScrollDate}),
  })),
  withHandlers({
    onDayClick: props => date => props.onSelect(date),
  }),
  withProps(props => {
    const selected = sanitizeDate(props.selected, props);

    return {
      selected: selected && format(selected, 'YYYY-MM-DD'),
    };
  }),
);

function handleYearSelect(year, {setScrollDate, selected, onSelect}) {
  const newDate = parse(selected).setYear(year);

  onSelect(newDate);
  setScrollDate(newDate);
}

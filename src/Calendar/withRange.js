import {compose, withProps, withPropsOnChange, withState} from 'recompose';
import classNames from 'classnames';
import {withDefaultProps} from './';
import {sanitizeDate, withImmutableProps} from '../utils';
import enhanceHeader from '../Header/withRange';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import styles from '../Day/Day.scss';

// Enhance Day component to display selected state based on an array of selected dates
export const enhanceDay = withPropsOnChange(['selected'], ({date, selected, theme}) => {
  const isSelected = date >= selected.start && date <= selected.end;
  const isStart = date === selected.start;
  const isEnd = date === selected.end;
  const isRange = !(isStart && isEnd);
  const style = isRange && (
    isStart && {backgroundColor: theme.accentColor} ||
    isEnd && {borderColor: theme.accentColor}
  );

  return {
    className: isSelected && isRange && classNames(styles.range, {
      [styles.start]: isStart,
      [styles.betweenRange]: !isStart && !isEnd,
      [styles.end]: isEnd,
    }),
    isSelected,
    selectionStyle: style,
  };
});

// Enhance year component
const enhanceYears = withProps(({displayDate}) => ({
  selected: displayDate ? parse(displayDate) : null,
}));

// Enhancer to handle selecting and displaying multiple dates
export const withRange = compose(
  withDefaultProps,
  withState('scrollDate', 'setScrollDate', getInitialDate),
  withImmutableProps(({
    DayComponent,
    HeaderComponent,
    YearsComponent,
  }) => ({
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: enhanceHeader(HeaderComponent),
    YearsComponent: enhanceYears(YearsComponent),
  })),
  withProps(({onSelect, selected: {start, end}}) => ({
    /* eslint-disable sort-keys */
    passThrough: {
      Day: {
        onClick: onSelect,
      },
    },
    selected: {
      start: format(start, 'YYYY-MM-DD'),
      end: format(end, 'YYYY-MM-DD'),
    },
  })),
);

function getInitialDate({selected}) {
  return selected.start || new Date();
}

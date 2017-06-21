import {compose, withProps, withPropsOnChange, withState} from 'recompose';
import classNames from 'classnames';
import {withDefaultProps} from './';
import {withImmutableProps} from '../utils';
import isBefore from 'date-fns/is_before';
import enhanceHeader from '../Header/withRange';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import addDays from 'date-fns/add_days';
import subDays from 'date-fns/sub_days';
import differenceInDays from 'date-fns/difference_in_days';
import styles from '../Day/Day.scss';

let isTouchDevice = false;

export const EVENT_TYPE = {
  END: 3,
  HOVER: 2,
  START: 1,
};

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

// Enhancer to handle selecting and displaying multiple dates
export const withRange = compose(
  withDefaultProps,
  withState('scrollDate', 'setScrollDate', getInitialDate),
  withState('displayKey', 'setDisplayKey', getInitialDate),
  withState('selectionStart', 'setSelectionStart', null),
  withImmutableProps(({
    DayComponent,
    HeaderComponent,
    YearsComponent,
  }) => ({
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: enhanceHeader(HeaderComponent),
  })),
  withProps(({displayKey, passThrough, selected, setDisplayKey, ...props}) => ({
    /* eslint-disable sort-keys */
    passThrough: {
      ...passThrough,
      Day: {
        onClick: (date) => handleSelect(date, {selected, ...props}),
        handlers: {
          onMouseOver: !isTouchDevice && props.selectionStart
            ? (e) => handleMouseOver(e, {selected, ...props})
            : null,
        },
      },
      Years: {
        selected: selected && selected[displayKey],
        onSelect: (date) => handleYearSelect(date, {displayKey, selected, ...props}),
      },
      Header: {
        onYearClick: (date, e, key) => setDisplayKey(key || 'start'),
      },
    },
    selected: {
      start: selected && format(selected.start, 'YYYY-MM-DD'),
      end: selected && format(selected.end, 'YYYY-MM-DD'),
    },
  })),
);

function getSortedSelection({start, end}) {
  return isBefore(start, end)
    ? {start, end}
    : {start: end, end: start};
}

/**
 * Limits the selection range to include a maximum of `rangeLimit` days.
 *
 * If the range is longer, the end date is re-calculated to fit the range limit.
 * If no limit is set (falsey), original values are returned.
 *
 * @param  {number} rangeLimit Limit in days
 * @param  {Date} start Start date
 * @param  {Date} end End date
 * @return {Object} New start and end date
 */
function getLimitedRange (rangeLimit, start, end) {
  if (!rangeLimit) return { start, end };
  const range = differenceInDays(end, start);
  const modifier = range > 0 ? addDays : subDays;

  const endDate = Math.abs(range) >= rangeLimit
    ? modifier(start, rangeLimit - 1)
    : end;

  return {
    start,
    end: endDate,
  };
}

function handleSelect(date, {onSelect, rangeLimit, selected, selectionStart, setSelectionStart}) {
  if (selectionStart) {
    onSelect({
      eventType: EVENT_TYPE.END,
      ...getSortedSelection(getLimitedRange(rangeLimit, selectionStart, date)),
    });
    setSelectionStart(null);
  } else {
    onSelect({eventType:EVENT_TYPE.START, start: date, end: date});
    setSelectionStart(date);
  }
}

function handleMouseOver(e, {onSelect, rangeLimit, selectionStart}) {
  const dateStr = e.target.getAttribute('data-date');
  const date = dateStr && parse(dateStr);

  if (!date) { return; }

  onSelect({
    eventType: EVENT_TYPE.HOVER,
    ...getSortedSelection(getLimitedRange(rangeLimit, selectionStart, date)),
  });
}

function handleYearSelect(date, {displayKey, onSelect, selected, setScrollDate}) {

  setScrollDate(date);
  onSelect(getSortedSelection(
    Object.assign({}, selected, {[displayKey]: parse(date)}))
  );
}

function getInitialDate({selected}) {
  return selected && selected.start || new Date();
}

if (typeof window !== 'undefined') {
  window.addEventListener('touchstart', function onTouch() {
    isTouchDevice = true;

    window.removeEventListener('touchstart', onTouch, false);
  });
}

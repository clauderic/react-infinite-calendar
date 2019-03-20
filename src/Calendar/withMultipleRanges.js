import {compose, withProps, withPropsOnChange, withState} from 'recompose';
import classNames from 'classnames';
import {withDefaultProps} from './';
import {sanitizeDate, withImmutableProps} from '../utils';
import isBefore from 'date-fns/is_before';
import enhanceHeader from '../Header/withMultipleRanges';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import styles from '../Day/Day.scss';

let isTouchDevice = false;

export const EVENT_TYPES = {
  DELETE: 4,
  END: 3,
  HOVER: 2,
  START: 1,
};

const PositionTypes = {
  START: 'START',
  RANGE: 'RANGE',
  END: 'END',
};

// Enhance Day component to display selected state based on an array of selected dates
export const enhanceDay = withPropsOnChange(['selected'], ({date, selected, theme}) => {
  const positionOfDate = determineIfDateAlreadySelected(date, selected);
  const isSelected = !!positionOfDate.value;
  const isStart = positionOfDate.value === PositionTypes.START;
  const isEnd = positionOfDate.value === PositionTypes.END;
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
export const withMultipleRanges = compose(
  withDefaultProps,
  withState('displayIndex', 'setDisplayIndex', 0),
  withState('scrollDate', 'setScrollDate', getInitialDate),
  withState('displayKey', 'setDisplayKey', getInitialDate),
  withState('selectionStart', 'setSelectionStart', null),
  withState('selectionStartIdx', 'setSelectionStartIdx', null),
  withImmutableProps(({
                        DayComponent,
                        HeaderComponent,
                        YearsComponent,
                      }) => ({
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: enhanceHeader(HeaderComponent),
  })),
  withProps(({displayKey, passThrough, selected, setDisplayKey, setDisplayIndex, displayIndex, ...props}) => ({
    /* eslint-disable sort-keys */
    passThrough: {
      ...passThrough,
      Day: {
        onClick: (date) => handleSelect(date, {selected, setDisplayIndex, ...props}),
        handlers: {
          onMouseOver: !isTouchDevice && props.selectionStart
            ? (e) => handleMouseOver(e, {selected, ...props})
            : null,
        },
      },
      Years: {
        selected: selected[displayIndex] && parse(selected[displayIndex][displayKey]),
        onSelect: (date, e, callback) => handleYearSelect(date, callback),
      },
      Header: {
        setDisplayIndex,
        displayIndex,
        onYearClick: (date, e, key) => setDisplayKey(key || 'start'),
      },
    },
    selected: selected
      .map(dateObj => {
        return {
          start: format(dateObj.start, 'YYYY-MM-DD'),
          end: format(dateObj.end, 'YYYY-MM-DD'),
        };
      }),
  })),
);

function getSortedSelection({start, end}) {
  return isBefore(start, end)
    ? {start, end}
    : {start: end, end: start};
}

function handleSelect(date, {onSelect, selected, selectionStart, setSelectionStart, selectionStartIdx, setSelectionStartIdx, setDisplayIndex}) {
  const positionOfDate = determineIfDateAlreadySelected(date, selected);
  const funcs = {onSelect, setSelectionStart, setSelectionStartIdx, setDisplayIndex};

  if(positionOfDate.value && !selectionStart) { //selecting an already defined range
    const selectedDate = selected[positionOfDate.index];//not clone so modding this is modding selected
    selectedDate.end = date; //not possible to have start/end reversed when clicking on already set range

    updateSelectedState(positionOfDate.index, selectedDate.start, positionOfDate.index, selected, funcs);//grab index of selected and set in state
  } else if (selectionStart) { //ending date range selection
    if (positionOfDate.value === PositionTypes.START && !(date < selectionStart)) { //if in process and selecting start, assume they want to cancel
      const displayIdx = positionOfDate.index > 0 ? positionOfDate.index -1 : 0;
      updateSelectedState(displayIdx, null, null, [...selected.slice(0, positionOfDate.index), ...selected.slice(positionOfDate.index+1)], funcs);
    } else {
      selected[selectionStartIdx] = { //modifying passed in object without clone due to immediate set state
        ...getSortedSelection({
          start: selectionStart,
          end: date,
        }),
      };
      updateSelectedState(positionOfDate.index, null, null, selected, funcs);
    }
  } else { //starting new date range
    updateSelectedState(selected.length, date, selected.length, selected.concat({eventType:EVENT_TYPES.START, start: date, end: date}), funcs)//length accounts for increase due to concat
  }
}

function updateSelectedState(displayIdx, selectStart, selectStartIdx, selected, {onSelect, setSelectionStart, setSelectionStartIdx, setDisplayIndex}) {
  onSelect(selected, { eventType: selectStart ? EVENT_TYPES.START : EVENT_TYPES.END, modifiedDateIndex: displayIdx });
  setDisplayIndex(displayIdx);
  setSelectionStart(selectStart);
  setSelectionStartIdx(selectStartIdx);
}

function handleMouseOver(e, {onSelect, selectionStart, selectionStartIdx, selected}) {
  const dateStr = e.target.getAttribute('data-date');
  const date = dateStr && parse(dateStr);

  if (!date) { return; }
  if (selectionStartIdx === null) { return; }

  selected[selectionStartIdx] = {
    eventType: EVENT_TYPES.HOVER,
    ...getSortedSelection({
      start: selectionStart,
      end: date,
    }),
  };
  onSelect(selected);
}

function handleYearSelect(date, callback) {
  callback(parse(date));
}

function getInitialDate({selected, initialSelectedDate}) { //add
  return initialSelectedDate || selected && selected.length && selected[0].start || new Date();
}

if (typeof window !== 'undefined') {
  window.addEventListener('touchstart', function onTouch() {
    isTouchDevice = true;

    window.removeEventListener('touchstart', onTouch, false);
  });
}

function determineIfDateAlreadySelected(date, selected) {
  let returnVal ={
    index: -1,
    value: '',
  };
  selected.forEach((dateObj, idx) => {
    if (date < dateObj.start || date > dateObj.end ) return;
    if (format(date, 'YYYY-MM-DD') === format(dateObj.start, 'YYYY-MM-DD')) {
      returnVal.value = PositionTypes.START;
      returnVal.index = idx;
      return;
    }
    if (format(date, 'YYYY-MM-DD') === format(dateObj.end, 'YYYY-MM-DD')) {
      returnVal.value = PositionTypes.END;
      returnVal.index = idx;
      return;
    }
    if (!returnVal.value) {
      returnVal.value = PositionTypes.RANGE;
      returnVal.index = idx;
      return;
    }
  });
  return returnVal;
}
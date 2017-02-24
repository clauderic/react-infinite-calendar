import {
  compose,
  withHandlers,
  withProps,
  withState,
} from 'recompose';
import addDays from 'date-fns/add_days';
import format from 'date-fns/format';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import {keyCodes, withImmutableProps} from '../utils';

const enhanceDay = withProps(props => ({
  isHighlighted: props.highlightedDate === props.date,
}));

export const withKeyboardSupport = compose(
  withState('highlightedDate', 'setHighlight'),
  withImmutableProps(({DayComponent}) => ({
    DayComponent: enhanceDay(DayComponent),
  })),
  withHandlers({
    onKeyDown: props => e => handleKeyDown(e, props),
  }),
  withProps(({highlightedDate, onKeyDown, onSelect, passThrough, setHighlight}) => ({
    passThrough: {
      ...passThrough,
      Day: {
        highlightedDate: format(highlightedDate, 'YYYY-MM-DD'),
        onClick: (date) => {
          onSelect(date);
          setHighlight(null);
        },
      },
      rootNode: {onKeyDown},
    },
  })),
);

function handleKeyDown(e, props) {
  const {
    displayDate,
    minDate,
    maxDate,
    onSelect,
    selected,
    setScrollDate,
    setHighlight,
  } = props;
  const highlightedDate = props.highlightedDate || displayDate || selected || new Date();
  let delta = 0;

  if (
    [keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down].indexOf(
      e.keyCode,
    ) > -1 &&
    typeof e.preventDefault === 'function'
  ) {
    e.preventDefault();
  }

  switch (e.keyCode) {
    case keyCodes.enter:
      onSelect && onSelect(highlightedDate);
      return;
    case keyCodes.left:
      delta = -1;
      break;
    case keyCodes.right:
      delta = +1;
      break;
    case keyCodes.down:
      delta = +7;
      break;
    case keyCodes.up:
      delta = -7;
      break;
    default:
      delta = 0;
  }

  if (delta) {
    let newHighlightedDate = addDays(highlightedDate, delta);

    // Make sure the new highlighted date isn't before min / max
    if (isBefore(newHighlightedDate, minDate)) {
      newHighlightedDate = new Date(minDate);
    } else if (isAfter(newHighlightedDate, maxDate)) {
      newHighlightedDate = new Date(maxDate);
    }

    setScrollDate(newHighlightedDate);
    setHighlight(newHighlightedDate);
  }
}

import {compose, mapProps, withHandlers, withProps, withState} from 'recompose';
import {withDateSelection, withSelectedState} from './withDateSelection';
import addDays from 'date-fns/add_days';
import format from 'date-fns/format';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import {keyCodes} from '../utils';

const withHighlightedState = compose(
  withSelectedState,
  mapProps(props => ({
    ...props,
    isHighlighted: props.highlightedDate === props.date,
  }))
);

export const withKeyboardSupport = compose(
  withDateSelection,
  withState('highlightedDate', 'setHighlight'),
  withHandlers({
    DayComponent: ({DayComponent}) => withHighlightedState(DayComponent),
    onDayClick: ({setHighlight, onSelect}) => date => {
      onSelect(date);
      setHighlight(null);
    },
    onKeyDown: props => e => handleKeyDown(e, props),
  }),
  withProps(({highlightedDate}) => ({
    handlers: ['onKeyDown'],
    highlightedDate: format(highlightedDate, 'YYYY-MM-DD'),
  })),
);

function handleKeyDown(e, props) {
  const {
    minDate,
    maxDate,
    onDayClick,
    scrollToDate,
    setHighlight,
  } = props;
  const highlightedDate = props.highlightedDate || props.selected || new Date();
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
      onDayClick(highlightedDate);
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

    scrollToDate(newHighlightedDate);
    setHighlight(newHighlightedDate);
  }
}

// const {maxDate, minDate, onHighlightedDateChange, onKeyDown} = this.props;
// let {display, selectedDate, highlightedDate, showToday} = this.state;
// let delta = 0;
//
// onKeyDown(e);
//
// if ([keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down].indexOf(e.keyCode) > -1 && typeof e.preventDefault === 'function') {
//   e.preventDefault();
// }
//
// if (!selectedDate) {
//   selectedDate = new Date();
// }
//
// if (display === 'days') {
//   if (!highlightedDate) {
//     highlightedDate = new Date(selectedDate);
//     this.setState({highlightedDate});
//   }
//
//   switch (e.keyCode) {
//     case keyCodes.enter:
//       this.onDaySelect(new Date(highlightedDate), e);
//       return;
//     case keyCodes.left:
//       delta = -1;
//       break;
//     case keyCodes.right:
//       delta = +1;
//       break;
//     case keyCodes.down:
//       delta = +7;
//       break;
//     case keyCodes.up:
//       delta = -7;
//       break;
//     default:
//       delta = 0;
//   }
//
//   if (delta) {
//     let {rowHeight} = this.props;
//     let newHighlightedDate = addDays(highlightedDate, delta);
//
//     // Make sure the new highlighted date isn't before min / max
//     if (isBefore(newHighlightedDate, minDate)) {
//       newHighlightedDate = new Date(minDate);
//     } else if (isAfter(newHighlightedDate, maxDate)) {
//       newHighlightedDate = new Date(maxDate);
//     }
//
//     // Update the highlight indicator
//     this.clearHighlight();
//
//     // Scroll the view
//     if (!this.currentOffset) this.currentOffset = this.getCurrentOffset();
//     let currentOffset = this.currentOffset;
//     let monthOffset = this.getDateOffset(newHighlightedDate);
//     let navOffset = (showToday) ? 36 : 0;
//
//     let highlightedEl = this.highlightedEl = this.node.querySelector(`[data-date='${format(newHighlightedDate, 'YYYY-MM-DD')}']`);
//
//     // Edge-case: if the user tries to use the keyboard when the new highlighted date isn't rendered because it's too far off-screen
//     // We need to scroll to the month of the new highlighted date so it renders
//     if (!highlightedEl) {
//       this.scrollTo(monthOffset - navOffset);
//       return;
//     }
//
//     highlightedEl.classList.add(styles.day.highlighted);
//
//     let dateOffset = highlightedEl.offsetTop - rowHeight;
//     let newOffset = monthOffset + dateOffset;
//
//
//     if (currentOffset !== newOffset) {
//       this.currentOffset = newOffset;
//       this.scrollTo(newOffset - navOffset);
//     }
//
//     // Update the reference to the currently highlighted date
//     this.setState({
//       highlightedDate: newHighlightedDate,
//     }, () => onHighlightedDateChange(newHighlightedDate));
//
//   }
// } else if (display === 'years' && this._Years) {
//   this._Years.handleKeyDown(e);
// }

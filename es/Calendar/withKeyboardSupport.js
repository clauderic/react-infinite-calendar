import _withState from 'recompose/withState';
import _withProps from 'recompose/withProps';
import _withHandlers from 'recompose/withHandlers';
import _compose from 'recompose/compose';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import addDays from 'date-fns/add_days';
import format from 'date-fns/format';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import { keyCodes, withImmutableProps } from '../utils';

var enhanceDay = _withProps(function (props) {
  return {
    isHighlighted: props.highlightedDate === props.date
  };
});

export var withKeyboardSupport = _compose(_withState('highlightedDate', 'setHighlight'), withImmutableProps(function (_ref) {
  var DayComponent = _ref.DayComponent;
  return {
    DayComponent: enhanceDay(DayComponent)
  };
}), _withHandlers({
  onKeyDown: function onKeyDown(props) {
    return function (e) {
      return handleKeyDown(e, props);
    };
  }
}), _withProps(function (_ref2) {
  var highlightedDate = _ref2.highlightedDate,
      onKeyDown = _ref2.onKeyDown,
      onSelect = _ref2.onSelect,
      passThrough = _ref2.passThrough,
      setHighlight = _ref2.setHighlight;
  return {
    passThrough: _extends({}, passThrough, {
      Day: _extends({}, passThrough.Day, {
        highlightedDate: format(highlightedDate, 'YYYY-MM-DD'),
        onClick: function onClick(date) {
          setHighlight(null);
          passThrough.Day.onClick(date);
        }
      }),
      rootNode: { onKeyDown: onKeyDown }
    })
  };
}));

function handleKeyDown(e, props) {
  var minDate = props.minDate,
      maxDate = props.maxDate,
      onClick = props.passThrough.Day.onClick,
      setScrollDate = props.setScrollDate,
      setHighlight = props.setHighlight;

  var highlightedDate = getInitialDate(props);
  var delta = 0;

  if ([keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down].indexOf(e.keyCode) > -1 && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  switch (e.keyCode) {
    case keyCodes.enter:
      onClick && onClick(highlightedDate);
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
    var newHighlightedDate = addDays(highlightedDate, delta);

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

function getInitialDate(_ref3) {
  var highlightedDate = _ref3.highlightedDate,
      selected = _ref3.selected,
      displayDate = _ref3.displayDate;

  return highlightedDate || selected.start || displayDate || selected || new Date();
}
'use strict';

exports.__esModule = true;
exports.withKeyboardSupport = undefined;

var _withState2 = require('recompose/withState');

var _withState3 = _interopRequireDefault(_withState2);

var _withProps2 = require('recompose/withProps');

var _withProps3 = _interopRequireDefault(_withProps2);

var _withHandlers2 = require('recompose/withHandlers');

var _withHandlers3 = _interopRequireDefault(_withHandlers2);

var _compose2 = require('recompose/compose');

var _compose3 = _interopRequireDefault(_compose2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _add_days = require('date-fns/add_days');

var _add_days2 = _interopRequireDefault(_add_days);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _is_after = require('date-fns/is_after');

var _is_after2 = _interopRequireDefault(_is_after);

var _is_before = require('date-fns/is_before');

var _is_before2 = _interopRequireDefault(_is_before);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var enhanceDay = (0, _withProps3.default)(function (props) {
  return {
    isHighlighted: props.highlightedDate === props.date
  };
});

var withKeyboardSupport = exports.withKeyboardSupport = (0, _compose3.default)((0, _withState3.default)('highlightedDate', 'setHighlight'), (0, _utils.withImmutableProps)(function (_ref) {
  var DayComponent = _ref.DayComponent;
  return {
    DayComponent: enhanceDay(DayComponent)
  };
}), (0, _withHandlers3.default)({
  onKeyDown: function onKeyDown(props) {
    return function (e) {
      return handleKeyDown(e, props);
    };
  }
}), (0, _withProps3.default)(function (_ref2) {
  var highlightedDate = _ref2.highlightedDate,
      onKeyDown = _ref2.onKeyDown,
      onSelect = _ref2.onSelect,
      passThrough = _ref2.passThrough,
      setHighlight = _ref2.setHighlight;
  return {
    passThrough: _extends({}, passThrough, {
      Day: _extends({}, passThrough.Day, {
        highlightedDate: (0, _format2.default)(highlightedDate, 'YYYY-MM-DD'),
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

  if ([_utils.keyCodes.left, _utils.keyCodes.up, _utils.keyCodes.right, _utils.keyCodes.down].indexOf(e.keyCode) > -1 && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  switch (e.keyCode) {
    case _utils.keyCodes.enter:
      onClick && onClick(highlightedDate);
      return;
    case _utils.keyCodes.left:
      delta = -1;
      break;
    case _utils.keyCodes.right:
      delta = +1;
      break;
    case _utils.keyCodes.down:
      delta = +7;
      break;
    case _utils.keyCodes.up:
      delta = -7;
      break;
    default:
      delta = 0;
  }

  if (delta) {
    var newHighlightedDate = (0, _add_days2.default)(highlightedDate, delta);

    // Make sure the new highlighted date isn't before min / max
    if ((0, _is_before2.default)(newHighlightedDate, minDate)) {
      newHighlightedDate = new Date(minDate);
    } else if ((0, _is_after2.default)(newHighlightedDate, maxDate)) {
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
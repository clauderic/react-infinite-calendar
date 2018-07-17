'use strict';

exports.__esModule = true;
exports.withRange = exports.enhanceDay = exports.EVENT_TYPE = undefined;

var _withState2 = require('recompose/withState');

var _withState3 = _interopRequireDefault(_withState2);

var _withPropsOnChange2 = require('recompose/withPropsOnChange');

var _withPropsOnChange3 = _interopRequireDefault(_withPropsOnChange2);

var _withProps2 = require('recompose/withProps');

var _withProps3 = _interopRequireDefault(_withProps2);

var _compose2 = require('recompose/compose');

var _compose3 = _interopRequireDefault(_compose2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _ = require('./');

var _utils = require('../utils');

var _is_before = require('date-fns/is_before');

var _is_before2 = _interopRequireDefault(_is_before);

var _withRange = require('../Header/withRange');

var _withRange2 = _interopRequireDefault(_withRange);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _add_days = require('date-fns/add_days');

var _add_days2 = _interopRequireDefault(_add_days);

var _sub_days = require('date-fns/sub_days');

var _sub_days2 = _interopRequireDefault(_sub_days);

var _difference_in_days = require('date-fns/difference_in_days');

var _difference_in_days2 = _interopRequireDefault(_difference_in_days);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var styles = {
  'root': 'Cal__Day__root',
  'enabled': 'Cal__Day__enabled',
  'highlighted': 'Cal__Day__highlighted',
  'today': 'Cal__Day__today',
  'disabled': 'Cal__Day__disabled',
  'selected': 'Cal__Day__selected',
  'month': 'Cal__Day__month',
  'year': 'Cal__Day__year',
  'selection': 'Cal__Day__selection',
  'day': 'Cal__Day__day',
  'hasMonth': 'Cal__Day__hasMonth',
  'hasYear': 'Cal__Day__hasYear',
  'range': 'Cal__Day__range',
  'start': 'Cal__Day__start',
  'end': 'Cal__Day__end',
  'betweenRange': 'Cal__Day__betweenRange'
};


var isTouchDevice = false;

var EVENT_TYPE = exports.EVENT_TYPE = {
  END: 3,
  HOVER: 2,
  START: 1
};

// Enhance Day component to display selected state based on an array of selected dates
var enhanceDay = exports.enhanceDay = (0, _withPropsOnChange3.default)(['selected'], function (_ref) {
  var _classNames;

  var date = _ref.date,
      selected = _ref.selected,
      theme = _ref.theme;

  var isSelected = date >= selected.start && date <= selected.end;
  var isStart = date === selected.start;
  var isEnd = date === selected.end;
  var isRange = !(isStart && isEnd);
  var style = isRange && (isStart && { backgroundColor: theme.accentColor } || isEnd && { borderColor: theme.accentColor });

  return {
    className: isSelected && isRange && (0, _classnames2.default)(styles.range, (_classNames = {}, _classNames[styles.start] = isStart, _classNames[styles.betweenRange] = !isStart && !isEnd, _classNames[styles.end] = isEnd, _classNames)),
    isSelected: isSelected,
    selectionStyle: style
  };
});

// Enhancer to handle selecting and displaying multiple dates
var withRange = (0, _compose3.default)(_.withDefaultProps, (0, _withState3.default)('scrollDate', 'setScrollDate', getInitialDate), (0, _withState3.default)('displayKey', 'setDisplayKey', getInitialDate), (0, _withState3.default)('selectionStart', 'setSelectionStart', null), (0, _utils.withImmutableProps)(function (_ref2) {
  var DayComponent = _ref2.DayComponent,
      HeaderComponent = _ref2.HeaderComponent,
      YearsComponent = _ref2.YearsComponent;
  return {
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: (0, _withRange2.default)(HeaderComponent)
  };
}), (0, _withProps3.default)(function (_ref3) {
  var displayKey = _ref3.displayKey,
      passThrough = _ref3.passThrough,
      selected = _ref3.selected,
      setDisplayKey = _ref3.setDisplayKey,
      props = _objectWithoutProperties(_ref3, ['displayKey', 'passThrough', 'selected', 'setDisplayKey']);

  return {
    /* eslint-disable sort-keys */
    passThrough: _extends({}, passThrough, {
      Day: {
        onClick: function onClick(date) {
          return handleSelect(date, _extends({ selected: selected }, props));
        },
        handlers: {
          onMouseOver: !isTouchDevice && props.selectionStart ? function (e) {
            return handleMouseOver(e, _extends({ selected: selected }, props));
          } : null
        }
      },
      Years: {
        selected: selected && selected[displayKey],
        onSelect: function onSelect(date) {
          return handleYearSelect(date, _extends({ displayKey: displayKey, selected: selected }, props));
        }
      },
      Header: {
        onYearClick: function onYearClick(date, e, key) {
          return setDisplayKey(key || 'start');
        }
      }
    }),
    selected: {
      start: selected && (0, _format2.default)(selected.start, 'YYYY-MM-DD'),
      end: selected && (0, _format2.default)(selected.end, 'YYYY-MM-DD')
    }
  };
}));

exports.withRange = withRange;
function getSortedSelection(_ref4) {
  var start = _ref4.start,
      end = _ref4.end;

  return (0, _is_before2.default)(start, end) ? { start: start, end: end } : { start: end, end: start };
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
function getLimitedRange(rangeLimit, start, end) {
  if (!rangeLimit) return { start: start, end: end };
  var range = (0, _difference_in_days2.default)(end, start);
  var modifier = range > 0 ? _add_days2.default : _sub_days2.default;

  var endDate = Math.abs(range) >= rangeLimit ? modifier(start, rangeLimit - 1) : end;

  return {
    start: start,
    end: endDate
  };
}

/**
 * Adjusts the selection range during hover according to a provided function.
 *
 * @param  {function} adjustRangeFunc Function taking (selectionStart, date) (in YYYY-MM-DD)
 *                                    returning some of { start, end, startOverride } (YYYY-MM-DD) to be changed
 * @param  {Date}     selectionStart  Date first clicked to start range selection
 * @param  {Date}     date            Hovered date
 * @return {Object} Return value of adjustRangeFunc. (With start, end added if missing)
 */
function getAdjustedRange(adjustRangeFunc, selectionStart, date) {
  if (!adjustRangeFunc) return { start: selectionStart, end: date };

  var desired = adjustRangeFunc((0, _format2.default)(selectionStart, 'YYYY-MM-DD'), (0, _format2.default)(date, 'YYYY-MM-DD')) || {};

  return {
    startOverride: desired.startOverride ? (0, _parse2.default)(desired.startOverride) : null,
    start: desired.start ? (0, _parse2.default)(desired.start) : desired.startOverride ? (0, _parse2.default)(desired.startOverride) : selectionStart,
    end: desired.end ? (0, _parse2.default)(desired.end) : date
  };
}

function handleSelect(date, _ref5) {
  var onSelect = _ref5.onSelect,
      adjustRangeFunc = _ref5.adjustRangeFunc,
      rangeLimit = _ref5.rangeLimit,
      selected = _ref5.selected,
      selectionStart = _ref5.selectionStart,
      setSelectionStart = _ref5.setSelectionStart;

  if (selectionStart) {
    if (adjustRangeFunc) {
      var adjustment = getAdjustedRange(adjustRangeFunc, selectionStart, date);
      // Don't need to cope with adjustment.startOverride in handleSelect, as we're about to setSelectionStart(null) anyway.
      onSelect(_extends({
        eventType: EVENT_TYPE.END
      }, getSortedSelection(getLimitedRange(rangeLimit, adjustment.start, adjustment.end))));
      setSelectionStart(null);
    } else {
      onSelect(_extends({
        eventType: EVENT_TYPE.END
      }, getSortedSelection(getLimitedRange(rangeLimit, selectionStart, date))));
      setSelectionStart(null);
    }
  } else {
    onSelect({ eventType: EVENT_TYPE.START, start: date, end: date });
    setSelectionStart(date);
  }
}

function handleMouseOver(e, _ref6) {
  var onSelect = _ref6.onSelect,
      adjustRangeFunc = _ref6.adjustRangeFunc,
      rangeLimit = _ref6.rangeLimit,
      selectionStart = _ref6.selectionStart,
      setSelectionStart = _ref6.setSelectionStart;

  var dateStr = e.target.getAttribute('data-date');
  var date = dateStr && (0, _parse2.default)(dateStr);

  if (!date) {
    return;
  }

  if (adjustRangeFunc) {
    var adjustment = getAdjustedRange(adjustRangeFunc, selectionStart, date);
    if (adjustment.startOverride) {
      onSelect({ eventType: EVENT_TYPE.START, start: adjustment.startOverride, end: adjustment.startOverride });
      setSelectionStart(adjustment.startOverride);
    }
    onSelect(_extends({
      eventType: EVENT_TYPE.HOVER
    }, getSortedSelection(getLimitedRange(rangeLimit, adjustment.start, adjustment.end))));
  } else {
    onSelect(_extends({
      eventType: EVENT_TYPE.HOVER
    }, getSortedSelection(getLimitedRange(rangeLimit, selectionStart, date))));
  }
}

function handleYearSelect(date, _ref7) {
  var _Object$assign;

  var displayKey = _ref7.displayKey,
      onSelect = _ref7.onSelect,
      selected = _ref7.selected,
      setScrollDate = _ref7.setScrollDate;


  setScrollDate(date);
  onSelect(getSortedSelection(Object.assign({}, selected, (_Object$assign = {}, _Object$assign[displayKey] = (0, _parse2.default)(date), _Object$assign))));
}

function getInitialDate(_ref8) {
  var selected = _ref8.selected;

  return selected && selected.start || new Date();
}

if (typeof window !== 'undefined') {
  window.addEventListener('touchstart', function onTouch() {
    isTouchDevice = true;

    window.removeEventListener('touchstart', onTouch, false);
  });
}
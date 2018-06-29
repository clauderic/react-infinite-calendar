'use strict';

exports.__esModule = true;
exports.withDateSelection = exports.enhanceDay = undefined;

var _withState2 = require('recompose/withState');

var _withState3 = _interopRequireDefault(_withState2);

var _withPropsOnChange2 = require('recompose/withPropsOnChange');

var _withPropsOnChange3 = _interopRequireDefault(_withPropsOnChange2);

var _withProps2 = require('recompose/withProps');

var _withProps3 = _interopRequireDefault(_withProps2);

var _compose2 = require('recompose/compose');

var _compose3 = _interopRequireDefault(_compose2);

var _ = require('./');

var _utils = require('../utils');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var enhanceDay = exports.enhanceDay = (0, _withPropsOnChange3.default)(['selected'], function (props) {
  return {
    isSelected: props.selected === props.date
  };
});

var enhanceYear = (0, _withPropsOnChange3.default)(['selected'], function (_ref) {
  var selected = _ref.selected;
  return {
    selected: (0, _parse2.default)(selected)
  };
});

// Enhancer to handle selecting and displaying a single date
var withDateSelection = (0, _compose3.default)(_.withDefaultProps, (0, _utils.withImmutableProps)(function (_ref2) {
  var DayComponent = _ref2.DayComponent,
      onSelect = _ref2.onSelect,
      setScrollDate = _ref2.setScrollDate,
      YearsComponent = _ref2.YearsComponent;
  return {
    DayComponent: enhanceDay(DayComponent),
    YearsComponent: enhanceYear(YearsComponent)
  };
}), (0, _withState3.default)('scrollDate', 'setScrollDate', function (props) {
  return props.selected || new Date();
}), (0, _withProps3.default)(function (_ref3) {
  var _onSelect = _ref3.onSelect,
      setScrollDate = _ref3.setScrollDate,
      props = _objectWithoutProperties(_ref3, ['onSelect', 'setScrollDate']);

  var selected = (0, _utils.sanitizeDate)(props.selected, props);

  return {
    passThrough: {
      Day: {
        onClick: _onSelect
      },
      Years: {
        onSelect: function onSelect(year) {
          return handleYearSelect(year, { onSelect: _onSelect, selected: selected, setScrollDate: setScrollDate });
        }
      }
    },
    selected: selected && (0, _format2.default)(selected, 'YYYY-MM-DD')
  };
}));

exports.withDateSelection = withDateSelection;
function handleYearSelect(date, _ref4) {
  var setScrollDate = _ref4.setScrollDate,
      selected = _ref4.selected,
      onSelect = _ref4.onSelect;

  var newDate = (0, _parse2.default)(date);

  onSelect(newDate);
  setScrollDate(newDate);
}
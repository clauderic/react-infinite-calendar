'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _defaultSelectionRenderer = require('./defaultSelectionRenderer');

var _defaultSelectionRenderer2 = _interopRequireDefault(_defaultSelectionRenderer);

var _Slider = require('./Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.default = (0, _utils.withImmutableProps)(function (_ref) {
  var renderSelection = _ref.renderSelection,
      setDisplayDate = _ref.setDisplayDate;
  return {
    renderSelection: function renderSelection(values, _ref2) {
      var scrollToDate = _ref2.scrollToDate,
          displayDate = _ref2.displayDate,
          props = _objectWithoutProperties(_ref2, ['scrollToDate', 'displayDate']);

      if (!values.length) {
        return null;
      }

      var dates = values.sort();
      var index = values.indexOf((0, _format2.default)((0, _parse2.default)(displayDate), 'YYYY-MM-DD'));

      return _react2.default.createElement(
        _Slider2.default,
        {
          index: index !== -1 ? index : dates.length - 1,
          onChange: function onChange(index) {
            return setDisplayDate(dates[index], function () {
              return setTimeout(function () {
                return scrollToDate(dates[index], 0, true);
              }, 50);
            });
          }
        },
        dates.map(function (value) {
          return (0, _defaultSelectionRenderer2.default)(value, _extends({}, props, {
            key: index,
            scrollToDate: scrollToDate,
            shouldAnimate: false
          }));
        })
      );
    }
  };
});
module.exports = exports['default'];
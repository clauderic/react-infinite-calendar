'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('../utils');

var _defaultSelectionRenderer = require('./defaultSelectionRenderer');

var _defaultSelectionRenderer2 = _interopRequireDefault(_defaultSelectionRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'root': 'Cal__Header__root',
  'landscape': 'Cal__Header__landscape',
  'dateWrapper': 'Cal__Header__dateWrapper',
  'day': 'Cal__Header__day',
  'wrapper': 'Cal__Header__wrapper',
  'blank': 'Cal__Header__blank',
  'active': 'Cal__Header__active',
  'year': 'Cal__Header__year',
  'date': 'Cal__Header__date',
  'range': 'Cal__Header__range'
};
exports.default = (0, _utils.withImmutableProps)(function (_ref) {
  var renderSelection = _ref.renderSelection;
  return {
    renderSelection: function renderSelection(values, props) {
      if (!values || !values.start && !values.end) {
        return null;
      }
      if (values.start === values.end) {
        return (0, _defaultSelectionRenderer2.default)(values.start, props);
      }

      var dateFormat = props.locale && props.locale.headerFormat || 'MMM Do';

      return _react2.default.createElement(
        'div',
        { className: styles.range, style: { color: props.theme.headerColor } },
        (0, _defaultSelectionRenderer2.default)(values.start, _extends({}, props, { dateFormat: dateFormat, key: 'start', shouldAnimate: false })),
        (0, _defaultSelectionRenderer2.default)(values.end, _extends({}, props, { dateFormat: dateFormat, key: 'end', shouldAnimate: false }))
      );
    }
  };
});
module.exports = exports['default'];
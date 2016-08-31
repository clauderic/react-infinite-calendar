'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _range = require('lodash/range');

var _range2 = _interopRequireDefault(_range);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
	'root': 'Cal__Weekdays__root',
	'day': 'Cal__Weekdays__day',
	'weekColumn': 'Cal__Weekdays__weekColumn'
};

var Weekdays = function (_Component) {
	_inherits(Weekdays, _Component);

	function Weekdays() {
		_classCallCheck(this, Weekdays);

		return _possibleConstructorReturn(this, (Weekdays.__proto__ || Object.getPrototypeOf(Weekdays)).apply(this, arguments));
	}

	_createClass(Weekdays, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var theme = _props.theme;
			var locale = _props.locale;


			return _react2.default.createElement(
				'ul',
				{ className: style.root, style: { backgroundColor: theme.weekdayColor, color: theme.textColor.default } },
				(0, _range2.default)(0, 8).map(function (val, index) {
					if (index === 0) {
						return _react2.default.createElement('li', { key: 'Week-column', className: style.weekColumn });
					} else {
						return _react2.default.createElement(
							'li',
							{ key: 'Weekday-' + index, className: style.day },
							(0, _moment2.default)().weekday(index - 1).format('dd').substring(1, 0)
						);
					}
				})
			);
		}
	}]);

	return Weekdays;
}(_react.Component);

Weekdays.propTypes = {
	locale: _react.PropTypes.object,
	theme: _react.PropTypes.object
};
exports.default = Weekdays;
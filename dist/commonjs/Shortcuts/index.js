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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
	'root': 'Cal__Shortcuts__root',
	'shortcut': 'Cal__Shortcuts__shortcut',
	'today': 'Cal__Shortcuts__today'
};

var Shortcuts = function (_Component) {
	_inherits(Shortcuts, _Component);

	function Shortcuts() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Shortcuts);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Shortcuts.__proto__ || Object.getPrototypeOf(Shortcuts)).call.apply(_ref, [this].concat(args))), _this), _this.handleTodayClick = function () {
			var handleTodayClick = _this.props.handleTodayClick;


			handleTodayClick((0, _moment2.default)());
		}, _this.handleJumpClick = function (distance) {
			var _this$props = _this.props;
			var scrollToDate = _this$props.scrollToDate;
			var handleTodayClick = _this$props.handleTodayClick;


			handleTodayClick((0, _moment2.default)().add(distance, 'weeks'));
			scrollToDate((0, _moment2.default)().add(distance, 'weeks'), 0);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Shortcuts, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var theme = _props.theme;
			var locale = _props.locale;


			return _react2.default.createElement(
				'ul',
				{ className: style.root, style: { backgroundColor: '#ececec' } },
				_react2.default.createElement(
					'li',
					{ key: 'Shortcut-0', className: (0, _classnames2.default)(style.root, style.shortcut, style.today) },
					_react2.default.createElement(
						'span',
						{ onClick: this.handleTodayClick },
						locale.todayLabel.long
					)
				),
				_react2.default.createElement(
					'li',
					{ key: 'Shortcut-1', className: (0, _classnames2.default)(style.root, style.shortcut) },
					_react2.default.createElement(
						'span',
						{ onClick: function onClick() {
								return _this2.handleJumpClick(4);
							} },
						'+4'
					)
				),
				_react2.default.createElement(
					'li',
					{ key: 'Shortcut-2', className: (0, _classnames2.default)(style.root, style.shortcut) },
					_react2.default.createElement(
						'span',
						{ onClick: function onClick() {
								return _this2.handleJumpClick(5);
							} },
						'+5'
					)
				),
				_react2.default.createElement(
					'li',
					{ key: 'Shortcut-3', className: (0, _classnames2.default)(style.root, style.shortcut) },
					_react2.default.createElement(
						'span',
						{ onClick: function onClick() {
								return _this2.handleJumpClick(6);
							} },
						'+6'
					)
				),
				_react2.default.createElement(
					'li',
					{ key: 'Shortcut-4', className: (0, _classnames2.default)(style.root, style.shortcut) },
					_react2.default.createElement(
						'span',
						{ onClick: function onClick() {
								return _this2.handleJumpClick(7);
							} },
						'+7'
					)
				),
				_react2.default.createElement(
					'li',
					{ key: 'Shortcut-5', className: (0, _classnames2.default)(style.root, style.shortcut) },
					_react2.default.createElement(
						'span',
						{ onClick: function onClick() {
								return _this2.handleJumpClick(8);
							} },
						'+8'
					)
				),
				_react2.default.createElement(
					'li',
					{ key: 'Shortcut-6', className: (0, _classnames2.default)(style.root, style.shortcut) },
					_react2.default.createElement(
						'span',
						{ onClick: function onClick() {
								return _this2.handleJumpClick(9);
							} },
						'+9'
					)
				)
			);
		}
	}]);

	return Shortcuts;
}(_react.Component);

Shortcuts.propTypes = {
	locale: _react.PropTypes.object,
	theme: _react.PropTypes.object,
	handleTodayClick: _react.PropTypes.func,
	scrollToDate: _react.PropTypes.func
};
exports.default = Shortcuts;
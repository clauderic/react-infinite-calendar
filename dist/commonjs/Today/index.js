'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
	'root': 'Cal__Today__root',
	'show': 'Cal__Today__show',
	'chevron': 'Cal__Today__chevron',
	'chevronUp': 'Cal__Today__chevronUp',
	'chevronDown': 'Cal__Today__chevronDown'
};

var Today = function (_Component) {
	_inherits(Today, _Component);

	function Today() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		_classCallCheck(this, Today);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Today)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.scrollToToday = function () {
			var scrollToDate = _this.props.scrollToDate;


			scrollToDate((0, _moment2.default)(), -40);
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Today, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			var _props = this.props;
			var locale = _props.locale;
			var show = _props.show;
			var theme = _props.theme;

			return nextProps.locale !== locale || nextProps.show !== show || nextProps.theme !== theme;
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var _props2 = this.props;
			var locale = _props2.locale;
			var show = _props2.show;
			var theme = _props2.theme;

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)(style.root, (_classNames = {}, _defineProperty(_classNames, style.show, show), _defineProperty(_classNames, style.chevronUp, show === 1), _defineProperty(_classNames, style.chevronDown, show === -1), _classNames)), style: { color: theme.floatingNav.color, backgroundColor: theme.floatingNav.background }, onClick: this.scrollToToday, ref: 'node' },
				_react2.default.createElement(
					'div',
					{ className: style.wrapper },
					locale.todayLabel.long,
					_react2.default.createElement('img', { className: style.chevron, width: '14', src: 'data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path fill="' + (theme.floatingNav.chevron || theme.floatingNav.color) + '" d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z"/></svg>' })
				)
			);
		}
	}]);

	return Today;
}(_react.Component);

Today.propTypes = {
	locale: _react.PropTypes.object,
	scrollToDate: _react.PropTypes.func,
	show: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
	theme: _react.PropTypes.object
};
exports.default = Today;
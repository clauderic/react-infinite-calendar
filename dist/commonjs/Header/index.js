'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsShallowCompare = require('react-addons-shallow-compare');

var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
	'root': 'Cal__Header__root',
	'blank': 'Cal__Header__blank',
	'wrapper': 'Cal__Header__wrapper',
	'landscape': 'Cal__Header__landscape',
	'dateWrapper': 'Cal__Header__dateWrapper',
	'day': 'Cal__Header__day',
	'active': 'Cal__Header__active',
	'year': 'Cal__Header__year',
	'date': 'Cal__Header__date'
};
var animation = {
	'enter': 'Cal__Animation__enter',
	'enterActive': 'Cal__Animation__enterActive',
	'leave': 'Cal__Animation__leave',
	'leaveActive': 'Cal__Animation__leaveActive'
};

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
		}
	}, {
		key: 'render',
		value: function render() {
			var _classNames;

			var _props = this.props;
			var display = _props.display;
			var layout = _props.layout;
			var locale = _props.locale;
			var scrollToDate = _props.scrollToDate;
			var selectedDate = _props.selectedDate;
			var setDisplay = _props.setDisplay;
			var shouldHeaderAnimate = _props.shouldHeaderAnimate;
			var theme = _props.theme;

			var values = selectedDate && [{
				item: 'year',
				value: selectedDate.year(),
				active: display === 'years',
				title: display === 'days' ? 'Change year' : null,
				handleClick: function handleClick(e) {
					e && e.stopPropagation();
					setDisplay('years');
				}
			}, {
				item: 'day',
				key: selectedDate.format('YYYYMMDD'),
				value: selectedDate.format(locale.headerFormat),
				active: display === 'days',
				title: display === 'days' ? 'Scroll to ' + selectedDate.format(locale.headerFormat) : null,
				handleClick: function handleClick(e) {
					e && e.stopPropagation();

					if (display !== 'days') {
						setDisplay('days');
					} else if (selectedDate) {
						scrollToDate(selectedDate, -40);
					}
				}
			}];

			return _react2.default.createElement(
				'div',
				{ className: (0, _classnames2.default)(style.root, (_classNames = {}, _defineProperty(_classNames, style.blank, !selectedDate), _defineProperty(_classNames, style.landscape, layout == 'landscape'), _classNames)), style: theme && { backgroundColor: theme.headerColor, color: theme.textColor.active } },
				selectedDate ? _react2.default.createElement(
					'div',
					{ className: style.wrapper, 'aria-label': selectedDate.format(locale.headerFormat + ' YYYY') },
					values.map(function (_ref) {
						var handleClick = _ref.handleClick;
						var item = _ref.item;
						var key = _ref.key;
						var value = _ref.value;
						var active = _ref.active;
						var title = _ref.title;

						return _react2.default.createElement(
							'div',
							{ key: item, className: (0, _classnames2.default)(style.dateWrapper, style[item], _defineProperty({}, style.active, active)), title: title },
							_react2.default.createElement(
								_reactAddonsCssTransitionGroup2.default,
								{ transitionName: animation, transitionEnterTimeout: 250, transitionLeaveTimeout: 250, transitionEnter: shouldHeaderAnimate, transitionLeave: shouldHeaderAnimate },
								_react2.default.createElement(
									'span',
									{ key: item + '-' + (key || value), className: style.date, 'aria-hidden': true, onClick: handleClick },
									value
								)
							)
						);
					})
				) : _react2.default.createElement(
					'div',
					{ className: style.wrapper },
					locale.blank
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

Header.propTypes = {
	layout: _react.PropTypes.string,
	locale: _react.PropTypes.object,
	onClick: _react.PropTypes.func,
	selectedDate: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.bool]),
	shouldHeaderAnimate: _react.PropTypes.bool,
	theme: _react.PropTypes.object,
	display: _react.PropTypes.string
};
exports.default = Header;
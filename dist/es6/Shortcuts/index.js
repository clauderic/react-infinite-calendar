import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import moment from 'moment';
import range from 'lodash/range';
import { scrollbarSize } from '../utils';
import classNames from 'classnames';
var style = {
	'root': 'Cal__Shortcuts__root',
	'shortcut': 'Cal__Shortcuts__shortcut',
	'today': 'Cal__Shortcuts__today'
};

var Shortcuts = function (_Component) {
	babelHelpers.inherits(Shortcuts, _Component);

	function Shortcuts() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		babelHelpers.classCallCheck(this, Shortcuts);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Shortcuts)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.handleTodayClick = function () {
			var handleTodayClick = _this.props.handleTodayClick;


			handleTodayClick(moment());
		}, _this.handleJumpClick = function (distance) {
			var _this$props = _this.props;
			var scrollToDate = _this$props.scrollToDate;
			var handleTodayClick = _this$props.handleTodayClick;


			handleTodayClick(moment().add(distance, 'weeks'));
			scrollToDate(moment().add(distance, 'weeks'), 0);
		}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
	}

	babelHelpers.createClass(Shortcuts, [{
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			return shallowCompare(this, nextProps);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var theme = _props.theme;
			var locale = _props.locale;


			return React.createElement(
				'ul',
				{ className: style.root, style: { backgroundColor: '#ececec' } },
				React.createElement(
					'li',
					{ key: 'Shortcut-0', className: classNames(style.root, style.shortcut, style.today), onClick: this.handleTodayClick },
					locale.todayLabel.long
				),
				React.createElement(
					'li',
					{ key: 'Shortcut-1', className: classNames(style.root, style.shortcut), onClick: function onClick() {
							return _this2.handleJumpClick(4);
						} },
					'+4'
				),
				React.createElement(
					'li',
					{ key: 'Shortcut-2', className: classNames(style.root, style.shortcut), onClick: function onClick() {
							return _this2.handleJumpClick(5);
						} },
					'+5'
				),
				React.createElement(
					'li',
					{ key: 'Shortcut-3', className: classNames(style.root, style.shortcut), onClick: function onClick() {
							return _this2.handleJumpClick(6);
						} },
					'+6'
				),
				React.createElement(
					'li',
					{ key: 'Shortcut-4', className: classNames(style.root, style.shortcut), onClick: function onClick() {
							return _this2.handleJumpClick(7);
						} },
					'+7'
				),
				React.createElement(
					'li',
					{ key: 'Shortcut-5', className: classNames(style.root, style.shortcut), onClick: function onClick() {
							return _this2.handleJumpClick(8);
						} },
					'+8'
				),
				React.createElement(
					'li',
					{ key: 'Shortcut-6', className: classNames(style.root, style.shortcut), onClick: function onClick() {
							return _this2.handleJumpClick(9);
						} },
					'+9'
				)
			);
		}
	}]);
	return Shortcuts;
}(Component);

Shortcuts.propTypes = {
	locale: PropTypes.object,
	theme: PropTypes.object,
	handleTodayClick: PropTypes.func,
	scrollToDate: PropTypes.func
};
export default Shortcuts;
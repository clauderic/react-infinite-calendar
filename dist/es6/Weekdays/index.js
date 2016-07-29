import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import moment from 'moment';
import range from 'lodash/range';
import { scrollbarSize } from '../utils';
var style = {
	'root': 'Cal__Weekdays__root',
	'day': 'Cal__Weekdays__day',
	'today': 'Cal__Weekdays__today'
};

var Weekdays = function (_Component) {
	babelHelpers.inherits(Weekdays, _Component);

	function Weekdays() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		babelHelpers.classCallCheck(this, Weekdays);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Weekdays)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.scrollToToday = function () {
			var scrollToDate = _this.props.scrollToDate;

			scrollToDate(moment(), -40);
		}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
	}

	babelHelpers.createClass(Weekdays, [{
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
				{ className: style.root, style: { backgroundColor: theme.weekdayColor, color: theme.textColor.default, paddingRight: scrollbarSize }, 'aria-hidden': true },
				range(0, 8).map(function (val, index) {
					if (index === 0) {
						return React.createElement(
							'li',
							{ key: 'Weekday-today', className: style.today + " " + style.day, onClick: _this2.scrollToToday },
							locale.todayLabel.long
						);
					} else {
						return React.createElement(
							'li',
							{ key: 'Weekday-' + index, className: style.day },
							moment().weekday(index - 1).format('dd')
						);
					}
				})
			);
		}
	}]);
	return Weekdays;
}(Component);

Weekdays.propTypes = {
	locale: PropTypes.object,
	theme: PropTypes.object,
	scrollToDate: PropTypes.func
};
export default Weekdays;
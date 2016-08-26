import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import moment from 'moment';
var style = {
	'root': 'Cal__Today__root',
	'show': 'Cal__Today__show',
	'chevron': 'Cal__Today__chevron',
	'chevronUp': 'Cal__Today__chevronUp',
	'chevronDown': 'Cal__Today__chevronDown'
};

var Today = function (_Component) {
	babelHelpers.inherits(Today, _Component);

	function Today() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		babelHelpers.classCallCheck(this, Today);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Today)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.scrollToToday = function () {
			var scrollToDate = _this.props.scrollToDate;


			scrollToDate(moment(), -40);
		}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
	}

	babelHelpers.createClass(Today, [{
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

			return React.createElement(
				'div',
				{ className: classNames(style.root, (_classNames = {}, babelHelpers.defineProperty(_classNames, style.show, show), babelHelpers.defineProperty(_classNames, style.chevronUp, show === 1), babelHelpers.defineProperty(_classNames, style.chevronDown, show === -1), _classNames)), style: { color: theme.floatingNav.color, backgroundColor: theme.floatingNav.background }, onClick: this.scrollToToday, ref: 'node' },
				React.createElement(
					'div',
					{ className: style.wrapper },
					locale.todayLabel.long,
					React.createElement('img', { className: style.chevron, width: '14', src: 'data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path fill="' + (theme.floatingNav.chevron || theme.floatingNav.color) + '" d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z"/></svg>' })
				)
			);
		}
	}]);
	return Today;
}(Component);

Today.propTypes = {
	locale: PropTypes.object,
	scrollToDate: PropTypes.func,
	show: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
	theme: PropTypes.object
};
export default Today;
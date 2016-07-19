'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Week;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	'root': 'Cal__Week__root',
	'selected': 'Cal__Week__selected',
	'selection': 'Cal__Week__selection',
	'weekContainer': 'Cal__Week__weekContainer',
	'weekItem': 'Cal__Week__weekItem',
	'weekNumber': 'Cal__Week__weekNumber',
	'weekDistance': 'Cal__Week__weekDistance'
};

function Week(_ref) {
	var currentYear = _ref.currentYear;
	var date = _ref.date;
	var day = _ref.day;
	var isDisabled = _ref.isDisabled;
	var isSelected = _ref.isSelected;
	var monthShort = _ref.monthShort;
	var locale = _ref.locale;
	var theme = _ref.theme;
	var rowHeight = _ref.rowHeight;
	var mmt = date.date;
	var yyyymmdd = date.yyyymmdd;

	var weekNumber = date.date.format('ww');
	var weekDistance = (0, _moment2.default)().format('ww') - weekNumber;
	var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" + Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";

	return _react2.default.createElement(
		'li',
		{ className: '' + style.root + (isSelected ? ' ' + style.selected : '') },
		_react2.default.createElement(
			'div',
			{ className: '' + style.weekContainer, style: { height: rowHeight } },
			_react2.default.createElement(
				'span',
				{ className: style.weekItem + ' ' + style.weekNumber },
				'v.',
				weekNumber
			),
			_react2.default.createElement(
				'span',
				{ className: style.weekItem + ' ' + style.weekDistance },
				weekDistanceLabel
			)
		)
	);
}
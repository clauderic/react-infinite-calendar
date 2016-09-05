'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Day;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	'root': 'Cal__Day__root',
	'today': 'Cal__Day__today',
	'weekSelected': 'Cal__Day__weekSelected',
	'selected': 'Cal__Day__selected',
	'month': 'Cal__Day__month',
	'year': 'Cal__Day__year',
	'selection': 'Cal__Day__selection',
	'day': 'Cal__Day__day',
	'dayHiddenText': 'Cal__Day__dayHiddenText',
	'disabled': 'Cal__Day__disabled',
	'weekend': 'Cal__Day__weekend',
	'past': 'Cal__Day__past'
};

function Day(_ref) {
	var currentYear = _ref.currentYear;
	var hideYearsOnDate = _ref.hideYearsOnDate;
	var date = _ref.date;
	var day = _ref.day;
	var handleDayClick = _ref.handleDayClick;
	var isDisabled = _ref.isDisabled;
	var isToday = _ref.isToday;
	var isSelected = _ref.isSelected;
	var isWeekSelected = _ref.isWeekSelected;
	var monthShort = _ref.monthShort;
	var locale = _ref.locale;
	var theme = _ref.theme;
	var showSelectionText = _ref.showSelectionText;
	var mmt = date.date;

	var year = mmt.year();
	var isWeekend = date.date.day() === 6 || date.date.day() === 0;
	var isPast = (0, _moment2.default)().startOf('day').diff(date.date) > 0;

	return _react2.default.createElement(
		'li',
		{
			style: (isToday ? { 'color': theme.textColor.active } : null, isWeekSelected ? { 'backgroundColor': theme.selectedWeekBackground } : null),
			className: '' + style.root + (isToday ? ' ' + style.today : '') + (isSelected ? ' ' + style.selected : '') + (isDisabled ? ' ' + style.disabled : ' ' + style.enabled) + (isWeekSelected ? ' ' + style.weekSelected : '') + (isWeekend ? ' ' + style.weekend : '') + (isPast ? ' ' + style.past : ''),
			'data-date': date.date.format('YYYY-MM-DD'),
			onClick: !isDisabled && handleDayClick ? handleDayClick.bind(this, mmt) : null
		},
		showSelectionText && day === 1 && _react2.default.createElement(
			'span',
			{ className: style.month },
			monthShort
		),
		_react2.default.createElement(
			'span',
			null,
			day
		),
		showSelectionText && day === 1 && currentYear !== year && !hideYearsOnDate && _react2.default.createElement(
			'span',
			{ className: style.year },
			year
		),
		isSelected && _react2.default.createElement(
			'div',
			{ className: '' + style.selection + (isToday ? ' ' + style.today : ''), style: { backgroundColor: typeof theme.selectionColor == 'function' ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active } },
			showSelectionText && _react2.default.createElement(
				'span',
				{ className: style.month },
				isToday ? locale.todayLabel.short || locale.todayLabel.long : monthShort
			),
			_react2.default.createElement(
				'span',
				{ className: (!showSelectionText && style.dayHiddenText, showSelectionText && style.day) },
				day
			)
		)
	);
}
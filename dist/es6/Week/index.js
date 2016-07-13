import React from 'react';
var style = {
	'root': 'Cal__Week__root',
	'enabled': 'Cal__Week__enabled',
	'highlighted': 'Cal__Week__highlighted',
	'today': 'Cal__Week__today',
	'disabled': 'Cal__Week__disabled',
	'selected': 'Cal__Week__selected',
	'month': 'Cal__Week__month',
	'year': 'Cal__Week__year',
	'selection': 'Cal__Week__selection',
	'day': 'Cal__Week__day'
};

export default function Week(_ref) {
	var currentYear = _ref.currentYear;
	var date = _ref.date;
	var day = _ref.day;
	var handleDayClick = _ref.handleDayClick;
	var isDisabled = _ref.isDisabled;
	var isToday = _ref.isToday;
	var isSelected = _ref.isSelected;
	var monthShort = _ref.monthShort;
	var locale = _ref.locale;
	var theme = _ref.theme;
	var mmt = date.date;
	var yyyymmdd = date.yyyymmdd;

	var year = mmt.year();

	return React.createElement(
		'li',
		{
			style: isToday ? { color: theme.todayColor } : null,
			className: '' + style.root + (isToday ? ' ' + style.today : '') + (isSelected ? ' ' + style.selected : '') + (isDisabled ? ' ' + style.disabled : ' ' + style.enabled),
			'data-date': yyyymmdd,
			onClick: !isDisabled && handleDayClick ? handleDayClick.bind(this, mmt) : null
		},
		day === 1 && React.createElement(
			'span',
			{ className: style.month },
			monthShort
		),
		React.createElement(
			'span',
			null,
			day
		),
		day === 1 && currentYear !== year && React.createElement(
			'span',
			{ className: style.year },
			year
		),
		isSelected && React.createElement(
			'div',
			{ className: style.selection, style: { backgroundColor: typeof theme.selectionColor == 'function' ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active } },
			React.createElement(
				'span',
				{ className: style.month },
				isToday ? locale.todayLabel.short || locale.todayLabel.long : monthShort
			),
			React.createElement(
				'span',
				{ className: style.day },
				day
			)
		)
	);
}
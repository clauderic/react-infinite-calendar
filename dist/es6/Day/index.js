import React from 'react';
var style = {
	'root': 'Cal__Day__root',
	'enabled': 'Cal__Day__enabled',
	'highlighted': 'Cal__Day__highlighted',
	'today': 'Cal__Day__today',
	'disabled': 'Cal__Day__disabled',
	'selected': 'Cal__Day__selected',
	'month': 'Cal__Day__month',
	'year': 'Cal__Day__year',
	'selection': 'Cal__Day__selection',
	'day': 'Cal__Day__day',
	'dayHiddenText': 'Cal__Day__dayHiddenText',
	'weekSelected': 'Cal__Day__weekSelected'
};

export default function Day(_ref) {
	var currentYear = _ref.currentYear;
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
	var yyyymmdd = date.yyyymmdd;

	var year = mmt.year();

	return React.createElement(
		'li',
		{
			style: (isToday ? { color: theme.textColor.active } : null, isWeekSelected ? { 'backgroundColor': theme.selectedWeekBackground } : null),
			className: '' + style.root + (isToday ? ' ' + style.today : '') + (isSelected ? ' ' + style.selected : '') + (isDisabled ? ' ' + style.disabled : ' ' + style.enabled) + (isWeekSelected ? ' ' + style.weekSelected : ''),
			'data-date': date.date.format('YYYY-MM-DD'),
			onClick: !isDisabled && handleDayClick ? handleDayClick.bind(this, mmt) : null
		},
		showSelectionText && day === 1 && React.createElement(
			'span',
			{ className: style.month },
			monthShort
		),
		React.createElement(
			'span',
			null,
			day
		),
		showSelectionText && day === 1 && currentYear !== year && React.createElement(
			'span',
			{ className: style.year },
			year
		),
		isSelected && React.createElement(
			'div',
			{ className: style.selection, style: { backgroundColor: typeof theme.selectionColor == 'function' ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active } },
			showSelectionText && React.createElement(
				'span',
				{ className: style.month },
				isToday ? locale.todayLabel.short || locale.todayLabel.long : monthShort
			),
			React.createElement(
				'span',
				{ className: (!showSelectionText && style.dayHiddenText, showSelectionText && style.day) },
				day
			)
		)
	);
}
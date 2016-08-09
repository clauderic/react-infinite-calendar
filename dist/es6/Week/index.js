import React from 'react';
import moment from 'moment';
var style = {
	'root': 'Cal__Week__root',
	'weekItem': 'Cal__Week__weekItem',
	'weekSelected': 'Cal__Week__weekSelected'
};

export default function Week(_ref) {
	var currentYear = _ref.currentYear;
	var date = _ref.date;
	var day = _ref.day;
	var handleWeekClick = _ref.handleWeekClick;
	var isDisabled = _ref.isDisabled;
	var isSelected = _ref.isSelected;
	var isWeekSelected = _ref.isWeekSelected;
	var monthShort = _ref.monthShort;
	var locale = _ref.locale;
	var theme = _ref.theme;
	var rowHeight = _ref.rowHeight;
	var mmt = date.date;
	var yyyymmdd = date.yyyymmdd;

	var weekNumber = date.date.format('ww');
	var weekDistance = moment().format('ww') - weekNumber;
	var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" + Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";
	var weekItemHeight = rowHeight / 2;

	return React.createElement(
		'li',
		{ className: '' + style.root + (isWeekSelected ? ' ' + style.weekSelected : ''),
			onClick: handleWeekClick.bind(this, date.date),
			style: ({ height: rowHeight }, isWeekSelected ? { 'backgroundColor': theme.selectedWeekBackground } : { 'backgroundColor': theme.weekBackground }) },
		React.createElement(
			'span',
			{ className: '' + style.weekItem, style: { height: weekItemHeight, bottom: '5px' } },
			'v.',
			weekNumber
		),
		React.createElement(
			'span',
			{ className: '' + style.weekItem, style: { height: weekItemHeight, bottom: '15px' } },
			weekDistanceLabel
		)
	);
}
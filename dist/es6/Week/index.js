import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
var style = {
	'root': 'Cal__Week__root',
	'weekItem': 'Cal__Week__weekItem',
	'weekSelected': 'Cal__Week__weekSelected',
	'weekNumber': 'Cal__Week__weekNumber',
	'weekDistance': 'Cal__Week__weekDistance'
};

export default function Week(_ref) {
	var date = _ref.date;
	var handleWeekClick = _ref.handleWeekClick;
	var isWeekSelected = _ref.isWeekSelected;
	var theme = _ref.theme;
	var rowHeight = _ref.rowHeight;
	var isDisabled = _ref.isDisabled;

	var weekNumber = date.date.format('ww');
	var weekDistance = moment().startOf('week').diff(date.date, "weeks");
	var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" + Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";
	var weekItemHeight = rowHeight / 2;

	return React.createElement(
		'li',
		{ className: classNames(style.root, isWeekSelected ? style.weekSelected : null),
			onClick: !isDisabled && handleWeekClick ? handleWeekClick.bind(this, date.date) : null,
			style: isWeekSelected ? { 'backgroundColor': theme.selectedWeekBackground } : { 'backgroundColor': theme.weekBackground } },
		React.createElement(
			'span',
			{ className: classNames(style.weekItem, style.weekNumber), style: { height: weekItemHeight } },
			'v.',
			weekNumber
		),
		React.createElement(
			'span',
			{ className: classNames(style.weekItem, style.weekDistance), style: { height: weekItemHeight } },
			weekDistanceLabel
		)
	);
}
import React from 'react';
import moment from 'moment';
var style = {
	'root': 'Cal__Week__root',
	'weekContainer': 'Cal__Week__weekContainer',
	'weekItem': 'Cal__Week__weekItem',
	'weekNumber': 'Cal__Week__weekNumber',
	'weekDistance': 'Cal__Week__weekDistance'
};

export default function Week(_ref) {
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
	var weekDistance = moment().format('ww') - weekNumber;
	var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" + Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";

	return React.createElement(
		'li',
		{ className: '' + style.root + (isSelected ? ' ' + style.selected : '') },
		React.createElement(
			'div',
			{ className: '' + style.weekContainer, style: { height: rowHeight } },
			React.createElement(
				'span',
				{ className: style.weekItem + ' ' + style.weekNumber },
				'v.',
				weekNumber
			),
			React.createElement(
				'span',
				{ className: style.weekItem + ' ' + style.weekDistance },
				weekDistanceLabel
			)
		)
	);
}
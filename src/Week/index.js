import React from 'react';
import moment from 'moment';
const style = require('./Week.scss');

export default function Week({currentYear, date, day, isDisabled, isSelected, monthShort, locale, theme, rowHeight}) {
	var {date: mmt, yyyymmdd} = date;
	var weekNumber = date.date.format('ww');
	var weekDistance = moment().format('ww') - weekNumber;
	var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" +
	 Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";

	return (
		<li className={`${style.root}${isSelected ? ' ' + style.selected : ''}`}>
			<div className={`${style.weekContainer}`} style={{height: rowHeight}}>
				<span className={`${style.weekItem} ${style.weekNumber}`}>v.{weekNumber}</span>
				<span className={`${style.weekItem} ${style.weekDistance}`}>{weekDistanceLabel}</span>
			</div>
		</li>
	);
}

import React from 'react';
import moment from 'moment';
const style = require('./Week.scss');

export default function Week({currentYear, date, day, handleWeekClick, isDisabled, isSelected, isWeekSelected, monthShort, locale, theme, rowHeight}) {
	var {date: mmt, yyyymmdd} = date;
	var weekNumber = date.date.format('ww');
	var weekDistance = moment().format('ww') - weekNumber;
	var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" +
	 Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";
  	var weekItemHeight = rowHeight/2;

	return (
		<li className={`${style.root}${isWeekSelected ? ' ' + style.weekSelected : ''}`}
			onClick={handleWeekClick.bind(this, date.date)}
			style={{height: rowHeight}, (isWeekSelected) ? { 'backgroundColor': theme.selectedWeekBackground } : { 'backgroundColor': theme.weekBackground }} >
			<span className={`${style.weekItem}`} style={{height: weekItemHeight, bottom: '5px'}}>v.{weekNumber}</span>
			<span className={`${style.weekItem}`} style={{height: weekItemHeight, bottom: '15px'}}>{weekDistanceLabel}</span>
		</li>
	);
}

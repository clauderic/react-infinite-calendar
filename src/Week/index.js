import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
const style = require('./Week.scss');

export default function Week({date, handleWeekClick, isWeekSelected, theme, rowHeight, isDisabled}) {
	var weekNumber = date.date.format('ww');
	var weekDistance = moment().startOf('week').diff(date.date, "weeks");
	var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" +
	 Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";
  	var weekItemHeight = rowHeight/2;

	return (
		<li className={classNames(style.root, (isWeekSelected) ? style.weekSelected : null)}
			onClick={(!isDisabled && handleWeekClick) ? handleWeekClick.bind(this, date.date) : null}
			style={(isWeekSelected) ? { 'backgroundColor': theme.selectedWeekBackground } : { 'backgroundColor': theme.weekBackground }} >
			<span className={classNames(style.weekItem, style.weekNumber)} style={{height: weekItemHeight}}>v.{weekNumber}</span>
			<span className={classNames(style.weekItem, style.weekDistance)} style={{height: weekItemHeight}}>{weekDistanceLabel}</span>
		</li>
	);
}

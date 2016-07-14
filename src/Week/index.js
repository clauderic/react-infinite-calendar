import React from 'react';
const style = require('./Week.scss');

export default function Week({currentYear, date, day, handleDayClick, isDisabled, isToday, isSelected, monthShort, locale, theme}) {
	var {date: mmt, yyyymmdd} = date;
	var year = date.date.year();
	var weekNumber = date.date.format('ww');
	var weeksFromNow = "+1 v";

	return (
		<li
			//style={(isToday) ? {color: theme.todayColor} : null}
			className={`${style.root}${isSelected ? ' ' + style.selected : ''}${isDisabled ? ' ' + style.disabled : ' ' + style.enabled}`}
			data-date={yyyymmdd}
			//onClick={(!isDisabled && handleDayClick) ? handleDayClick.bind(this, mmt) : null}
		>
			<span className={`${style.weekNumber}`}>v.{weekNumber}</span>
			<span className={`${style.weekDistance}`}>v.{weeksFromNow}</span>
		</li>
	);
}

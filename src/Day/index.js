import React from 'react';
const style = require('./Day.scss');

export default function Day({currentYear, date, day, handleDayClick, handleDayDoubleClick, isDisabled, isToday, isSelected, monthShort, locale, theme}) {
	var {date: mmt, yyyymmdd} = date;
	var year = mmt.year();

	return (
		<li
			style={(isToday) ? {color: theme.todayColor} : null}
			className={`${style.root}${isToday ? ' ' + style.today : ''}${isSelected ? ' ' + style.selected : ''}${isDisabled ? ' ' + style.disabled : ' ' + style.enabled}`}
			data-date={yyyymmdd}
			onClick={(!isDisabled && handleDayClick) ? handleDayClick.bind(this, mmt) : null}
			onDoubleClick={(!isDisabled && handleDayDoubleClick) ? handleDayDoubleClick.bind(this, mmt) : null}
		>
			{(day === 1) && <span className={style.month}>{monthShort}</span>}
			<span>{day}</span>
			{(day === 1 && currentYear !== year) && <span className={style.year}>{year}</span>}
			{isSelected &&
				<div className={style.selection} style={{backgroundColor: (typeof theme.selectionColor == 'function') ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active}}>
					<span className={style.month}>{(isToday) ? (locale.todayLabel.short || locale.todayLabel.long) : monthShort}</span>
					<span className={style.day}>{day}</span>
				</div>
			}
		</li>
	);
}

import React from 'react';
const style = require('./Day.scss');

export default function Day({currentYear, date, day, handleDayClick, isDisabled, isToday, isSelected, isWeekSelected, monthShort, locale, theme, showSelectionText}) {
	var {date: mmt, yyyymmdd} = date;
	var year = mmt.year();

	return (
		<li
			style={(isToday) ? {color: theme.textColor.active} : null}
			className={`${style.root}${isToday ? ' ' + style.today : ''}${isSelected ? ' ' + style.selected : ''}${isDisabled ? ' ' + style.disabled : ' ' + style.enabled}${isWeekSelected ? ' ' + style.weekSelected : ''}`}
			data-date={yyyymmdd}
			onClick={(!isDisabled && handleDayClick) ? handleDayClick.bind(this, mmt) : null}
		>
			{(showSelectionText && day === 1) && <span className={style.month}>{monthShort}</span>}
			<span>{day}</span>
			{(showSelectionText && day === 1 && currentYear !== year) && <span className={style.year}>{year}</span>}
			{isSelected &&
				<div className={style.selection} style={{backgroundColor: (typeof theme.selectionColor == 'function') ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active}}>
					{showSelectionText && <span className={style.month}>{(isToday) ? (locale.todayLabel.short || locale.todayLabel.long) : monthShort}</span>}
					<span className={!showSelectionText && style.dayHiddenText, showSelectionText && style.day}>{day}</span>
				</div>
			}
		</li>
	);
}

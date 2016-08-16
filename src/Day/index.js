import React from 'react';
import moment from 'moment';
const style = require('./Day.scss');

export default function Day({currentYear, hideYearsOnDate, date, day, handleDayClick, isDisabled, isToday, isSelected, isWeekSelected, monthShort, locale, theme, showSelectionText}) {
	const {date: mmt} = date;
	const year = mmt.year();
	const isWeekend = date.date.day() === 6 || date.date.day() === 0;
	const isPast = moment().startOf('day').diff(date.date) > 0;

	return (
		<li
			style={(isToday) ? { 'color': theme.textColor.active } : null, (isWeekSelected) ? { 'backgroundColor': theme.selectedWeekBackground, border: 0 } : null }
			className={`${style.root}${isToday ? ' ' + style.today : ''}${isSelected ? ' ' + style.selected : ''}${isDisabled ? ' ' + style.disabled : ' ' + style.enabled}${isWeekSelected ? ' ' + style.weekSelected : ''}${isWeekend ? ' ' + style.weekend : ''}${isPast ? ' ' + style.past : ''}`}
			data-date={date.date.format('YYYY-MM-DD')}
			onClick={(!isDisabled && handleDayClick) ? handleDayClick.bind(this, mmt) : null}
		>
			{(showSelectionText && day === 1) && <span className={style.month}>{monthShort}</span>}
			<span>{day}</span>
			{(showSelectionText && day === 1 && currentYear !== year && !hideYearsOnDate) && <span className={style.year}>{year}</span>}
			{isSelected &&
				<div className={`${style.selection}${isToday ? ' ' + style.today : ''}`} style={{backgroundColor: (typeof theme.selectionColor == 'function') ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active}}>
					{showSelectionText && <span className={style.month}>{(isToday) ? (locale.todayLabel.short || locale.todayLabel.long) : monthShort}</span>}
					<span className={!showSelectionText && style.dayHiddenText, showSelectionText && style.day}>{day}</span>
				</div>
			}
		</li>
	);
}

import React from 'react';
const style = require('./Day.scss');

export default function Day({currentYear, date, day, handleDayClick, handleDayDown, handleDayOver, handleDayUp, handleTouchStart, isDisabled, isToday, isSelected, isHovered, dragging, isSelectedBetween, isSelectedEnd, monthShort, locale, theme}) {
	var {date: mmt, yyyymmdd} = date;
	var year = mmt.year();

	var highlightStyle = style.selection;
	if(isSelected && (!isSelectedEnd || dragging!==0)) highlightStyle += " "+style.selectionStart;
	else if(!isSelected && isSelectedEnd) highlightStyle += " "+style.selectionEnd;
	else if(!isSelected && !isSelectedEnd && isSelectedBetween) highlightStyle += " "+style.selectionBetween;
	
	var backgroundColor = (typeof theme.selectionColor == 'function') ? theme.selectionColor(mmt) : theme.selectionColor;
	if(dragging==1 && !isSelected && !isDisabled) backgroundColor = (typeof theme.selectionHoverColor == 'function') ? theme.selectionHoverColor(mmt) : theme.selectionHoverColor;
	else if(dragging==-1 && !isSelectedEnd && !isDisabled) backgroundColor = (typeof theme.selectionHoverColor == 'function') ? theme.selectionHoverColor(mmt) : theme.selectionHoverColor;
	else if(isDisabled) backgroundColor = (typeof theme.selectionDisabledColor == 'function') ? theme.selectionDisabledColor(mmt) : theme.selectionDisabledColor;


	return (
		<li
			style={(isToday) ? {color: theme.todayColor} : null}
			className={`${style.root}${isToday ? ' ' + style.today : ''}${(isSelected || isSelectedBetween || isSelectedEnd) ? ' ' + style.selected : ''}${isDisabled ? ' ' + style.disabled : ' ' + style.enabled}`}
			data-date={yyyymmdd}
			onClick={(!isDisabled && handleDayClick) ? handleDayClick.bind(this, mmt) : null}
			onMouseDown={(!isDisabled && handleDayDown) ? handleDayDown.bind(this, mmt) : null}
			onMouseOver={(!isDisabled && handleDayOver) ? handleDayOver.bind(this, mmt) : null}
			onMouseUp={(!isDisabled && handleDayUp) ? handleDayUp.bind(this, mmt) : null}
			onTouchStart={(!isDisabled && handleDayUp) ? handleTouchStart.bind(this, mmt) : null}
		>
			{(day === 1) && <span className={style.month}>{monthShort}</span>}
			<span>{day}</span>
			{(day === 1 && currentYear !== year) && <span className={style.year}>{year}</span>}
			{(isSelected || isSelectedEnd) &&
				<div className={highlightStyle} style={{backgroundColor: backgroundColor, color: theme.textColor.active}}>
					<span className={style.month}>{(isToday) ? (locale.todayLabel.short || locale.todayLabel.long) : monthShort}</span>
					<span className={style.day}>{day}</span>
				</div>
			}
			{(isSelectedBetween) &&
				<div className={highlightStyle} style={{backgroundColor: backgroundColor, color: theme.textColor.active}}>
					<span className={style.day}>{day}</span>
				</div>
			}
		</li>
	);
}

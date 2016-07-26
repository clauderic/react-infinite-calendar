import React from 'react';
const style = require('./Day.scss');

// todo add hover event
export const withEvents = Component => ({date : {date: mmt, yyyymmdd}, isDisabled, handleDayClick, ...other}) => (
    <li className={style.root}
      onClick={(isDisabled || !handleDayClick) ? null : handleDayClick.bind(this, mmt)}
      data-date={yyyymmdd} >
      <Component
        {...other}
        mmt={mmt}
        yyyymmdd={yyyymmdd}
        isDisabled={isDisabled} />
    </li>);

export const DefaultDay = ({currentYear, mmt, yyyymmdd, day, isToday, isDisabled, isSelected, monthShort, locale, theme}) => {
  const className = `${isToday ? style.today : ''} ${isSelected ? style.selected: ''} ${isDisabled ? style.disabled : style.enabled}`
	var year = mmt.year();

	return (
    <div data-date={yyyymmdd} className={className} style={(isToday) ? {color: theme.todayColor} : null}>
			{(day === 1) && <span className={style.month}>{monthShort}</span>}
			<span>{day}</span>
			{(day === 1 && currentYear !== year) && <span className={style.year}>{year}</span>}
			{isSelected &&
				<div className={style.selection} style={{backgroundColor: (typeof theme.selectionColor == 'function') ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active}}>
					<span className={style.month}>{(isToday) ? (locale.todayLabel.short || locale.todayLabel.long) : monthShort}</span>
					<span className={style.day}>{day}</span>
				</div>
			}
    </div>
	);
}

export default withEvents(DefaultDay)

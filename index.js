import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from './src/index';
import moment from 'moment';

const data = {
  '20160612': {
    color: '#FF007F'
  },
  '20160613': {
    color: '#80FF00'
  },
  '20160614': {
    color: '#BADA55'
  }
}

const style = require('./src/Day/Day.scss');
const CustomDay = ({currentYear, mmt, yyyymmdd, day, isToday, isDisabled, isSelected, monthShort, locale, theme, customData}) => {
  const className = `${isToday ? style.today : ''} ${isSelected ? style.selected: ''} ${isDisabled ? style.disabled : style.enabled}`
	var year = mmt.year();
  const currentDayData = customData[yyyymmdd]

	return (
      <div className={className} style={(isToday) ? {color: theme.todayColor} : null}>
        {(day === 1) && <span className={style.month}>{monthShort}</span>}
        <span style={(currentDayData) && {color: currentDayData.color}} >{day}</span>
        {(day === 1 && currentYear !== year) && <span className={style.year}>{year}</span>}
        {isSelected &&
         <div className={style.selection}
           style={{backgroundColor: (typeof theme.selectionColor == 'function') ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active}}>
           <span className={style.month}>{(isToday) ? (locale.todayLabel.short || locale.todayLabel.long) : monthShort}</span>
           <span className={style.day}>{day}</span>
         </div>
		    }
      </div>
	);
}

render(<InfiniteCalendar
         min={moment().startOf('month')}
         minDate={moment().startOf('day')}
         locale={{week: { dow: 0, doy: 4}}}
         DayComponent={CustomDay}
         customData={data}
       />,
  document.getElementById('root')
)

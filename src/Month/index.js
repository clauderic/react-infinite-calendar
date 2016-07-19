import React, {Component} from 'react';
import classNames from 'classnames';
import Day from '../Day';
import Week from '../Week';
const style = require('./Month.scss');

export default class Month extends Component {
	shouldComponentUpdate(nextProps) {
		return (!nextProps.isScrolling && !this.props.isScrolling);
	}
	renderRows() {
		let {disabledDates, disabledDays, displayDate, locale, maxDate, minDate, onDaySelect, handleWeekClick, rowHeight, rows, weeks, selectedDate, today, theme, showSelectionText} = this.props;
		let currentYear = today.date.year();
		let monthShort = displayDate.format('MMM');
		let monthRows = [];
		let day = 0;
		let isDisabled = false;
		let isSelected = false;
		let isWeekSelected = false;
		let isToday = false;
		let row, date, days;

		// Oh the things we do in the name of performance...
		for (let i = 0, len = rows.length; i < len; i++) {
			row = rows[i];
			days = [];

			

			for (let k = 0, len = row.length; k < len; k++) {
				date = row[k];
				day++;

				isSelected = (selectedDate && date.yyyymmdd == selectedDate.yyyymmdd);
				isToday = (today && date.yyyymmdd == today.yyyymmdd);
				isDisabled = (
					minDate && date.yyyymmdd < minDate.yyyymmdd ||
					maxDate && date.yyyymmdd > maxDate.yyyymmdd ||
					disabledDays && disabledDays.length && disabledDays.indexOf(date.date.day()) !== -1 ||
					disabledDates && disabledDates.length && disabledDates.indexOf(date.yyyymmdd) !== -1
				);

				if (date.date.format('e') === '0') {
					days[0] = (<Week
						key={`week-${i + 1}`}
						currentYear={currentYear}
						date={date}
						day={day}
						isDisabled={isDisabled}
						isSelected={isSelected}
						locale={locale}
						monthShort={monthShort}
						theme={theme}
						rowHeight={rowHeight}
					/>);
				}
				
				days[days.length] = (
					<Day
						key={`day-${day}`}
						currentYear={currentYear}
						date={date}
						day={day}
						handleDayClick={onDaySelect}
						isDisabled={isDisabled}
						isToday={isToday}
						isSelected={isSelected}
						isWeekSelected={isWeekSelected}
						locale={locale}
						monthShort={monthShort}
						theme={theme}
						showSelectionText={showSelectionText}
					/>
				);
			}
			monthRows[i] = (
				<ul 
					className={classNames(style.row, {[style.partial]: row.length !== 7})}
					style={{height: rowHeight}}
					key={`Row-${i}`}
					role="row"
					aria-label={`Week ${days[0].props.date.date.format('ww')}`}
					data-week={`${days[0].props.date.date.format('YYYY-ww')}`}
					onClick={handleWeekClick.bind(this)}
				>
					{days}
				</ul>
			);
		}

		return monthRows;
	}
	render() {
		let {displayDate, today, rows, showOverlay, theme, week, showSelectionText} = this.props;

		return (
			<div className={style.root}>
				<div className={style.rows}>
					{this.renderRows()}
				</div>
				{showOverlay &&
					<label className={classNames(style.label, {[style.partialFirstRow] : (rows[0].length !== 7)})} style={theme && theme.overlayColor && {backgroundColor: theme.overlayColor}}>
						<span>{`${displayDate.format('MMMM')}${(!displayDate.isSame(today.date, 'year')) ? ' ' + displayDate.year() : ''}`}</span>
					</label>
				}
			</div>
		);
	}
}

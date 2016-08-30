import React, {Component} from 'react';
import classNames from 'classnames';
import Day from '../Day';
const style = require('./Month.scss');

export default class Month extends Component {
	shouldComponentUpdate(nextProps) {
		return (!nextProps.isScrolling && !this.props.isScrolling);
	}
	renderRows() {
		let {disabledDates, disabledDays, displayDate, locale, maxDate, minDate, onDaySelect,onDayDown,onDayOver,onDayUp, onTouchStart,rowHeight, rows, selectedDate, selectedHovering,dragging, rangeSelectionEndDate, today, theme} = this.props;
		let currentYear = today.date.year();
		let monthShort = displayDate.format('MMM');
		let monthRows = [];
		let day = 0;
		let isDisabled = false;
		let isSelected = false;
		let isHovered = false;
		let isSelectedBetween = false;
		let isSelectedEnd = false;
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
				isSelectedBetween = (selectedDate && rangeSelectionEndDate && date.yyyymmdd > selectedDate.yyyymmdd && date.yyyymmdd < rangeSelectionEndDate.yyyymmdd);
				isSelectedEnd = (rangeSelectionEndDate && date.yyyymmdd == rangeSelectionEndDate.yyyymmdd);
				isHovered = (selectedHovering && date.yyyymmdd == selectedHovering.yyyymmdd);
				isToday = (today && date.yyyymmdd == today.yyyymmdd);
				isDisabled = (
					minDate && date.yyyymmdd < minDate.yyyymmdd ||
					maxDate && date.yyyymmdd > maxDate.yyyymmdd ||
					disabledDays && disabledDays.length && disabledDays.indexOf(date.date.day()) !== -1 ||
					disabledDates && disabledDates.length && disabledDates.indexOf(date.yyyymmdd) !== -1
				);

				days[k] = (
					<Day
						key={`day-${day}`}
						currentYear={currentYear}
						date={date}
						day={day}
						handleDayClick={onDaySelect}
						handleDayDown={onDayDown}
						handleDayOver={onDayOver}
						handleDayUp={onDayUp}
						handleTouchStart={onTouchStart}
						isDisabled={isDisabled}
						isToday={isToday}
						isSelected={isSelected}
						dragging={dragging}
						isHovered={isHovered}
						isSelectedBetween={isSelectedBetween}
						isSelectedEnd={isSelectedEnd}
						locale={locale}
						monthShort={monthShort}
						theme={theme}
					/>
				);
			}
			monthRows[i] = (
				<ul className={classNames(style.row, {[style.partial]: row.length !== 7})} style={{height: rowHeight}} key={`Row-${i}`} role="row" aria-label={`Week ${i + 1}`}>
					{days}
				</ul>
			);
		}

		return monthRows;
	}
	render() {
		let {displayDate, today, rows, showOverlay, theme} = this.props;

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

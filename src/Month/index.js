import React, {Component} from 'react';
import classNames from 'classnames';
import Day from '../Day';
import format from 'date-fns/format';
import getDay from 'date-fns/get_day';
import isSameYear from 'date-fns/is_same_year';
import styles from './Month.scss';

export default class Month extends Component {
  renderRows() {
    const {
      disabledDates,
      disabledDays,
      displayDate,
      locale,
      maxDate,
      minDate,
      onDaySelect,
      rowHeight,
      rows,
      selectedDate,
      today,
      theme,
    } = this.props;
    const currentYear = today.getFullYear();
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();
    const monthShort = format(displayDate, 'MMM', {locale: locale.locale});
    const monthRows = [];
    let day = 0;
    let isDisabled = false;
    let isSelected = false;
    let isToday = false;
    let date, days, dow, row;

    // Used for faster comparisons
    const _selected = format(selectedDate, 'YYYY-MM-DD');
    const _today = format(today, 'YYYY-MM-DD');
    const _minDate = format(minDate, 'YYYY-MM-DD');
    const _maxDate = format(maxDate, 'YYYY-MM-DD');

		// Oh the things we do in the name of performance...
    for (let i = 0, len = rows.length; i < len; i++) {
      row = rows[i];
      days = [];
      dow = getDay(new Date(year, month, row[0]));

      for (let k = 0, len = row.length; k < len; k++) {
        day = row[k];

        date = `${year}-${('0' + (month + 1)).slice(-2)}-${('0' + day).slice(-2)}`;
        isSelected = (date === _selected);
        isToday = (date === _today);

        isDisabled = (
					minDate && date < _minDate ||
					maxDate && date > _maxDate ||
					disabledDays && disabledDays.length && disabledDays.indexOf(dow) !== -1 ||
					disabledDates && disabledDates.length && disabledDates.indexOf(date) !== -1
				);

        days[k] = (
					<Day
						key={`day-${day}`}
						currentYear={currentYear}
            year={year}
						date={date}
						day={day}
						onClick={onDaySelect}
						isDisabled={isDisabled}
						isToday={isToday}
						isSelected={isSelected}
						locale={locale}
						monthShort={monthShort}
						theme={theme}
					/>
				);

        dow += 1;
      }
      monthRows[i] = (
				<ul className={classNames(styles.row, {[styles.partial]: row.length !== 7})} style={{height: rowHeight}} key={`Row-${i}`} role="row" aria-label={`Week ${i + 1}`}>
					{days}
				</ul>
			);
    }

    return monthRows;
  }
  render() {
    let {displayDate, today, rows, showOverlay, style, theme} = this.props;

    return (
      <div className={styles.root} style={style}>
  				<div className={styles.rows}>
  					{this.renderRows()}
  					{showOverlay &&
  						<label
                className={classNames(styles.label, {
                  [styles.partialFirstRow]: rows[0].length !== 7,
                })}
                style={{backgroundColor: theme.overlayColor}}
              >
                <span>
                  {
                    `${format(displayDate, 'MMMM')}${!isSameYear(displayDate, today)
                      ? ' ' + displayDate.getFullYear()
                      : ''}`
                  }
                </span>
              </label>
  					}
  				</div>
  			</div>
    );
  }
}

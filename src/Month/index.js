import React, {PureComponent} from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import getDay from 'date-fns/get_day';
import isSameYear from 'date-fns/is_same_year';
import styles from './Month.scss';

export default class Month extends PureComponent {
  renderRows() {
    const {
      DayComponent,
      disabledDates,
      disabledDays,
      monthDate,
      locale,
      maxDate,
      minDate,
      onDayClick,
      rowHeight,
      rows,
      today,
      theme,
      ...other
    } = this.props;
    const currentYear = today.getFullYear();
    const year = monthDate.getFullYear();
    const month = monthDate.getMonth();
    const monthShort = format(monthDate, 'MMM', {locale: locale.locale});
    const monthRows = [];
    let day = 0;
    let isDisabled = false;
    let isToday = false;
    let date, days, dow, row;

    // Used for faster comparisons
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
        isToday = (date === _today);

        isDisabled = (
					minDate && date < _minDate ||
					maxDate && date > _maxDate ||
					disabledDays && disabledDays.length && disabledDays.indexOf(dow) !== -1 ||
					disabledDates && disabledDates.length && disabledDates.indexOf(date) !== -1
				);

        days[k] = (
					<DayComponent
						key={`day-${day}`}
            {...other}
						currentYear={currentYear}
            year={year}
						date={date}
						day={day}
            month={month}
						onClick={onDayClick}
						isDisabled={isDisabled}
						isToday={isToday}
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
    let {monthDate, today, rows, showOverlay, style, theme} = this.props;

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
                    `${format(monthDate, 'MMMM')}${!isSameYear(monthDate, today)
                      ? ' ' + monthDate.getFullYear()
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

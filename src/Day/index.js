import React, {PureComponent} from 'react';
import classNames from 'classnames';
import parse from 'date-fns/parse';
import styles from './Day.scss';

export default class Day extends PureComponent {
	handleClick = () => {
		let {date, isDisabled, onClick} = this.props;

		if (!isDisabled && typeof onClick === 'function') {
			onClick(parse(date));
		}
	}
  renderSelection() {
    const {day, date, isToday, locale, monthShort, theme} = this.props;

    return (
        <div
          className={styles.selection}
          style={{
            backgroundColor: (typeof theme.selectionColor === 'function') ? theme.selectionColor(date) : theme.selectionColor, color: theme.textColor.active
          }}
        >
          <span className={styles.month}>{(isToday) ? (locale.todayLabel.short || locale.todayLabel.long) : monthShort}</span>
          <span className={styles.day}>{day}</span>
        </div>
    )
  }
	render() {
		const {currentYear, date, day, isDisabled, isToday, isSelected, monthShort, theme, year} = this.props;

		return (
			<li
				style={(isToday) ? {color: theme.todayColor} : null}
				className={classNames(styles.root, {
          [styles.today]: isToday,
          [styles.selected]: isSelected,
          [styles.disabled]: isDisabled,
          [styles.enabled]: !isDisabled
        })}
				onClick={this.handleClick}
        data-date={date}
			>
				{(day === 1) && <span className={styles.month}>{monthShort}</span>}
				{(isToday) ? <span>{day}</span> : day}
				{(day === 1 && currentYear !== year) && <span className={styles.year}>{year}</span>}
				{isSelected && this.renderSelection()}
			</li>
		);
	}
}

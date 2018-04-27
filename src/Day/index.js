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
  };

  renderSelection(selectionColor) {
    const {
      day,
      date,
      isToday,
      locale: {todayLabel},
      monthShort,
      theme: {textColor},
      hideMonthYear,
      isPadding,
      selectionStyle,
    } = this.props;

    if (isPadding) {
      return (
        <div
          className={styles.selection}
          data-date={date}
          style={{
            backgroundColor: this.selectionColor,
            color: isPadding ? this.selectionColor : textColor.active,
            ...selectionStyle,
          }}
          dangerouslySetInnerHTML={{ __html: '&nbsp;'}}
        />
      );
    }

    return (
      <div
        className={styles.selection}
        data-date={date}
        style={{
          backgroundColor: this.selectionColor,
          color: textColor.active,
          ...selectionStyle,
        }}
      >
        { !hideMonthYear && (
          <span className={styles.month}>
            {isToday ? todayLabel.short || todayLabel.long : monthShort}
          </span>
        )}
        <span className={styles.day}>{day}</span>
      </div>
    );
  }
  
  render() {
    const {
      className,
      currentYear,
      date,
      day,
      handlers,
      isDisabled,
      isHighlighted,
      isToday,
      isSelected,
      monthShort,
      theme: {selectionColor, todayColor},
      year,
      isPadding,
      hideMonthYear,
    } = this.props;
    let color;

    if (isSelected) {
      color = this.selectionColor = typeof selectionColor === 'function'
        ? selectionColor(date)
        : selectionColor;
    } else if (isToday) {
      color = todayColor;
    }
    if (isPadding) {
      return (
        <li
          style={color ? {color} : null}
          className={classNames(styles.root, {
            [styles.padding]: isPadding,
            [styles.selected]: isSelected,
          }, className)}
          {...handlers}
        >
          <span dangerouslySetInnerHTML={{__html: '&nbsp;'}}/>
          {isSelected && this.renderSelection()}
        </li>
      );
    }
    return (
      <li
        style={color ? {color} : null}
        className={classNames(styles.root, {
          [styles.today]: isToday,
          [styles.highlighted]: isHighlighted,
          [styles.selected]: isSelected,
          [styles.disabled]: isDisabled,
          [styles.enabled]: !isDisabled,
          [styles.hideMonthYear]: hideMonthYear,
        }, className)}
        onClick={this.handleClick}
        data-date={date}
        {...handlers}
      >
        {!hideMonthYear && day === 1 && <span className={styles.month}>{monthShort}</span>}
        {isToday ? <span>{day}</span> : day}
        {!hideMonthYear && day === 1 &&
          currentYear !== year &&
          <span className={styles.year}>{year}</span>}
        {isSelected && this.renderSelection()}
      </li>
    );
  }
}

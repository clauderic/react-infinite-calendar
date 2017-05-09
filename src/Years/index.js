import React, {Component} from 'react';
import PropTypes from 'prop-types';
import VirtualList from 'react-tiny-virtual-list';
import classNames from 'classnames';
import {emptyFn, getMonthsForYear} from '../utils';
import format from 'date-fns/format';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import isSameMonth from 'date-fns/is_same_month';
import styles from './Years.scss';

const SPACING = 40;

export default class Years extends Component {
  static propTypes = {
    height: PropTypes.number,
    hideOnSelect: PropTypes.bool,
    locale: PropTypes.object,
    max: PropTypes.object,
    maxDate: PropTypes.object,
    min: PropTypes.object,
    minDate: PropTypes.object,
    onSelect: PropTypes.func,
    scrollToDate: PropTypes.func,
    selectedYear: PropTypes.number,
    setDisplay: PropTypes.func,
    theme: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    years: PropTypes.array,
  };
  static defaultProps = {
    onSelect: emptyFn,
    showMonths: true,
  };

  handleClick(date, e) {
    let {
      hideOnSelect,
      onSelect,
      setDisplay,
      scrollToDate,
    } = this.props;

    onSelect(date, e, (date) => scrollToDate(date));

    if (hideOnSelect) {
      window.requestAnimationFrame(() => setDisplay('days'));
    }
  }

  renderMonths(year) {
    const {locale: {locale}, selected, theme, today, min, max, minDate, maxDate} = this.props;
    const months = getMonthsForYear(year, selected.getDate());

    return (
      <ol>
        {months.map((date, index) => {
          const isSelected = isSameMonth(date, selected);
          const isCurrentMonth = isSameMonth(date, today);
          const isDisabled = (
            isBefore(date, min) ||
            isBefore(date, minDate) ||
            isAfter(date, max) ||
            isAfter(date, maxDate)
          );
          const style = Object.assign({}, isSelected && {
            backgroundColor: (
              typeof theme.selectionColor === 'function'
                ? theme.selectionColor(date)
                : theme.selectionColor
            ),
          }, isCurrentMonth && {
            borderColor: theme.todayColor,
          });

          return (
            <li
              key={index}
              onClick={(e) => {
                e.stopPropagation();

                if (!isDisabled) {
                  this.handleClick(date, e);
                }
              }}
              className={classNames(styles.month, {
                [styles.selected]: isSelected,
                [styles.currentMonth]: isCurrentMonth,
                [styles.disabled]: isDisabled,
              })}
              style={style}
              title={`Set date to ${format(date, 'MMMM Do, YYYY')}`}
            >
              {format(date, 'MMM', {locale})}
            </li>
          );
        })}
      </ol>
    );
  }

  render() {
    const {height, selected, showMonths, theme, today, width} = this.props;
    const currentYear = today.getFullYear();
    const years = this.props.years.slice(0, this.props.years.length);
    const selectedYearIndex = years.indexOf(selected.getFullYear());
    const rowHeight = showMonths ? 110 : 50;
    const heights = years.map((val, index) => index === 0 || index === years.length - 1
      ? rowHeight + SPACING
      : rowHeight
    );
    const containerHeight = years.length * rowHeight < height + 50
      ? years.length * rowHeight
      : height + 50;

    return (
      <div
        className={styles.root}
        style={{color: theme.selectionColor, height: height + 50}}
      >
        <VirtualList
          ref="List"
          className={styles.list}
          width={width}
          height={containerHeight}
          itemCount={years.length}
          estimatedItemSize={rowHeight}
          itemSize={(index) => heights[index]}
          scrollToIndex={selectedYearIndex !== -1 ? selectedYearIndex : null}
          scrollToAlignment='center'
          renderItem={({index, style}) => {
            const year = years[index];
            const isActive = index === selectedYearIndex;

            return (
              <div
                key={index}
                className={classNames(styles.year, {
                  [styles.active]: !showMonths && isActive,
                  [styles.currentYear]: !showMonths && year === currentYear,
                  [styles.withMonths]: showMonths,
                  [styles.first]: index === 0,
                  [styles.last]: index === years.length - 1,
                })}
                onClick={() => this.handleClick(new Date(selected).setYear(year))}
                title={`Set year to ${year}`}
                data-year={year}
                style={Object.assign({}, style, {
                  color: (
                    typeof theme.selectionColor === 'function'
                      ? theme.selectionColor(new Date(year, 0, 1))
                      : theme.selectionColor
                  ),
                })}
              >
                <label>
                  <span
                    style={
                      !showMonths && year === currentYear
                        ? {borderColor: theme.todayColor}
                        : null
                    }
                  >
                    {year}
                  </span>
                </label>
                {showMonths && this.renderMonths(year)}
              </div>
            );
          }}
        />
      </div>
    );
  }
}

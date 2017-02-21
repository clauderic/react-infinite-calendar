import React, {Component, PropTypes} from 'react';
import {List} from 'react-virtualized';
import classNames from 'classnames';
import {getMonth, getWeek, getWeeksInMonth} from '../utils';
import differenceInWeeks from 'date-fns/difference_in_weeks';
import differenceInMonths from 'date-fns/difference_in_months';
import startOfMonth from 'date-fns/start_of_month';
import parse from 'date-fns/parse';
import Month from '../Month';
import styles from './MonthList.scss';
import overscanIndicesGetter from './overscanIndicesGetter';

export default class MonthList extends Component {
  static propTypes = {
    disabledDates: PropTypes.arrayOf(PropTypes.string),
    disabledDays: PropTypes.arrayOf(PropTypes.number),
    height: PropTypes.number,
    isScrolling: PropTypes.bool,
    locale: PropTypes.object,
    maxDate: PropTypes.instanceOf(Date),
    min: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    months: PropTypes.arrayOf(PropTypes.object),
    onDaySelect: PropTypes.func,
    onScroll: PropTypes.func,
    overscanMonthCount: PropTypes.number,
    rowHeight: PropTypes.number,
    selectedDate: PropTypes.instanceOf(Date),
    showOverlay: PropTypes.bool,
    theme: PropTypes.object,
    today: PropTypes.instanceOf(Date),
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };
  componentDidMount() {
    const list = this.refs.List;
    const grid = list && list.Grid;

    this.scrollEl = grid && grid._scrollingContainer;
  }
  cache = {};
  state = {};
  memoize = function(param) {
    if (!this.cache[param]) {
      const {locale: {weekStartsOn}} = this.props;
      const [year, month] = param.split(':');
      const result = getMonth(year, month, weekStartsOn);
      this.cache[param] = result;
    }
    return this.cache[param];
  };
  monthHeights = [];
  getMonthHeight = ({index}) => {
    if (!this.monthHeights[index]) {
      let {locale: {weekStartsOn}, months, rowHeight} = this.props;
      let {month, year} = months[index];
      let weeks = getWeeksInMonth(month, year, weekStartsOn);
      let height = weeks * rowHeight;
      this.monthHeights[index] = height;
    }

    return this.monthHeights[index];
  };
  getMonthIndex = date => {
    const {min} = this.props;
    const index = differenceInMonths(min, date);

    return index;
  };
  getDateOffset = date => {
    const {min, rowHeight, locale: {weekStartsOn}, height} = this.props;
    const weeks = getWeek(min.getFullYear(), parse(date), weekStartsOn);

    return weeks * rowHeight - (height - rowHeight)/2;
  };
  getCurrentOffset = () => {
    if (this.scrollEl) {
      return this.scrollEl.scrollTop;
    }
  };
  scrollToDate = (date, offset = 0) => {
    let offsetTop = this.getDateOffset(date);
    this.scrollTo(offsetTop + offset);
  };
  scrollTo = (scrollTop = 0) => {
    if (this.scrollEl) {
      this.scrollEl.style.overflowY = 'hidden';

      window.requestAnimationFrame(() => {
        this.scrollEl.scrollTop = scrollTop;

        setTimeout(() => {
          this.scrollEl.style.overflowY = 'auto';
        });
      });
    }
  };
  renderMonth = ({index, isScrolling, style}) => {
    let {
      DayComponent,
      disabledDates,
      disabledDays,
      locale,
      maxDate,
      minDate,
      months,
      onDayClick,
      rowHeight,
      selected,
      showOverlay,
      theme,
      today,
      ...other
    } = this.props;

    let {month, year} = months[index];
    let key = `${year}:${month}`;
    let {date, rows} = this.memoize(key);

    return (
      <Month
        key={key}
        selected={selected}
        DayComponent={DayComponent}
        displayDate={date}
        disabledDates={disabledDates}
        disabledDays={disabledDays}
        maxDate={maxDate}
        minDate={minDate}
        onDayClick={onDayClick}
        rows={rows}
        rowHeight={rowHeight}
        isScrolling={isScrolling}
        showOverlay={showOverlay}
        today={today}
        theme={theme}
        locale={locale}
        style={style}
        {...other}
      />
    );
  };
  render() {
    let {
      height,
      isScrolling,
      onScroll,
      overscanMonthCount,
      months,
      rowHeight,
      scrollDate,
      width,
    } = this.props;

    return (
      <div onClick={this.handleClick}>
        <List
          ref="List"
          width={width}
          height={height}
          rowCount={months.length}
          rowHeight={this.getMonthHeight}
          estimatedRowSize={rowHeight * 5}
          rowRenderer={this.renderMonth}
          onScroll={onScroll}
          scrollTop={this.getDateOffset(scrollDate)}
          className={classNames(styles.root, {[styles.scrolling]: isScrolling})}
          style={{lineHeight: `${rowHeight}px`}}
          overscanRowCount={overscanMonthCount}
          overscanIndicesGetter={overscanIndicesGetter}
        />
      </div>
    );
  }
}

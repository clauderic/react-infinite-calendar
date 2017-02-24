import React, {Component, PropTypes} from 'react';
import {List} from 'react-virtualized';
import classNames from 'classnames';
import {
  emptyFn,
  getMonth,
  getWeek,
  getWeeksInMonth,
  animate,
} from '../utils';
import differenceInMonths from 'date-fns/difference_in_months';
import parse from 'date-fns/parse';
import Month from '../Month';
import styles from './MonthList.scss';
import overscanIndicesGetter from './overscanIndicesGetter';

const AVERAGE_ROWS_PER_MONTH = 5;

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

    return weeks * rowHeight - (height - rowHeight) / 2;
  };
  getCurrentOffset = () => {
    if (this.scrollEl) {
      return this.scrollEl.scrollTop;
    }
  };
  scrollToDate = (date, offset = 0, ...rest) => {
    let offsetTop = this.getDateOffset(date);
    this.scrollTo(offsetTop + offset, ...rest);
  };
  scrollTo = (scrollTop = 0, shouldAnimate = false, onScrollEnd = emptyFn) => {
    const onComplete = () => setTimeout(() => {
      this.scrollEl.style.overflowY = 'auto';
      onScrollEnd();
    });

    // Interrupt iOS Momentum scroll
    this.scrollEl.style.overflowY = 'hidden';

    if (shouldAnimate) {
      /* eslint-disable sort-keys */
      animate({
        fromValue: this.scrollEl.scrollTop,
        toValue: scrollTop,
        onUpdate: (scrollTop, callback) =>
          this.setState({scrollTop}, callback),
        onComplete,
      });
    } else {
      window.requestAnimationFrame(() => {
        this.scrollEl.scrollTop = scrollTop;
        onComplete();
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
      passThrough,
      rowHeight,
      selected,
      showOverlay,
      theme,
      today,
    } = this.props;

    let {month, year} = months[index];
    let key = `${year}:${month}`;
    let {date, rows} = this.memoize(key);

    return (
      <Month
        key={key}
        selected={selected}
        DayComponent={DayComponent}
        monthDate={date}
        disabledDates={disabledDates}
        disabledDays={disabledDays}
        maxDate={maxDate}
        minDate={minDate}
        rows={rows}
        rowHeight={rowHeight}
        isScrolling={isScrolling}
        showOverlay={showOverlay}
        today={today}
        theme={theme}
        locale={locale}
        style={style}
        passThrough={passThrough}
        {...passThrough.Month}
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
      <List
        ref="List"
        width={width}
        height={height}
        rowCount={months.length}
        rowHeight={this.getMonthHeight}
        estimatedRowSize={rowHeight * AVERAGE_ROWS_PER_MONTH}
        rowRenderer={this.renderMonth}
        onScroll={onScroll}
        scrollTop={this.state.scrollTop || this.getDateOffset(scrollDate)}
        className={classNames(styles.root, {[styles.scrolling]: isScrolling})}
        style={{lineHeight: `${rowHeight}px`}}
        overscanRowCount={overscanMonthCount}
        overscanIndicesGetter={overscanIndicesGetter}
      />
    );
  }
}

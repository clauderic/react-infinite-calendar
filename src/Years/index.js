import React, {Component, PropTypes} from 'react';
import {List as VirtualScroll} from 'react-virtualized';
import classNames from 'classnames';
import {keyCodes} from '../utils';
import addYears from 'date-fns/add_years';
import setYear from 'date-fns/set_year';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import styles from './Years.scss';

export default class Years extends Component {
  static propTypes = {
    height: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    hideYearsOnSelect: PropTypes.bool,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onDaySelect: PropTypes.func,
    scrollToDate: PropTypes.func,
    selectedDate: PropTypes.object,
    setDisplay: PropTypes.func,
    theme: PropTypes.object,
    years: PropTypes.array
  };
  constructor(props) {
    super(props);

    this.state = {
      selectedYear: (
        props.selectedDate
          ? props.selectedDate.getFullYear()
          : new Date().getFullYear()
      )
    };
  }
  componentDidMount() {
    let vs = this.refs.VirtualScroll;
    let grid = vs && vs.refs.Grid;

    this.scrollEl = grid && grid.refs.scrollingContainer;
  }
  handleClick(year, e) {
    let {
      hideYearsOnSelect,
      scrollToDate,
      selectedDate,
      setDisplay
    } = this.props;
    let date = selectedDate || new Date();
    let newDate = setYear(date, year);

    this.selectDate(newDate, e, !hideYearsOnSelect);
    scrollToDate(newDate, -40);

    if (hideYearsOnSelect) {
      setDisplay('days');
    }
  }
  selectDate(date, e, updateState = true, shouldHeaderAnimate = false) {
    let {minDate, maxDate, onDaySelect} = this.props;

    if (!isBefore(date, minDate) && !isAfter(date, maxDate)) {
      if (updateState) {
        this.setState({
          selectedYear: date.year()
        });
      }

      onDaySelect(date, e, shouldHeaderAnimate);
    }
  }
  handleKeyDown(e) {
    let {scrollToDate, setDisplay, selectedDate} = this.props;
    let {selectedYear} = this.state;
    let delta = 0;

    switch (e.keyCode) {
      case keyCodes.enter:
      case keyCodes.escape:
        setDisplay('days');
        scrollToDate(selectedDate || new Date(selectedYear, 0), -40);
        return;
      case keyCodes.down:
        delta = +1;
        break;
      case keyCodes.up:
        delta = -1;
        break;
      default:
        delta = 0;
    }

    if (delta) {
      if (!selectedDate) selectedDate = new Date(selectedYear, 0);

      let newSelectedDate = addYears(selectedDate, delta);
      this.selectDate(newSelectedDate, e);
    }
  }
  render() {
    let {height, selectedDate, theme, width} = this.props;
    const {selectedYear} = this.state;
    const today = new Date();
    const currentYear = today.getFullYear();
    const years = this.props.years.slice(0, this.props.years.length);

    // Add spacer rows at the top and bottom
    years.unshift(null);
    years.push(null);

    let selectedYearIndex = years.indexOf(selectedYear);
    const rowHeight = 50;
    const containerHeight = years.length * rowHeight < height + 50
      ? years.length * rowHeight
      : height + 50;

    if (typeof width === 'string' && width.indexOf('%') !== -1) {
      width = window.innerWidth * parseInt(width.replace('%', ''), 10) / 100; // See https://github.com/bvaughn/react-virtualized/issues/229
    }

    return (
      <div
        className={styles.root}
        style={{color: theme.selectionColor, height: height + 50}}
      >
        <VirtualScroll
          ref="VirtualScroll"
          className={styles.list}
          width={width}
          height={containerHeight}
          rowCount={years.length}
          rowHeight={rowHeight}
          scrollToIndex={selectedYearIndex + 1}
          scrollToAlignment={'center'}
          rowRenderer={({index, style: rowStyle}) => {
            let year = years[index];

            if (year !== null) {
              let isActive = index === selectedYearIndex;

              return (
                <div
                  key={index}
                  className={classNames(styles.year, {
                    [styles.active]: isActive,
                    [styles.currentYear]: year === currentYear
                  })}
                  onClick={() => this.handleClick(year)}
                  title={`Set year to ${year}`}
                  data-year={year}
                  style={Object.assign({}, rowStyle, {
                    color: (
                      typeof theme.selectionColor === 'function'
                        ? theme.selectionColor(setYear(selectedDate, year))
                        : theme.selectionColor
                    )
                  })}
                >
                  <span
                    style={
                      year === currentYear
                        ? {borderColor: theme.todayColor}
                        : null
                    }
                  >
                    {year}
                  </span>
                </div>
              );
            } else {
              return <div key={index} className={styles.spacer} />;
            }
          }}
        />
      </div>
    );
  }
}

import React, {Component, PropTypes} from 'react';
import {List} from 'react-virtualized';
import classNames from 'classnames';
import {keyCodes} from '../utils';
import addYears from 'date-fns/add_years';
import styles from './Years.scss';

export default class Years extends Component {
  static propTypes = {
    height: PropTypes.number,
    hideYearsOnSelect: PropTypes.bool,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onSelect: PropTypes.func,
    scrollToDate: PropTypes.func,
    selectedYear: PropTypes.number,
    setDisplay: PropTypes.func,
    theme: PropTypes.object,
    width: PropTypes.number,
    years: PropTypes.array,
  };
  componentDidMount() {
    let list = this.refs.list;
    let grid = list && list.refs.Grid;

    this.scrollEl = grid && grid.refs.scrollingContainer;
  }
  handleClick(year, e) {
    let {
      onSelect,
      setDisplay,
    } = this.props;

    onSelect(year, e);
    requestAnimationFrame(() => setDisplay('days'));
  }
  render() {
    const {height, selectedYear, theme, width} = this.props;
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

    return (
      <div
        className={styles.root}
        style={{color: theme.selectionColor, height: height + 50}}
      >
        <List
          ref="List"
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
                    [styles.currentYear]: year === currentYear,
                  })}
                  onClick={() => this.handleClick(year)}
                  title={`Set year to ${year}`}
                  data-year={year}
                  style={Object.assign({}, rowStyle, {
                    color: (
                      typeof theme.selectionColor === 'function'
                        ? theme.selectionColor(new Date(year, 0, 1)) // TODO: Change this
                        : theme.selectionColor
                    ),
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

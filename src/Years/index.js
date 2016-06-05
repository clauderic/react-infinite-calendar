import React, {Component, PropTypes} from 'react';
import {VirtualScroll} from 'react-virtualized';
import classNames from 'classnames';
import moment from 'moment';
const style = require('./Years.scss');

export default class Years extends Component {
    static propTypes = {
        height: PropTypes.number,
        width: PropTypes.number,
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
    handleClick(year) {
        let {hideYearsOnSelect, maxDate, minDate, onDaySelect, scrollToDate, selectedDate, setDisplay} = this.props;
        let date = selectedDate || moment();
        let newDate = date.clone().year(year);

        scrollToDate(newDate, -40);

        window.requestAnimationFrame(() => {
            if (hideYearsOnSelect) {
                setDisplay('days');
            }

            if (!newDate.isBefore(minDate, 'day') && !newDate.isAfter(maxDate, 'day')) {
                window.requestAnimationFrame(() => {
                    setTimeout(() => {
                        onDaySelect(newDate);
                    });
                });
            }
        });
    }
    render() {
        let {height, selectedDate, theme, years, width} = this.props;
        const currentYear = moment().year();
        let selectedYearIndex = years.indexOf((selectedDate) ? selectedDate.year() : currentYear);
        const rowHeight = 50;
        const containerHeight = (years.length * rowHeight < height + 50) ? years.length * rowHeight : height + 50;


        return (
            <div
                className={style.root}
                style={{color: theme.selectionColor, height: height + 50}}
            >
                <VirtualScroll
                    className={style.list}
                    width={width}
                    height={containerHeight}
                    rowCount={years.length}
                    rowHeight={rowHeight}
                    scrollTop={selectedYearIndex * rowHeight - height/2}
                    rowRenderer={({index}) => {
                        let year = years[index];
                        let isActive = (index == selectedYearIndex);

                        return (
                            <div
                                className={classNames(style.year, {[style.active]: isActive, [style.currentYear]: (year == currentYear)})}
                                onClick={() => this.handleClick(year)}
                                title={`Set year to ${year}`}
                                style={{color: (typeof theme.selectionColor == 'function') ? theme.selectionColor(selectedDate.clone().year(year)) : theme.selectionColor}}
                            >
                                <span style={(year == currentYear) ? {borderColor: theme.todayColor} : null}>
                                    {year}
                                </span>
                            </div>
                        );
                    }}
                />
            </div>
        )
    }
}

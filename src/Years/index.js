import React, {Component, PropTypes} from 'react';
import {VirtualScroll} from 'react-virtualized';
import classNames from 'classnames';
import {keyCodes} from '../utils';
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
    constructor(props) {
        super(props);

        this.state = {
            selectedYear: (props.selectedDate) ? props.selectedDate.year() : moment().year()
        };
    }
    componentDidMount() {
        let vs = this.refs.VirtualScroll;
		let grid = vs && vs.refs.Grid;

		this.scrollEl = grid && grid.refs.scrollingContainer;
    }
    handleClick(year, e) {
        let {hideYearsOnSelect, scrollToDate, selectedDate, setDisplay} = this.props;
        let date = selectedDate || moment();
        let newDate = date.clone().year(year);

        scrollToDate(newDate, -40);

        window.requestAnimationFrame(() => {
            if (hideYearsOnSelect) {
                setDisplay('days');
            }

            window.requestAnimationFrame(() => {
                setTimeout(() => {
                    this.selectDate(newDate, e, !hideYearsOnSelect);
                });
            });
        });
    }
    selectDate(date, e, updateState = true) {
        let {minDate, maxDate, onDaySelect} = this.props;

        if (updateState) {
            this.setState({
                selectedYear: date.year()
            });
        }

        if (!date.isBefore(minDate, 'day') && !date.isAfter(maxDate, 'day')) {
            onDaySelect(date, e);
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
                scrollToDate(selectedDate || moment(selectedYear, 'YYYY'), -40);
                return;
            case keyCodes.down:
                delta = +1;
                break;
            case keyCodes.up:
                delta = -1;
                break;
        }

        if (delta) {
            if (!selectedDate) selectedDate = moment().year(selectedYear);
            let newSelectedDate = selectedDate.clone().add(delta, 'year');
            this.selectDate(newSelectedDate, e);
        }
    }
    render() {
        let {height, selectedDate, theme, width} = this.props;
        let {selectedYear} = this.state;
        const currentYear = moment().year();
        let years = this.props.years.slice(0, this.props.years.length);
        // Add spacer rows at the top and bottom
        years.unshift(null);
        years.push(null);

        let selectedYearIndex = years.indexOf(selectedYear);
        const rowHeight = 50;
        const containerHeight = (years.length * rowHeight < height + 50) ? years.length * rowHeight : height + 50;

        return (
            <div
                className={style.root}
                style={{color: theme.selectionColor, height: height + 50}}
            >
                <VirtualScroll
                    ref="VirtualScroll"
                    className={style.list}
                    width={width}
                    height={containerHeight}
                    rowCount={years.length}
                    rowHeight={rowHeight}
                    scrollToIndex={selectedYearIndex + 1}
                    scrollToAlignment={'center'}
                    rowRenderer={({index}) => {
                        let year = years[index];

                        if (year !== null) {
                            let isActive = (index == selectedYearIndex);

                            return (
                                <div
                                    className={classNames(style.year, {[style.active]: isActive, [style.currentYear]: (year == currentYear)})}
                                    onClick={() => this.handleClick(year)}
                                    title={`Set year to ${year}`}
                                    data-year={year}
                                    style={{color: (typeof theme.selectionColor == 'function') ? theme.selectionColor(selectedDate.clone().year(year)) : theme.selectionColor}}
                                >
                                    <span style={(year == currentYear) ? {borderColor: theme.todayColor} : null}>
                                        {year}
                                    </span>
                                </div>
                            );
                        } else {
                            return <div className={style.spacer}></div>;
                        }
                    }}
                />
            </div>
        )
    }
}

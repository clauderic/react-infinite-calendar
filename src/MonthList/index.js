import React, {Component, PropTypes} from 'react';
import {List} from 'react-virtualized';
import classNames from 'classnames';
import {getMonth, getWeeksInMonth} from '../utils';
import differenceInWeeks from 'date-fns/difference_in_weeks';
import differenceInMonths from 'date-fns/difference_in_months';
import startOfMonth from 'date-fns/start_of_month';
import Month from '../Month';
import styles from './MonthList.scss';
import cellRangeRenderer from './cellRangeRenderer';

export default class MonthList extends Component {
	static propTypes = {
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.number,
		rowHeight: PropTypes.number,
		selectedDate: PropTypes.instanceOf(Date),
		disabledDates: PropTypes.arrayOf(PropTypes.string),
		disabledDays: PropTypes.arrayOf(PropTypes.number),
		months: PropTypes.arrayOf(PropTypes.object),
		onDaySelect: PropTypes.func,
		onScroll: PropTypes.func,
		overscanMonthCount: PropTypes.number,
		isScrolling: PropTypes.bool,
		today: PropTypes.instanceOf(Date),
		min: PropTypes.instanceOf(Date),
		minDate: PropTypes.instanceOf(Date),
		maxDate: PropTypes.instanceOf(Date),
		showOverlay: PropTypes.bool,
		theme: PropTypes.object,
		locale: PropTypes.object
	};
	componentDidMount() {
		let vs = this.refs.List;
		let grid = vs && vs.Grid;

		this.scrollEl = grid && grid._scrollingContainer;
	}
	cache = {};
	state = {};
	memoize = function(param) {
		if (!this.cache[param]) {
			let [year, month] = param.split(':');
			let result = getMonth(year, month, this.props.locale.dow);
			this.cache[param] = result;
		}
		return this.cache[param];
	}
	monthHeights = [];
	getMonthHeight = ({index}) => {
		if (!this.monthHeights[index]) {
			let {locale, months, rowHeight} = this.props;
			let {month, year} = months[index];
			let weeks = getWeeksInMonth(month, year, locale.dow);
			let height = weeks * rowHeight;
			this.monthHeights[index] = height;
		}

		return this.monthHeights[index];
	};
	getMonthIndex = (date) => {
		const {min} = this.props;
		const index = differenceInMonths(min, date);

		return index;
	};
	getDateOffset = (date) => {
		const {min, rowHeight} = this.props;
		const weeks = differenceInWeeks(startOfMonth(date), startOfMonth(min));

		return weeks * rowHeight;
	};
	getCurrentOffset = () => {
		if (this.scrollEl) {
			return this.scrollEl.scrollTop;
		}
	}
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
		let {disabledDates, disabledDays, locale, maxDate, minDate, months, onDaySelect, rowHeight, selectedDate, showOverlay, theme, today} = this.props;
		let {month, year} = months[index];
		let key = `${year}:${month}`;
		let {date, rows} = this.memoize(key);

		return (
			<Month
				key={key}
				selectedDate={selectedDate}
				displayDate={date}
				disabledDates={disabledDates}
				disabledDays={disabledDays}
				maxDate={maxDate}
				minDate={minDate}
				onDaySelect={onDaySelect}
				rows={rows}
				rowHeight={rowHeight}
				isScrolling={isScrolling}
				showOverlay={showOverlay}
				today={today}
				theme={theme}
				locale={locale}
				style={style}
			/>
		);
	};
	render() {
		let {height, isScrolling, onScroll, overscanMonthCount, months, rowHeight, selectedDate, today, width} = this.props;
		if (!this._initScrollTop) this._initScrollTop = this.getDateOffset(selectedDate || today);
		if (typeof width === 'string' && width.indexOf('%') !== -1) {
			width = window.innerWidth * parseInt(width.replace('%', ''), 10) / 100; // See https://github.com/bvaughn/react-virtualized/issues/229
		}

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
					scrollTop={this._initScrollTop}
					className={classNames(styles.root, {[styles.scrolling]: isScrolling})}
					style={{lineHeight: `${rowHeight}px`}}
					overscanRowCount={overscanMonthCount}
          cellRangeRenderer={cellRangeRenderer}
				/>
			</div>
		);
	}
}

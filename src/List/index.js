import React, {Component, PropTypes} from 'react';
import {VirtualScroll} from 'react-virtualized';
import classNames from 'classnames';
import moment from 'moment';
import {getMonth, getWeeksInMonth, validParsedDate} from '../utils';
import Month from '../Month';
const style = require('./List.scss');

export default class List extends Component {
	static propTypes = {
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.number,
		rowHeight: PropTypes.number,
		selectedDate: PropTypes.object,
		disabledDates: PropTypes.arrayOf(PropTypes.string),
		disabledDays: PropTypes.arrayOf(PropTypes.number),
		months: PropTypes.arrayOf(PropTypes.object),
		onDaySelect: PropTypes.func,
		onScroll: PropTypes.func,
		overscanMonthCount: PropTypes.number,
		isScrolling: PropTypes.bool,
		today: validParsedDate,
		min: validParsedDate,
		minDate: validParsedDate,
		maxDate: validParsedDate,
		showOverlay: PropTypes.bool,
		theme: PropTypes.object,
		locale: PropTypes.object,
		showSelectionText: PropTypes.bool,
	};
	componentDidMount() {
		let vs = this.refs.VirtualScroll;
		let grid = vs && vs.refs.Grid;

		this.scrollEl = grid && grid.refs.scrollingContainer;
	}
	cache = {};
	state = {};
	memoize = function(param) {
		if (!this.cache[param]) {
			var result = getMonth(param); //custom function
			this.cache[param] = result;
		}
		return this.cache[param];
	}
	monthHeights = [];
	getMonthHeight = ({index}) => {
		if (!this.monthHeights[index]) {
			let {locale, months, rowHeight} = this.props;
			let date = months[index];
			let weeks = getWeeksInMonth(date, locale);
			let height = weeks * rowHeight;
			this.monthHeights[index] = height;
		}

		return this.monthHeights[index];
	};
	getMonthIndex = (date) => {
		let min = this.props.min.date;
		let index = date.diff(min, 'months');

		return index;
	};
	getDateOffset = (date) => {
		let {min, rowHeight} = this.props;
		let weeks = date.clone().startOf('month').diff(min.date.clone().startOf('month'), 'weeks')

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
			this.scrollEl.scrollTop = scrollTop;
		}
	};
	renderMonth = ({index, isScrolling}) => {
		let {disabledDates, disabledDays, locale, months, maxDate, minDate, onDaySelect, rowHeight, selectedDate, showOverlay, theme, today, showSelectionText} = this.props;
		let {date, rows, weeks} = this.memoize(months[index]);

		return (
			<Month
				key={`Month-${index}`}
				selectedDate={selectedDate}
				displayDate={date}
				disabledDates={disabledDates}
				disabledDays={disabledDays}
				maxDate={maxDate}
				minDate={minDate}
				onDaySelect={onDaySelect}
				rows={rows}
				weeks={weeks}
				rowHeight={rowHeight}
				isScrolling={isScrolling}
				showOverlay={showOverlay}
				today={today}
				theme={theme}
				locale={locale}
				showSelectionText={showSelectionText}
			/>
		);
	};
	render() {
		let {height, isScrolling, onScroll, overscanMonthCount, months, rowHeight, selectedDate, today, width} = this.props;
		if (!this._initScrollTop) this._initScrollTop = this.getDateOffset(selectedDate && selectedDate.date || today.date);
		if (typeof width == 'string' && width.indexOf('%') !== -1) {
			width = window.innerWidth * parseInt(width.replace('%', ''), 10) / 100; // See https://github.com/bvaughn/react-virtualized/issues/229
		}

		return (
			<VirtualScroll
				ref="VirtualScroll"
				width={width}
				height={height}
				rowCount={months.length}
				rowHeight={this.getMonthHeight}
				estimatedRowSize={rowHeight * 5}
				rowRenderer={this.renderMonth}
				onScroll={onScroll}
				scrollTop={this._initScrollTop}
				className={classNames(style.root, {[style.scrolling]: isScrolling})}
				style={{lineHeight: `${rowHeight}px`}}
				overscanRowCount={overscanMonthCount}
			/>
		);
	}
}

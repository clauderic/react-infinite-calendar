import React, {Component, PropTypes} from 'react';
import {VirtualScroll} from 'react-virtualized';
import classNames from 'classnames';
import moment from 'moment';
import {validParsedDate} from '../utils';
import Month from '../Month';
const style = require('./List.scss');

export default class List extends Component {
	constructor({months}) {
		super();

		this.monthMap = months.map((month) => month.date.format('YYYYMM'));
		this.rowHeights = months.map((month) => month.height);
	}
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
		minDate: validParsedDate,
		maxDate: validParsedDate,
		showOverlay: PropTypes.bool,
		theme: PropTypes.object,
		locale: PropTypes.object
	};
	componentDidMount() {
		let vs = this.refs.VirtualScroll;
		let grid = vs && vs.refs.Grid;

		this.scrollEl = grid && grid.refs.scrollingContainer;
	}
	getRowHeight = ({index}) => {
		return this.props.months[index].height;
	};
	getMonthIndex = (date) => {
		let index = this.monthMap.indexOf(moment(date).format('YYYYMM'));

		return index;
	};
	getDateOffset = (date) => {
		let index = this.getMonthIndex(date);
		let rowHeights = this.rowHeights.slice(0, index);
		let offsetTop = rowHeights.reduce((a, b) => a + b, 0);

		return offsetTop;
	};
	scrollToDate = (date, offset = 0) => {
		if (this.scrollEl) {
			let offsetTop = this.getDateOffset(date);
			this.scrollTo(offsetTop + offset);
		}
	};
	scrollTo = (offset = 0) => {
		let {scrollEl} = this;

		if (scrollEl) {
			// let scrollView = scrollEl.children[0];
			// let currentScrollTop = scrollEl.scrollTop;
			// let delta = -(offset - currentScrollTop);

			// function onTransitionEnd () {
			// 	scrollView.style.transform = 'translate3d(0,0,0)';
			// 	scrollView.style.transition = '';
				scrollEl.scrollTop = offset;

			// 	scrollView.removeEventListener('transitionend', onTransitionEnd);
			// }

			// window.requestAnimationFrame(() => {
			// 	scrollView.style.transform = `translate3d(0,${delta}px,0)`;
			// 	scrollView.style.transition = 'transform 0.4s ease';
			//
			// 	scrollView.addEventListener('transitionend', onTransitionEnd);
			// });
		}
	};
	renderMonth = ({index, isScrolling}) => {
		let {disabledDates, disabledDays, locale, maxDate, minDate, months, onDaySelect, rowHeight, selectedDate, showOverlay, theme, today} = this.props;
		let {date, rows} = months[index];

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
				rowHeight={rowHeight}
				isScrolling={isScrolling}
				showOverlay={showOverlay}
				today={today}
				theme={theme}
				locale={locale}
			/>
		);
	};
	render() {
		let {height, isScrolling, onScroll, overscanMonthCount, months, rowHeight, selectedDate, today, width} = this.props;
		if (!this.initScrollTop) this.initScrollTop = this.getDateOffset(selectedDate && selectedDate.date || today.date);
		if (typeof width == 'string' && width.indexOf('%') !== -1) {
			width = window.innerWidth * parseInt(width.replace('%', ''), 10) / 100; // See https://github.com/bvaughn/react-virtualized/issues/229
		}

		return (
			<VirtualScroll
				ref="VirtualScroll"
				width={width}
				height={height}
				rowCount={months.length}
				rowHeight={this.getRowHeight}
				rowRenderer={this.renderMonth}
				onScroll={onScroll}
				scrollTop={this.initScrollTop}
				className={classNames(style.root, {[style.scrolling]: isScrolling})}
				style={{lineHeight: `${rowHeight}px`}}
				overscanRowCount={overscanMonthCount}
			/>
		);
	}
}

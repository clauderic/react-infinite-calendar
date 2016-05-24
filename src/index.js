import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import moment from 'moment';
import debounce from 'lodash/debounce';
import range from 'lodash/range';
import {getScrollSpeed, keyCodes, parseDate, validDate} from './utils';
import defaultLocale from './locale';
import defaultTheme from './theme';
import Today from './Today';
import Header from './Header';
import List from './List';
import Weekdays from './Weekdays';
import Year from './Year';

const containerStyle = require('./Container.scss');
const dayStyle = require('./Day/Day.scss');
const style = {
	container: containerStyle,
	day: dayStyle
};

export default class InfiniteCalendar extends Component {
	constructor(props) {
		super();

		// Initialize
		this.updateLocale(props.locale);
		this.updateYears(props);
		this.state = {
			selectedDate: this.parseSelectedDate(props.selectedDate)
		};
	}
	static defaultProps = {
		width: 400,
		height: 500,
		rowHeight: 56,
		overscanMonthCount: 4,
		layout: 'portrait',
		selectedDate: new Date(),
		min: {year: 1980, month: 0, day: 0},
		minDate: {year: 1980, month: 0, day: 0},
		max: {year: 2050, month: 11, day: 31},
		maxDate: {year: 2050, month: 11, day: 31},
		keyboardSupport: true,
		autoFocus: true,
		shouldHeaderAnimate: true,
		showOverlay: true,
		showTodayHelper: true,
		showHeader: true,
		tabIndex: 1,
		locale: {},
		theme: {}
	};
	static propTypes = {
		selectedDate: validDate,
		min: validDate,
		max: validDate,
		minDate: validDate,
		maxDate: validDate,
		locale: PropTypes.object,
		theme: PropTypes.object,
		width: PropTypes.number,
		height: PropTypes.number,
		rowHeight: PropTypes.number,
		className: PropTypes.string,
		overscanMonthCount: PropTypes.number,
		disabledDays: PropTypes.arrayOf(PropTypes.number),
		disabledDates: PropTypes.arrayOf(validDate),
		beforeSelect: PropTypes.func,
		onSelect: PropTypes.func,
		afterSelect: PropTypes.func,
		onScroll: PropTypes.func,
		onScrollEnd: PropTypes.func,
		keyboardSupport: PropTypes.bool,
		autoFocus: PropTypes.bool,
		onKeyDown: PropTypes.func,
		tabIndex: PropTypes.number,
		layout: function(props, propName, componentName) {
			if (['portrait', 'landscape'].indexOf(props[propName]) == -1) {
				return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}. Should be one of \`landscape\` or \`portrait\`.`);
			}
		},
		shouldHeaderAnimate: PropTypes.bool,
		showOverlay: PropTypes.bool,
		showTodayHelper: PropTypes.bool,
		showHeader: PropTypes.bool
	};
	componentDidMount() {
		let {autoFocus, keyboardSupport} = this.props;
		this.node = this.refs.node;
		this.list = this.refs.List;

		if (keyboardSupport && autoFocus) {
			this.node.focus();
		}
	}
	componentWillReceiveProps(next) {
		let {min, minDate, max, maxDate, locale, selectedDate} = this.props;

		if (next.locale !== locale) {
			this.updateLocale(next.locale);
		}
		if (next.min !== min || next.minDate !== minDate || next.max !== max || next.maxDate !== maxDate) {
			this.updateYears(next);
		}
		if (next.selectedDate !== selectedDate) {
			this.setState({
				selectedDate: this.parseSelectedDate(next.selectedDate)
			});
		} else if (next.minDate !== minDate || next.maxDate !== maxDate) {
			// Need to make sure the currently selected date is not before the new minDate or after maxDate
			let _selectedDate = this.parseSelectedDate(this.state.selectedDate);
			if (!_selectedDate.isSame(this.state.selectedDate, 'day')) {
				this.setState({
					selectedDate: _selectedDate
				});
			}
		}
	}
	parseSelectedDate(selectedDate) {
		if (selectedDate) {
			selectedDate = moment(selectedDate);

			// Selected Date should not be before min date or after max date
			if (selectedDate.isBefore(this._minDate)) {
				return this._minDate;
			} else if (selectedDate.isAfter(this._maxDate)) {
				return this._maxDate;
			}
		}

		return selectedDate;
	}
	updateYears(props = this.props) {
		let min = this._min = moment(props.min);
		let max = this._max = moment(props.max);
		this._minDate = moment(props.minDate);
		this._maxDate = moment(props.maxDate);

		this.years = range(min.year(), max.year() + 1).map((year) => Year({year, min, max, rowHeight: props.rowHeight}));
		this.months = [].concat.apply([], this.years);
	}
	updateLocale(locale) {
		locale = this.getLocale(locale);
		moment.updateLocale(locale.name, locale);
		moment.locale(locale.name);
	}
	getDisabledDates(disabledDates) {
		return disabledDates && disabledDates.map((date) => moment(date).format('YYYYMMDD'));
	}
	getLocale(customLocale = this.props.locale) {
		return Object.assign({}, defaultLocale, customLocale);
	}
	getTheme(customTheme = this.props.theme) {
		return Object.assign({}, defaultTheme, customTheme);
	}
	onDaySelect = (selectedDate, e) => {
		let {afterSelect, beforeSelect, onSelect} = this.props;

		if (!beforeSelect || typeof beforeSelect == 'function' && beforeSelect(selectedDate)) {
			if (typeof onSelect == 'function') {
				onSelect(selectedDate, e);
			}

			this.setState({
				selectedDate,
				highlightedDate: selectedDate.clone()
			}, () => {
				this.clearHighlight();
				if (typeof afterSelect == 'function') {
					afterSelect(selectedDate);
				}
			});
		}
	};
	getCurrentOffset = () => {
		return this.scrollTop;
	}
	getDateOffset = (date) => {
		return this.list && this.list.getDateOffset(date);
	};
	scrollTo = (offset) => {
		return this.list && this.list.scrollTo(offset);
	}
	scrollToDate = (date = moment(), offset) => {
		return this.list && this.list.scrollToDate(date, offset);
	};
	getScrollSpeed = getScrollSpeed();
	onScroll = ({scrollTop}) => {
		let {onScroll, showOverlay, showTodayHelper} = this.props;
		let {isScrolling} = this.state;
		let scrollSpeed = this.scrollSpeed = Math.abs(this.getScrollSpeed(scrollTop));
		this.scrollTop = scrollTop;

		// We only want to display the months overlay if the user is rapidly scrolling
		if (showOverlay && scrollSpeed >= 50 && !isScrolling) {
			this.setState({
				isScrolling: true
			});
		}

		if (showTodayHelper) {
			this.updateTodayHelperPosition(scrollSpeed);
		}
		if (typeof onScroll == 'function') {
			onScroll(scrollTop);
		}
		this.onScrollEnd();
	};
	onScrollEnd = debounce(() => {
		let {onScrollEnd, showTodayHelper} = this.props;
		let {isScrolling} = this.state;

		if (isScrolling) this.setState({isScrolling: false});
		if (showTodayHelper) this.updateTodayHelperPosition(0);
		if (typeof onScrollEnd == 'function') onScrollEnd(this.scrollTop);
	}, 150);
	updateTodayHelperPosition = (scrollSpeed) => {
		if (!this.todayOffset) this.todayOffset = this.getDateOffset(this.today.date);
		let {scrollTop} = this;
		let {showToday} = this.state;
		let newState;

		if (scrollTop >= this.todayOffset + 480) {
			if (showToday !== 1) newState = 1;
		} else if (scrollTop <= this.todayOffset - 500) {
			if (showToday !== -1) newState = -1;
		} else if (showToday && scrollSpeed <= 1) {
			newState = false;
		}

		if (scrollTop == 0) {
			newState = false;
		}

		if (newState != null) {
			this.setState({showToday: newState});
		}
	};
	handleKeyDown = (e) => {
		let {onKeyDown} = this.props;
		let {highlightedDate, showToday} = this.state;
		let delta = 0;

		if (typeof onKeyDown == 'function') {
			onKeyDown(e);
		}
		if (!highlightedDate) {
			highlightedDate = this.state.selectedDate.clone();
			this.setState({highlightedDate});
		}

		if ([keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down].indexOf(e.keyCode) > -1 && typeof e.preventDefault == 'function') {
			e.preventDefault();
		}
		switch (e.keyCode) {
			case keyCodes.enter:
				this.setState({
					selectedDate: moment(highlightedDate)
				});
				return;
			case keyCodes.left:
				delta = -1;
				break;
			case keyCodes.right:
				delta = +1;
				break;
			case keyCodes.down:
				delta = +7;
				break;
			case keyCodes.up:
				delta = -7;
				break;
		}

		if (delta) {
			let {maxDate, minDate, rowHeight} = this.props;
			let newHighlightedDate = moment(highlightedDate).add(delta, 'days');

			// Make sure the new highlighted date isn't before min / max
			if (newHighlightedDate.isBefore(minDate)) {
				newHighlightedDate = moment(minDate);
			} else if (newHighlightedDate.isAfter(maxDate)) {
				newHighlightedDate = moment(maxDate);
			}

			// Update the highlight indicator
			this.clearHighlight();
			let highlightedEl = this.highlightedEl = this.node.querySelector(`[data-date='${newHighlightedDate.format('YYYYMMDD')}']`);
			if (highlightedEl) {
				highlightedEl.classList.add(style.day.highlighted);
			}

			// Scroll the view
			if (!this.currentOffset) this.currentOffset = this.getCurrentOffset();
			let currentOffset = this.currentOffset;
			let monthOffset = this.getDateOffset(newHighlightedDate);
			let dateOffset = highlightedEl.offsetTop - rowHeight;
			let newOffset = monthOffset + dateOffset;
			let navOffset = (showToday) ? 36 : 0;

			if (currentOffset !== newOffset) {
				this.currentOffset = newOffset;
				this.scrollTo(newOffset - navOffset);
			}

			// Update the reference to the currently highlighted date
			this.setState({
				highlightedDate: newHighlightedDate
			});
		}
	};
	clearHighlight() {
		if (this.highlightedEl) {
			this.highlightedEl.classList.remove(style.day.highlighted);
			this.highlightedEl = null;
		}
	}
	render() {
		let {className, disabledDays, height, keyboardSupport, layout, overscanMonthCount, minDate, maxDate, shouldHeaderAnimate, showTodayHelper, showHeader, tabIndex, width, ...other} = this.props;
		let disabledDates = this.getDisabledDates(this.props.disabledDates);
		let locale = this.getLocale();
		let theme = this.getTheme();
		let {isScrolling, selectedDate, showToday} = this.state;
		let today = this.today = parseDate(moment());

		// Selected date should not be disabled
		if (selectedDate && (disabledDates && disabledDates.indexOf(selectedDate.format('YYYYMMDD')) !== -1 || disabledDays && disabledDays.indexOf(selectedDate.day()) !== -1)) {
			selectedDate = null;
		}

		return (
			<div tabIndex={tabIndex} onKeyDown={keyboardSupport && this.handleKeyDown} className={classNames(className, style.container.root, {[style.container.landscape]: layout == 'landscape'})} style={{color: theme.textColor.default, width}} aria-label="Calendar" ref="node">
				{showHeader &&
					<Header selectedDate={selectedDate} shouldHeaderAnimate={shouldHeaderAnimate} layout={layout} theme={theme} locale={locale} onClick={this.scrollToDate} />
				}
				<div className={style.container.wrapper}>
					<Weekdays theme={theme} />
					<div className={style.container.listWrapper}>
						{showTodayHelper &&
							<Today scrollToDate={this.scrollToDate} show={showToday} today={today} theme={theme} locale={locale} />
						}
						<List
							ref="List"
							{...other}
							width={width}
							height={height}
							selectedDate={parseDate(selectedDate)}
							disabledDates={disabledDates}
							disabledDays={disabledDays}
							months={this.months}
							onDaySelect={this.onDaySelect}
							onScroll={this.onScroll}
							isScrolling={isScrolling}
							today={today}
							minDate={parseDate(minDate)}
							maxDate={parseDate(maxDate)}
							theme={theme}
							locale={locale}
							overscanMonthCount={overscanMonthCount}
						/>
					</div>
				</div>
			</div>
		);
	}
}

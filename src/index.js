import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import moment from 'moment';
import debounce from 'lodash/debounce';
import range from 'lodash/range';
import {getScrollSpeed, getMonthsForYear, keyCodes, parseDate, validDate, validDisplay, validLayout} from './utils';
import defaultLocale from './locale';
import defaultTheme from './theme';
import Today from './Today';
import Header from './Header';
import List from './List';
import Weekdays from './Weekdays';
import Years from './Years';

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

		var selectedDate = props.selectedDate;
		var rangeSelectionEndDate = props.rangeSelectionEndDate;

		if(rangeSelectionEndDate===false) {
			rangeSelectionEndDate = selectedDate;
		} else if(selectedDate===false) {
			rangeSelectionEndDate = false;
		} else if(selectedDate>rangeSelectionEndDate) {
			var tmp = selectedDate;
			selectedDate = rangeSelectionEndDate;
			rangeSelectionEndDate = tmp;
		}

		this.state = {
			selectedDate: this.parseSelectedDate(selectedDate),
			selectedHovering: null,
			rangeSelectionEndDate: this.parseSelectedDate(rangeSelectionEndDate),
			dragging: 0, //direction -1 reverse 0 nodrag 1 forwards
			touchBehavior: false,
			display: props.display,
			shouldHeaderAnimate: props.shouldHeaderAnimate
		};
	}
	static defaultProps = {
		width: 400,
		height: 500,
		rowHeight: 56,
		overscanMonthCount: 4,
		todayHelperRowOffset: 4,
		layout: 'portrait',
		display: 'days',
		selectedDate: new Date(),
		endDate: new Date(),
		min: {year: 1980, month: 0, day: 0},
		minDate: {year: 1980, month: 0, day: 0},
		max: {year: 2050, month: 11, day: 31},
		maxDate: {year: 2050, month: 11, day: 31},
		keyboardSupport: true,
		autoFocus: true,
		rangeSelection: false,
		rangeSelectionBehavior: "hover",
		rangeSelectionEndDate: false,
		shouldHeaderAnimate: true,
		showOverlay: true,
		showTodayHelper: true,
		showHeader: true,
		tabIndex: 1,
		locale: {},
		theme: {},
		hideYearsOnSelect: true
	};
	static propTypes = {
		selectedDate: validDate,
		endDate: validDate,
		min: validDate,
		max: validDate,
		minDate: validDate,
		maxDate: validDate,
		locale: PropTypes.object,
		theme: PropTypes.object,
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		height: PropTypes.number,
		rowHeight: PropTypes.number,
		className: PropTypes.string,
		overscanMonthCount: PropTypes.number,
		todayHelperRowOffset: PropTypes.number,
		disabledDays: PropTypes.arrayOf(PropTypes.number),
		disabledDates: PropTypes.arrayOf(validDate),
		beforeSelect: PropTypes.func,
		onSelect: PropTypes.func,
		afterSelect: PropTypes.func,
		onScroll: PropTypes.func,
		onScrollEnd: PropTypes.func,
		keyboardSupport: PropTypes.bool,
		autoFocus: PropTypes.bool,
		rangeSelection: PropTypes.bool,
		rangeSelectionBehavior: PropTypes.string,
		rangeSelectionEndDate: validDate,
		onKeyDown: PropTypes.func,
		tabIndex: PropTypes.number,
		layout: validLayout,
		display: validDisplay,
		hideYearsOnSelect: PropTypes.bool,
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
		let {min, minDate, max, maxDate, locale, selectedDate, rangeSelectionEndDate} = this.props;
		let {display} = this.state;

		if (next.locale !== locale) {
			this.updateLocale(next.locale);
		}
		if (next.min !== min || next.minDate !== minDate || next.max !== max || next.maxDate !== maxDate) {
			this.updateYears(next);
		}
		if (next.selectedDate !== selectedDate || next.rangeSelectionEndDate !== rangeSelectionEndDate) {
			var nextSelectedDate = next.selectedDate;
			var nextSelectedDateEnd = next.rangeSelectionEndDate;

			if(nextSelectedDateEnd===false) {
				nextSelectedDateEnd = nextSelectedDate;
			} else if(nextSelectedDate===false) {
				nextSelectedDateEnd = false;
			} else if(nextSelectedDate>nextSelectedDateEnd) {
				var tmp = nextSelectedDate;
				nextSelectedDate = nextSelectedDateEnd;
				nextSelectedDateEnd = tmp;
			}

			if (nextSelectedDate !== selectedDate) {
				var parsed = this.parseSelectedDate(nextSelectedDate);
				this.setState({
					selectedDate: parsed,
					rangeSelectionEndDate: this.parseSelectedDate(nextSelectedDateEnd)					
				});
				if(parsed) this.scrollToDate(parsed,-this.props.rowHeight);
			} else if (nextSelectedDateEnd !== rangeSelectionEndDate) {
				this.setState({
					rangeSelectionEndDate: this.parseSelectedDate(nextSelectedDateEnd)
				});
			}
		} else if (next.minDate !== minDate || next.maxDate !== maxDate) {
			// Need to make sure the currently selected date is not before the new minDate or after maxDate
			let _selectedDate = this.parseSelectedDate(this.state.selectedDate);
			if (!_selectedDate.isSame(this.state.selectedDate, 'day')) {
				this.setState({
					selectedDate: _selectedDate
				});
			}
			let _rangeSelectionEndDate = this.parseSelectedDate(this.state.rangeSelectionEndDate);
			if (!_rangeSelectionEndDate.isSame(this.state.rangeSelectionEndDate, 'day')) {
				this.setState({
					rangeSelectionEndDate: _rangeSelectionEndDate
				});
			}
		}
		if (next.display !== display) {
			this.setState({
				display: next.display
			});
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

		this.years = range(min.year(), max.year() + 1).map((year) => getMonthsForYear(year, min, max));
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
	onDaySelect = (clickedDate, e) => {
		let {afterSelect, beforeSelect, onSelect, rangeSelection, shouldHeaderAnimate, rangeSelectionBehavior} = this.props;

		var selectedDate = this.state.selectedDate;
		var rangeSelectionEndDate = this.state.rangeSelectionEndDate;

		var dragging = 0;

		if(rangeSelection && (this.state.touchBehavior || rangeSelectionBehavior=="hover")) {
			if(this.state.dragging==0) {
				selectedDate = clickedDate;
				rangeSelectionEndDate = clickedDate;
				dragging = 1;
			} else {
				if(clickedDate>selectedDate) {
					rangeSelectionEndDate = clickedDate;
				} else {
					selectedDate = clickedDate;
				}
			}
		} else {
			selectedDate = clickedDate;
			rangeSelectionEndDate = clickedDate;
			if(this.state.selectedDate == selectedDate) return;
		}

		if (!beforeSelect || typeof beforeSelect == 'function' && beforeSelect(selectedDate,rangeSelectionEndDate)) {
			if (typeof onSelect == 'function') {
				onSelect(selectedDate,rangeSelectionEndDate, e);
			}

			this.setState({
				selectedDate,
				rangeSelectionEndDate,
				dragging,
				highlightedDate: selectedDate.clone()
			}, () => {
				this.clearHighlight();
				if (typeof afterSelect == 'function') {
					afterSelect(selectedDate,rangeSelectionEndDate);
				}
			});
		}
	};
	onDayDown = (selectedDate, e) => {
		let {afterSelect, beforeSelect, onSelect, rangeSelection, rangeSelectionBehavior} = this.props;

		if(this.state.touchBehavior || !rangeSelection || rangeSelectionBehavior=="hover") return false;

		if (!beforeSelect || typeof beforeSelect == 'function' && beforeSelect(selectedDate,null)) {
			var dragging = 1;
			var rangeSelectionEndDate = selectedDate;
			var selectedHovering = null;
			this.setState({
				selectedDate,
				rangeSelectionEndDate,
				selectedHovering,
				dragging,
				highlightedDate: selectedDate.clone()
			});
		}
		return false;
	};
	onDayOver = (selectedHovering, e) => {
		if(this.state.dragging!==0 && !this.state.touchBehavior && this.props.rangeSelection) {
			var selectedDate = this.state.selectedDate;
			var rangeSelectionEndDate = this.state.rangeSelectionEndDate;
			var dragging = this.state.dragging;

			if(dragging==1) {
				rangeSelectionEndDate = selectedHovering;
			} else if(dragging==-1) {
				selectedDate = selectedHovering;
			}
			if(selectedDate>rangeSelectionEndDate) {
				dragging = -dragging;
				var tmp = selectedDate;
				selectedDate = rangeSelectionEndDate;
				rangeSelectionEndDate = tmp;
			}

			this.setState({
				selectedDate,
				rangeSelectionEndDate,
				selectedHovering,
				dragging
			});
		}
		return false;
	};
	onDayUp = (overDate, e) => {
		let {afterSelect, beforeSelect, onSelect, rangeSelection, rangeSelectionBehavior} = this.props;
		if(this.state.dragging!==0 && !this.state.touchBehavior && rangeSelectionBehavior=="drag" && rangeSelection) {

			var selectedDate = this.state.selectedDate;
			var rangeSelectionEndDate = this.state.rangeSelectionEndDate;
			var dragging = 0;
			var selectedHovering = null;

			if(this.state.dragging==1) {
				rangeSelectionEndDate = overDate;
			} else if(this.state.dragging==-1) {
				selectedDate = overDate;
			}
			if(selectedDate>rangeSelectionEndDate) {
				var tmp = selectedDate;
				selectedDate = rangeSelectionEndDate;
				rangeSelectionEndDate = tmp;
			}

			var valid = true;
			if(beforeSelect || typeof beforeSelect == 'function') valid = beforeSelect(selectedDate,rangeSelectionEndDate);

			if (valid) {
				if (typeof onSelect == 'function') {
					onSelect(selectedDate, rangeSelectionEndDate, e);
				}

				this.setState({
					selectedDate,
					rangeSelectionEndDate,
					selectedHovering,
					dragging,
				}, () => {
					this.clearHighlight();
					if (typeof afterSelect == 'function') {
						afterSelect(selectedDate, rangeSelectionEndDate);
					}
				});
			} else {
				selectedDate = null;
				rangeSelectionEndDate = null;
				this.setState({
					selectedDate,
					rangeSelectionEndDate,
					selectedHovering,
					dragging,
				});
			}
		}
		return false;
	};
	onTouchStart = (startDate, e) => {
		this.setState({touchBehavior: true});
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
		let date = this.today.date;
		if (!this.todayOffset) this.todayOffset = this.getDateOffset(date); //scrollTop offset of the month "today" is in

		let scrollTop = this.scrollTop;
		let {showToday} = this.state;
		let {height, rowHeight, todayHelperRowOffset} = this.props;
		let newState;
		let dayOffset = Math.ceil((date.date()-7+moment(date).startOf("month").day())/7)*rowHeight; //offset of "today" within its month

		if (scrollTop >= this.todayOffset + dayOffset + rowHeight * (todayHelperRowOffset+1)) {
			if (showToday !== 1) newState = 1; //today is above the fold
		} else if (scrollTop + height <= this.todayOffset + dayOffset + rowHeight - rowHeight * (todayHelperRowOffset+1)) {
			if (showToday !== -1) newState = -1; //today is below the fold
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
		let {maxDate, minDate, onKeyDown} = this.props;
		let {display, selectedDate, highlightedDate, showToday} = this.state;
		let delta = 0;

		if (typeof onKeyDown == 'function') {
			onKeyDown(e);
		}
		if ([keyCodes.left, keyCodes.up, keyCodes.right, keyCodes.down].indexOf(e.keyCode) > -1 && typeof e.preventDefault == 'function') {
			e.preventDefault();
		}

		if (!selectedDate) {
			selectedDate = moment();
		}

		if (display == 'days') {
			if (!highlightedDate) {
				highlightedDate = selectedDate.clone();
				this.setState({highlightedDate});
			}

			switch (e.keyCode) {
				case keyCodes.enter:
					this.onDaySelect(moment(highlightedDate), e);
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
				let {rowHeight} = this.props;
				let newHighlightedDate = moment(highlightedDate).add(delta, 'days');

				// Make sure the new highlighted date isn't before min / max
				if (newHighlightedDate.isBefore(minDate)) {
					newHighlightedDate = moment(minDate);
				} else if (newHighlightedDate.isAfter(maxDate)) {
					newHighlightedDate = moment(maxDate);
				}

				// Update the highlight indicator
				this.clearHighlight();

				// Scroll the view
				if (!this.currentOffset) this.currentOffset = this.getCurrentOffset();
				let currentOffset = this.currentOffset;
				let monthOffset = this.getDateOffset(newHighlightedDate);
				let navOffset = (showToday) ? 36 : 0;

				let highlightedEl = this.highlightedEl = this.node.querySelector(`[data-date='${newHighlightedDate.format('YYYYMMDD')}']`);

				// Edge-case: if the user tries to use the keyboard when the new highlighted date isn't rendered because it's too far off-screen
				// We need to scroll to the month of the new highlighted date so it renders
				if (!highlightedEl) {
					this.scrollTo(monthOffset - navOffset);
					return;
				}

				highlightedEl.classList.add(style.day.highlighted);

				let dateOffset = highlightedEl.offsetTop - rowHeight;
				let newOffset = monthOffset + dateOffset;


				if (currentOffset !== newOffset) {
					this.currentOffset = newOffset;
					this.scrollTo(newOffset - navOffset);
				}

				// Update the reference to the currently highlighted date
				this.setState({
					highlightedDate: newHighlightedDate
				});

			}
		} else if (display == 'years' && this.refs.years) {
			this.refs.years.handleKeyDown(e);
		}
	};
	clearHighlight() {
		if (this.highlightedEl) {
			this.highlightedEl.classList.remove(style.day.highlighted);
			this.highlightedEl = null;
		}
	}
	setDisplay = (display) => {
		this.setState({display});
	}
	render() {
		let {
			className,
			disabledDays,
			height,
			hideYearsOnSelect,
			keyboardSupport,
			layout,
			overscanMonthCount,
			min,
			minDate,
			max,
			maxDate,
			showTodayHelper,
			showHeader,
			tabIndex,
			width,
			...other
		} = this.props;
		let disabledDates = this.getDisabledDates(this.props.disabledDates);
		let locale = this.getLocale();
		let theme = this.getTheme();
		let {display, isScrolling, selectedDate, dragging, rangeSelectionEndDate, selectedHovering, showToday, shouldHeaderAnimate} = this.state;
		let today = this.today = parseDate(moment());

		// Selected date should not be disabled
		if (selectedDate && (disabledDates && disabledDates.indexOf(selectedDate.format('YYYYMMDD')) !== -1 || disabledDays && disabledDays.indexOf(selectedDate.day()) !== -1)) {
			selectedDate = null;
		}

		return (
			<div tabIndex={tabIndex} onKeyDown={keyboardSupport && this.handleKeyDown} className={classNames(className, style.container.root, {[style.container.landscape]: layout == 'landscape'})} style={{color: theme.textColor.default, width}} aria-label="Calendar" ref="node">
				{showHeader &&
					<Header selectedDate={selectedDate} rangeSelectionEndDate={rangeSelectionEndDate} shouldHeaderAnimate={shouldHeaderAnimate} layout={layout} theme={theme} locale={locale} scrollToDate={this.scrollToDate} setDisplay={this.setDisplay} display={display} />
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
							dragging={dragging}
							selectedHovering={parseDate(selectedHovering)}
							rangeSelectionEndDate={parseDate(rangeSelectionEndDate)}
							disabledDates={disabledDates}
							disabledDays={disabledDays}
							months={this.months}
							onDaySelect={this.onDaySelect}
							onDayDown={this.onDayDown}
							onDayOver={this.onDayOver}
							onDayUp={this.onDayUp}
							onTouchStart={this.onTouchStart}
							onScroll={this.onScroll}
							isScrolling={isScrolling}
							today={today}
							min={parseDate(min)}
							minDate={parseDate(minDate)}
							maxDate={parseDate(maxDate)}
							theme={theme}
							locale={locale}
							overscanMonthCount={overscanMonthCount}
						/>
					</div>
					{display == 'years' &&
						<Years
							ref="years"
							width={width}
							height={height}
							onDaySelect={this.onDaySelect}
							minDate={minDate}
							maxDate={maxDate}
							selectedDate={selectedDate}
							theme={theme}
							years={range(moment(min).year(), moment(max).year() + 1)}
							setDisplay={this.setDisplay}
							scrollToDate={this.scrollToDate}
							hideYearsOnSelect={hideYearsOnSelect}
						/>
					}
				</div>
			</div>
		);
	}
}

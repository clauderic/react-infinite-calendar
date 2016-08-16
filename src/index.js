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

const onClickOutside = require('react-onclickoutside');
const containerStyle = require('./Container.scss');
const dayStyle = require('./Day/Day.scss');
const weekStyle = require('./Week/Week.scss');
const style = {
	container: containerStyle,
	day: dayStyle,
	week: weekStyle
};

class InfiniteCalendar extends Component {
	constructor(props) {
		super();

		// Initialize
		this.updateLocale(props.locale);
		this.updateYears(props);
		this.state = {
			height: props.collapsedHeight,
			selectedWeek: this.parseSelectedWeek(props.selectedWeek),
			selectedDate: this.parseSelectedDate(props.selectedDate),
			display: props.display,
			shouldHeaderAnimate: props.shouldHeaderAnimate
		};
	}

	static defaultProps = {
		width: 400,
		expandedHeight: 400,
		collapsedHeight: 200,
		rowHeight: 40,
		overscanMonthCount: 4,
		todayHelperRowOffset: 4,
		layout: 'portrait',
		display: 'days',
		selectedDate: new Date(),
		selectedWeek: null,
		min: {year: 1980, month: 0, day: 0},
		minDate: {year: 1980, month: 0, day: 0},
		max: {year: 2050, month: 11, day: 31},
		maxDate: {year: 2050, month: 11, day: 31},
		keyboardSupport: true,
		autoFocus: true,
		shouldHeaderAnimate: true,
		showOverlay: true,
		showTodayHelper: false,
		showHeader: false,
		tabIndex: 1,
		locale: {},
		theme: {},
		hideYearsOnSelect: true,
		hideYearsOnDate: true,
		showSelectionText: true,
		isTouching: false,
		isClickOnDatepicker: false,
	};

	static propTypes = {
		selectedDate: validDate,
		selectedWeek: validDate,
		min: validDate,
		max: validDate,
		minDate: validDate,
		maxDate: validDate,
		locale: PropTypes.object,
		theme: PropTypes.object,
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		expandedHeight: PropTypes.number,
		collapsedHeight: PropTypes.number,
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
		onKeyDown: PropTypes.func,
		tabIndex: PropTypes.number,
		layout: validLayout,
		display: validDisplay,
		hideYearsOnSelect: PropTypes.bool,
		hideYearsOnDate: PropTypes.bool,
		shouldHeaderAnimate: PropTypes.bool,
		showOverlay: PropTypes.bool,
		showTodayHelper: PropTypes.bool,
		showHeader: PropTypes.bool,
		showSelectionText: PropTypes.bool,
		isTouching: PropTypes.bool,
		isClickOnDatepicker: PropTypes.bool,
	};

	componentDidMount() {
		let {autoFocus, collapsedHeight, keyboardSupport} = this.props;
		this.node = this.refs.node;
		this.list = this.refs.List;
		this.setState({
			height: this.props.collapsedHeight
		});

		if (keyboardSupport && autoFocus) {
			this.node.focus();
		}
	}

	componentWillReceiveProps(next) {
		let {min, minDate, max, maxDate, locale, selectedDate, selectedWeek, showSelectionText} = this.props;
		let {display} = this.state;

		const nextDate = this.parseSelectedDate(next.selectedDate);
		const nextWeek = this.parseSelectedDate(next.selectedWeek);
		const stateDate = this.parseSelectedDate(this.state.selectedDate);
		const stateWeek = this.parseSelectedDate(this.state.selectedWeek);
		let scrollCheck = false;

		if (nextDate !== null) {
			scrollCheck = (moment(nextDate).format('YYYY') !== moment(stateDate).format('YYYY')) || (moment(nextDate).format('ww') !== moment(stateDate).format('ww'));
		} else {
			scrollCheck = (moment(nextDate).format('YYYY') !== moment(stateWeek).format('YYYY')) || (moment(nextWeek).format('ww') !== moment(stateWeek).format('ww'));
		}

		if (!this.state.isClickOnDatepicker && scrollCheck) {
			if (nextDate !== null) {
				this.scrollToDate(nextDate, 0);
			} else {
				this.scrollToDate(nextWeek, 0);
			}
		}

		if (next.locale !== locale) {
			this.updateLocale(next.locale);
		}

		if (next.min !== min || next.minDate !== minDate || next.max !== max || next.maxDate !== maxDate) {
			this.upda
			teYears(next);
		}

		if (next.selectedDate !== null) {
			this.onDaySelect(nextDate);

			if (next.selectedDate !== selectedDate) {
				this.setState({
					selectedDate: nextDate
				});
			} else if (next.minDate !== minDate || next.maxDate !== maxDate) {
				// Need to make sure the currently selected date is not before the new minDate or after maxDate
				let _selectedDate = stateDate;
				if (!_selectedDate.isSame(this.state.selectedDate, 'day')) {
					this.setState({
						selectedDate: _selectedDate
					});
				}
			}
		}
		
		if (next.selectedWeek !== null) {
			this.onWeekSelect(nextWeek);

			if (next.selectedWeek !== selectedWeek) {
				this.setState({
					selectedWeek: nextWeek
				});
			} else if (next.minDate !== minDate || next.maxDate !== maxDate) {
				// Need to make sure the currently selected date is not before the new minDate or after maxDate
				let _selectedWeek = stateWeek;
				if (!_selectedWeek.isSame(this.state.selectedWeek, 'day')) {
					this.setState({
						selectedWeek: _selectedWeek
					});
				}
			}
		}

		this.setState({
			isClickOnDatepicker: false
		});

		if (next.display !== display) {
			this.setState({
				display: next.display
			});
		}
	}

	handleClickOutside(evt) {
    if (this.state.height != this.props.collapsedHeight) {
    	this.setState({
    		height: this.props.collapsedHeight
    	}, () => {
			this.clearHighlight();

			if (this.state.selectedDate !== null) {
				this.scrollToDate(this.state.selectedDate, 0);
			} else {
				this.scrollToDate(this.state.selectedWeek, 0);
			}
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

	parseSelectedWeek(selectedWeek) {
		if (selectedWeek) {
			selectedWeek = moment(selectedWeek);

			// Selected Date should not be before min date or after max date
			if (selectedWeek.isBefore(this._minDate)) {
				return this._minDate;
			} else if (selectedWeek.isAfter(this._maxDate)) {
				return this._maxDate;
			}
		}

		return selectedWeek;
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

	onDaySelect = (selectedDate, e, shouldHeaderAnimate = this.props.shouldHeaderAnimate) => {
		let {afterSelect, beforeSelect, onSelect} = this.props;

		this.setState({
			isClickOnDatepicker: true
		});

		if (!beforeSelect || typeof beforeSelect == 'function' && beforeSelect(selectedDate)) {
			if (typeof onSelect == 'function') {
				onSelect(selectedDate, e);
			}

			const prevHeight = this.state.height;

			this.setState({
				selectedDate,
				shouldHeaderAnimate,
				highlightedDate: selectedDate.clone(),
				selectedWeek: null,
				height: this.props.collapsedHeight,
			}, () => {
				this.clearHighlight();

				if (prevHeight != this.props.collapsedHeight) {
					this.scrollToDate(selectedDate, 0);
				}
				
				if (typeof afterSelect == 'function') {
					afterSelect(selectedDate);
				}
			});
		}
	};

	onWeekSelect = (selectedWeek) => {
		const prevHeight = this.state.height;

		this.setState({
			selectedWeek,
			selectedDate: null,
			height: this.props.collapsedHeight,
			isClickOnDatepicker: true,
		}, () => {
			this.clearHighlight();

			if (prevHeight != this.props.collapsedHeight) {
				this.scrollToDate(selectedWeek, 0);
			}
		});
	};

	getCurrentOffset = () => {
		return this.scrollTop;
	};

	getDateOffset = (date) => {
		return this.list && this.list.getDateOffset(date);
	};

	scrollTo = (offset) => {
		return this.list && this.list.scrollTo(offset);
	};

	scrollToDate = (date = moment(), offset) => {
		if (this.state.height !== this.props.collapsedHeight) {
			this.setState({
				height: this.props.collapsedHeight,
			});
		}

		return this.list && this.list.scrollToDate(date, offset);
	};

	getScrollSpeed = getScrollSpeed();

	onScroll = ({scrollTop}) => {
		let {onScroll, showOverlay, showTodayHelper} = this.props;
		let {isScrolling, height} = this.state;
		let scrollSpeed = this.scrollSpeed = Math.abs(this.getScrollSpeed(scrollTop));
		this.scrollTop = scrollTop;

		// We only want to display the months overlay if the user is rapidly scrolling
		if (showOverlay && scrollSpeed > 0 && !isScrolling) {
			this.setState({
				isScrolling: true,
				height: this.props.expandedHeight,
			});

			// if (this.state.height !== this.props.expandedHeight) {
			// 	this.setState({
			// 		height: this.props.expandedHeight,
			// 	});
			// }
		}

		if (showTodayHelper) {
			this.updateTodayHelperPosition(scrollSpeed);
		}

		if (typeof onScroll == 'function') {
			onScroll(scrollTop, );
		}

		this.onScrollEnd();
	};

	onScrollEnd = debounce(() => {
		let {onScrollEnd, showTodayHelper} = this.props;
		let {isScrolling} = this.state;

		if (isScrolling && !this.state.isTouching) this.setState({isScrolling: false});
		if (showTodayHelper) this.updateTodayHelperPosition(0);
		if (typeof onScrollEnd == 'function') onScrollEnd(this.scrollTop);
	}, 150);


	handleTouchStart = () => {
		this.setState({
			isTouching: true
		});
	};

	handleTouchEnd = () => {
		this.setState({
			isTouching: false,
			isScrolling: false
		});
	};

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
	};

	render() {
		let {
			className,
			disabledDays,
			expandedHeight,
			collapsedHeight,
			hideYearsOnSelect,
			hideYearsOnDate,
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
			showSelectionText,
			...other
		} = this.props;
		let disabledDates = this.getDisabledDates(this.props.disabledDates);
		let locale = this.getLocale();
		let theme = this.getTheme();
		let {display, isScrolling, selectedDate, selectedWeek, height, showToday, shouldHeaderAnimate} = this.state;
		let today = this.today = parseDate(moment());

		// Selected date should not be disabled
		if (selectedDate && (disabledDates && disabledDates.indexOf(selectedDate.format('YYYYMMDD')) !== -1 || disabledDays && disabledDays.indexOf(selectedDate.day()) !== -1)) {
			selectedDate = null;
		}

		return (
			<div 
				tabIndex={tabIndex}
				onKeyDown={keyboardSupport && this.handleKeyDown}
				className={classNames(className, style.container.root, {[style.container.landscape]: layout == 'landscape'})}
				style={{color: theme.textColor.default, width}}
				aria-label="Calendar" ref="node">
				{showHeader &&
					<Header
						selectedDate={selectedDate}
						shouldHeaderAnimate={shouldHeaderAnimate}
						layout={layout}
						theme={theme}
						locale={locale}
						scrollToDate={this.scrollToDate}
						setDisplay={this.setDisplay}
						display={display}
					/>
				}
				<div className={style.container.wrapper} >
					<Weekdays theme={theme} locale={locale} scrollToDate={this.scrollToDate} />
					<div 
						className={style.container.listWrapper}
						onTouchStart={this.handleTouchStart}
						onTouchEnd={this.handleTouchEnd}
					>
						{showTodayHelper &&
							<Today scrollToDate={this.scrollToDate} show={showToday} today={today} theme={theme} locale={locale} />
						}
						<List
							ref="List"
							{...other}
							width={width}
							height={this.state.height}
							selectedDate={parseDate(selectedDate)}
							selectedWeek={parseDate(selectedWeek)}
							disabledDates={disabledDates}
							disabledDays={disabledDays}
							months={this.months}
							onDaySelect={this.onDaySelect}
							onWeekSelect={this.onWeekSelect}
							onScroll={this.onScroll}
							isScrolling={isScrolling}
							today={today}
							min={parseDate(min)}
							minDate={parseDate(minDate)}
							maxDate={parseDate(maxDate)}
							theme={theme}
							locale={locale}
							overscanMonthCount={overscanMonthCount}
							showSelectionText={showSelectionText}
							hideYearsOnDate={hideYearsOnDate}
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
};

export default InfiniteCalendar = onClickOutside(InfiniteCalendar);
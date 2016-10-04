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
import Shortcuts from './Shortcuts';
import Years from './Years';

const onClickOutside = require('react-onclickoutside');
const containerStyle = require('./Container.scss');
const expansionButtonStyle = require('./ExpansionButton.scss');
const dayStyle = require('./Day/Day.scss');
const weekStyle = require('./Week/Week.scss');
const style = {
	container: containerStyle,
	day: dayStyle,
	week: weekStyle,
	expansionButton: expansionButtonStyle,
};

class InfiniteCalendar extends Component {
	constructor(props) {
		super();

		// Initialize
		this.updateLocale(props.locale);
		this.updateYears(props);
		this.state = {
			height: props.collapsedHeight,
			expandedHeight: props.expandedHeight,
			collapsedHeight: props.collapsedHeight,
			selectedWeek: this.parseSelectedWeek(props.selectedWeek),
			selectedDate: this.parseSelectedDate(props.selectedDate),
			display: props.display,
			shouldHeaderAnimate: props.shouldHeaderAnimate,
			isCollapsed: props.isCollapsed,
			expandOnScroll: false,
			desktop: props.desktop,
			device: props.device,
		};
	}

	static defaultProps = {
		width: 400,
		expandedHeight: 400,
		collapsedHeight: 200,
		isCollapsed: true,
		rowHeight: 40,
		overscanMonthCount: 4,
		todayHelperRowOffset: 4,
		layout: 'portrait',
		display: 'days',
		selectedDate: new Date(),
		selectedWeek: null,
		min: {year: moment().subtract(2, 'years').year(), month: 0, day: 0},
		minDate: {year: moment().subtract(2, 'years').year(), month: 0, day: 0},
		max: {year: moment().add(2, 'years').year(), month: 11, day: 31},
		maxDate: {year: moment().add(2, 'years').year(), month: 11, day: 31},
		keyboardSupport: false,
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
		isClickOnDatepicker: false,
		device: true,
		desktop: true,
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
		isCollapsed: PropTypes.bool,
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
		isClickOnDatepicker: PropTypes.bool,
		device: PropTypes.bool,
		desktop: PropTypes.bool,
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
		let {min, minDate, max, maxDate, locale} = this.props;
		let {display, isClickOnDatepicker, selectedWeek, selectedDate} = this.state;

		const nextDate = this.parseSelectedDate(next.selectedDate);
		const nextWeek = this.parseSelectedDate(next.selectedWeek);
		const stateDate = this.parseSelectedDate(selectedDate);
		const stateWeek = this.parseSelectedDate(selectedWeek);

		this.setState({
			collapsedHeight: next.collapsedHeight,
			expandedHeight: next.expandedHeight,
		});

		if (next.locale !== locale) {
			this.updateLocale(next.locale);
		}

		if (next.min !== min || next.minDate !== minDate || next.max !== max || next.maxDate !== maxDate) {
			this.updateYears(next);
		}

		if (next.selectedDate !== null && moment(nextDate).valueOf() !== stateDate) {
			if (new Date(nextDate).getTime() > new Date(minDate.year + "-01-01").getTime() &&
					new Date(nextDate).getTime() < new Date(maxDate.year + "-12-31").getTime()) {
				this.setState({
					selectedWeek: null,
					selectedDate: nextDate,
				});

				this.setState({
					isCollapsed: this.state.desktop,
				});

				this.clearHighlight();
				this.scrollToDate(nextDate, 0);
			}
		}
		
		if (next.selectedWeek !== null && nextWeek !== stateWeek) {
			if (new Date(nextWeek).getTime() > new Date(minDate.year + "-01-01").getTime() &&
					new Date(nextWeek).getTime() < new Date(maxDate.year + "-12-31").getTime()) {
				this.setState({
					selectedWeek: nextWeek,
					selectedDate: null,
				});

				this.setState({
					isCollapsed: this.state.desktop,
				});

				this.clearHighlight();
				this.scrollToDate(nextWeek, 0);
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

	shouldComponentUpdate(nextProps, nextState) {
		// do not re-render on isTouchStarted and isScrollEnded state changes for a better scrolling experience
		const shouldUpdate = nextState.isTouchStarted === this.state.isTouchStarted && nextState.isScrollEnded === this.state.isScrollEnded;
  	return shouldUpdate;
	}

	handleClickOutside(evt) {
    if (!this.state.isCollapsed && this.state.desktop) {
   		this.setState({
   			isCollapsed: true,
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
		if (selectedDate !== this.state.selectedDate) {
			let {afterSelect, beforeSelect, onSelect} = this.props;

			this.setState({
				isClickOnDatepicker: true
			});

			if (!beforeSelect || typeof beforeSelect == 'function' && beforeSelect(selectedDate)) {
				if (typeof onSelect == 'function') {
					onSelect(selectedDate, e);
				}

				const prevCollapsed = this.state.isCollapsed;

				this.setState({
					isCollapsed: this.state.desktop,
				});

				this.setState({
					selectedDate: selectedDate,
					selectedWeek: null,
				}, () => {
					this.clearHighlight();

					if (!prevCollapsed || moment(selectedDate).format('YYYYMMDD') === moment().format('YYYYMMDD')) {
						this.scrollToDate(selectedDate, 0);
					}
					
					if (typeof afterSelect == 'function') {
						afterSelect(selectedDate);
					}
				});
			}
		}
	};

	onWeekSelect = (selectedWeek) => {
		if (selectedWeek !== this.state.selectedWeek) {
			let {afterSelect, beforeSelect, onSelect} = this.props;

			if (!beforeSelect || typeof beforeSelect == 'function' && beforeSelect(selectedWeek)) {
				if (typeof onSelect == 'function') {
					onSelect(selectedWeek, e);
				}

				const prevCollapsed = this.state.isCollapsed;

				this.setState({
					isCollapsed: this.state.desktop,
				});

				this.setState({
					selectedWeek: selectedWeek,
					selectedDate: null,
					isClickOnDatepicker: true,
				}, () => {
					this.clearHighlight();

					if (!prevCollapsed || (moment(selectedWeek).format('ww') === moment().format('ww') && moment(selectedWeek).format('YYYY') === moment().format('YYYY'))) {
						this.scrollToDate(selectedWeek, 0);
					}

					if (typeof afterSelect == 'function') {
						afterSelect(selectedWeek);
					}
				});
			}
		}
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
		this.setState({
			isScrolling: false,
			expandOnScroll: false,
		}, () => {
			this.list.scrollToDate(date, offset);

			if (!this.state.isCollapsed && this.state.desktop) {
				this.setState({
					isCollapsed: true,
					expandOnScroll: true,
				});
			}
		});
	};

	handleExpansionClick = () => {
		this.setState({
			isCollapsed: false,
		});
	};

	getScrollSpeed = getScrollSpeed();

	onScroll = ({scrollTop}) => {
		let {onScroll, showOverlay, showTodayHelper, device} = this.props;
		let {isScrolling, isTouchStarted, isScrollEnded, isCollapsed, expandOnScroll} = this.state;
		let scrollSpeed = this.scrollSpeed = Math.abs(this.getScrollSpeed(scrollTop));
		this.scrollTop = scrollTop;

		if (!isScrolling && scrollSpeed > 10) {
			this.setState({
				isScrolling: true,
			});
		}

		if (isCollapsed && !device && expandOnScroll) {
			this.setState({
				isCollapsed: false,
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
		let {isScrolling, isTouchStarted} = this.state;

		this.setState({
			isScrollEnded: true,
			expandOnScroll: true,
		});
		
		if (isScrolling && !isTouchStarted) this.setState({isScrolling: false});
		if (showTodayHelper) this.updateTodayHelperPosition(0);
		if (typeof onScrollEnd == 'function') onScrollEnd(this.scrollTop);
	}, 150);

	handleTouchStart = () => {
		if (!this.state.isTouchStarted) {
			this.setState({
				isTouchStarted: true,
				isScrollEnded: false,
			});
		}
	};

	handleTouchEnd = () => {
		this.setState({
			isTouchStarted: false,
		});

		if (this.state.isScrollEnded) {
			this.setState({
				isScrolling: false,
			});

			this.forceUpdate();
		}
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
			device,
			desktop,
			...other
		} = this.props;
		let disabledDates = this.getDisabledDates(this.props.disabledDates);
		let locale = this.getLocale();
		let theme = this.getTheme();
		let {display, isScrolling, isCollapsed, collapsedHeight, expandedHeight, selectedDate, selectedWeek, height, showToday, shouldHeaderAnimate} = this.state;
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
				style={{color: theme.textColor.default, width: '100%', overflow: (isCollapsed) ? 'hidden' : 'visible', height: collapsedHeight+"px" }}
				aria-label="Calendar" ref="node"
			>
				{desktop &&
					<div
						className={classNames(style.expansionButton.root, 'ion-chevron-down')}
						style={{ display: (isCollapsed) ? 'initial' : 'none'}}
						onClick={this.handleExpansionClick}
					></div>
				}
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
					<Shortcuts theme={theme} locale={locale} scrollToDate={this.scrollToDate} handleTodayClick={(selectedDate !== null) ? this.onDaySelect : this.onWeekSelect} />
					<Weekdays theme={theme} locale={locale} />
					<div
						className={style.container.listWrapper}
						onTouchStart={this.handleTouchStart}
						onTouchEnd={this.handleTouchEnd}
					>
						<List
							ref="List"
							{...other}
							width={width}
							height={expandedHeight}
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
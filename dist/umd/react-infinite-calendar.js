(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("React.addons.shallowCompare"), require("React.addons.CSSTransitionGroup"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "React.addons.shallowCompare", "React.addons.CSSTransitionGroup", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["InfiniteCalendar"] = factory(require("React"), require("React.addons.shallowCompare"), require("React.addons.CSSTransitionGroup"), require("ReactDOM"));
	else
		root["InfiniteCalendar"] = factory(root["React"], root["React.addons.shallowCompare"], root["React.addons.CSSTransitionGroup"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_138__, __WEBPACK_EXTERNAL_MODULE_139__, __WEBPACK_EXTERNAL_MODULE_153__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	var _debounce = __webpack_require__(108);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _range = __webpack_require__(116);

	var _range2 = _interopRequireDefault(_range);

	var _utils = __webpack_require__(126);

	var _locale = __webpack_require__(130);

	var _locale2 = _interopRequireDefault(_locale);

	var _theme = __webpack_require__(131);

	var _theme2 = _interopRequireDefault(_theme);

	var _Today = __webpack_require__(132);

	var _Today2 = _interopRequireDefault(_Today);

	var _Header = __webpack_require__(137);

	var _Header2 = _interopRequireDefault(_Header);

	var _List = __webpack_require__(144);

	var _List2 = _interopRequireDefault(_List);

	var _Weekdays = __webpack_require__(204);

	var _Weekdays2 = _interopRequireDefault(_Weekdays);

	var _Shortcuts = __webpack_require__(207);

	var _Shortcuts2 = _interopRequireDefault(_Shortcuts);

	var _Years = __webpack_require__(210);

	var _Years2 = _interopRequireDefault(_Years);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var onClickOutside = __webpack_require__(213);
	var containerStyle = __webpack_require__(214);
	var expansionButtonStyle = __webpack_require__(216);
	var dayStyle = __webpack_require__(195);
	var weekStyle = __webpack_require__(198);
	var style = {
		container: containerStyle,
		day: dayStyle,
		week: weekStyle,
		expansionButton: expansionButtonStyle
	};

	var InfiniteCalendar = function (_Component) {
		_inherits(InfiniteCalendar, _Component);

		function InfiniteCalendar(props) {
			_classCallCheck(this, InfiniteCalendar);

			// Initialize
			var _this = _possibleConstructorReturn(this, (InfiniteCalendar.__proto__ || Object.getPrototypeOf(InfiniteCalendar)).call(this));

			_this.onDaySelect = function (selectedDate, e) {
				var shouldHeaderAnimate = arguments.length <= 2 || arguments[2] === undefined ? _this.props.shouldHeaderAnimate : arguments[2];

				if (selectedDate !== _this.state.selectedDate) {
					(function () {
						var _this$props = _this.props;
						var afterSelect = _this$props.afterSelect;
						var beforeSelect = _this$props.beforeSelect;
						var onSelect = _this$props.onSelect;


						_this.setState({
							isClickOnDatepicker: true
						});

						if (!beforeSelect || typeof beforeSelect == 'function' && beforeSelect(selectedDate)) {
							(function () {
								if (typeof onSelect == 'function') {
									onSelect(selectedDate, e);
								}

								var prevCollapsed = _this.state.isCollapsed;

								_this.setState({
									selectedDate: selectedDate,
									selectedWeek: null,
									isCollapsed: true
								}, function () {
									_this.clearHighlight();

									if (!prevCollapsed || (0, _moment2.default)(selectedDate).format('YYYYMMDD') === (0, _moment2.default)().format('YYYYMMDD')) {
										_this.scrollToDate(selectedDate, 0);
									}

									if (typeof afterSelect == 'function') {
										afterSelect(selectedDate);
									}
								});
							})();
						}
					})();
				}
			};

			_this.onWeekSelect = function (selectedWeek) {
				if (selectedWeek !== _this.state.selectedWeek) {
					(function () {
						var _this$props2 = _this.props;
						var afterSelect = _this$props2.afterSelect;
						var beforeSelect = _this$props2.beforeSelect;
						var onSelect = _this$props2.onSelect;


						if (!beforeSelect || typeof beforeSelect == 'function' && beforeSelect(selectedWeek)) {
							(function () {
								if (typeof onSelect == 'function') {
									onSelect(selectedWeek, e);
								}

								var prevCollapsed = _this.state.isCollapsed;

								_this.setState({
									selectedWeek: selectedWeek,
									selectedDate: null,
									isCollapsed: true,
									isClickOnDatepicker: true
								}, function () {
									_this.clearHighlight();

									if (!prevCollapsed || (0, _moment2.default)(selectedWeek).format('ww') === (0, _moment2.default)().format('ww') && (0, _moment2.default)(selectedWeek).format('YYYY') === (0, _moment2.default)().format('YYYY')) {
										_this.scrollToDate(selectedWeek, 0);
									}

									if (typeof afterSelect == 'function') {
										afterSelect(selectedWeek);
									}
								});
							})();
						}
					})();
				}
			};

			_this.getCurrentOffset = function () {
				return _this.scrollTop;
			};

			_this.getDateOffset = function (date) {
				return _this.list && _this.list.getDateOffset(date);
			};

			_this.scrollTo = function (offset) {
				return _this.list && _this.list.scrollTo(offset);
			};

			_this.scrollToDate = function () {
				var date = arguments.length <= 0 || arguments[0] === undefined ? (0, _moment2.default)() : arguments[0];
				var offset = arguments[1];

				_this.setState({
					isScrolling: false,
					expandOnScroll: false
				}, function () {
					_this.list.scrollToDate(date, offset);

					if (!_this.state.isCollapsed) {
						_this.setState({
							isCollapsed: true,
							expandOnScroll: true
						});
					}
				});
			};

			_this.handleExpansionClick = function () {
				_this.setState({
					isCollapsed: false
				});
			};

			_this.getScrollSpeed = (0, _utils.getScrollSpeed)();

			_this.onScroll = function (_ref) {
				var scrollTop = _ref.scrollTop;
				var _this$props3 = _this.props;
				var onScroll = _this$props3.onScroll;
				var showOverlay = _this$props3.showOverlay;
				var showTodayHelper = _this$props3.showTodayHelper;
				var device = _this$props3.device;
				var _this$state = _this.state;
				var isScrolling = _this$state.isScrolling;
				var isTouchStarted = _this$state.isTouchStarted;
				var isScrollEnded = _this$state.isScrollEnded;
				var isCollapsed = _this$state.isCollapsed;
				var expandOnScroll = _this$state.expandOnScroll;

				var scrollSpeed = _this.scrollSpeed = Math.abs(_this.getScrollSpeed(scrollTop));
				_this.scrollTop = scrollTop;

				if (!isScrolling && scrollSpeed > 10) {
					_this.setState({
						isScrolling: true
					});
				}

				if (isCollapsed && !device && expandOnScroll) {
					_this.setState({
						isCollapsed: false
					});
				}

				if (showTodayHelper) {
					_this.updateTodayHelperPosition(scrollSpeed);
				}

				if (typeof onScroll == 'function') {
					onScroll(scrollTop);
				}

				_this.onScrollEnd();
			};

			_this.onScrollEnd = (0, _debounce2.default)(function () {
				var _this$props4 = _this.props;
				var onScrollEnd = _this$props4.onScrollEnd;
				var showTodayHelper = _this$props4.showTodayHelper;
				var _this$state2 = _this.state;
				var isScrolling = _this$state2.isScrolling;
				var isTouchStarted = _this$state2.isTouchStarted;


				_this.setState({
					isScrollEnded: true,
					expandOnScroll: true
				});

				if (isScrolling && !isTouchStarted) _this.setState({ isScrolling: false });
				if (showTodayHelper) _this.updateTodayHelperPosition(0);
				if (typeof onScrollEnd == 'function') onScrollEnd(_this.scrollTop);
			}, 150);

			_this.handleTouchStart = function () {
				if (!_this.state.isTouchStarted) {
					_this.setState({
						isTouchStarted: true,
						isScrollEnded: false
					});
				}
			};

			_this.handleTouchEnd = function () {
				_this.setState({
					isTouchStarted: false
				});

				if (_this.state.isScrollEnded) {
					_this.setState({
						isScrolling: false
					});

					_this.forceUpdate();
				}
			};

			_this.updateTodayHelperPosition = function (scrollSpeed) {
				var date = _this.today.date;
				if (!_this.todayOffset) _this.todayOffset = _this.getDateOffset(date); //scrollTop offset of the month "today" is in

				var scrollTop = _this.scrollTop;
				var showToday = _this.state.showToday;
				var _this$props5 = _this.props;
				var height = _this$props5.height;
				var rowHeight = _this$props5.rowHeight;
				var todayHelperRowOffset = _this$props5.todayHelperRowOffset;

				var newState = void 0;
				var dayOffset = Math.ceil((date.date() - 7 + (0, _moment2.default)(date).startOf("month").day()) / 7) * rowHeight; //offset of "today" within its month

				if (scrollTop >= _this.todayOffset + dayOffset + rowHeight * (todayHelperRowOffset + 1)) {
					if (showToday !== 1) newState = 1; //today is above the fold
				} else if (scrollTop + height <= _this.todayOffset + dayOffset + rowHeight - rowHeight * (todayHelperRowOffset + 1)) {
					if (showToday !== -1) newState = -1; //today is below the fold
				} else if (showToday && scrollSpeed <= 1) {
					newState = false;
				}

				if (scrollTop == 0) {
					newState = false;
				}

				if (newState != null) {
					_this.setState({ showToday: newState });
				}
			};

			_this.handleKeyDown = function (e) {
				var _this$props6 = _this.props;
				var maxDate = _this$props6.maxDate;
				var minDate = _this$props6.minDate;
				var onKeyDown = _this$props6.onKeyDown;
				var _this$state3 = _this.state;
				var display = _this$state3.display;
				var selectedDate = _this$state3.selectedDate;
				var highlightedDate = _this$state3.highlightedDate;
				var showToday = _this$state3.showToday;

				var delta = 0;

				if (typeof onKeyDown == 'function') {
					onKeyDown(e);
				}
				if ([_utils.keyCodes.left, _utils.keyCodes.up, _utils.keyCodes.right, _utils.keyCodes.down].indexOf(e.keyCode) > -1 && typeof e.preventDefault == 'function') {
					e.preventDefault();
				}

				if (!selectedDate) {
					selectedDate = (0, _moment2.default)();
				}

				if (display == 'days') {
					if (!highlightedDate) {
						highlightedDate = selectedDate.clone();
						_this.setState({ highlightedDate: highlightedDate });
					}

					switch (e.keyCode) {
						case _utils.keyCodes.enter:
							_this.onDaySelect((0, _moment2.default)(highlightedDate), e);
							return;
						case _utils.keyCodes.left:
							delta = -1;
							break;
						case _utils.keyCodes.right:
							delta = +1;
							break;
						case _utils.keyCodes.down:
							delta = +7;
							break;
						case _utils.keyCodes.up:
							delta = -7;
							break;
					}

					if (delta) {
						var rowHeight = _this.props.rowHeight;

						var newHighlightedDate = (0, _moment2.default)(highlightedDate).add(delta, 'days');

						// Make sure the new highlighted date isn't before min / max
						if (newHighlightedDate.isBefore(minDate)) {
							newHighlightedDate = (0, _moment2.default)(minDate);
						} else if (newHighlightedDate.isAfter(maxDate)) {
							newHighlightedDate = (0, _moment2.default)(maxDate);
						}

						// Update the highlight indicator
						_this.clearHighlight();

						// Scroll the view
						if (!_this.currentOffset) _this.currentOffset = _this.getCurrentOffset();
						var currentOffset = _this.currentOffset;
						var monthOffset = _this.getDateOffset(newHighlightedDate);
						var navOffset = showToday ? 36 : 0;

						var highlightedEl = _this.highlightedEl = _this.node.querySelector('[data-date=\'' + newHighlightedDate.format('YYYYMMDD') + '\']');

						// Edge-case: if the user tries to use the keyboard when the new highlighted date isn't rendered because it's too far off-screen
						// We need to scroll to the month of the new highlighted date so it renders
						if (!highlightedEl) {
							_this.scrollTo(monthOffset - navOffset);
							return;
						}

						highlightedEl.classList.add(style.day.highlighted);

						var dateOffset = highlightedEl.offsetTop - rowHeight;
						var newOffset = monthOffset + dateOffset;

						if (currentOffset !== newOffset) {
							_this.currentOffset = newOffset;
							_this.scrollTo(newOffset - navOffset);
						}

						// Update the reference to the currently highlighted date
						_this.setState({
							highlightedDate: newHighlightedDate
						});
					}
				} else if (display == 'years' && _this.refs.years) {
					_this.refs.years.handleKeyDown(e);
				}
			};

			_this.setDisplay = function (display) {
				_this.setState({ display: display });
			};

			_this.updateLocale(props.locale);
			_this.updateYears(props);
			_this.state = {
				height: props.collapsedHeight,
				expandedHeight: props.expandedHeight,
				collapsedHeight: props.collapsedHeight,
				selectedWeek: _this.parseSelectedWeek(props.selectedWeek),
				selectedDate: _this.parseSelectedDate(props.selectedDate),
				display: props.display,
				shouldHeaderAnimate: props.shouldHeaderAnimate,
				isCollapsed: props.isCollapsed,
				expandOnScroll: false
			};
			return _this;
		}

		_createClass(InfiniteCalendar, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var _props = this.props;
				var autoFocus = _props.autoFocus;
				var keyboardSupport = _props.keyboardSupport;

				this.node = this.refs.node;
				this.list = this.refs.List;

				if (keyboardSupport && autoFocus) {
					this.node.focus();
				}
			}
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(next) {
				var _props2 = this.props;
				var min = _props2.min;
				var minDate = _props2.minDate;
				var max = _props2.max;
				var maxDate = _props2.maxDate;
				var locale = _props2.locale;
				var _state = this.state;
				var display = _state.display;
				var isClickOnDatepicker = _state.isClickOnDatepicker;
				var selectedWeek = _state.selectedWeek;
				var selectedDate = _state.selectedDate;


				var nextDate = this.parseSelectedDate(next.selectedDate);
				var nextWeek = this.parseSelectedDate(next.selectedWeek);
				var stateDate = this.parseSelectedDate(selectedDate);
				var stateWeek = this.parseSelectedDate(selectedWeek);

				this.setState({
					collapsedHeight: next.collapsedHeight,
					expandedHeight: next.expandedHeight
				});

				if (next.locale !== locale) {
					this.updateLocale(next.locale);
				}

				if (next.min !== min || next.minDate !== minDate || next.max !== max || next.maxDate !== maxDate) {
					this.updateYears(next);
				}

				if (next.selectedDate !== null && (0, _moment2.default)(nextDate).valueOf() !== stateDate) {

					if (new Date(nextDate).getTime() > new Date(minDate.year + "-01-01").getTime() && new Date(nextDate).getTime() < new Date(maxDate.year + "-12-31").getTime()) {
						this.setState({
							selectedWeek: null,
							selectedDate: nextDate,
							isCollapsed: true
						});

						this.clearHighlight();
						this.scrollToDate(nextDate, 0);
					}
				}

				if (next.selectedWeek !== null && nextWeek !== stateWeek) {
					if (new Date(nextWeek).getTime() > new Date(minDate.year + "-01-01").getTime() && new Date(nextWeek).getTime() < new Date(maxDate.year + "-12-31").getTime()) {
						this.setState({
							selectedWeek: nextWeek,
							selectedDate: null,
							isCollapsed: true
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
		}, {
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps, nextState) {
				// do not re-render on isTouchStarted and isScrollEnded state changes for a better scrolling experience
				var shouldUpdate = nextState.isTouchStarted === this.state.isTouchStarted && nextState.isScrollEnded === this.state.isScrollEnded;
				return shouldUpdate;
			}
		}, {
			key: 'handleClickOutside',
			value: function handleClickOutside(evt) {
				var _this2 = this;

				if (!this.state.isCollapsed) {
					this.setState({
						isCollapsed: true
					}, function () {
						_this2.clearHighlight();

						if (_this2.state.selectedDate !== null) {
							_this2.scrollToDate(_this2.state.selectedDate, 0);
						} else {
							_this2.scrollToDate(_this2.state.selectedWeek, 0);
						}
					});
				}
			}
		}, {
			key: 'parseSelectedDate',
			value: function parseSelectedDate(selectedDate) {
				if (selectedDate) {
					selectedDate = (0, _moment2.default)(selectedDate);

					// Selected Date should not be before min date or after max date
					if (selectedDate.isBefore(this._minDate)) {
						return this._minDate;
					} else if (selectedDate.isAfter(this._maxDate)) {
						return this._maxDate;
					}
				}

				return selectedDate;
			}
		}, {
			key: 'parseSelectedWeek',
			value: function parseSelectedWeek(selectedWeek) {
				if (selectedWeek) {
					selectedWeek = (0, _moment2.default)(selectedWeek);

					// Selected Date should not be before min date or after max date
					if (selectedWeek.isBefore(this._minDate)) {
						return this._minDate;
					} else if (selectedWeek.isAfter(this._maxDate)) {
						return this._maxDate;
					}
				}

				return selectedWeek;
			}
		}, {
			key: 'updateYears',
			value: function updateYears() {
				var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];

				var min = this._min = (0, _moment2.default)(props.min);
				var max = this._max = (0, _moment2.default)(props.max);
				this._minDate = (0, _moment2.default)(props.minDate);
				this._maxDate = (0, _moment2.default)(props.maxDate);

				this.years = (0, _range2.default)(min.year(), max.year() + 1).map(function (year) {
					return (0, _utils.getMonthsForYear)(year, min, max);
				});
				this.months = [].concat.apply([], this.years);
			}
		}, {
			key: 'updateLocale',
			value: function updateLocale(locale) {
				locale = this.getLocale(locale);
				_moment2.default.updateLocale(locale.name, locale);
				_moment2.default.locale(locale.name);
			}
		}, {
			key: 'getDisabledDates',
			value: function getDisabledDates(disabledDates) {
				return disabledDates && disabledDates.map(function (date) {
					return (0, _moment2.default)(date).format('YYYYMMDD');
				});
			}
		}, {
			key: 'getLocale',
			value: function getLocale() {
				var customLocale = arguments.length <= 0 || arguments[0] === undefined ? this.props.locale : arguments[0];

				return _extends({}, _locale2.default, customLocale);
			}
		}, {
			key: 'getTheme',
			value: function getTheme() {
				var customTheme = arguments.length <= 0 || arguments[0] === undefined ? this.props.theme : arguments[0];

				return _extends({}, _theme2.default, customTheme);
			}
		}, {
			key: 'clearHighlight',
			value: function clearHighlight() {
				if (this.highlightedEl) {
					this.highlightedEl.classList.remove(style.day.highlighted);
					this.highlightedEl = null;
				}
			}
		}, {
			key: 'render',
			value: function render() {
				var _props3 = this.props;
				var className = _props3.className;
				var disabledDays = _props3.disabledDays;
				var hideYearsOnSelect = _props3.hideYearsOnSelect;
				var hideYearsOnDate = _props3.hideYearsOnDate;
				var keyboardSupport = _props3.keyboardSupport;
				var layout = _props3.layout;
				var overscanMonthCount = _props3.overscanMonthCount;
				var min = _props3.min;
				var minDate = _props3.minDate;
				var max = _props3.max;
				var maxDate = _props3.maxDate;
				var showTodayHelper = _props3.showTodayHelper;
				var showHeader = _props3.showHeader;
				var tabIndex = _props3.tabIndex;
				var width = _props3.width;
				var showSelectionText = _props3.showSelectionText;
				var device = _props3.device;

				var other = _objectWithoutProperties(_props3, ['className', 'disabledDays', 'hideYearsOnSelect', 'hideYearsOnDate', 'keyboardSupport', 'layout', 'overscanMonthCount', 'min', 'minDate', 'max', 'maxDate', 'showTodayHelper', 'showHeader', 'tabIndex', 'width', 'showSelectionText', 'device']);

				var disabledDates = this.getDisabledDates(this.props.disabledDates);
				var locale = this.getLocale();
				var theme = this.getTheme();
				var _state2 = this.state;
				var display = _state2.display;
				var isScrolling = _state2.isScrolling;
				var isCollapsed = _state2.isCollapsed;
				var collapsedHeight = _state2.collapsedHeight;
				var expandedHeight = _state2.expandedHeight;
				var selectedDate = _state2.selectedDate;
				var selectedWeek = _state2.selectedWeek;
				var height = _state2.height;
				var showToday = _state2.showToday;
				var shouldHeaderAnimate = _state2.shouldHeaderAnimate;

				var today = this.today = (0, _utils.parseDate)((0, _moment2.default)());

				// Selected date should not be disabled
				if (selectedDate && (disabledDates && disabledDates.indexOf(selectedDate.format('YYYYMMDD')) !== -1 || disabledDays && disabledDays.indexOf(selectedDate.day()) !== -1)) {
					selectedDate = null;
				}

				return _react2.default.createElement(
					'div',
					{
						tabIndex: tabIndex,
						onKeyDown: keyboardSupport && this.handleKeyDown,
						className: (0, _classnames2.default)(className, style.container.root, _defineProperty({}, style.container.landscape, layout == 'landscape')),
						style: { color: theme.textColor.default, width: '100%', overflow: isCollapsed ? 'hidden' : 'visible', height: collapsedHeight + "px" },
						'aria-label': 'Calendar', ref: 'node'
					},
					_react2.default.createElement('div', {
						className: (0, _classnames2.default)(style.expansionButton.root, 'ion-chevron-down'),
						style: { display: isCollapsed ? 'initial' : 'none' },
						onClick: this.handleExpansionClick
					}),
					showHeader && _react2.default.createElement(_Header2.default, {
						selectedDate: selectedDate,
						shouldHeaderAnimate: shouldHeaderAnimate,
						layout: layout,
						theme: theme,
						locale: locale,
						scrollToDate: this.scrollToDate,
						setDisplay: this.setDisplay,
						display: display
					}),
					_react2.default.createElement(
						'div',
						{ className: style.container.wrapper },
						_react2.default.createElement(_Shortcuts2.default, { theme: theme, locale: locale, scrollToDate: this.scrollToDate, handleTodayClick: selectedDate !== null ? this.onDaySelect : this.onWeekSelect }),
						_react2.default.createElement(_Weekdays2.default, { theme: theme, locale: locale }),
						_react2.default.createElement(
							'div',
							{
								className: style.container.listWrapper,
								onTouchStart: this.handleTouchStart,
								onTouchEnd: this.handleTouchEnd
							},
							_react2.default.createElement(_List2.default, _extends({
								ref: 'List'
							}, other, {
								width: width,
								height: expandedHeight,
								selectedDate: (0, _utils.parseDate)(selectedDate),
								selectedWeek: (0, _utils.parseDate)(selectedWeek),
								disabledDates: disabledDates,
								disabledDays: disabledDays,
								months: this.months,
								onDaySelect: this.onDaySelect,
								onWeekSelect: this.onWeekSelect,
								onScroll: this.onScroll,
								isScrolling: isScrolling,
								today: today,
								min: (0, _utils.parseDate)(min),
								minDate: (0, _utils.parseDate)(minDate),
								maxDate: (0, _utils.parseDate)(maxDate),
								theme: theme,
								locale: locale,
								overscanMonthCount: overscanMonthCount,
								showSelectionText: showSelectionText,
								hideYearsOnDate: hideYearsOnDate
							}))
						),
						display == 'years' && _react2.default.createElement(_Years2.default, {
							ref: 'years',
							width: width,
							height: height,
							onDaySelect: this.onDaySelect,
							minDate: minDate,
							maxDate: maxDate,
							selectedDate: selectedDate,
							theme: theme,
							years: (0, _range2.default)((0, _moment2.default)(min).year(), (0, _moment2.default)(max).year() + 1),
							setDisplay: this.setDisplay,
							scrollToDate: this.scrollToDate,
							hideYearsOnSelect: hideYearsOnSelect
						})
					)
				);
			}
		}]);

		return InfiniteCalendar;
	}(_react.Component);

	InfiniteCalendar.defaultProps = {
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
		min: { year: (0, _moment2.default)().subtract(2, 'years').year(), month: 0, day: 0 },
		minDate: { year: (0, _moment2.default)().subtract(2, 'years').year(), month: 0, day: 0 },
		max: { year: (0, _moment2.default)().add(2, 'years').year(), month: 11, day: 31 },
		maxDate: { year: (0, _moment2.default)().add(2, 'years').year(), month: 11, day: 31 },
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
		device: true
	};
	InfiniteCalendar.propTypes = {
		selectedDate: _utils.validDate,
		selectedWeek: _utils.validDate,
		min: _utils.validDate,
		max: _utils.validDate,
		minDate: _utils.validDate,
		maxDate: _utils.validDate,
		locale: _react.PropTypes.object,
		theme: _react.PropTypes.object,
		width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
		expandedHeight: _react.PropTypes.number,
		collapsedHeight: _react.PropTypes.number,
		isCollapsed: _react.PropTypes.bool,
		rowHeight: _react.PropTypes.number,
		className: _react.PropTypes.string,
		overscanMonthCount: _react.PropTypes.number,
		todayHelperRowOffset: _react.PropTypes.number,
		disabledDays: _react.PropTypes.arrayOf(_react.PropTypes.number),
		disabledDates: _react.PropTypes.arrayOf(_utils.validDate),
		beforeSelect: _react.PropTypes.func,
		onSelect: _react.PropTypes.func,
		afterSelect: _react.PropTypes.func,
		onScroll: _react.PropTypes.func,
		onScrollEnd: _react.PropTypes.func,
		keyboardSupport: _react.PropTypes.bool,
		autoFocus: _react.PropTypes.bool,
		onKeyDown: _react.PropTypes.func,
		tabIndex: _react.PropTypes.number,
		layout: _utils.validLayout,
		display: _utils.validDisplay,
		hideYearsOnSelect: _react.PropTypes.bool,
		hideYearsOnDate: _react.PropTypes.bool,
		shouldHeaderAnimate: _react.PropTypes.bool,
		showOverlay: _react.PropTypes.bool,
		showTodayHelper: _react.PropTypes.bool,
		showHeader: _react.PropTypes.bool,
		showSelectionText: _react.PropTypes.bool,
		isClickOnDatepicker: _react.PropTypes.bool,
		device: _react.PropTypes.bool
	};
	;

	exports.default = InfiniteCalendar = onClickOutside(InfiniteCalendar);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.14.1
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	;(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';

	    var hookCallback;

	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }

	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }

	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }

	    function isObject(input) {
	        return Object.prototype.toString.call(input) === '[object Object]';
	    }

	    function isObjectEmpty(obj) {
	        var k;
	        for (k in obj) {
	            // even if its not own property I'd still call it non-empty
	            return false;
	        }
	        return true;
	    }

	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }

	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }

	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }

	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }

	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }

	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }

	        return a;
	    }

	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }

	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false,
	            parsedDateParts : [],
	            meridiem        : null
	        };
	    }

	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }

	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this);
	            var len = t.length >>> 0;

	            for (var i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }

	            return false;
	        };
	    }

	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            var parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            m._isValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));

	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }

	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }

	        return m;
	    }

	    function isUndefined(input) {
	        return input === void 0;
	    }

	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = utils_hooks__hooks.momentProperties = [];

	    function copyConfig(to, from) {
	        var i, prop, val;

	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }

	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }

	        return to;
	    }

	    var updateInProgress = false;

	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }

	    function absFloor (number) {
	        if (number < 0) {
	            // -0 -> 0
	            return Math.ceil(number) || 0;
	        } else {
	            return Math.floor(number);
	        }
	    }

	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;

	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }

	        return value;
	    }

	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }

	    function deprecate(msg, fn) {
	        var firstTime = true;

	        return extend(function () {
	            if (utils_hooks__hooks.deprecationHandler != null) {
	                utils_hooks__hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }

	    var deprecations = {};

	    function deprecateSimple(name, msg) {
	        if (utils_hooks__hooks.deprecationHandler != null) {
	            utils_hooks__hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }

	    utils_hooks__hooks.suppressDeprecationWarnings = false;
	    utils_hooks__hooks.deprecationHandler = null;

	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }

	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }

	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        for (prop in parentConfig) {
	            if (hasOwnProp(parentConfig, prop) &&
	                    !hasOwnProp(childConfig, prop) &&
	                    isObject(parentConfig[prop])) {
	                // make sure changes to properties don't modify parent config
	                res[prop] = extend({}, res[prop]);
	            }
	        }
	        return res;
	    }

	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }

	    var keys;

	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i, res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }

	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };

	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }

	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };

	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];

	        if (format || !formatUpper) {
	            return format;
	        }

	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });

	        return this._longDateFormat[key];
	    }

	    var defaultInvalidDate = 'Invalid date';

	    function invalidDate () {
	        return this._invalidDate;
	    }

	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;

	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }

	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };

	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }

	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }

	    var aliases = {};

	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }

	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }

	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;

	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }

	        return normalizedInput;
	    }

	    var priorities = {};

	    function addUnitPriority(unit, priority) {
	        priorities[unit] = priority;
	    }

	    function getPrioritizedUnits(unitsObj) {
	        var units = [];
	        for (var u in unitsObj) {
	            units.push({unit: u, priority: priorities[u]});
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }

	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }

	    function get_set__get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }

	    function get_set__set (mom, unit, value) {
	        if (mom.isValid()) {
	            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	        }
	    }

	    // MOMENTS

	    function stringGet (units) {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units]();
	        }
	        return this;
	    }


	    function stringSet (units, value) {
	        if (typeof units === 'object') {
	            units = normalizeObjectUnits(units);
	            var prioritized = getPrioritizedUnits(units);
	            for (var i = 0; i < prioritized.length; i++) {
	                this[prioritized[i].unit](units[prioritized[i].unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }

	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }

	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

	    var formatFunctions = {};

	    var formatTokenFunctions = {};

	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }

	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = '', i;
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }

	        return format;
	    }

	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


	    var regexes = {};

	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }

	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }

	        return regexes[token](config._strict, config._locale);
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }

	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }

	    var tokens = {};

	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }

	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }

	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }

	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;

	    var indexOf;

	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }

	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }

	    // FORMATTING

	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });

	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });

	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });

	    // ALIASES

	    addUnitAlias('month', 'M');

	    // PRIORITY

	    addUnitPriority('month', 8);

	    // PARSING

	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });

	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });

	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });

	    // LOCALES

	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
	    }

	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }

	    function units_month__handleStrictParse(monthName, format, strict) {
	        var i, ii, mom, llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = create_utc__createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }

	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }

	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;

	        if (this._monthsParseExact) {
	            return units_month__handleStrictParse.call(this, monthName, format, strict);
	        }

	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }

	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function setMonth (mom, value) {
	        var dayOfMonth;

	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }

	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (typeof value !== 'number') {
	                    return mom;
	                }
	            }
	        }

	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }

	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }

	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }

	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsShortRegex')) {
	                this._monthsShortRegex = defaultMonthsShortRegex;
	            }
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }

	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                this._monthsRegex = defaultMonthsRegex;
	            }
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }

	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }

	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	        }
	        for (i = 0; i < 24; i++) {
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }

	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }

	    // FORMATTING

	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });

	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });

	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	    // ALIASES

	    addUnitAlias('year', 'y');

	    // PRIORITIES

	    addUnitPriority('year', 1);

	    // PARSING

	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);

	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });

	    // HELPERS

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }

	    // HOOKS

	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    // MOMENTS

	    var getSetYear = makeGetSet('FullYear', true);

	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }

	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);

	        //the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
	            date.setFullYear(y);
	        }
	        return date;
	    }

	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));

	        //the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }

	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

	        return -fwdlw + fwd - 1;
	    }

	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;

	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }

	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }

	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;

	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }

	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }

	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }

	    // FORMATTING

	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	    // ALIASES

	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');

	    // PRIORITIES

	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);

	    // PARSING

	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);

	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });

	    // HELPERS

	    // LOCALES

	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }

	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };

	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }

	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }

	    // MOMENTS

	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    // FORMATTING

	    addFormatToken('d', 0, 'do', 'day');

	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });

	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });

	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });

	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');

	    // ALIASES

	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');

	    // PRIORITY
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);

	    // PARSING

	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd',   function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd',   function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });

	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });

	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });

	    // HELPERS

	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }

	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }

	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }

	        return null;
	    }

	    function parseIsoWeekday(input, locale) {
	        if (typeof input === 'string') {
	            return locale.weekdaysParse(input) % 7 || 7;
	        }
	        return isNaN(input) ? null : input;
	    }

	    // LOCALES

	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        return isArray(this._weekdays) ? this._weekdays[m.day()] :
	            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
	    }

	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return this._weekdaysShort[m.day()];
	    }

	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return this._weekdaysMin[m.day()];
	    }

	    function day_of_week__handleStrictParse(weekdayName, format, strict) {
	        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];

	            for (i = 0; i < 7; ++i) {
	                mom = create_utc__createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }

	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }

	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;

	        if (this._weekdaysParseExact) {
	            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
	        }

	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }

	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already

	            mom = create_utc__createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }

	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }

	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }

	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.

	        if (input != null) {
	            var weekday = parseIsoWeekday(input, this.localeData());
	            return this.day(this.day() % 7 ? weekday : weekday - 7);
	        } else {
	            return this.day() || 7;
	        }
	    }

	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                this._weekdaysRegex = defaultWeekdaysRegex;
	            }
	            return this._weekdaysStrictRegex && isStrict ?
	                this._weekdaysStrictRegex : this._weekdaysRegex;
	        }
	    }

	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	            }
	            return this._weekdaysShortStrictRegex && isStrict ?
	                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	        }
	    }

	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	            }
	            return this._weekdaysMinStrictRegex && isStrict ?
	                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	        }
	    }


	    function computeWeekdaysParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }

	        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom, minp, shortp, longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, 1]).day(i);
	            minp = this.weekdaysMin(mom, '');
	            shortp = this.weekdaysShort(mom, '');
	            longp = this.weekdays(mom, '');
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 7; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }

	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;

	        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }

	    // FORMATTING

	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }

	    function kFormat() {
	        return this.hours() || 24;
	    }

	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);

	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });

	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });

	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });

	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }

	    meridiem('a', true);
	    meridiem('A', false);

	    // ALIASES

	    addUnitAlias('hour', 'h');

	    // PRIORITY
	    addUnitPriority('hour', 13);

	    // PARSING

	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }

	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);

	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);

	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });

	    // LOCALES

	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }

	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }


	    // MOMENTS

	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);

	    var baseConfig = {
	        calendar: defaultCalendar,
	        longDateFormat: defaultLongDateFormat,
	        invalidDate: defaultInvalidDate,
	        ordinal: defaultOrdinal,
	        ordinalParse: defaultOrdinalParse,
	        relativeTime: defaultRelativeTime,

	        months: defaultLocaleMonths,
	        monthsShort: defaultLocaleMonthsShort,

	        week: defaultLocaleWeek,

	        weekdays: defaultLocaleWeekdays,
	        weekdaysMin: defaultLocaleWeekdaysMin,
	        weekdaysShort: defaultLocaleWeekdaysShort,

	        meridiemParse: defaultLocaleMeridiemParse
	    };

	    // internal storage for locale config files
	    var locales = {};
	    var globalLocale;

	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }

	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;

	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }

	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && (typeof module !== 'undefined') &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                __webpack_require__(6)("./" + name);
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }

	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }

	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }

	        return globalLocale._abbr;
	    }

	    function defineLocale (name, config) {
	        if (config !== null) {
	            var parentConfig = baseConfig;
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	                parentConfig = locales[name]._config;
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    parentConfig = locales[config.parentLocale]._config;
	                } else {
	                    // treat as if there is no base config
	                    deprecateSimple('parentLocaleUndefined',
	                            'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
	                }
	            }
	            locales[name] = new Locale(mergeConfigs(parentConfig, config));

	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);

	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }

	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale, parentConfig = baseConfig;
	            // MERGE
	            if (locales[name] != null) {
	                parentConfig = locales[name]._config;
	            }
	            config = mergeConfigs(parentConfig, config);
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;

	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }

	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;

	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }

	        if (!key) {
	            return globalLocale;
	        }

	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }

	        return chooseLocale(key);
	    }

	    function locale_locales__listLocales() {
	        return keys(locales);
	    }

	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;

	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;

	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }

	            getParsingFlags(m).overflow = overflow;
	        }

	        return m;
	    }

	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;

	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];

	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];

	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;

	        if (match) {
	            getParsingFlags(config).iso = true;

	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }

	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);

	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }

	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }

	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(utils_hooks__hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;

	        if (config._d) {
	            return;
	        }

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }

	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);

	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }

	    // constant that refers to the ISO standard
	    utils_hooks__hooks.ISO_8601 = function () {};

	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }

	        config._a = [];
	        getParsingFlags(config).empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;

	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }

	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }

	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

	        configFromArray(config);
	        checkOverflow(config);
	    }


	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;

	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }

	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,

	            scoreToBeat,
	            i,
	            currentScore;

	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }

	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);

	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;

	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

	            getParsingFlags(tempConfig).score = currentScore;

	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }

	        extend(config, bestMoment || tempConfig);
	    }

	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }

	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });

	        configFromArray(config);
	    }

	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }

	        return res;
	    }

	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;

	        config._locale = config._locale || locale_locales__getLocale(config._l);

	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }

	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }

	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else if (format) {
	            configFromStringAndFormat(config);
	        }  else {
	            configFromInput(config);
	        }

	        if (!valid__isValid(config)) {
	            config._d = null;
	        }

	        return config;
	    }

	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date(utils_hooks__hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }

	        if ((isObject(input) && isObjectEmpty(input)) ||
	                (isArray(input) && input.length === 0)) {
	            input = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;

	        return createFromConfig(c);
	    }

	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }

	    var prototypeMin = deprecate(
	        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other < this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );

	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return valid__createInvalid();
	            }
	        }
	    );

	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }

	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isBefore', args);
	    }

	    function max () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isAfter', args);
	    }

	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };

	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;

	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;

	        this._data = {};

	        this._locale = locale_locales__getLocale();

	        this._bubble();
	    }

	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }

	    // FORMATTING

	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }

	    offset('Z', ':');
	    offset('ZZ', '');

	    // PARSING

	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });

	    // HELPERS

	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;

	    function offsetFromString(matcher, string) {
	        var matches = ((string || '').match(matcher) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);

	        return parts[0] === '+' ? minutes : -minutes;
	    }

	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	    }

	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }

	    // HOOKS

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};

	    // MOMENTS

	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	            } else if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }

	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }

	            this.utcOffset(input, keepLocalTime);

	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }

	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }

	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;

	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }

	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            this.utcOffset(offsetFromString(matchOffset, this._i));
	        }
	        return this;
	    }

	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? local__createLocal(input).utcOffset() : 0;

	        return (this.utcOffset() - input) % 60 === 0;
	    }

	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }

	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }

	        var c = {};

	        copyConfig(c, this);
	        c = prepareConfig(c);

	        if (c._a) {
	            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }

	        return this._isDSTShifted;
	    }

	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }

	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }

	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }

	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;

	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;

	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])        * sign,
	                h  : toInt(match[HOUR])        * sign,
	                m  : toInt(match[MINUTE])      * sign,
	                s  : toInt(match[SECOND])      * sign,
	                ms : toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }

	        ret = new Duration(duration);

	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }

	        return ret;
	    }

	    create__createDuration.fn = Duration.prototype;

	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};

	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }

	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }

	        return res;
	    }

	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }

	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
	                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	                tmp = val; val = period; period = tmp;
	            }

	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }

	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);

	        if (!mom.isValid()) {
	            // No op
	            return;
	        }

	        updateOffset = updateOffset == null ? true : updateOffset;

	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }

	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');

	    function getCalendarFormat(myMoment, now) {
	        var diff = myMoment.diff(now, 'days', true);
	        return diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	    }

	    function moment_calendar__calendar (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';

	        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

	        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
	    }

	    function clone () {
	        return new Moment(this);
	    }

	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }

	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }

	    function isBetween (from, to, units, inclusivity) {
	        inclusivity = inclusivity || '()';
	        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
	            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
	    }

	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : local__createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	        }
	    }

	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input,units);
	    }

	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input,units);
	    }

	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            delta, output;

	        if (!this.isValid()) {
	            return NaN;
	        }

	        that = cloneWithOffset(input, this);

	        if (!that.isValid()) {
	            return NaN;
	        }

	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

	        units = normalizeUnits(units);

	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }

	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }

	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }

	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if (isFunction(Date.prototype.toISOString)) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }

	    function format (inputString) {
	        if (!inputString) {
	            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }

	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }

	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 local__createLocal(time).isValid())) {
	            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }

	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }

	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;

	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }

	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );

	    function localeData () {
	        return this._locale;
	    }

	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	            case 'year':
	                this.month(0);
	                /* falls through */
	            case 'quarter':
	            case 'month':
	                this.date(1);
	                /* falls through */
	            case 'week':
	            case 'isoWeek':
	            case 'day':
	            case 'date':
	                this.hours(0);
	                /* falls through */
	            case 'hour':
	                this.minutes(0);
	                /* falls through */
	            case 'minute':
	                this.seconds(0);
	                /* falls through */
	            case 'second':
	                this.milliseconds(0);
	        }

	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }

	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }

	        return this;
	    }

	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }

	        // 'date' is an alias for 'day', so it should be considered as such.
	        if (units === 'date') {
	            units = 'day';
	        }

	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }

	    function to_type__valueOf () {
	        return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }

	    function unix () {
	        return Math.floor(this.valueOf() / 1000);
	    }

	    function toDate () {
	        return new Date(this.valueOf());
	    }

	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }

	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }

	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }

	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }

	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }

	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }

	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }

	    // FORMATTING

	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });

	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });

	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }

	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	    // ALIASES

	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');

	    // PRIORITY

	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);


	    // PARSING

	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);

	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });

	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });

	    // MOMENTS

	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }

	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }

	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }

	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }

	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }

	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }

	    // FORMATTING

	    addFormatToken('Q', 0, 'Qo', 'quarter');

	    // ALIASES

	    addUnitAlias('quarter', 'Q');

	    // PRIORITY

	    addUnitPriority('quarter', 7);

	    // PARSING

	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });

	    // MOMENTS

	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }

	    // FORMATTING

	    addFormatToken('D', ['DD', 2], 'Do', 'date');

	    // ALIASES

	    addUnitAlias('date', 'D');

	    // PRIOROITY
	    addUnitPriority('date', 9);

	    // PARSING

	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });

	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });

	    // MOMENTS

	    var getSetDayOfMonth = makeGetSet('Date', true);

	    // FORMATTING

	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	    // ALIASES

	    addUnitAlias('dayOfYear', 'DDD');

	    // PRIORITY
	    addUnitPriority('dayOfYear', 4);

	    // PARSING

	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });

	    // HELPERS

	    // MOMENTS

	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }

	    // FORMATTING

	    addFormatToken('m', ['mm', 2], 0, 'minute');

	    // ALIASES

	    addUnitAlias('minute', 'm');

	    // PRIORITY

	    addUnitPriority('minute', 14);

	    // PARSING

	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);

	    // MOMENTS

	    var getSetMinute = makeGetSet('Minutes', false);

	    // FORMATTING

	    addFormatToken('s', ['ss', 2], 0, 'second');

	    // ALIASES

	    addUnitAlias('second', 's');

	    // PRIORITY

	    addUnitPriority('second', 15);

	    // PARSING

	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);

	    // MOMENTS

	    var getSetSecond = makeGetSet('Seconds', false);

	    // FORMATTING

	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });

	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });

	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });


	    // ALIASES

	    addUnitAlias('millisecond', 'ms');

	    // PRIORITY

	    addUnitPriority('millisecond', 16);

	    // PARSING

	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);

	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }

	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }

	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS

	    var getSetMillisecond = makeGetSet('Milliseconds', false);

	    // FORMATTING

	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');

	    // MOMENTS

	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }

	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }

	    var momentPrototype__proto = Moment.prototype;

	    momentPrototype__proto.add               = add_subtract__add;
	    momentPrototype__proto.calendar          = moment_calendar__calendar;
	    momentPrototype__proto.clone             = clone;
	    momentPrototype__proto.diff              = diff;
	    momentPrototype__proto.endOf             = endOf;
	    momentPrototype__proto.format            = format;
	    momentPrototype__proto.from              = from;
	    momentPrototype__proto.fromNow           = fromNow;
	    momentPrototype__proto.to                = to;
	    momentPrototype__proto.toNow             = toNow;
	    momentPrototype__proto.get               = stringGet;
	    momentPrototype__proto.invalidAt         = invalidAt;
	    momentPrototype__proto.isAfter           = isAfter;
	    momentPrototype__proto.isBefore          = isBefore;
	    momentPrototype__proto.isBetween         = isBetween;
	    momentPrototype__proto.isSame            = isSame;
	    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;
	    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;
	    momentPrototype__proto.isValid           = moment_valid__isValid;
	    momentPrototype__proto.lang              = lang;
	    momentPrototype__proto.locale            = locale;
	    momentPrototype__proto.localeData        = localeData;
	    momentPrototype__proto.max               = prototypeMax;
	    momentPrototype__proto.min               = prototypeMin;
	    momentPrototype__proto.parsingFlags      = parsingFlags;
	    momentPrototype__proto.set               = stringSet;
	    momentPrototype__proto.startOf           = startOf;
	    momentPrototype__proto.subtract          = add_subtract__subtract;
	    momentPrototype__proto.toArray           = toArray;
	    momentPrototype__proto.toObject          = toObject;
	    momentPrototype__proto.toDate            = toDate;
	    momentPrototype__proto.toISOString       = moment_format__toISOString;
	    momentPrototype__proto.toJSON            = toJSON;
	    momentPrototype__proto.toString          = toString;
	    momentPrototype__proto.unix              = unix;
	    momentPrototype__proto.valueOf           = to_type__valueOf;
	    momentPrototype__proto.creationData      = creationData;

	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;

	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;

	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;

	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;

	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

	    var momentPrototype = momentPrototype__proto;

	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }

	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }

	    function preParsePostFormat (string) {
	        return string;
	    }

	    var prototype__proto = Locale.prototype;

	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;

	    // Month
	    prototype__proto.months            =        localeMonths;
	    prototype__proto.monthsShort       =        localeMonthsShort;
	    prototype__proto.monthsParse       =        localeMonthsParse;
	    prototype__proto.monthsRegex       = monthsRegex;
	    prototype__proto.monthsShortRegex  = monthsShortRegex;

	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

	    prototype__proto.weekdaysRegex       =        weekdaysRegex;
	    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;
	    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;

	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto.meridiem = localeMeridiem;

	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }

	    function listMonthsImpl (format, index, field) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }

	        format = format || '';

	        if (index != null) {
	            return lists__get(format, index, field, 'month');
	        }

	        var i;
	        var out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = lists__get(format, i, field, 'month');
	        }
	        return out;
	    }

	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl (localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }

	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;

	            if (typeof format === 'number') {
	                index = format;
	                format = undefined;
	            }

	            format = format || '';
	        }

	        var locale = locale_locales__getLocale(),
	            shift = localeSorted ? locale._week.dow : 0;

	        if (index != null) {
	            return lists__get(format, (index + shift) % 7, field, 'day');
	        }

	        var i;
	        var out = [];
	        for (i = 0; i < 7; i++) {
	            out[i] = lists__get(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }

	    function lists__listMonths (format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }

	    function lists__listMonthsShort (format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }

	    function lists__listWeekdays (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }

	    function lists__listWeekdaysShort (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }

	    function lists__listWeekdaysMin (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }

	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

	    var mathAbs = Math.abs;

	    function duration_abs__abs () {
	        var data           = this._data;

	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);

	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);

	        return this;
	    }

	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);

	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;

	        return duration._bubble();
	    }

	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }

	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }

	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }

	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;

	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }

	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;

	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;

	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;

	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;

	        days += absFloor(hours / 24);

	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));

	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;

	        data.days   = days;
	        data.months = months;
	        data.years  = years;

	        return this;
	    }

	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }

	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }

	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;

	        units = normalizeUnits(units);

	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }

	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }

	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }

	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');

	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }

	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }

	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');

	    function weeks () {
	        return absFloor(this.days() / 7);
	    }

	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };

	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));

	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes <= 1           && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   <= 1           && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    <= 1           && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  <= 1           && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   <= 1           && ['y']           || ['yy', years];

	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }

	    // This function allows you to set the rounding function for relative time strings
	    function duration_humanize__getSetRelativeTimeRounding (roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof(roundingFunction) === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }

	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }

	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }

	        return locale.postformat(output);
	    }

	    var iso_string__abs = Math.abs;

	    function iso_string__toISOString() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        var seconds = iso_string__abs(this._milliseconds) / 1000;
	        var days         = iso_string__abs(this._days);
	        var months       = iso_string__abs(this._months);
	        var minutes, hours, years;

	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;

	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;


	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds;
	        var total = this.asSeconds();

	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }

	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }

	    var duration_prototype__proto = Duration.prototype;

	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;

	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;

	    // Side effect imports

	    // FORMATTING

	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');

	    // PARSING

	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });

	    // Side effect imports


	    utils_hooks__hooks.version = '2.14.1';

	    setHookCallback(local__createLocal);

	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.now                   = now;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.updateLocale          = updateLocale;
	    utils_hooks__hooks.locales               = locale_locales__listLocales;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
	    utils_hooks__hooks.calendarFormat        = getCalendarFormat;
	    utils_hooks__hooks.prototype             = momentPrototype;

	    var _moment = utils_hooks__hooks;

	    return _moment;

	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 7,
		"./af.js": 7,
		"./ar": 8,
		"./ar-ma": 9,
		"./ar-ma.js": 9,
		"./ar-sa": 10,
		"./ar-sa.js": 10,
		"./ar-tn": 11,
		"./ar-tn.js": 11,
		"./ar.js": 8,
		"./az": 12,
		"./az.js": 12,
		"./be": 13,
		"./be.js": 13,
		"./bg": 14,
		"./bg.js": 14,
		"./bn": 15,
		"./bn.js": 15,
		"./bo": 16,
		"./bo.js": 16,
		"./br": 17,
		"./br.js": 17,
		"./bs": 18,
		"./bs.js": 18,
		"./ca": 19,
		"./ca.js": 19,
		"./cs": 20,
		"./cs.js": 20,
		"./cv": 21,
		"./cv.js": 21,
		"./cy": 22,
		"./cy.js": 22,
		"./da": 23,
		"./da.js": 23,
		"./de": 24,
		"./de-at": 25,
		"./de-at.js": 25,
		"./de.js": 24,
		"./dv": 26,
		"./dv.js": 26,
		"./el": 27,
		"./el.js": 27,
		"./en-au": 28,
		"./en-au.js": 28,
		"./en-ca": 29,
		"./en-ca.js": 29,
		"./en-gb": 30,
		"./en-gb.js": 30,
		"./en-ie": 31,
		"./en-ie.js": 31,
		"./en-nz": 32,
		"./en-nz.js": 32,
		"./eo": 33,
		"./eo.js": 33,
		"./es": 34,
		"./es-do": 35,
		"./es-do.js": 35,
		"./es.js": 34,
		"./et": 36,
		"./et.js": 36,
		"./eu": 37,
		"./eu.js": 37,
		"./fa": 38,
		"./fa.js": 38,
		"./fi": 39,
		"./fi.js": 39,
		"./fo": 40,
		"./fo.js": 40,
		"./fr": 41,
		"./fr-ca": 42,
		"./fr-ca.js": 42,
		"./fr-ch": 43,
		"./fr-ch.js": 43,
		"./fr.js": 41,
		"./fy": 44,
		"./fy.js": 44,
		"./gd": 45,
		"./gd.js": 45,
		"./gl": 46,
		"./gl.js": 46,
		"./he": 47,
		"./he.js": 47,
		"./hi": 48,
		"./hi.js": 48,
		"./hr": 49,
		"./hr.js": 49,
		"./hu": 50,
		"./hu.js": 50,
		"./hy-am": 51,
		"./hy-am.js": 51,
		"./id": 52,
		"./id.js": 52,
		"./is": 53,
		"./is.js": 53,
		"./it": 54,
		"./it.js": 54,
		"./ja": 55,
		"./ja.js": 55,
		"./jv": 56,
		"./jv.js": 56,
		"./ka": 57,
		"./ka.js": 57,
		"./kk": 58,
		"./kk.js": 58,
		"./km": 59,
		"./km.js": 59,
		"./ko": 60,
		"./ko.js": 60,
		"./ky": 61,
		"./ky.js": 61,
		"./lb": 62,
		"./lb.js": 62,
		"./lo": 63,
		"./lo.js": 63,
		"./lt": 64,
		"./lt.js": 64,
		"./lv": 65,
		"./lv.js": 65,
		"./me": 66,
		"./me.js": 66,
		"./mk": 67,
		"./mk.js": 67,
		"./ml": 68,
		"./ml.js": 68,
		"./mr": 69,
		"./mr.js": 69,
		"./ms": 70,
		"./ms-my": 71,
		"./ms-my.js": 71,
		"./ms.js": 70,
		"./my": 72,
		"./my.js": 72,
		"./nb": 73,
		"./nb.js": 73,
		"./ne": 74,
		"./ne.js": 74,
		"./nl": 75,
		"./nl.js": 75,
		"./nn": 76,
		"./nn.js": 76,
		"./pa-in": 77,
		"./pa-in.js": 77,
		"./pl": 78,
		"./pl.js": 78,
		"./pt": 79,
		"./pt-br": 80,
		"./pt-br.js": 80,
		"./pt.js": 79,
		"./ro": 81,
		"./ro.js": 81,
		"./ru": 82,
		"./ru.js": 82,
		"./se": 83,
		"./se.js": 83,
		"./si": 84,
		"./si.js": 84,
		"./sk": 85,
		"./sk.js": 85,
		"./sl": 86,
		"./sl.js": 86,
		"./sq": 87,
		"./sq.js": 87,
		"./sr": 88,
		"./sr-cyrl": 89,
		"./sr-cyrl.js": 89,
		"./sr.js": 88,
		"./ss": 90,
		"./ss.js": 90,
		"./sv": 91,
		"./sv.js": 91,
		"./sw": 92,
		"./sw.js": 92,
		"./ta": 93,
		"./ta.js": 93,
		"./te": 94,
		"./te.js": 94,
		"./th": 95,
		"./th.js": 95,
		"./tl-ph": 96,
		"./tl-ph.js": 96,
		"./tlh": 97,
		"./tlh.js": 97,
		"./tr": 98,
		"./tr.js": 98,
		"./tzl": 99,
		"./tzl.js": 99,
		"./tzm": 100,
		"./tzm-latn": 101,
		"./tzm-latn.js": 101,
		"./tzm.js": 100,
		"./uk": 102,
		"./uk.js": 102,
		"./uz": 103,
		"./uz.js": 103,
		"./vi": 104,
		"./vi.js": 104,
		"./x-pseudo": 105,
		"./x-pseudo.js": 105,
		"./zh-cn": 106,
		"./zh-cn.js": 106,
		"./zh-tw": 107,
		"./zh-tw.js": 107
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 6;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Afrikaans [af]
	//! author : Werner Mollentze : https://github.com/wernerm

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var af = moment.defineLocale('af', {
	        months : 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
	        weekdaysShort : 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
	        weekdaysMin : 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
	        meridiemParse: /vm|nm/i,
	        isPM : function (input) {
	            return /^nm$/i.test(input);
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'vm' : 'VM';
	            } else {
	                return isLower ? 'nm' : 'NM';
	            }
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Vandag om] LT',
	            nextDay : '[Môre om] LT',
	            nextWeek : 'dddd [om] LT',
	            lastDay : '[Gister om] LT',
	            lastWeek : '[Laas] dddd [om] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'oor %s',
	            past : '%s gelede',
	            s : '\'n paar sekondes',
	            m : '\'n minuut',
	            mm : '%d minute',
	            h : '\'n uur',
	            hh : '%d ure',
	            d : '\'n dag',
	            dd : '%d dae',
	            M : '\'n maand',
	            MM : '%d maande',
	            y : '\'n jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de'); // Thanks to Joris Röling : https://github.com/jjupiter
	        },
	        week : {
	            dow : 1, // Maandag is die eerste dag van die week.
	            doy : 4  // Die week wat die 4de Januarie bevat is die eerste week van die jaar.
	        }
	    });

	    return af;

	}));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic [ar]
	//! author : Abdel Said: https://github.com/abdelsaid
	//! changes in months, weekdays: Ahmed Elkhatib
	//! Native plural forms: forabi https://github.com/forabi

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    }, pluralForm = function (n) {
	        return n === 0 ? 0 : n === 1 ? 1 : n === 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5;
	    }, plurals = {
	        s : ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
	        m : ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
	        h : ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
	        d : ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
	        M : ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
	        y : ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
	    }, pluralize = function (u) {
	        return function (number, withoutSuffix, string, isFuture) {
	            var f = pluralForm(number),
	                str = plurals[u][pluralForm(number)];
	            if (f === 2) {
	                str = str[withoutSuffix ? 0 : 1];
	            }
	            return str.replace(/%d/i, number);
	        };
	    }, months = [
	        'كانون الثاني يناير',
	        'شباط فبراير',
	        'آذار مارس',
	        'نيسان أبريل',
	        'أيار مايو',
	        'حزيران يونيو',
	        'تموز يوليو',
	        'آب أغسطس',
	        'أيلول سبتمبر',
	        'تشرين الأول أكتوبر',
	        'تشرين الثاني نوفمبر',
	        'كانون الأول ديسمبر'
	    ];

	    var ar = moment.defineLocale('ar', {
	        months : months,
	        monthsShort : months,
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'D/\u200FM/\u200FYYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم عند الساعة] LT',
	            nextDay: '[غدًا عند الساعة] LT',
	            nextWeek: 'dddd [عند الساعة] LT',
	            lastDay: '[أمس عند الساعة] LT',
	            lastWeek: 'dddd [عند الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'بعد %s',
	            past : 'منذ %s',
	            s : pluralize('s'),
	            m : pluralize('m'),
	            mm : pluralize('m'),
	            h : pluralize('h'),
	            hh : pluralize('h'),
	            d : pluralize('d'),
	            dd : pluralize('d'),
	            M : pluralize('M'),
	            MM : pluralize('M'),
	            y : pluralize('y'),
	            yy : pluralize('y')
	        },
	        preparse: function (string) {
	            return string.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar;

	}));

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Morocco) [ar-ma]
	//! author : ElFadili Yassine : https://github.com/ElFadiliY
	//! author : Abdel Said : https://github.com/abdelsaid

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ar_ma = moment.defineLocale('ar-ma', {
	        months : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
	        weekdays : 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar_ma;

	}));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Arabic (Saudi Arabia) [ar-sa]
	//! author : Suhail Alkowaileet : https://github.com/xsoh

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '١',
	        '2': '٢',
	        '3': '٣',
	        '4': '٤',
	        '5': '٥',
	        '6': '٦',
	        '7': '٧',
	        '8': '٨',
	        '9': '٩',
	        '0': '٠'
	    }, numberMap = {
	        '١': '1',
	        '٢': '2',
	        '٣': '3',
	        '٤': '4',
	        '٥': '5',
	        '٦': '6',
	        '٧': '7',
	        '٨': '8',
	        '٩': '9',
	        '٠': '0'
	    };

	    var ar_sa = moment.defineLocale('ar-sa', {
	        months : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort : 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays : 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort : 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin : 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ص|م/,
	        isPM : function (input) {
	            return 'م' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ص';
	            } else {
	                return 'م';
	            }
	        },
	        calendar : {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'في %s',
	            past : 'منذ %s',
	            s : 'ثوان',
	            m : 'دقيقة',
	            mm : '%d دقائق',
	            h : 'ساعة',
	            hh : '%d ساعات',
	            d : 'يوم',
	            dd : '%d أيام',
	            M : 'شهر',
	            MM : '%d أشهر',
	            y : 'سنة',
	            yy : '%d سنوات'
	        },
	        preparse: function (string) {
	            return string.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ar_sa;

	}));

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale  :  Arabic (Tunisia) [ar-tn]

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ar_tn = moment.defineLocale('ar-tn', {
	        months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
	        weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
	        weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
	        weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[اليوم على الساعة] LT',
	            nextDay: '[غدا على الساعة] LT',
	            nextWeek: 'dddd [على الساعة] LT',
	            lastDay: '[أمس على الساعة] LT',
	            lastWeek: 'dddd [على الساعة] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'في %s',
	            past: 'منذ %s',
	            s: 'ثوان',
	            m: 'دقيقة',
	            mm: '%d دقائق',
	            h: 'ساعة',
	            hh: '%d ساعات',
	            d: 'يوم',
	            dd: '%d أيام',
	            M: 'شهر',
	            MM: '%d أشهر',
	            y: 'سنة',
	            yy: '%d سنوات'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return ar_tn;

	}));

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Azerbaijani [az]
	//! author : topchiyev : https://github.com/topchiyev

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var suffixes = {
	        1: '-inci',
	        5: '-inci',
	        8: '-inci',
	        70: '-inci',
	        80: '-inci',
	        2: '-nci',
	        7: '-nci',
	        20: '-nci',
	        50: '-nci',
	        3: '-üncü',
	        4: '-üncü',
	        100: '-üncü',
	        6: '-ncı',
	        9: '-uncu',
	        10: '-uncu',
	        30: '-uncu',
	        60: '-ıncı',
	        90: '-ıncı'
	    };

	    var az = moment.defineLocale('az', {
	        months : 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
	        monthsShort : 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
	        weekdays : 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
	        weekdaysShort : 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
	        weekdaysMin : 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[sabah saat] LT',
	            nextWeek : '[gələn həftə] dddd [saat] LT',
	            lastDay : '[dünən] LT',
	            lastWeek : '[keçən həftə] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s əvvəl',
	            s : 'birneçə saniyyə',
	            m : 'bir dəqiqə',
	            mm : '%d dəqiqə',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir il',
	            yy : '%d il'
	        },
	        meridiemParse: /gecə|səhər|gündüz|axşam/,
	        isPM : function (input) {
	            return /^(gündüz|axşam)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'gecə';
	            } else if (hour < 12) {
	                return 'səhər';
	            } else if (hour < 17) {
	                return 'gündüz';
	            } else {
	                return 'axşam';
	            }
	        },
	        ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '-ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return az;

	}));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Belarusian [be]
	//! author : Dmitry Demidov : https://github.com/demidov91
	//! author: Praleska: http://praleska.pro/
	//! Author : Menelion Elensúle : https://github.com/Oire

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
	            'hh': withoutSuffix ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
	            'dd': 'дзень_дні_дзён',
	            'MM': 'месяц_месяцы_месяцаў',
	            'yy': 'год_гады_гадоў'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвіліна' : 'хвіліну';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'гадзіна' : 'гадзіну';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }

	    var be = moment.defineLocale('be', {
	        months : {
	            format: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_'),
	            standalone: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_')
	        },
	        monthsShort : 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
	        weekdays : {
	            format: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_'),
	            standalone: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
	            isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
	        },
	        weekdaysShort : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar : {
	            sameDay: '[Сёння ў] LT',
	            nextDay: '[Заўтра ў] LT',
	            lastDay: '[Учора ў] LT',
	            nextWeek: function () {
	                return '[У] dddd [ў] LT';
	            },
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return '[У мінулую] dddd [ў] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                        return '[У мінулы] dddd [ў] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'праз %s',
	            past : '%s таму',
	            s : 'некалькі секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : relativeTimeWithPlural,
	            hh : relativeTimeWithPlural,
	            d : 'дзень',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },
	        meridiemParse: /ночы|раніцы|дня|вечара/,
	        isPM : function (input) {
	            return /^(дня|вечара)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночы';
	            } else if (hour < 12) {
	                return 'раніцы';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечара';
	            }
	        },
	        ordinalParse: /\d{1,2}-(і|ы|га)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? number + '-і' : number + '-ы';
	                case 'D':
	                    return number + '-га';
	                default:
	                    return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return be;

	}));

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bulgarian [bg]
	//! author : Krasen Borisov : https://github.com/kraz

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var bg = moment.defineLocale('bg', {
	        months : 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : '[Днес в] LT',
	            nextDay : '[Утре в] LT',
	            nextWeek : 'dddd [в] LT',
	            lastDay : '[Вчера в] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[В изминалата] dddd [в] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[В изминалия] dddd [в] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'след %s',
	            past : 'преди %s',
	            s : 'няколко секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дни',
	            M : 'месец',
	            MM : '%d месеца',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bg;

	}));

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bengali [bn]
	//! author : Kaushik Gandhi : https://github.com/kaushikgandhi

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '১',
	        '2': '২',
	        '3': '৩',
	        '4': '৪',
	        '5': '৫',
	        '6': '৬',
	        '7': '৭',
	        '8': '৮',
	        '9': '৯',
	        '0': '০'
	    },
	    numberMap = {
	        '১': '1',
	        '২': '2',
	        '৩': '3',
	        '৪': '4',
	        '৫': '5',
	        '৬': '6',
	        '৭': '7',
	        '৮': '8',
	        '৯': '9',
	        '০': '0'
	    };

	    var bn = moment.defineLocale('bn', {
	        months : 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
	        monthsShort : 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
	        weekdays : 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রবার_শনিবার'.split('_'),
	        weekdaysShort : 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্র_শনি'.split('_'),
	        weekdaysMin : 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm সময়',
	            LTS : 'A h:mm:ss সময়',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm সময়',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm সময়'
	        },
	        calendar : {
	            sameDay : '[আজ] LT',
	            nextDay : '[আগামীকাল] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[গতকাল] LT',
	            lastWeek : '[গত] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s পরে',
	            past : '%s আগে',
	            s : 'কয়েক সেকেন্ড',
	            m : 'এক মিনিট',
	            mm : '%d মিনিট',
	            h : 'এক ঘন্টা',
	            hh : '%d ঘন্টা',
	            d : 'এক দিন',
	            dd : '%d দিন',
	            M : 'এক মাস',
	            MM : '%d মাস',
	            y : 'এক বছর',
	            yy : '%d বছর'
	        },
	        preparse: function (string) {
	            return string.replace(/[১২৩৪৫৬৭৮৯০]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'রাত' && hour >= 4) ||
	                    (meridiem === 'দুপুর' && hour < 5) ||
	                    meridiem === 'বিকাল') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'রাত';
	            } else if (hour < 10) {
	                return 'সকাল';
	            } else if (hour < 17) {
	                return 'দুপুর';
	            } else if (hour < 20) {
	                return 'বিকাল';
	            } else {
	                return 'রাত';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bn;

	}));

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tibetan [bo]
	//! author : Thupten N. Chakrishar : https://github.com/vajradog

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '༡',
	        '2': '༢',
	        '3': '༣',
	        '4': '༤',
	        '5': '༥',
	        '6': '༦',
	        '7': '༧',
	        '8': '༨',
	        '9': '༩',
	        '0': '༠'
	    },
	    numberMap = {
	        '༡': '1',
	        '༢': '2',
	        '༣': '3',
	        '༤': '4',
	        '༥': '5',
	        '༦': '6',
	        '༧': '7',
	        '༨': '8',
	        '༩': '9',
	        '༠': '0'
	    };

	    var bo = moment.defineLocale('bo', {
	        months : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        monthsShort : 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
	        weekdays : 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
	        weekdaysShort : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        weekdaysMin : 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm',
	            LTS : 'A h:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar : {
	            sameDay : '[དི་རིང] LT',
	            nextDay : '[སང་ཉིན] LT',
	            nextWeek : '[བདུན་ཕྲག་རྗེས་མ], LT',
	            lastDay : '[ཁ་སང] LT',
	            lastWeek : '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ལ་',
	            past : '%s སྔན་ལ',
	            s : 'ལམ་སང',
	            m : 'སྐར་མ་གཅིག',
	            mm : '%d སྐར་མ',
	            h : 'ཆུ་ཚོད་གཅིག',
	            hh : '%d ཆུ་ཚོད',
	            d : 'ཉིན་གཅིག',
	            dd : '%d ཉིན་',
	            M : 'ཟླ་བ་གཅིག',
	            MM : '%d ཟླ་བ',
	            y : 'ལོ་གཅིག',
	            yy : '%d ལོ'
	        },
	        preparse: function (string) {
	            return string.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'མཚན་མོ' && hour >= 4) ||
	                    (meridiem === 'ཉིན་གུང' && hour < 5) ||
	                    meridiem === 'དགོང་དག') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'མཚན་མོ';
	            } else if (hour < 10) {
	                return 'ཞོགས་ཀས';
	            } else if (hour < 17) {
	                return 'ཉིན་གུང';
	            } else if (hour < 20) {
	                return 'དགོང་དག';
	            } else {
	                return 'མཚན་མོ';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bo;

	}));

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Breton [br]
	//! author : Jean-Baptiste Le Duigou : https://github.com/jbleduigou

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function relativeTimeWithMutation(number, withoutSuffix, key) {
	        var format = {
	            'mm': 'munutenn',
	            'MM': 'miz',
	            'dd': 'devezh'
	        };
	        return number + ' ' + mutation(format[key], number);
	    }
	    function specialMutationForYears(number) {
	        switch (lastNumber(number)) {
	            case 1:
	            case 3:
	            case 4:
	            case 5:
	            case 9:
	                return number + ' bloaz';
	            default:
	                return number + ' vloaz';
	        }
	    }
	    function lastNumber(number) {
	        if (number > 9) {
	            return lastNumber(number % 10);
	        }
	        return number;
	    }
	    function mutation(text, number) {
	        if (number === 2) {
	            return softMutation(text);
	        }
	        return text;
	    }
	    function softMutation(text) {
	        var mutationTable = {
	            'm': 'v',
	            'b': 'v',
	            'd': 'z'
	        };
	        if (mutationTable[text.charAt(0)] === undefined) {
	            return text;
	        }
	        return mutationTable[text.charAt(0)] + text.substring(1);
	    }

	    var br = moment.defineLocale('br', {
	        months : 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
	        monthsShort : 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
	        weekdays : 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
	        weekdaysShort : 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
	        weekdaysMin : 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'h[e]mm A',
	            LTS : 'h[e]mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D [a viz] MMMM YYYY',
	            LLL : 'D [a viz] MMMM YYYY h[e]mm A',
	            LLLL : 'dddd, D [a viz] MMMM YYYY h[e]mm A'
	        },
	        calendar : {
	            sameDay : '[Hiziv da] LT',
	            nextDay : '[Warc\'hoazh da] LT',
	            nextWeek : 'dddd [da] LT',
	            lastDay : '[Dec\'h da] LT',
	            lastWeek : 'dddd [paset da] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'a-benn %s',
	            past : '%s \'zo',
	            s : 'un nebeud segondennoù',
	            m : 'ur vunutenn',
	            mm : relativeTimeWithMutation,
	            h : 'un eur',
	            hh : '%d eur',
	            d : 'un devezh',
	            dd : relativeTimeWithMutation,
	            M : 'ur miz',
	            MM : relativeTimeWithMutation,
	            y : 'ur bloaz',
	            yy : specialMutationForYears
	        },
	        ordinalParse: /\d{1,2}(añ|vet)/,
	        ordinal : function (number) {
	            var output = (number === 1) ? 'añ' : 'vet';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return br;

	}));

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Bosnian [bs]
	//! author : Nedim Cholich : https://github.com/frontyard
	//! based on (hr) translation by Bojan Marković

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }

	    var bs = moment.defineLocale('bs', {
	        months : 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',
	            nextWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return bs;

	}));

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Catalan [ca]
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ca = moment.defineLocale('ca', {
	        months : 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
	        monthsShort : 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
	        weekdaysShort : 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
	        weekdaysMin : 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[avui a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextDay : function () {
	                return '[demà a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastDay : function () {
	                return '[ahir a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [passat a ' + ((this.hours() !== 1) ? 'les' : 'la') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'fa %s',
	            s : 'uns segons',
	            m : 'un minut',
	            mm : '%d minuts',
	            h : 'una hora',
	            hh : '%d hores',
	            d : 'un dia',
	            dd : '%d dies',
	            M : 'un mes',
	            MM : '%d mesos',
	            y : 'un any',
	            yy : '%d anys'
	        },
	        ordinalParse: /\d{1,2}(r|n|t|è|a)/,
	        ordinal : function (number, period) {
	            var output = (number === 1) ? 'r' :
	                (number === 2) ? 'n' :
	                (number === 3) ? 'r' :
	                (number === 4) ? 't' : 'è';
	            if (period === 'w' || period === 'W') {
	                output = 'a';
	            }
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return ca;

	}));

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Czech [cs]
	//! author : petrbela : https://github.com/petrbela

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var months = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_'),
	        monthsShort = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
	    function plural(n) {
	        return (n > 1) && (n < 5) && (~~(n / 10) !== 1);
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':  // a few seconds / in a few seconds / a few seconds ago
	                return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
	            case 'm':  // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
	            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minuty' : 'minut');
	                } else {
	                    return result + 'minutami';
	                }
	                break;
	            case 'h':  // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	            case 'hh': // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodin');
	                } else {
	                    return result + 'hodinami';
	                }
	                break;
	            case 'd':  // a day / in a day / a day ago
	                return (withoutSuffix || isFuture) ? 'den' : 'dnem';
	            case 'dd': // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dny' : 'dní');
	                } else {
	                    return result + 'dny';
	                }
	                break;
	            case 'M':  // a month / in a month / a month ago
	                return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
	            case 'MM': // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'měsíce' : 'měsíců');
	                } else {
	                    return result + 'měsíci';
	                }
	                break;
	            case 'y':  // a year / in a year / a year ago
	                return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
	            case 'yy': // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'let');
	                } else {
	                    return result + 'lety';
	                }
	                break;
	        }
	    }

	    var cs = moment.defineLocale('cs', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParse : (function (months, monthsShort) {
	            var i, _monthsParse = [];
	            for (i = 0; i < 12; i++) {
	                // use custom parser to solve problem with July (červenec)
	                _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
	            }
	            return _monthsParse;
	        }(months, monthsShort)),
	        shortMonthsParse : (function (monthsShort) {
	            var i, _shortMonthsParse = [];
	            for (i = 0; i < 12; i++) {
	                _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
	            }
	            return _shortMonthsParse;
	        }(monthsShort)),
	        longMonthsParse : (function (months) {
	            var i, _longMonthsParse = [];
	            for (i = 0; i < 12; i++) {
	                _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
	            }
	            return _longMonthsParse;
	        }(months)),
	        weekdays : 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
	        weekdaysShort : 'ne_po_út_st_čt_pá_so'.split('_'),
	        weekdaysMin : 'ne_po_út_st_čt_pá_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd D. MMMM YYYY H:mm',
	            l : 'D. M. YYYY'
	        },
	        calendar : {
	            sameDay: '[dnes v] LT',
	            nextDay: '[zítra v] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [v] LT';
	                    case 3:
	                        return '[ve středu v] LT';
	                    case 4:
	                        return '[ve čtvrtek v] LT';
	                    case 5:
	                        return '[v pátek v] LT';
	                    case 6:
	                        return '[v sobotu v] LT';
	                }
	            },
	            lastDay: '[včera v] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulou neděli v] LT';
	                    case 1:
	                    case 2:
	                        return '[minulé] dddd [v] LT';
	                    case 3:
	                        return '[minulou středu v] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [v] LT';
	                    case 6:
	                        return '[minulou sobotu v] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'před %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse : /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return cs;

	}));

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chuvash [cv]
	//! author : Anatoly Mironov : https://github.com/mirontoli

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var cv = moment.defineLocale('cv', {
	        months : 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
	        monthsShort : 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
	        weekdays : 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
	        weekdaysShort : 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
	        weekdaysMin : 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
	            LLL : 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
	            LLLL : 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
	        },
	        calendar : {
	            sameDay: '[Паян] LT [сехетре]',
	            nextDay: '[Ыран] LT [сехетре]',
	            lastDay: '[Ӗнер] LT [сехетре]',
	            nextWeek: '[Ҫитес] dddd LT [сехетре]',
	            lastWeek: '[Иртнӗ] dddd LT [сехетре]',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (output) {
	                var affix = /сехет$/i.exec(output) ? 'рен' : /ҫул$/i.exec(output) ? 'тан' : 'ран';
	                return output + affix;
	            },
	            past : '%s каялла',
	            s : 'пӗр-ик ҫеккунт',
	            m : 'пӗр минут',
	            mm : '%d минут',
	            h : 'пӗр сехет',
	            hh : '%d сехет',
	            d : 'пӗр кун',
	            dd : '%d кун',
	            M : 'пӗр уйӑх',
	            MM : '%d уйӑх',
	            y : 'пӗр ҫул',
	            yy : '%d ҫул'
	        },
	        ordinalParse: /\d{1,2}-мӗш/,
	        ordinal : '%d-мӗш',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return cv;

	}));

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Welsh [cy]
	//! author : Robert Allen

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var cy = moment.defineLocale('cy', {
	        months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
	        monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
	        weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
	        weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
	        weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
	        weekdaysParseExact : true,
	        // time formats are the same as en-gb
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[Heddiw am] LT',
	            nextDay: '[Yfory am] LT',
	            nextWeek: 'dddd [am] LT',
	            lastDay: '[Ddoe am] LT',
	            lastWeek: 'dddd [diwethaf am] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'mewn %s',
	            past: '%s yn ôl',
	            s: 'ychydig eiliadau',
	            m: 'munud',
	            mm: '%d munud',
	            h: 'awr',
	            hh: '%d awr',
	            d: 'diwrnod',
	            dd: '%d diwrnod',
	            M: 'mis',
	            MM: '%d mis',
	            y: 'blwyddyn',
	            yy: '%d flynedd'
	        },
	        ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
	        // traditional ordinal numbers above 31 are not commonly used in colloquial Welsh
	        ordinal: function (number) {
	            var b = number,
	                output = '',
	                lookup = [
	                    '', 'af', 'il', 'ydd', 'ydd', 'ed', 'ed', 'ed', 'fed', 'fed', 'fed', // 1af to 10fed
	                    'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'eg', 'fed', 'eg', 'fed' // 11eg to 20fed
	                ];
	            if (b > 20) {
	                if (b === 40 || b === 50 || b === 60 || b === 80 || b === 100) {
	                    output = 'fed'; // not 30ain, 70ain or 90ain
	                } else {
	                    output = 'ain';
	                }
	            } else if (b > 0) {
	                output = lookup[b];
	            }
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return cy;

	}));

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Danish [da]
	//! author : Ulrik Nielsen : https://github.com/mrbase

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var da = moment.defineLocale('da', {
	        months : 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'søn_man_tir_ons_tor_fre_lør'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd [d.] D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[I dag kl.] LT',
	            nextDay : '[I morgen kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[I går kl.] LT',
	            lastWeek : '[sidste] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s siden',
	            s : 'få sekunder',
	            m : 'et minut',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dage',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'et år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return da;

	}));

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German [de]
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Mikolaj Dadela : https://github.com/mik01aj

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    var de = moment.defineLocale('de', {
	        months : 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return de;

	}));

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : German (Austria) [de-at]
	//! author : lluchs : https://github.com/lluchs
	//! author: Menelion Elensúle: https://github.com/Oire
	//! author : Martin Groller : https://github.com/MadMG
	//! author : Mikolaj Dadela : https://github.com/mik01aj

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eine Minute', 'einer Minute'],
	            'h': ['eine Stunde', 'einer Stunde'],
	            'd': ['ein Tag', 'einem Tag'],
	            'dd': [number + ' Tage', number + ' Tagen'],
	            'M': ['ein Monat', 'einem Monat'],
	            'MM': [number + ' Monate', number + ' Monaten'],
	            'y': ['ein Jahr', 'einem Jahr'],
	            'yy': [number + ' Jahre', number + ' Jahren']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }

	    var de_at = moment.defineLocale('de-at', {
	        months : 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort : 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
	        weekdaysShort : 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
	        weekdaysMin : 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY HH:mm',
	            LLLL : 'dddd, D. MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[heute um] LT [Uhr]',
	            sameElse: 'L',
	            nextDay: '[morgen um] LT [Uhr]',
	            nextWeek: 'dddd [um] LT [Uhr]',
	            lastDay: '[gestern um] LT [Uhr]',
	            lastWeek: '[letzten] dddd [um] LT [Uhr]'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : 'vor %s',
	            s : 'ein paar Sekunden',
	            m : processRelativeTime,
	            mm : '%d Minuten',
	            h : processRelativeTime,
	            hh : '%d Stunden',
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return de_at;

	}));

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Maldivian [dv]
	//! author : Jawish Hameed : https://github.com/jawish

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var months = [
	        'ޖެނުއަރީ',
	        'ފެބްރުއަރީ',
	        'މާރިޗު',
	        'އޭޕްރީލު',
	        'މޭ',
	        'ޖޫން',
	        'ޖުލައި',
	        'އޯގަސްޓު',
	        'ސެޕްޓެމްބަރު',
	        'އޮކްޓޯބަރު',
	        'ނޮވެމްބަރު',
	        'ޑިސެމްބަރު'
	    ], weekdays = [
	        'އާދިއްތަ',
	        'ހޯމަ',
	        'އަންގާރަ',
	        'ބުދަ',
	        'ބުރާސްފަތި',
	        'ހުކުރު',
	        'ހޮނިހިރު'
	    ];

	    var dv = moment.defineLocale('dv', {
	        months : months,
	        monthsShort : months,
	        weekdays : weekdays,
	        weekdaysShort : weekdays,
	        weekdaysMin : 'އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި'.split('_'),
	        longDateFormat : {

	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'D/M/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /މކ|މފ/,
	        isPM : function (input) {
	            return 'މފ' === input;
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'މކ';
	            } else {
	                return 'މފ';
	            }
	        },
	        calendar : {
	            sameDay : '[މިއަދު] LT',
	            nextDay : '[މާދަމާ] LT',
	            nextWeek : 'dddd LT',
	            lastDay : '[އިއްޔެ] LT',
	            lastWeek : '[ފާއިތުވި] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ތެރޭގައި %s',
	            past : 'ކުރިން %s',
	            s : 'ސިކުންތުކޮޅެއް',
	            m : 'މިނިޓެއް',
	            mm : 'މިނިޓު %d',
	            h : 'ގަޑިއިރެއް',
	            hh : 'ގަޑިއިރު %d',
	            d : 'ދުވަހެއް',
	            dd : 'ދުވަސް %d',
	            M : 'މަހެއް',
	            MM : 'މަސް %d',
	            y : 'އަހަރެއް',
	            yy : 'އަހަރު %d'
	        },
	        preparse: function (string) {
	            return string.replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/,/g, '،');
	        },
	        week : {
	            dow : 7,  // Sunday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return dv;

	}));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Greek [el]
	//! author : Aggelos Karalias : https://github.com/mehiel

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';

	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }


	    var el = moment.defineLocale('el', {
	        monthsNominativeEl : 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
	        monthsGenitiveEl : 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
	        months : function (momentToFormat, format) {
	            if (/D/.test(format.substring(0, format.indexOf('MMMM')))) { // if there is a day number before 'MMMM'
	                return this._monthsGenitiveEl[momentToFormat.month()];
	            } else {
	                return this._monthsNominativeEl[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
	        weekdays : 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
	        weekdaysShort : 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
	        weekdaysMin : 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'μμ' : 'ΜΜ';
	            } else {
	                return isLower ? 'πμ' : 'ΠΜ';
	            }
	        },
	        isPM : function (input) {
	            return ((input + '').toLowerCase()[0] === 'μ');
	        },
	        meridiemParse : /[ΠΜ]\.?Μ?\.?/i,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendarEl : {
	            sameDay : '[Σήμερα {}] LT',
	            nextDay : '[Αύριο {}] LT',
	            nextWeek : 'dddd [{}] LT',
	            lastDay : '[Χθες {}] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 6:
	                        return '[το προηγούμενο] dddd [{}] LT';
	                    default:
	                        return '[την προηγούμενη] dddd [{}] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        calendar : function (key, mom) {
	            var output = this._calendarEl[key],
	                hours = mom && mom.hours();
	            if (isFunction(output)) {
	                output = output.apply(mom);
	            }
	            return output.replace('{}', (hours % 12 === 1 ? 'στη' : 'στις'));
	        },
	        relativeTime : {
	            future : 'σε %s',
	            past : '%s πριν',
	            s : 'λίγα δευτερόλεπτα',
	            m : 'ένα λεπτό',
	            mm : '%d λεπτά',
	            h : 'μία ώρα',
	            hh : '%d ώρες',
	            d : 'μία μέρα',
	            dd : '%d μέρες',
	            M : 'ένας μήνας',
	            MM : '%d μήνες',
	            y : 'ένας χρόνος',
	            yy : '%d χρόνια'
	        },
	        ordinalParse: /\d{1,2}η/,
	        ordinal: '%dη',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4st is the first week of the year.
	        }
	    });

	    return el;

	}));

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Australia) [en-au]

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var en_au = moment.defineLocale('en-au', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_au;

	}));

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Canada) [en-ca]
	//! author : Jonathan Abourbih : https://github.com/jonbca

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var en_ca = moment.defineLocale('en-ca', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'YYYY-MM-DD',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY h:mm A',
	            LLLL : 'dddd, MMMM D, YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    return en_ca;

	}));

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (United Kingdom) [en-gb]
	//! author : Chris Gedrim : https://github.com/chrisgedrim

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var en_gb = moment.defineLocale('en-gb', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_gb;

	}));

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (Ireland) [en-ie]
	//! author : Chris Cartlidge : https://github.com/chriscartlidge

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var en_ie = moment.defineLocale('en-ie', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_ie;

	}));

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : English (New Zealand) [en-nz]

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var en_nz = moment.defineLocale('en-nz', {
	        months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
	        weekdays : 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
	        weekdaysShort : 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
	        weekdaysMin : 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Today at] LT',
	            nextDay : '[Tomorrow at] LT',
	            nextWeek : 'dddd [at] LT',
	            lastDay : '[Yesterday at] LT',
	            lastWeek : '[Last] dddd [at] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'in %s',
	            past : '%s ago',
	            s : 'a few seconds',
	            m : 'a minute',
	            mm : '%d minutes',
	            h : 'an hour',
	            hh : '%d hours',
	            d : 'a day',
	            dd : '%d days',
	            M : 'a month',
	            MM : '%d months',
	            y : 'a year',
	            yy : '%d years'
	        },
	        ordinalParse: /\d{1,2}(st|nd|rd|th)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return en_nz;

	}));

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Esperanto [eo]
	//! author : Colin Dean : https://github.com/colindean
	//! komento: Mi estas malcerta se mi korekte traktis akuzativojn en tiu traduko.
	//!          Se ne, bonvolu korekti kaj avizi min por ke mi povas lerni!

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var eo = moment.defineLocale('eo', {
	        months : 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
	        weekdays : 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
	        weekdaysShort : 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D[-an de] MMMM, YYYY',
	            LLL : 'D[-an de] MMMM, YYYY HH:mm',
	            LLLL : 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
	        },
	        meridiemParse: /[ap]\.t\.m/i,
	        isPM: function (input) {
	            return input.charAt(0).toLowerCase() === 'p';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'p.t.m.' : 'P.T.M.';
	            } else {
	                return isLower ? 'a.t.m.' : 'A.T.M.';
	            }
	        },
	        calendar : {
	            sameDay : '[Hodiaŭ je] LT',
	            nextDay : '[Morgaŭ je] LT',
	            nextWeek : 'dddd [je] LT',
	            lastDay : '[Hieraŭ je] LT',
	            lastWeek : '[pasinta] dddd [je] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'je %s',
	            past : 'antaŭ %s',
	            s : 'sekundoj',
	            m : 'minuto',
	            mm : '%d minutoj',
	            h : 'horo',
	            hh : '%d horoj',
	            d : 'tago',//ne 'diurno', ĉar estas uzita por proksimumo
	            dd : '%d tagoj',
	            M : 'monato',
	            MM : '%d monatoj',
	            y : 'jaro',
	            yy : '%d jaroj'
	        },
	        ordinalParse: /\d{1,2}a/,
	        ordinal : '%da',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return eo;

	}));

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish [es]
	//! author : Julio Napurí : https://github.com/julionc

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

	    var es = moment.defineLocale('es', {
	        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY H:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastDay : function () {
	                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'hace %s',
	            s : 'unos segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'una hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un año',
	            yy : '%d años'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return es;

	}));

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Spanish (Dominican Republic) [es-do]

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var monthsShortDot = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'),
	        monthsShort = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');

	    var es_do = moment.defineLocale('es-do', {
	        months : 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShort[m.month()];
	            } else {
	                return monthsShortDot[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
	        weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
	        weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY h:mm A',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastDay : function () {
	                return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            lastWeek : function () {
	                return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'en %s',
	            past : 'hace %s',
	            s : 'unos segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'una hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un año',
	            yy : '%d años'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return es_do;

	}));

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Estonian [et]
	//! author : Henry Kehlmann : https://github.com/madhenry
	//! improvements : Illimar Tambek : https://github.com/ragulka

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's' : ['mõne sekundi', 'mõni sekund', 'paar sekundit'],
	            'm' : ['ühe minuti', 'üks minut'],
	            'mm': [number + ' minuti', number + ' minutit'],
	            'h' : ['ühe tunni', 'tund aega', 'üks tund'],
	            'hh': [number + ' tunni', number + ' tundi'],
	            'd' : ['ühe päeva', 'üks päev'],
	            'M' : ['kuu aja', 'kuu aega', 'üks kuu'],
	            'MM': [number + ' kuu', number + ' kuud'],
	            'y' : ['ühe aasta', 'aasta', 'üks aasta'],
	            'yy': [number + ' aasta', number + ' aastat']
	        };
	        if (withoutSuffix) {
	            return format[key][2] ? format[key][2] : format[key][1];
	        }
	        return isFuture ? format[key][0] : format[key][1];
	    }

	    var et = moment.defineLocale('et', {
	        months        : 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
	        monthsShort   : 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
	        weekdays      : 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
	        weekdaysShort : 'P_E_T_K_N_R_L'.split('_'),
	        weekdaysMin   : 'P_E_T_K_N_R_L'.split('_'),
	        longDateFormat : {
	            LT   : 'H:mm',
	            LTS : 'H:mm:ss',
	            L    : 'DD.MM.YYYY',
	            LL   : 'D. MMMM YYYY',
	            LLL  : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[Täna,] LT',
	            nextDay  : '[Homme,] LT',
	            nextWeek : '[Järgmine] dddd LT',
	            lastDay  : '[Eile,] LT',
	            lastWeek : '[Eelmine] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s pärast',
	            past   : '%s tagasi',
	            s      : processRelativeTime,
	            m      : processRelativeTime,
	            mm     : processRelativeTime,
	            h      : processRelativeTime,
	            hh     : processRelativeTime,
	            d      : processRelativeTime,
	            dd     : '%d päeva',
	            M      : processRelativeTime,
	            MM     : processRelativeTime,
	            y      : processRelativeTime,
	            yy     : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return et;

	}));

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Basque [eu]
	//! author : Eneko Illarramendi : https://github.com/eillarra

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var eu = moment.defineLocale('eu', {
	        months : 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
	        monthsShort : 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
	        weekdaysShort : 'ig._al._ar._az._og._ol._lr.'.split('_'),
	        weekdaysMin : 'ig_al_ar_az_og_ol_lr'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY[ko] MMMM[ren] D[a]',
	            LLL : 'YYYY[ko] MMMM[ren] D[a] HH:mm',
	            LLLL : 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
	            l : 'YYYY-M-D',
	            ll : 'YYYY[ko] MMM D[a]',
	            lll : 'YYYY[ko] MMM D[a] HH:mm',
	            llll : 'ddd, YYYY[ko] MMM D[a] HH:mm'
	        },
	        calendar : {
	            sameDay : '[gaur] LT[etan]',
	            nextDay : '[bihar] LT[etan]',
	            nextWeek : 'dddd LT[etan]',
	            lastDay : '[atzo] LT[etan]',
	            lastWeek : '[aurreko] dddd LT[etan]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s barru',
	            past : 'duela %s',
	            s : 'segundo batzuk',
	            m : 'minutu bat',
	            mm : '%d minutu',
	            h : 'ordu bat',
	            hh : '%d ordu',
	            d : 'egun bat',
	            dd : '%d egun',
	            M : 'hilabete bat',
	            MM : '%d hilabete',
	            y : 'urte bat',
	            yy : '%d urte'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return eu;

	}));

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Persian [fa]
	//! author : Ebrahim Byagowi : https://github.com/ebraminio

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '۱',
	        '2': '۲',
	        '3': '۳',
	        '4': '۴',
	        '5': '۵',
	        '6': '۶',
	        '7': '۷',
	        '8': '۸',
	        '9': '۹',
	        '0': '۰'
	    }, numberMap = {
	        '۱': '1',
	        '۲': '2',
	        '۳': '3',
	        '۴': '4',
	        '۵': '5',
	        '۶': '6',
	        '۷': '7',
	        '۸': '8',
	        '۹': '9',
	        '۰': '0'
	    };

	    var fa = moment.defineLocale('fa', {
	        months : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        monthsShort : 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
	        weekdays : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysShort : 'یک\u200cشنبه_دوشنبه_سه\u200cشنبه_چهارشنبه_پنج\u200cشنبه_جمعه_شنبه'.split('_'),
	        weekdaysMin : 'ی_د_س_چ_پ_ج_ش'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /قبل از ظهر|بعد از ظهر/,
	        isPM: function (input) {
	            return /بعد از ظهر/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'قبل از ظهر';
	            } else {
	                return 'بعد از ظهر';
	            }
	        },
	        calendar : {
	            sameDay : '[امروز ساعت] LT',
	            nextDay : '[فردا ساعت] LT',
	            nextWeek : 'dddd [ساعت] LT',
	            lastDay : '[دیروز ساعت] LT',
	            lastWeek : 'dddd [پیش] [ساعت] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'در %s',
	            past : '%s پیش',
	            s : 'چندین ثانیه',
	            m : 'یک دقیقه',
	            mm : '%d دقیقه',
	            h : 'یک ساعت',
	            hh : '%d ساعت',
	            d : 'یک روز',
	            dd : '%d روز',
	            M : 'یک ماه',
	            MM : '%d ماه',
	            y : 'یک سال',
	            yy : '%d سال'
	        },
	        preparse: function (string) {
	            return string.replace(/[۰-۹]/g, function (match) {
	                return numberMap[match];
	            }).replace(/،/g, ',');
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            }).replace(/,/g, '،');
	        },
	        ordinalParse: /\d{1,2}م/,
	        ordinal : '%dم',
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return fa;

	}));

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Finnish [fi]
	//! author : Tarmo Aidantausta : https://github.com/bleadof

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '),
	        numbersFuture = [
	            'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
	            numbersPast[7], numbersPast[8], numbersPast[9]
	        ];
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = '';
	        switch (key) {
	            case 's':
	                return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
	            case 'm':
	                return isFuture ? 'minuutin' : 'minuutti';
	            case 'mm':
	                result = isFuture ? 'minuutin' : 'minuuttia';
	                break;
	            case 'h':
	                return isFuture ? 'tunnin' : 'tunti';
	            case 'hh':
	                result = isFuture ? 'tunnin' : 'tuntia';
	                break;
	            case 'd':
	                return isFuture ? 'päivän' : 'päivä';
	            case 'dd':
	                result = isFuture ? 'päivän' : 'päivää';
	                break;
	            case 'M':
	                return isFuture ? 'kuukauden' : 'kuukausi';
	            case 'MM':
	                result = isFuture ? 'kuukauden' : 'kuukautta';
	                break;
	            case 'y':
	                return isFuture ? 'vuoden' : 'vuosi';
	            case 'yy':
	                result = isFuture ? 'vuoden' : 'vuotta';
	                break;
	        }
	        result = verbalNumber(number, isFuture) + ' ' + result;
	        return result;
	    }
	    function verbalNumber(number, isFuture) {
	        return number < 10 ? (isFuture ? numbersFuture[number] : numbersPast[number]) : number;
	    }

	    var fi = moment.defineLocale('fi', {
	        months : 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
	        monthsShort : 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
	        weekdays : 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
	        weekdaysShort : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        weekdaysMin : 'su_ma_ti_ke_to_pe_la'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'Do MMMM[ta] YYYY',
	            LLL : 'Do MMMM[ta] YYYY, [klo] HH.mm',
	            LLLL : 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
	            l : 'D.M.YYYY',
	            ll : 'Do MMM YYYY',
	            lll : 'Do MMM YYYY, [klo] HH.mm',
	            llll : 'ddd, Do MMM YYYY, [klo] HH.mm'
	        },
	        calendar : {
	            sameDay : '[tänään] [klo] LT',
	            nextDay : '[huomenna] [klo] LT',
	            nextWeek : 'dddd [klo] LT',
	            lastDay : '[eilen] [klo] LT',
	            lastWeek : '[viime] dddd[na] [klo] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s päästä',
	            past : '%s sitten',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fi;

	}));

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Faroese [fo]
	//! author : Ragnar Johannesen : https://github.com/ragnar123

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var fo = moment.defineLocale('fo', {
	        months : 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
	        weekdaysShort : 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
	        weekdaysMin : 'su_má_tý_mi_hó_fr_le'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D. MMMM, YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Í dag kl.] LT',
	            nextDay : '[Í morgin kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[Í gjár kl.] LT',
	            lastWeek : '[síðstu] dddd [kl] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'um %s',
	            past : '%s síðani',
	            s : 'fá sekund',
	            m : 'ein minutt',
	            mm : '%d minuttir',
	            h : 'ein tími',
	            hh : '%d tímar',
	            d : 'ein dagur',
	            dd : '%d dagar',
	            M : 'ein mánaði',
	            MM : '%d mánaðir',
	            y : 'eitt ár',
	            yy : '%d ár'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fo;

	}));

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French [fr]
	//! author : John Fischer : https://github.com/jfroffice

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var fr = moment.defineLocale('fr', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : '');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fr;

	}));

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French (Canada) [fr-ca]
	//! author : Jonathan Abourbih : https://github.com/jonbca

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var fr_ca = moment.defineLocale('fr-ca', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : 'e');
	        }
	    });

	    return fr_ca;

	}));

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : French (Switzerland) [fr-ch]
	//! author : Gaspard Bucher : https://github.com/gaspard

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var fr_ch = moment.defineLocale('fr-ch', {
	        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
	        monthsShort : 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
	        weekdaysShort : 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
	        weekdaysMin : 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Aujourd\'hui à] LT',
	            nextDay: '[Demain à] LT',
	            nextWeek: 'dddd [à] LT',
	            lastDay: '[Hier à] LT',
	            lastWeek: 'dddd [dernier à] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dans %s',
	            past : 'il y a %s',
	            s : 'quelques secondes',
	            m : 'une minute',
	            mm : '%d minutes',
	            h : 'une heure',
	            hh : '%d heures',
	            d : 'un jour',
	            dd : '%d jours',
	            M : 'un mois',
	            MM : '%d mois',
	            y : 'un an',
	            yy : '%d ans'
	        },
	        ordinalParse: /\d{1,2}(er|e)/,
	        ordinal : function (number) {
	            return number + (number === 1 ? 'er' : 'e');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fr_ch;

	}));

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Frisian [fy]
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var monthsShortWithDots = 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_');

	    var fy = moment.defineLocale('fy', {
	        months : 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
	        weekdaysShort : 'si._mo._ti._wo._to._fr._so.'.split('_'),
	        weekdaysMin : 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[hjoed om] LT',
	            nextDay: '[moarn om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[juster om] LT',
	            lastWeek: '[ôfrûne] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'oer %s',
	            past : '%s lyn',
	            s : 'in pear sekonden',
	            m : 'ien minút',
	            mm : '%d minuten',
	            h : 'ien oere',
	            hh : '%d oeren',
	            d : 'ien dei',
	            dd : '%d dagen',
	            M : 'ien moanne',
	            MM : '%d moannen',
	            y : 'ien jier',
	            yy : '%d jierren'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return fy;

	}));

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Scottish Gaelic [gd]
	//! author : Jon Ashdown : https://github.com/jonashdown

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var months = [
	        'Am Faoilleach', 'An Gearran', 'Am Màrt', 'An Giblean', 'An Cèitean', 'An t-Ògmhios', 'An t-Iuchar', 'An Lùnastal', 'An t-Sultain', 'An Dàmhair', 'An t-Samhain', 'An Dùbhlachd'
	    ];

	    var monthsShort = ['Faoi', 'Gear', 'Màrt', 'Gibl', 'Cèit', 'Ògmh', 'Iuch', 'Lùn', 'Sult', 'Dàmh', 'Samh', 'Dùbh'];

	    var weekdays = ['Didòmhnaich', 'Diluain', 'Dimàirt', 'Diciadain', 'Diardaoin', 'Dihaoine', 'Disathairne'];

	    var weekdaysShort = ['Did', 'Dil', 'Dim', 'Dic', 'Dia', 'Dih', 'Dis'];

	    var weekdaysMin = ['Dò', 'Lu', 'Mà', 'Ci', 'Ar', 'Ha', 'Sa'];

	    var gd = moment.defineLocale('gd', {
	        months : months,
	        monthsShort : monthsShort,
	        monthsParseExact : true,
	        weekdays : weekdays,
	        weekdaysShort : weekdaysShort,
	        weekdaysMin : weekdaysMin,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[An-diugh aig] LT',
	            nextDay : '[A-màireach aig] LT',
	            nextWeek : 'dddd [aig] LT',
	            lastDay : '[An-dè aig] LT',
	            lastWeek : 'dddd [seo chaidh] [aig] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ann an %s',
	            past : 'bho chionn %s',
	            s : 'beagan diogan',
	            m : 'mionaid',
	            mm : '%d mionaidean',
	            h : 'uair',
	            hh : '%d uairean',
	            d : 'latha',
	            dd : '%d latha',
	            M : 'mìos',
	            MM : '%d mìosan',
	            y : 'bliadhna',
	            yy : '%d bliadhna'
	        },
	        ordinalParse : /\d{1,2}(d|na|mh)/,
	        ordinal : function (number) {
	            var output = number === 1 ? 'd' : number % 10 === 2 ? 'na' : 'mh';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return gd;

	}));

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Galician [gl]
	//! author : Juan G. Hurtado : https://github.com/juanghurtado

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var gl = moment.defineLocale('gl', {
	        months : 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
	        monthsShort : 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
	        weekdaysShort : 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : function () {
	                return '[hoxe ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextDay : function () {
	                return '[mañá ' + ((this.hours() !== 1) ? 'ás' : 'á') + '] LT';
	            },
	            nextWeek : function () {
	                return 'dddd [' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            lastDay : function () {
	                return '[onte ' + ((this.hours() !== 1) ? 'á' : 'a') + '] LT';
	            },
	            lastWeek : function () {
	                return '[o] dddd [pasado ' + ((this.hours() !== 1) ? 'ás' : 'a') + '] LT';
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (str) {
	                if (str === 'uns segundos') {
	                    return 'nuns segundos';
	                }
	                return 'en ' + str;
	            },
	            past : 'hai %s',
	            s : 'uns segundos',
	            m : 'un minuto',
	            mm : '%d minutos',
	            h : 'unha hora',
	            hh : '%d horas',
	            d : 'un día',
	            dd : '%d días',
	            M : 'un mes',
	            MM : '%d meses',
	            y : 'un ano',
	            yy : '%d anos'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return gl;

	}));

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hebrew [he]
	//! author : Tomer Cohen : https://github.com/tomer
	//! author : Moshe Simantov : https://github.com/DevelopmentIL
	//! author : Tal Ater : https://github.com/TalAter

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var he = moment.defineLocale('he', {
	        months : 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
	        monthsShort : 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
	        weekdays : 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
	        weekdaysShort : 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
	        weekdaysMin : 'א_ב_ג_ד_ה_ו_ש'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [ב]MMMM YYYY',
	            LLL : 'D [ב]MMMM YYYY HH:mm',
	            LLLL : 'dddd, D [ב]MMMM YYYY HH:mm',
	            l : 'D/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[היום ב־]LT',
	            nextDay : '[מחר ב־]LT',
	            nextWeek : 'dddd [בשעה] LT',
	            lastDay : '[אתמול ב־]LT',
	            lastWeek : '[ביום] dddd [האחרון בשעה] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'בעוד %s',
	            past : 'לפני %s',
	            s : 'מספר שניות',
	            m : 'דקה',
	            mm : '%d דקות',
	            h : 'שעה',
	            hh : function (number) {
	                if (number === 2) {
	                    return 'שעתיים';
	                }
	                return number + ' שעות';
	            },
	            d : 'יום',
	            dd : function (number) {
	                if (number === 2) {
	                    return 'יומיים';
	                }
	                return number + ' ימים';
	            },
	            M : 'חודש',
	            MM : function (number) {
	                if (number === 2) {
	                    return 'חודשיים';
	                }
	                return number + ' חודשים';
	            },
	            y : 'שנה',
	            yy : function (number) {
	                if (number === 2) {
	                    return 'שנתיים';
	                } else if (number % 10 === 0 && number !== 10) {
	                    return number + ' שנה';
	                }
	                return number + ' שנים';
	            }
	        },
	        meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
	        isPM : function (input) {
	            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 5) {
	                return 'לפנות בוקר';
	            } else if (hour < 10) {
	                return 'בבוקר';
	            } else if (hour < 12) {
	                return isLower ? 'לפנה"צ' : 'לפני הצהריים';
	            } else if (hour < 18) {
	                return isLower ? 'אחה"צ' : 'אחרי הצהריים';
	            } else {
	                return 'בערב';
	            }
	        }
	    });

	    return he;

	}));

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hindi [hi]
	//! author : Mayank Singhal : https://github.com/mayanksinghal

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    var hi = moment.defineLocale('hi', {
	        months : 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
	        monthsShort : 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm बजे',
	            LTS : 'A h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm बजे',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm बजे'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[कल] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[कल] LT',
	            lastWeek : '[पिछले] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s में',
	            past : '%s पहले',
	            s : 'कुछ ही क्षण',
	            m : 'एक मिनट',
	            mm : '%d मिनट',
	            h : 'एक घंटा',
	            hh : '%d घंटे',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महीने',
	            MM : '%d महीने',
	            y : 'एक वर्ष',
	            yy : '%d वर्ष'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Hindi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
	        meridiemParse: /रात|सुबह|दोपहर|शाम/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सुबह') {
	                return hour;
	            } else if (meridiem === 'दोपहर') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'शाम') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात';
	            } else if (hour < 10) {
	                return 'सुबह';
	            } else if (hour < 17) {
	                return 'दोपहर';
	            } else if (hour < 20) {
	                return 'शाम';
	            } else {
	                return 'रात';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hi;

	}));

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Croatian [hr]
	//! author : Bojan Marković : https://github.com/bmarkovic

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'jedna minuta' : 'jedne minute';
	            case 'mm':
	                if (number === 1) {
	                    result += 'minuta';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'minute';
	                } else {
	                    result += 'minuta';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'jedan sat' : 'jednog sata';
	            case 'hh':
	                if (number === 1) {
	                    result += 'sat';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'sata';
	                } else {
	                    result += 'sati';
	                }
	                return result;
	            case 'dd':
	                if (number === 1) {
	                    result += 'dan';
	                } else {
	                    result += 'dana';
	                }
	                return result;
	            case 'MM':
	                if (number === 1) {
	                    result += 'mjesec';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'mjeseca';
	                } else {
	                    result += 'mjeseci';
	                }
	                return result;
	            case 'yy':
	                if (number === 1) {
	                    result += 'godina';
	                } else if (number === 2 || number === 3 || number === 4) {
	                    result += 'godine';
	                } else {
	                    result += 'godina';
	                }
	                return result;
	        }
	    }

	    var hr = moment.defineLocale('hr', {
	        months : {
	            format: 'siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca'.split('_'),
	            standalone: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_')
	        },
	        monthsShort : 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort : 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin : 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danas u] LT',
	            nextDay  : '[sutra u] LT',
	            nextWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[jučer u] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                        return '[prošlu] dddd [u] LT';
	                    case 6:
	                        return '[prošle] [subote] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prošli] dddd [u] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'par sekundi',
	            m      : translate,
	            mm     : translate,
	            h      : translate,
	            hh     : translate,
	            d      : 'dan',
	            dd     : translate,
	            M      : 'mjesec',
	            MM     : translate,
	            y      : 'godinu',
	            yy     : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hr;

	}));

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Hungarian [hu]
	//! author : Adam Brunner : https://github.com/adambrunner

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
	    function translate(number, withoutSuffix, key, isFuture) {
	        var num = number,
	            suffix;
	        switch (key) {
	            case 's':
	                return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
	            case 'm':
	                return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'mm':
	                return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
	            case 'h':
	                return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'hh':
	                return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
	            case 'd':
	                return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'dd':
	                return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
	            case 'M':
	                return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'MM':
	                return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
	            case 'y':
	                return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
	            case 'yy':
	                return num + (isFuture || withoutSuffix ? ' év' : ' éve');
	        }
	        return '';
	    }
	    function week(isFuture) {
	        return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[this.day()] + '] LT[-kor]';
	    }

	    var hu = moment.defineLocale('hu', {
	        months : 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
	        monthsShort : 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
	        weekdays : 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
	        weekdaysShort : 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
	        weekdaysMin : 'v_h_k_sze_cs_p_szo'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'YYYY.MM.DD.',
	            LL : 'YYYY. MMMM D.',
	            LLL : 'YYYY. MMMM D. H:mm',
	            LLLL : 'YYYY. MMMM D., dddd H:mm'
	        },
	        meridiemParse: /de|du/i,
	        isPM: function (input) {
	            return input.charAt(1).toLowerCase() === 'u';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower === true ? 'de' : 'DE';
	            } else {
	                return isLower === true ? 'du' : 'DU';
	            }
	        },
	        calendar : {
	            sameDay : '[ma] LT[-kor]',
	            nextDay : '[holnap] LT[-kor]',
	            nextWeek : function () {
	                return week.call(this, true);
	            },
	            lastDay : '[tegnap] LT[-kor]',
	            lastWeek : function () {
	                return week.call(this, false);
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s múlva',
	            past : '%s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hu;

	}));

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Armenian [hy-am]
	//! author : Armendarabyan : https://github.com/armendarabyan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var hy_am = moment.defineLocale('hy-am', {
	        months : {
	            format: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_'),
	            standalone: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_')
	        },
	        monthsShort : 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_'),
	        weekdays : 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_'),
	        weekdaysShort : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        weekdaysMin : 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY թ.',
	            LLL : 'D MMMM YYYY թ., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY թ., HH:mm'
	        },
	        calendar : {
	            sameDay: '[այսօր] LT',
	            nextDay: '[վաղը] LT',
	            lastDay: '[երեկ] LT',
	            nextWeek: function () {
	                return 'dddd [օրը ժամը] LT';
	            },
	            lastWeek: function () {
	                return '[անցած] dddd [օրը ժամը] LT';
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s հետո',
	            past : '%s առաջ',
	            s : 'մի քանի վայրկյան',
	            m : 'րոպե',
	            mm : '%d րոպե',
	            h : 'ժամ',
	            hh : '%d ժամ',
	            d : 'օր',
	            dd : '%d օր',
	            M : 'ամիս',
	            MM : '%d ամիս',
	            y : 'տարի',
	            yy : '%d տարի'
	        },
	        meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
	        isPM: function (input) {
	            return /^(ցերեկվա|երեկոյան)$/.test(input);
	        },
	        meridiem : function (hour) {
	            if (hour < 4) {
	                return 'գիշերվա';
	            } else if (hour < 12) {
	                return 'առավոտվա';
	            } else if (hour < 17) {
	                return 'ցերեկվա';
	            } else {
	                return 'երեկոյան';
	            }
	        },
	        ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'DDD':
	                case 'w':
	                case 'W':
	                case 'DDDo':
	                    if (number === 1) {
	                        return number + '-ին';
	                    }
	                    return number + '-րդ';
	                default:
	                    return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return hy_am;

	}));

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Indonesian [id]
	//! author : Mohammad Satrio Utomo : https://github.com/tyok
	//! reference: http://id.wikisource.org/wiki/Pedoman_Umum_Ejaan_Bahasa_Indonesia_yang_Disempurnakan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var id = moment.defineLocale('id', {
	        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
	        weekdaysShort : 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
	        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|siang|sore|malam/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'siang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sore' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'siang';
	            } else if (hours < 19) {
	                return 'sore';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Besok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kemarin pukul] LT',
	            lastWeek : 'dddd [lalu pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lalu',
	            s : 'beberapa detik',
	            m : 'semenit',
	            mm : '%d menit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return id;

	}));

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Icelandic [is]
	//! author : Hinrik Örn Sigurðsson : https://github.com/hinrik

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function plural(n) {
	        if (n % 100 === 11) {
	            return true;
	        } else if (n % 10 === 1) {
	            return false;
	        }
	        return true;
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
	            case 'm':
	                return withoutSuffix ? 'mínúta' : 'mínútu';
	            case 'mm':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'mínútur' : 'mínútum');
	                } else if (withoutSuffix) {
	                    return result + 'mínúta';
	                }
	                return result + 'mínútu';
	            case 'hh':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'klukkustundir' : 'klukkustundum');
	                }
	                return result + 'klukkustund';
	            case 'd':
	                if (withoutSuffix) {
	                    return 'dagur';
	                }
	                return isFuture ? 'dag' : 'degi';
	            case 'dd':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'dagar';
	                    }
	                    return result + (isFuture ? 'daga' : 'dögum');
	                } else if (withoutSuffix) {
	                    return result + 'dagur';
	                }
	                return result + (isFuture ? 'dag' : 'degi');
	            case 'M':
	                if (withoutSuffix) {
	                    return 'mánuður';
	                }
	                return isFuture ? 'mánuð' : 'mánuði';
	            case 'MM':
	                if (plural(number)) {
	                    if (withoutSuffix) {
	                        return result + 'mánuðir';
	                    }
	                    return result + (isFuture ? 'mánuði' : 'mánuðum');
	                } else if (withoutSuffix) {
	                    return result + 'mánuður';
	                }
	                return result + (isFuture ? 'mánuð' : 'mánuði');
	            case 'y':
	                return withoutSuffix || isFuture ? 'ár' : 'ári';
	            case 'yy':
	                if (plural(number)) {
	                    return result + (withoutSuffix || isFuture ? 'ár' : 'árum');
	                }
	                return result + (withoutSuffix || isFuture ? 'ár' : 'ári');
	        }
	    }

	    var is = moment.defineLocale('is', {
	        months : 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
	        weekdays : 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
	        weekdaysShort : 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
	        weekdaysMin : 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] H:mm',
	            LLLL : 'dddd, D. MMMM YYYY [kl.] H:mm'
	        },
	        calendar : {
	            sameDay : '[í dag kl.] LT',
	            nextDay : '[á morgun kl.] LT',
	            nextWeek : 'dddd [kl.] LT',
	            lastDay : '[í gær kl.] LT',
	            lastWeek : '[síðasta] dddd [kl.] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'eftir %s',
	            past : 'fyrir %s síðan',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : 'klukkustund',
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return is;

	}));

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Italian [it]
	//! author : Lorenzo : https://github.com/aliem
	//! author: Mattia Larentis: https://github.com/nostalgiaz

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var it = moment.defineLocale('it', {
	        months : 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
	        monthsShort : 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
	        weekdays : 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
	        weekdaysShort : 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
	        weekdaysMin : 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Oggi alle] LT',
	            nextDay: '[Domani alle] LT',
	            nextWeek: 'dddd [alle] LT',
	            lastDay: '[Ieri alle] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[la scorsa] dddd [alle] LT';
	                    default:
	                        return '[lo scorso] dddd [alle] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return ((/^[0-9].+$/).test(s) ? 'tra' : 'in') + ' ' + s;
	            },
	            past : '%s fa',
	            s : 'alcuni secondi',
	            m : 'un minuto',
	            mm : '%d minuti',
	            h : 'un\'ora',
	            hh : '%d ore',
	            d : 'un giorno',
	            dd : '%d giorni',
	            M : 'un mese',
	            MM : '%d mesi',
	            y : 'un anno',
	            yy : '%d anni'
	        },
	        ordinalParse : /\d{1,2}º/,
	        ordinal: '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return it;

	}));

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Japanese [ja]
	//! author : LI Long : https://github.com/baryon

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ja = moment.defineLocale('ja', {
	        months : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
	        weekdaysShort : '日_月_火_水_木_金_土'.split('_'),
	        weekdaysMin : '日_月_火_水_木_金_土'.split('_'),
	        longDateFormat : {
	            LT : 'Ah時m分',
	            LTS : 'Ah時m分s秒',
	            L : 'YYYY/MM/DD',
	            LL : 'YYYY年M月D日',
	            LLL : 'YYYY年M月D日Ah時m分',
	            LLLL : 'YYYY年M月D日Ah時m分 dddd'
	        },
	        meridiemParse: /午前|午後/i,
	        isPM : function (input) {
	            return input === '午後';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return '午前';
	            } else {
	                return '午後';
	            }
	        },
	        calendar : {
	            sameDay : '[今日] LT',
	            nextDay : '[明日] LT',
	            nextWeek : '[来週]dddd LT',
	            lastDay : '[昨日] LT',
	            lastWeek : '[前週]dddd LT',
	            sameElse : 'L'
	        },
	        ordinalParse : /\d{1,2}日/,
	        ordinal : function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                default:
	                    return number;
	            }
	        },
	        relativeTime : {
	            future : '%s後',
	            past : '%s前',
	            s : '数秒',
	            m : '1分',
	            mm : '%d分',
	            h : '1時間',
	            hh : '%d時間',
	            d : '1日',
	            dd : '%d日',
	            M : '1ヶ月',
	            MM : '%dヶ月',
	            y : '1年',
	            yy : '%d年'
	        }
	    });

	    return ja;

	}));

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Japanese [jv]
	//! author : Rony Lantip : https://github.com/lantip
	//! reference: http://jv.wikipedia.org/wiki/Basa_Jawa

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var jv = moment.defineLocale('jv', {
	        months : 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
	        monthsShort : 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
	        weekdays : 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
	        weekdaysShort : 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
	        weekdaysMin : 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /enjing|siyang|sonten|ndalu/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'enjing') {
	                return hour;
	            } else if (meridiem === 'siyang') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'sonten' || meridiem === 'ndalu') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'enjing';
	            } else if (hours < 15) {
	                return 'siyang';
	            } else if (hours < 19) {
	                return 'sonten';
	            } else {
	                return 'ndalu';
	            }
	        },
	        calendar : {
	            sameDay : '[Dinten puniko pukul] LT',
	            nextDay : '[Mbenjang pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kala wingi pukul] LT',
	            lastWeek : 'dddd [kepengker pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'wonten ing %s',
	            past : '%s ingkang kepengker',
	            s : 'sawetawis detik',
	            m : 'setunggal menit',
	            mm : '%d menit',
	            h : 'setunggal jam',
	            hh : '%d jam',
	            d : 'sedinten',
	            dd : '%d dinten',
	            M : 'sewulan',
	            MM : '%d wulan',
	            y : 'setaun',
	            yy : '%d taun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return jv;

	}));

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Georgian [ka]
	//! author : Irakli Janiashvili : https://github.com/irakli-janiashvili

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ka = moment.defineLocale('ka', {
	        months : {
	            standalone: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
	            format: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
	        },
	        monthsShort : 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
	        weekdays : {
	            standalone: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
	            format: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_'),
	            isFormat: /(წინა|შემდეგ)/
	        },
	        weekdaysShort : 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
	        weekdaysMin : 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[დღეს] LT[-ზე]',
	            nextDay : '[ხვალ] LT[-ზე]',
	            lastDay : '[გუშინ] LT[-ზე]',
	            nextWeek : '[შემდეგ] dddd LT[-ზე]',
	            lastWeek : '[წინა] dddd LT-ზე',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : function (s) {
	                return (/(წამი|წუთი|საათი|წელი)/).test(s) ?
	                    s.replace(/ი$/, 'ში') :
	                    s + 'ში';
	            },
	            past : function (s) {
	                if ((/(წამი|წუთი|საათი|დღე|თვე)/).test(s)) {
	                    return s.replace(/(ი|ე)$/, 'ის წინ');
	                }
	                if ((/წელი/).test(s)) {
	                    return s.replace(/წელი$/, 'წლის წინ');
	                }
	            },
	            s : 'რამდენიმე წამი',
	            m : 'წუთი',
	            mm : '%d წუთი',
	            h : 'საათი',
	            hh : '%d საათი',
	            d : 'დღე',
	            dd : '%d დღე',
	            M : 'თვე',
	            MM : '%d თვე',
	            y : 'წელი',
	            yy : '%d წელი'
	        },
	        ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
	        ordinal : function (number) {
	            if (number === 0) {
	                return number;
	            }
	            if (number === 1) {
	                return number + '-ლი';
	            }
	            if ((number < 20) || (number <= 100 && (number % 20 === 0)) || (number % 100 === 0)) {
	                return 'მე-' + number;
	            }
	            return number + '-ე';
	        },
	        week : {
	            dow : 1,
	            doy : 7
	        }
	    });

	    return ka;

	}));

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kazakh [kk]
	//! authors : Nurlan Rakhimzhanov : https://github.com/nurlan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var suffixes = {
	        0: '-ші',
	        1: '-ші',
	        2: '-ші',
	        3: '-ші',
	        4: '-ші',
	        5: '-ші',
	        6: '-шы',
	        7: '-ші',
	        8: '-ші',
	        9: '-шы',
	        10: '-шы',
	        20: '-шы',
	        30: '-шы',
	        40: '-шы',
	        50: '-ші',
	        60: '-шы',
	        70: '-ші',
	        80: '-ші',
	        90: '-шы',
	        100: '-ші'
	    };

	    var kk = moment.defineLocale('kk', {
	        months : 'қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан'.split('_'),
	        monthsShort : 'қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел'.split('_'),
	        weekdays : 'жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі'.split('_'),
	        weekdaysShort : 'жек_дүй_сей_сәр_бей_жұм_сен'.split('_'),
	        weekdaysMin : 'жк_дй_сй_ср_бй_жм_сн'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бүгін сағат] LT',
	            nextDay : '[Ертең сағат] LT',
	            nextWeek : 'dddd [сағат] LT',
	            lastDay : '[Кеше сағат] LT',
	            lastWeek : '[Өткен аптаның] dddd [сағат] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ішінде',
	            past : '%s бұрын',
	            s : 'бірнеше секунд',
	            m : 'бір минут',
	            mm : '%d минут',
	            h : 'бір сағат',
	            hh : '%d сағат',
	            d : 'бір күн',
	            dd : '%d күн',
	            M : 'бір ай',
	            MM : '%d ай',
	            y : 'бір жыл',
	            yy : '%d жыл'
	        },
	        ordinalParse: /\d{1,2}-(ші|шы)/,
	        ordinal : function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return kk;

	}));

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Cambodian [km]
	//! author : Kruy Vanna : https://github.com/kruyvanna

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var km = moment.defineLocale('km', {
	        months: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        monthsShort: 'មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
	        weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ថ្ងៃនេះ ម៉ោង] LT',
	            nextDay: '[ស្អែក ម៉ោង] LT',
	            nextWeek: 'dddd [ម៉ោង] LT',
	            lastDay: '[ម្សិលមិញ ម៉ោង] LT',
	            lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: '%sទៀត',
	            past: '%sមុន',
	            s: 'ប៉ុន្មានវិនាទី',
	            m: 'មួយនាទី',
	            mm: '%d នាទី',
	            h: 'មួយម៉ោង',
	            hh: '%d ម៉ោង',
	            d: 'មួយថ្ងៃ',
	            dd: '%d ថ្ងៃ',
	            M: 'មួយខែ',
	            MM: '%d ខែ',
	            y: 'មួយឆ្នាំ',
	            yy: '%d ឆ្នាំ'
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return km;

	}));

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Korean [ko]
	//!
	//! authors
	//!
	//! - Kyungwook, Park : https://github.com/kyungw00k
	//! - Jeeeyul Lee <jeeeyul@gmail.com>

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ko = moment.defineLocale('ko', {
	        months : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        monthsShort : '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
	        weekdays : '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
	        weekdaysShort : '일_월_화_수_목_금_토'.split('_'),
	        weekdaysMin : '일_월_화_수_목_금_토'.split('_'),
	        longDateFormat : {
	            LT : 'A h시 m분',
	            LTS : 'A h시 m분 s초',
	            L : 'YYYY.MM.DD',
	            LL : 'YYYY년 MMMM D일',
	            LLL : 'YYYY년 MMMM D일 A h시 m분',
	            LLLL : 'YYYY년 MMMM D일 dddd A h시 m분'
	        },
	        calendar : {
	            sameDay : '오늘 LT',
	            nextDay : '내일 LT',
	            nextWeek : 'dddd LT',
	            lastDay : '어제 LT',
	            lastWeek : '지난주 dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s 후',
	            past : '%s 전',
	            s : '몇 초',
	            ss : '%d초',
	            m : '일분',
	            mm : '%d분',
	            h : '한 시간',
	            hh : '%d시간',
	            d : '하루',
	            dd : '%d일',
	            M : '한 달',
	            MM : '%d달',
	            y : '일 년',
	            yy : '%d년'
	        },
	        ordinalParse : /\d{1,2}일/,
	        ordinal : '%d일',
	        meridiemParse : /오전|오후/,
	        isPM : function (token) {
	            return token === '오후';
	        },
	        meridiem : function (hour, minute, isUpper) {
	            return hour < 12 ? '오전' : '오후';
	        }
	    });

	    return ko;

	}));

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Kyrgyz [ky]
	//! author : Chyngyz Arystan uulu : https://github.com/chyngyz

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';



	    var suffixes = {
	        0: '-чү',
	        1: '-чи',
	        2: '-чи',
	        3: '-чү',
	        4: '-чү',
	        5: '-чи',
	        6: '-чы',
	        7: '-чи',
	        8: '-чи',
	        9: '-чу',
	        10: '-чу',
	        20: '-чы',
	        30: '-чу',
	        40: '-чы',
	        50: '-чү',
	        60: '-чы',
	        70: '-чи',
	        80: '-чи',
	        90: '-чу',
	        100: '-чү'
	    };

	    var ky = moment.defineLocale('ky', {
	        months : 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
	        monthsShort : 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays : 'Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби'.split('_'),
	        weekdaysShort : 'Жек_Дүй_Шей_Шар_Бей_Жум_Ише'.split('_'),
	        weekdaysMin : 'Жк_Дй_Шй_Шр_Бй_Жм_Иш'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бүгүн саат] LT',
	            nextDay : '[Эртең саат] LT',
	            nextWeek : 'dddd [саат] LT',
	            lastDay : '[Кече саат] LT',
	            lastWeek : '[Өткен аптанын] dddd [күнү] [саат] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ичинде',
	            past : '%s мурун',
	            s : 'бирнече секунд',
	            m : 'бир мүнөт',
	            mm : '%d мүнөт',
	            h : 'бир саат',
	            hh : '%d саат',
	            d : 'бир күн',
	            dd : '%d күн',
	            M : 'бир ай',
	            MM : '%d ай',
	            y : 'бир жыл',
	            yy : '%d жыл'
	        },
	        ordinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
	        ordinal : function (number) {
	            var a = number % 10,
	                b = number >= 100 ? 100 : null;
	            return number + (suffixes[number] || suffixes[a] || suffixes[b]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ky;

	}));

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Luxembourgish [lb]
	//! author : mweimerskirch : https://github.com/mweimerskirch, David Raison : https://github.com/kwisatz

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            'm': ['eng Minutt', 'enger Minutt'],
	            'h': ['eng Stonn', 'enger Stonn'],
	            'd': ['een Dag', 'engem Dag'],
	            'M': ['ee Mount', 'engem Mount'],
	            'y': ['ee Joer', 'engem Joer']
	        };
	        return withoutSuffix ? format[key][0] : format[key][1];
	    }
	    function processFutureTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'a ' + string;
	        }
	        return 'an ' + string;
	    }
	    function processPastTime(string) {
	        var number = string.substr(0, string.indexOf(' '));
	        if (eifelerRegelAppliesToNumber(number)) {
	            return 'viru ' + string;
	        }
	        return 'virun ' + string;
	    }
	    /**
	     * Returns true if the word before the given number loses the '-n' ending.
	     * e.g. 'an 10 Deeg' but 'a 5 Deeg'
	     *
	     * @param number {integer}
	     * @returns {boolean}
	     */
	    function eifelerRegelAppliesToNumber(number) {
	        number = parseInt(number, 10);
	        if (isNaN(number)) {
	            return false;
	        }
	        if (number < 0) {
	            // Negative Number --> always true
	            return true;
	        } else if (number < 10) {
	            // Only 1 digit
	            if (4 <= number && number <= 7) {
	                return true;
	            }
	            return false;
	        } else if (number < 100) {
	            // 2 digits
	            var lastDigit = number % 10, firstDigit = number / 10;
	            if (lastDigit === 0) {
	                return eifelerRegelAppliesToNumber(firstDigit);
	            }
	            return eifelerRegelAppliesToNumber(lastDigit);
	        } else if (number < 10000) {
	            // 3 or 4 digits --> recursively check first digit
	            while (number >= 10) {
	                number = number / 10;
	            }
	            return eifelerRegelAppliesToNumber(number);
	        } else {
	            // Anything larger than 4 digits: recursively check first n-3 digits
	            number = number / 1000;
	            return eifelerRegelAppliesToNumber(number);
	        }
	    }

	    var lb = moment.defineLocale('lb', {
	        months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
	        monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
	        monthsParseExact : true,
	        weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
	        weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
	        weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm [Auer]',
	            LTS: 'H:mm:ss [Auer]',
	            L: 'DD.MM.YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm [Auer]',
	            LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
	        },
	        calendar: {
	            sameDay: '[Haut um] LT',
	            sameElse: 'L',
	            nextDay: '[Muer um] LT',
	            nextWeek: 'dddd [um] LT',
	            lastDay: '[Gëschter um] LT',
	            lastWeek: function () {
	                // Different date string for 'Dënschdeg' (Tuesday) and 'Donneschdeg' (Thursday) due to phonological rule
	                switch (this.day()) {
	                    case 2:
	                    case 4:
	                        return '[Leschten] dddd [um] LT';
	                    default:
	                        return '[Leschte] dddd [um] LT';
	                }
	            }
	        },
	        relativeTime : {
	            future : processFutureTime,
	            past : processPastTime,
	            s : 'e puer Sekonnen',
	            m : processRelativeTime,
	            mm : '%d Minutten',
	            h : processRelativeTime,
	            hh : '%d Stonnen',
	            d : processRelativeTime,
	            dd : '%d Deeg',
	            M : processRelativeTime,
	            MM : '%d Méint',
	            y : processRelativeTime,
	            yy : '%d Joer'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal: '%d.',
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lb;

	}));

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lao [lo]
	//! author : Ryan Hart : https://github.com/ryanhart2

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var lo = moment.defineLocale('lo', {
	        months : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	        monthsShort : 'ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ'.split('_'),
	        weekdays : 'ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysShort : 'ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ'.split('_'),
	        weekdaysMin : 'ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'ວັນdddd D MMMM YYYY HH:mm'
	        },
	        meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
	        isPM: function (input) {
	            return input === 'ຕອນແລງ';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ຕອນເຊົ້າ';
	            } else {
	                return 'ຕອນແລງ';
	            }
	        },
	        calendar : {
	            sameDay : '[ມື້ນີ້ເວລາ] LT',
	            nextDay : '[ມື້ອື່ນເວລາ] LT',
	            nextWeek : '[ວັນ]dddd[ໜ້າເວລາ] LT',
	            lastDay : '[ມື້ວານນີ້ເວລາ] LT',
	            lastWeek : '[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'ອີກ %s',
	            past : '%sຜ່ານມາ',
	            s : 'ບໍ່ເທົ່າໃດວິນາທີ',
	            m : '1 ນາທີ',
	            mm : '%d ນາທີ',
	            h : '1 ຊົ່ວໂມງ',
	            hh : '%d ຊົ່ວໂມງ',
	            d : '1 ມື້',
	            dd : '%d ມື້',
	            M : '1 ເດືອນ',
	            MM : '%d ເດືອນ',
	            y : '1 ປີ',
	            yy : '%d ປີ'
	        },
	        ordinalParse: /(ທີ່)\d{1,2}/,
	        ordinal : function (number) {
	            return 'ທີ່' + number;
	        }
	    });

	    return lo;

	}));

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Lithuanian [lt]
	//! author : Mindaugas Mozūras : https://github.com/mmozuras

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var units = {
	        'm' : 'minutė_minutės_minutę',
	        'mm': 'minutės_minučių_minutes',
	        'h' : 'valanda_valandos_valandą',
	        'hh': 'valandos_valandų_valandas',
	        'd' : 'diena_dienos_dieną',
	        'dd': 'dienos_dienų_dienas',
	        'M' : 'mėnuo_mėnesio_mėnesį',
	        'MM': 'mėnesiai_mėnesių_mėnesius',
	        'y' : 'metai_metų_metus',
	        'yy': 'metai_metų_metus'
	    };
	    function translateSeconds(number, withoutSuffix, key, isFuture) {
	        if (withoutSuffix) {
	            return 'kelios sekundės';
	        } else {
	            return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
	        }
	    }
	    function translateSingular(number, withoutSuffix, key, isFuture) {
	        return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
	    }
	    function special(number) {
	        return number % 10 === 0 || (number > 10 && number < 20);
	    }
	    function forms(key) {
	        return units[key].split('_');
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        if (number === 1) {
	            return result + translateSingular(number, withoutSuffix, key[0], isFuture);
	        } else if (withoutSuffix) {
	            return result + (special(number) ? forms(key)[1] : forms(key)[0]);
	        } else {
	            if (isFuture) {
	                return result + forms(key)[1];
	            } else {
	                return result + (special(number) ? forms(key)[1] : forms(key)[2]);
	            }
	        }
	    }
	    var lt = moment.defineLocale('lt', {
	        months : {
	            format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
	            standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
	            isFormat: /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/
	        },
	        monthsShort : 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
	        weekdays : {
	            format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
	            standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
	            isFormat: /dddd HH:mm/
	        },
	        weekdaysShort : 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
	        weekdaysMin : 'S_P_A_T_K_Pn_Š'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY [m.] MMMM D [d.]',
	            LLL : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            LLLL : 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY [m.] MMMM D [d.]',
	            lll : 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
	            llll : 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
	        },
	        calendar : {
	            sameDay : '[Šiandien] LT',
	            nextDay : '[Rytoj] LT',
	            nextWeek : 'dddd LT',
	            lastDay : '[Vakar] LT',
	            lastWeek : '[Praėjusį] dddd LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'po %s',
	            past : 'prieš %s',
	            s : translateSeconds,
	            m : translateSingular,
	            mm : translate,
	            h : translateSingular,
	            hh : translate,
	            d : translateSingular,
	            dd : translate,
	            M : translateSingular,
	            MM : translate,
	            y : translateSingular,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}-oji/,
	        ordinal : function (number) {
	            return number + '-oji';
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lt;

	}));

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Latvian [lv]
	//! author : Kristaps Karlsons : https://github.com/skakri
	//! author : Jānis Elmeris : https://github.com/JanisE

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var units = {
	        'm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'mm': 'minūtes_minūtēm_minūte_minūtes'.split('_'),
	        'h': 'stundas_stundām_stunda_stundas'.split('_'),
	        'hh': 'stundas_stundām_stunda_stundas'.split('_'),
	        'd': 'dienas_dienām_diena_dienas'.split('_'),
	        'dd': 'dienas_dienām_diena_dienas'.split('_'),
	        'M': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'MM': 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
	        'y': 'gada_gadiem_gads_gadi'.split('_'),
	        'yy': 'gada_gadiem_gads_gadi'.split('_')
	    };
	    /**
	     * @param withoutSuffix boolean true = a length of time; false = before/after a period of time.
	     */
	    function format(forms, number, withoutSuffix) {
	        if (withoutSuffix) {
	            // E.g. "21 minūte", "3 minūtes".
	            return number % 10 === 1 && number % 100 !== 11 ? forms[2] : forms[3];
	        } else {
	            // E.g. "21 minūtes" as in "pēc 21 minūtes".
	            // E.g. "3 minūtēm" as in "pēc 3 minūtēm".
	            return number % 10 === 1 && number % 100 !== 11 ? forms[0] : forms[1];
	        }
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        return number + ' ' + format(units[key], number, withoutSuffix);
	    }
	    function relativeTimeWithSingular(number, withoutSuffix, key) {
	        return format(units[key], number, withoutSuffix);
	    }
	    function relativeSeconds(number, withoutSuffix) {
	        return withoutSuffix ? 'dažas sekundes' : 'dažām sekundēm';
	    }

	    var lv = moment.defineLocale('lv', {
	        months : 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
	        weekdaysShort : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysMin : 'Sv_P_O_T_C_Pk_S'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY.',
	            LL : 'YYYY. [gada] D. MMMM',
	            LLL : 'YYYY. [gada] D. MMMM, HH:mm',
	            LLLL : 'YYYY. [gada] D. MMMM, dddd, HH:mm'
	        },
	        calendar : {
	            sameDay : '[Šodien pulksten] LT',
	            nextDay : '[Rīt pulksten] LT',
	            nextWeek : 'dddd [pulksten] LT',
	            lastDay : '[Vakar pulksten] LT',
	            lastWeek : '[Pagājušā] dddd [pulksten] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'pēc %s',
	            past : 'pirms %s',
	            s : relativeSeconds,
	            m : relativeTimeWithSingular,
	            mm : relativeTimeWithPlural,
	            h : relativeTimeWithSingular,
	            hh : relativeTimeWithPlural,
	            d : relativeTimeWithSingular,
	            dd : relativeTimeWithPlural,
	            M : relativeTimeWithSingular,
	            MM : relativeTimeWithPlural,
	            y : relativeTimeWithSingular,
	            yy : relativeTimeWithPlural
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return lv;

	}));

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Montenegrin [me]
	//! author : Miodrag Nikač <miodrag@restartit.me> : https://github.com/miodragnikac

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jednog minuta'],
	            mm: ['minut', 'minuta', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mjesec', 'mjeseca', 'mjeseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var me = moment.defineLocale('me', {
	        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact : true,
	        weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sjutra u] LT',

	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedjelju] [u] LT';
	                    case 3:
	                        return '[u] [srijedu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[juče u] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[prošle] [nedjelje] [u] LT',
	                    '[prošlog] [ponedjeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srijede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'prije %s',
	            s      : 'nekoliko sekundi',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'dan',
	            dd     : translator.translate,
	            M      : 'mjesec',
	            MM     : translator.translate,
	            y      : 'godinu',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return me;

	}));

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Macedonian [mk]
	//! author : Borislav Mickov : https://github.com/B0k0

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var mk = moment.defineLocale('mk', {
	        months : 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
	        monthsShort : 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
	        weekdays : 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
	        weekdaysShort : 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
	        weekdaysMin : 'нe_пo_вт_ср_че_пе_сa'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'D.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay : '[Денес во] LT',
	            nextDay : '[Утре во] LT',
	            nextWeek : '[Во] dddd [во] LT',
	            lastDay : '[Вчера во] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 6:
	                        return '[Изминатата] dddd [во] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[Изминатиот] dddd [во] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'после %s',
	            past : 'пред %s',
	            s : 'неколку секунди',
	            m : 'минута',
	            mm : '%d минути',
	            h : 'час',
	            hh : '%d часа',
	            d : 'ден',
	            dd : '%d дена',
	            M : 'месец',
	            MM : '%d месеци',
	            y : 'година',
	            yy : '%d години'
	        },
	        ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
	        ordinal : function (number) {
	            var lastDigit = number % 10,
	                last2Digits = number % 100;
	            if (number === 0) {
	                return number + '-ев';
	            } else if (last2Digits === 0) {
	                return number + '-ен';
	            } else if (last2Digits > 10 && last2Digits < 20) {
	                return number + '-ти';
	            } else if (lastDigit === 1) {
	                return number + '-ви';
	            } else if (lastDigit === 2) {
	                return number + '-ри';
	            } else if (lastDigit === 7 || lastDigit === 8) {
	                return number + '-ми';
	            } else {
	                return number + '-ти';
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return mk;

	}));

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malayalam [ml]
	//! author : Floyd Pink : https://github.com/floydpink

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ml = moment.defineLocale('ml', {
	        months : 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
	        monthsShort : 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
	        weekdaysShort : 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
	        weekdaysMin : 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm -നു',
	            LTS : 'A h:mm:ss -നു',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm -നു',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm -നു'
	        },
	        calendar : {
	            sameDay : '[ഇന്ന്] LT',
	            nextDay : '[നാളെ] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[ഇന്നലെ] LT',
	            lastWeek : '[കഴിഞ്ഞ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s കഴിഞ്ഞ്',
	            past : '%s മുൻപ്',
	            s : 'അൽപ നിമിഷങ്ങൾ',
	            m : 'ഒരു മിനിറ്റ്',
	            mm : '%d മിനിറ്റ്',
	            h : 'ഒരു മണിക്കൂർ',
	            hh : '%d മണിക്കൂർ',
	            d : 'ഒരു ദിവസം',
	            dd : '%d ദിവസം',
	            M : 'ഒരു മാസം',
	            MM : '%d മാസം',
	            y : 'ഒരു വർഷം',
	            yy : '%d വർഷം'
	        },
	        meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if ((meridiem === 'രാത്രി' && hour >= 4) ||
	                    meridiem === 'ഉച്ച കഴിഞ്ഞ്' ||
	                    meridiem === 'വൈകുന്നേരം') {
	                return hour + 12;
	            } else {
	                return hour;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'രാത്രി';
	            } else if (hour < 12) {
	                return 'രാവിലെ';
	            } else if (hour < 17) {
	                return 'ഉച്ച കഴിഞ്ഞ്';
	            } else if (hour < 20) {
	                return 'വൈകുന്നേരം';
	            } else {
	                return 'രാത്രി';
	            }
	        }
	    });

	    return ml;

	}));

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Marathi [mr]
	//! author : Harshad Kale : https://github.com/kalehv
	//! author : Vivek Athalye : https://github.com/vnathalye

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    function relativeTimeMr(number, withoutSuffix, string, isFuture)
	    {
	        var output = '';
	        if (withoutSuffix) {
	            switch (string) {
	                case 's': output = 'काही सेकंद'; break;
	                case 'm': output = 'एक मिनिट'; break;
	                case 'mm': output = '%d मिनिटे'; break;
	                case 'h': output = 'एक तास'; break;
	                case 'hh': output = '%d तास'; break;
	                case 'd': output = 'एक दिवस'; break;
	                case 'dd': output = '%d दिवस'; break;
	                case 'M': output = 'एक महिना'; break;
	                case 'MM': output = '%d महिने'; break;
	                case 'y': output = 'एक वर्ष'; break;
	                case 'yy': output = '%d वर्षे'; break;
	            }
	        }
	        else {
	            switch (string) {
	                case 's': output = 'काही सेकंदां'; break;
	                case 'm': output = 'एका मिनिटा'; break;
	                case 'mm': output = '%d मिनिटां'; break;
	                case 'h': output = 'एका तासा'; break;
	                case 'hh': output = '%d तासां'; break;
	                case 'd': output = 'एका दिवसा'; break;
	                case 'dd': output = '%d दिवसां'; break;
	                case 'M': output = 'एका महिन्या'; break;
	                case 'MM': output = '%d महिन्यां'; break;
	                case 'y': output = 'एका वर्षा'; break;
	                case 'yy': output = '%d वर्षां'; break;
	            }
	        }
	        return output.replace(/%d/i, number);
	    }

	    var mr = moment.defineLocale('mr', {
	        months : 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
	        monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
	        weekdaysShort : 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
	        weekdaysMin : 'र_सो_मं_बु_गु_शु_श'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm वाजता',
	            LTS : 'A h:mm:ss वाजता',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm वाजता',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm वाजता'
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[उद्या] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[काल] LT',
	            lastWeek: '[मागील] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future: '%sमध्ये',
	            past: '%sपूर्वी',
	            s: relativeTimeMr,
	            m: relativeTimeMr,
	            mm: relativeTimeMr,
	            h: relativeTimeMr,
	            hh: relativeTimeMr,
	            d: relativeTimeMr,
	            dd: relativeTimeMr,
	            M: relativeTimeMr,
	            MM: relativeTimeMr,
	            y: relativeTimeMr,
	            yy: relativeTimeMr
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'रात्री') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'सकाळी') {
	                return hour;
	            } else if (meridiem === 'दुपारी') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'सायंकाळी') {
	                return hour + 12;
	            }
	        },
	        meridiem: function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'रात्री';
	            } else if (hour < 10) {
	                return 'सकाळी';
	            } else if (hour < 17) {
	                return 'दुपारी';
	            } else if (hour < 20) {
	                return 'सायंकाळी';
	            } else {
	                return 'रात्री';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return mr;

	}));

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malay [ms]
	//! author : Weldan Jamili : https://github.com/weldan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ms = moment.defineLocale('ms', {
	        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Esok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kelmarin pukul] LT',
	            lastWeek : 'dddd [lepas pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lepas',
	            s : 'beberapa saat',
	            m : 'seminit',
	            mm : '%d minit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ms;

	}));

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Malay [ms-my]
	//! note : DEPRECATED, the correct one is [ms]
	//! author : Weldan Jamili : https://github.com/weldan

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var ms_my = moment.defineLocale('ms-my', {
	        months : 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
	        weekdays : 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
	        weekdaysShort : 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
	        weekdaysMin : 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [pukul] HH.mm',
	            LLLL : 'dddd, D MMMM YYYY [pukul] HH.mm'
	        },
	        meridiemParse: /pagi|tengahari|petang|malam/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'pagi') {
	                return hour;
	            } else if (meridiem === 'tengahari') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'petang' || meridiem === 'malam') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'pagi';
	            } else if (hours < 15) {
	                return 'tengahari';
	            } else if (hours < 19) {
	                return 'petang';
	            } else {
	                return 'malam';
	            }
	        },
	        calendar : {
	            sameDay : '[Hari ini pukul] LT',
	            nextDay : '[Esok pukul] LT',
	            nextWeek : 'dddd [pukul] LT',
	            lastDay : '[Kelmarin pukul] LT',
	            lastWeek : 'dddd [lepas pukul] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'dalam %s',
	            past : '%s yang lepas',
	            s : 'beberapa saat',
	            m : 'seminit',
	            mm : '%d minit',
	            h : 'sejam',
	            hh : '%d jam',
	            d : 'sehari',
	            dd : '%d hari',
	            M : 'sebulan',
	            MM : '%d bulan',
	            y : 'setahun',
	            yy : '%d tahun'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ms_my;

	}));

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Burmese [my]
	//! author : Squar team, mysquar.com

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '၁',
	        '2': '၂',
	        '3': '၃',
	        '4': '၄',
	        '5': '၅',
	        '6': '၆',
	        '7': '၇',
	        '8': '၈',
	        '9': '၉',
	        '0': '၀'
	    }, numberMap = {
	        '၁': '1',
	        '၂': '2',
	        '၃': '3',
	        '၄': '4',
	        '၅': '5',
	        '၆': '6',
	        '၇': '7',
	        '၈': '8',
	        '၉': '9',
	        '၀': '0'
	    };

	    var my = moment.defineLocale('my', {
	        months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
	        monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
	        weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
	        weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
	        weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),

	        longDateFormat: {
	            LT: 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L: 'DD/MM/YYYY',
	            LL: 'D MMMM YYYY',
	            LLL: 'D MMMM YYYY HH:mm',
	            LLLL: 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar: {
	            sameDay: '[ယနေ.] LT [မှာ]',
	            nextDay: '[မနက်ဖြန်] LT [မှာ]',
	            nextWeek: 'dddd LT [မှာ]',
	            lastDay: '[မနေ.က] LT [မှာ]',
	            lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
	            sameElse: 'L'
	        },
	        relativeTime: {
	            future: 'လာမည့် %s မှာ',
	            past: 'လွန်ခဲ့သော %s က',
	            s: 'စက္ကန်.အနည်းငယ်',
	            m: 'တစ်မိနစ်',
	            mm: '%d မိနစ်',
	            h: 'တစ်နာရီ',
	            hh: '%d နာရီ',
	            d: 'တစ်ရက်',
	            dd: '%d ရက်',
	            M: 'တစ်လ',
	            MM: '%d လ',
	            y: 'တစ်နှစ်',
	            yy: '%d နှစ်'
	        },
	        preparse: function (string) {
	            return string.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        week: {
	            dow: 1, // Monday is the first day of the week.
	            doy: 4 // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return my;

	}));

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Norwegian Bokmål [nb]
	//! authors : Espen Hovlandsdal : https://github.com/rexxars
	//!           Sigurd Gartmann : https://github.com/sigurdga

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var nb = moment.defineLocale('nb', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
	        weekdaysShort : 'sø._ma._ti._on._to._fr._lø.'.split('_'),
	        weekdaysMin : 'sø_ma_ti_on_to_fr_lø'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] HH:mm',
	            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[i dag kl.] LT',
	            nextDay: '[i morgen kl.] LT',
	            nextWeek: 'dddd [kl.] LT',
	            lastDay: '[i går kl.] LT',
	            lastWeek: '[forrige] dddd [kl.] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s siden',
	            s : 'noen sekunder',
	            m : 'ett minutt',
	            mm : '%d minutter',
	            h : 'en time',
	            hh : '%d timer',
	            d : 'en dag',
	            dd : '%d dager',
	            M : 'en måned',
	            MM : '%d måneder',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nb;

	}));

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Nepalese [ne]
	//! author : suvash : https://github.com/suvash

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '१',
	        '2': '२',
	        '3': '३',
	        '4': '४',
	        '5': '५',
	        '6': '६',
	        '7': '७',
	        '8': '८',
	        '9': '९',
	        '0': '०'
	    },
	    numberMap = {
	        '१': '1',
	        '२': '2',
	        '३': '3',
	        '४': '4',
	        '५': '5',
	        '६': '6',
	        '७': '7',
	        '८': '8',
	        '९': '9',
	        '०': '0'
	    };

	    var ne = moment.defineLocale('ne', {
	        months : 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
	        monthsShort : 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
	        weekdaysShort : 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
	        weekdaysMin : 'आ._सो._मं._बु._बि._शु._श.'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'Aको h:mm बजे',
	            LTS : 'Aको h:mm:ss बजे',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, Aको h:mm बजे',
	            LLLL : 'dddd, D MMMM YYYY, Aको h:mm बजे'
	        },
	        preparse: function (string) {
	            return string.replace(/[१२३४५६७८९०]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'राति') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'बिहान') {
	                return hour;
	            } else if (meridiem === 'दिउँसो') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'साँझ') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 3) {
	                return 'राति';
	            } else if (hour < 12) {
	                return 'बिहान';
	            } else if (hour < 16) {
	                return 'दिउँसो';
	            } else if (hour < 20) {
	                return 'साँझ';
	            } else {
	                return 'राति';
	            }
	        },
	        calendar : {
	            sameDay : '[आज] LT',
	            nextDay : '[भोलि] LT',
	            nextWeek : '[आउँदो] dddd[,] LT',
	            lastDay : '[हिजो] LT',
	            lastWeek : '[गएको] dddd[,] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%sमा',
	            past : '%s अगाडि',
	            s : 'केही क्षण',
	            m : 'एक मिनेट',
	            mm : '%d मिनेट',
	            h : 'एक घण्टा',
	            hh : '%d घण्टा',
	            d : 'एक दिन',
	            dd : '%d दिन',
	            M : 'एक महिना',
	            MM : '%d महिना',
	            y : 'एक बर्ष',
	            yy : '%d बर्ष'
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ne;

	}));

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Dutch [nl]
	//! author : Joris Röling : https://github.com/jjupiter

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'),
	        monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');

	    var nl = moment.defineLocale('nl', {
	        months : 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
	        monthsShort : function (m, format) {
	            if (/-MMM-/.test(format)) {
	                return monthsShortWithoutDots[m.month()];
	            } else {
	                return monthsShortWithDots[m.month()];
	            }
	        },
	        monthsParseExact : true,
	        weekdays : 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
	        weekdaysShort : 'zo._ma._di._wo._do._vr._za.'.split('_'),
	        weekdaysMin : 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD-MM-YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[vandaag om] LT',
	            nextDay: '[morgen om] LT',
	            nextWeek: 'dddd [om] LT',
	            lastDay: '[gisteren om] LT',
	            lastWeek: '[afgelopen] dddd [om] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'over %s',
	            past : '%s geleden',
	            s : 'een paar seconden',
	            m : 'één minuut',
	            mm : '%d minuten',
	            h : 'één uur',
	            hh : '%d uur',
	            d : 'één dag',
	            dd : '%d dagen',
	            M : 'één maand',
	            MM : '%d maanden',
	            y : 'één jaar',
	            yy : '%d jaar'
	        },
	        ordinalParse: /\d{1,2}(ste|de)/,
	        ordinal : function (number) {
	            return number + ((number === 1 || number === 8 || number >= 20) ? 'ste' : 'de');
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nl;

	}));

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Nynorsk [nn]
	//! author : https://github.com/mechuwind

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var nn = moment.defineLocale('nn', {
	        months : 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
	        weekdays : 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
	        weekdaysShort : 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
	        weekdaysMin : 'su_må_ty_on_to_fr_lø'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY [kl.] H:mm',
	            LLLL : 'dddd D. MMMM YYYY [kl.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[I dag klokka] LT',
	            nextDay: '[I morgon klokka] LT',
	            nextWeek: 'dddd [klokka] LT',
	            lastDay: '[I går klokka] LT',
	            lastWeek: '[Føregåande] dddd [klokka] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : '%s sidan',
	            s : 'nokre sekund',
	            m : 'eit minutt',
	            mm : '%d minutt',
	            h : 'ein time',
	            hh : '%d timar',
	            d : 'ein dag',
	            dd : '%d dagar',
	            M : 'ein månad',
	            MM : '%d månader',
	            y : 'eit år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return nn;

	}));

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Punjabi (India) [pa-in]
	//! author : Harpreet Singh : https://github.com/harpreetkhalsagtbit

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '੧',
	        '2': '੨',
	        '3': '੩',
	        '4': '੪',
	        '5': '੫',
	        '6': '੬',
	        '7': '੭',
	        '8': '੮',
	        '9': '੯',
	        '0': '੦'
	    },
	    numberMap = {
	        '੧': '1',
	        '੨': '2',
	        '੩': '3',
	        '੪': '4',
	        '੫': '5',
	        '੬': '6',
	        '੭': '7',
	        '੮': '8',
	        '੯': '9',
	        '੦': '0'
	    };

	    var pa_in = moment.defineLocale('pa-in', {
	        // There are months name as per Nanakshahi Calender but they are not used as rigidly in modern Punjabi.
	        months : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	        monthsShort : 'ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ'.split('_'),
	        weekdays : 'ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ'.split('_'),
	        weekdaysShort : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	        weekdaysMin : 'ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm ਵਜੇ',
	            LTS : 'A h:mm:ss ਵਜੇ',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm ਵਜੇ',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm ਵਜੇ'
	        },
	        calendar : {
	            sameDay : '[ਅਜ] LT',
	            nextDay : '[ਕਲ] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[ਕਲ] LT',
	            lastWeek : '[ਪਿਛਲੇ] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s ਵਿੱਚ',
	            past : '%s ਪਿਛਲੇ',
	            s : 'ਕੁਝ ਸਕਿੰਟ',
	            m : 'ਇਕ ਮਿੰਟ',
	            mm : '%d ਮਿੰਟ',
	            h : 'ਇੱਕ ਘੰਟਾ',
	            hh : '%d ਘੰਟੇ',
	            d : 'ਇੱਕ ਦਿਨ',
	            dd : '%d ਦਿਨ',
	            M : 'ਇੱਕ ਮਹੀਨਾ',
	            MM : '%d ਮਹੀਨੇ',
	            y : 'ਇੱਕ ਸਾਲ',
	            yy : '%d ਸਾਲ'
	        },
	        preparse: function (string) {
	            return string.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // Punjabi notation for meridiems are quite fuzzy in practice. While there exists
	        // a rigid notion of a 'Pahar' it is not used as rigidly in modern Punjabi.
	        meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ਰਾਤ') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ਸਵੇਰ') {
	                return hour;
	            } else if (meridiem === 'ਦੁਪਹਿਰ') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'ਸ਼ਾਮ') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ਰਾਤ';
	            } else if (hour < 10) {
	                return 'ਸਵੇਰ';
	            } else if (hour < 17) {
	                return 'ਦੁਪਹਿਰ';
	            } else if (hour < 20) {
	                return 'ਸ਼ਾਮ';
	            } else {
	                return 'ਰਾਤ';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return pa_in;

	}));

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Polish [pl]
	//! author : Rafal Hirsz : https://github.com/evoL

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_'),
	        monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
	    function plural(n) {
	        return (n % 10 < 5) && (n % 10 > 1) && ((~~(n / 10) % 10) !== 1);
	    }
	    function translate(number, withoutSuffix, key) {
	        var result = number + ' ';
	        switch (key) {
	            case 'm':
	                return withoutSuffix ? 'minuta' : 'minutę';
	            case 'mm':
	                return result + (plural(number) ? 'minuty' : 'minut');
	            case 'h':
	                return withoutSuffix  ? 'godzina'  : 'godzinę';
	            case 'hh':
	                return result + (plural(number) ? 'godziny' : 'godzin');
	            case 'MM':
	                return result + (plural(number) ? 'miesiące' : 'miesięcy');
	            case 'yy':
	                return result + (plural(number) ? 'lata' : 'lat');
	        }
	    }

	    var pl = moment.defineLocale('pl', {
	        months : function (momentToFormat, format) {
	            if (format === '') {
	                // Hack: if format empty we know this is used to generate
	                // RegExp by moment. Give then back both valid forms of months
	                // in RegExp ready format.
	                return '(' + monthsSubjective[momentToFormat.month()] + '|' + monthsNominative[momentToFormat.month()] + ')';
	            } else if (/D MMMM/.test(format)) {
	                return monthsSubjective[momentToFormat.month()];
	            } else {
	                return monthsNominative[momentToFormat.month()];
	            }
	        },
	        monthsShort : 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
	        weekdays : 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
	        weekdaysShort : 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
	        weekdaysMin : 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Dziś o] LT',
	            nextDay: '[Jutro o] LT',
	            nextWeek: '[W] dddd [o] LT',
	            lastDay: '[Wczoraj o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[W zeszłą niedzielę o] LT';
	                    case 3:
	                        return '[W zeszłą środę o] LT';
	                    case 6:
	                        return '[W zeszłą sobotę o] LT';
	                    default:
	                        return '[W zeszły] dddd [o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : '%s temu',
	            s : 'kilka sekund',
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : '1 dzień',
	            dd : '%d dni',
	            M : 'miesiąc',
	            MM : translate,
	            y : 'rok',
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return pl;

	}));

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Portuguese [pt]
	//! author : Jefferson : https://github.com/jalex79

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var pt = moment.defineLocale('pt', {
	        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays : 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
	        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY HH:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : 'há %s',
	            s : 'segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return pt;

	}));

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Portuguese (Brazil) [pt-br]
	//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var pt_br = moment.defineLocale('pt-br', {
	        months : 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
	        weekdays : 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
	        weekdaysShort : 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
	        weekdaysMin : 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D [de] MMMM [de] YYYY',
	            LLL : 'D [de] MMMM [de] YYYY [às] HH:mm',
	            LLLL : 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hoje às] LT',
	            nextDay: '[Amanhã às] LT',
	            nextWeek: 'dddd [às] LT',
	            lastDay: '[Ontem às] LT',
	            lastWeek: function () {
	                return (this.day() === 0 || this.day() === 6) ?
	                    '[Último] dddd [às] LT' : // Saturday + Sunday
	                    '[Última] dddd [às] LT'; // Monday - Friday
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'em %s',
	            past : '%s atrás',
	            s : 'poucos segundos',
	            m : 'um minuto',
	            mm : '%d minutos',
	            h : 'uma hora',
	            hh : '%d horas',
	            d : 'um dia',
	            dd : '%d dias',
	            M : 'um mês',
	            MM : '%d meses',
	            y : 'um ano',
	            yy : '%d anos'
	        },
	        ordinalParse: /\d{1,2}º/,
	        ordinal : '%dº'
	    });

	    return pt_br;

	}));

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Romanian [ro]
	//! author : Vlad Gurdiga : https://github.com/gurdiga
	//! author : Valentin Agachi : https://github.com/avaly

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	                'mm': 'minute',
	                'hh': 'ore',
	                'dd': 'zile',
	                'MM': 'luni',
	                'yy': 'ani'
	            },
	            separator = ' ';
	        if (number % 100 >= 20 || (number >= 100 && number % 100 === 0)) {
	            separator = ' de ';
	        }
	        return number + separator + format[key];
	    }

	    var ro = moment.defineLocale('ro', {
	        months : 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
	        monthsShort : 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
	        weekdaysShort : 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
	        weekdaysMin : 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY H:mm',
	            LLLL : 'dddd, D MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[azi la] LT',
	            nextDay: '[mâine la] LT',
	            nextWeek: 'dddd [la] LT',
	            lastDay: '[ieri la] LT',
	            lastWeek: '[fosta] dddd [la] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'peste %s',
	            past : '%s în urmă',
	            s : 'câteva secunde',
	            m : 'un minut',
	            mm : relativeTimeWithPlural,
	            h : 'o oră',
	            hh : relativeTimeWithPlural,
	            d : 'o zi',
	            dd : relativeTimeWithPlural,
	            M : 'o lună',
	            MM : relativeTimeWithPlural,
	            y : 'un an',
	            yy : relativeTimeWithPlural
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ro;

	}));

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Russian [ru]
	//! author : Viktorminator : https://github.com/Viktorminator
	//! Author : Menelion Elensúle : https://github.com/Oire
	//! author : Коренберг Марк : https://github.com/socketpair

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
	            'hh': 'час_часа_часов',
	            'dd': 'день_дня_дней',
	            'MM': 'месяц_месяца_месяцев',
	            'yy': 'год_года_лет'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'минута' : 'минуту';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    var monthsParse = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];

	    // http://new.gramota.ru/spravka/rules/139-prop : § 103
	    // Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
	    // CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
	    var ru = moment.defineLocale('ru', {
	        months : {
	            format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
	            standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
	        },
	        monthsShort : {
	            // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
	            format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
	            standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
	        },
	        weekdays : {
	            standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
	            format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
	            isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
	        },
	        weekdaysShort : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
	        monthsParse : monthsParse,
	        longMonthsParse : monthsParse,
	        shortMonthsParse : monthsParse,

	        // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
	        monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

	        // копия предыдущего
	        monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,

	        // полные названия с падежами
	        monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,

	        // Выражение, которое соотвествует только сокращённым формам
	        monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY г.',
	            LLL : 'D MMMM YYYY г., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY г., HH:mm'
	        },
	        calendar : {
	            sameDay: '[Сегодня в] LT',
	            nextDay: '[Завтра в] LT',
	            lastDay: '[Вчера в] LT',
	            nextWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В следующее] dddd [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В следующий] dddd [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В следующую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            lastWeek: function (now) {
	                if (now.week() !== this.week()) {
	                    switch (this.day()) {
	                        case 0:
	                            return '[В прошлое] dddd [в] LT';
	                        case 1:
	                        case 2:
	                        case 4:
	                            return '[В прошлый] dddd [в] LT';
	                        case 3:
	                        case 5:
	                        case 6:
	                            return '[В прошлую] dddd [в] LT';
	                    }
	                } else {
	                    if (this.day() === 2) {
	                        return '[Во] dddd [в] LT';
	                    } else {
	                        return '[В] dddd [в] LT';
	                    }
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'через %s',
	            past : '%s назад',
	            s : 'несколько секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'час',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'месяц',
	            MM : relativeTimeWithPlural,
	            y : 'год',
	            yy : relativeTimeWithPlural
	        },
	        meridiemParse: /ночи|утра|дня|вечера/i,
	        isPM : function (input) {
	            return /^(дня|вечера)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночи';
	            } else if (hour < 12) {
	                return 'утра';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечера';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го|я)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                case 'w':
	                case 'W':
	                    return number + '-я';
	                default:
	                    return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ru;

	}));

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Northern Sami [se]
	//! authors : Bård Rolstad Henriksen : https://github.com/karamell

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';



	    var se = moment.defineLocale('se', {
	        months : 'ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu'.split('_'),
	        monthsShort : 'ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov'.split('_'),
	        weekdays : 'sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat'.split('_'),
	        weekdaysShort : 'sotn_vuos_maŋ_gask_duor_bear_láv'.split('_'),
	        weekdaysMin : 's_v_m_g_d_b_L'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'MMMM D. [b.] YYYY',
	            LLL : 'MMMM D. [b.] YYYY [ti.] HH:mm',
	            LLLL : 'dddd, MMMM D. [b.] YYYY [ti.] HH:mm'
	        },
	        calendar : {
	            sameDay: '[otne ti] LT',
	            nextDay: '[ihttin ti] LT',
	            nextWeek: 'dddd [ti] LT',
	            lastDay: '[ikte ti] LT',
	            lastWeek: '[ovddit] dddd [ti] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s geažes',
	            past : 'maŋit %s',
	            s : 'moadde sekunddat',
	            m : 'okta minuhta',
	            mm : '%d minuhtat',
	            h : 'okta diimmu',
	            hh : '%d diimmut',
	            d : 'okta beaivi',
	            dd : '%d beaivvit',
	            M : 'okta mánnu',
	            MM : '%d mánut',
	            y : 'okta jahki',
	            yy : '%d jagit'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return se;

	}));

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Sinhalese [si]
	//! author : Sampath Sitinamaluwa : https://github.com/sampathsris

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    /*jshint -W100*/
	    var si = moment.defineLocale('si', {
	        months : 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
	        monthsShort : 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
	        weekdays : 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
	        weekdaysShort : 'ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන'.split('_'),
	        weekdaysMin : 'ඉ_ස_අ_බ_බ්‍ර_සි_සෙ'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'a h:mm',
	            LTS : 'a h:mm:ss',
	            L : 'YYYY/MM/DD',
	            LL : 'YYYY MMMM D',
	            LLL : 'YYYY MMMM D, a h:mm',
	            LLLL : 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
	        },
	        calendar : {
	            sameDay : '[අද] LT[ට]',
	            nextDay : '[හෙට] LT[ට]',
	            nextWeek : 'dddd LT[ට]',
	            lastDay : '[ඊයේ] LT[ට]',
	            lastWeek : '[පසුගිය] dddd LT[ට]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%sකින්',
	            past : '%sකට පෙර',
	            s : 'තත්පර කිහිපය',
	            m : 'මිනිත්තුව',
	            mm : 'මිනිත්තු %d',
	            h : 'පැය',
	            hh : 'පැය %d',
	            d : 'දිනය',
	            dd : 'දින %d',
	            M : 'මාසය',
	            MM : 'මාස %d',
	            y : 'වසර',
	            yy : 'වසර %d'
	        },
	        ordinalParse: /\d{1,2} වැනි/,
	        ordinal : function (number) {
	            return number + ' වැනි';
	        },
	        meridiemParse : /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
	        isPM : function (input) {
	            return input === 'ප.ව.' || input === 'පස් වරු';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'ප.ව.' : 'පස් වරු';
	            } else {
	                return isLower ? 'පෙ.ව.' : 'පෙර වරු';
	            }
	        }
	    });

	    return si;

	}));

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Slovak [sk]
	//! author : Martin Minka : https://github.com/k2s
	//! based on work of petrbela : https://github.com/petrbela

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var months = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_'),
	        monthsShort = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
	    function plural(n) {
	        return (n > 1) && (n < 5);
	    }
	    function translate(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':  // a few seconds / in a few seconds / a few seconds ago
	                return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
	            case 'm':  // a minute / in a minute / a minute ago
	                return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
	            case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'minúty' : 'minút');
	                } else {
	                    return result + 'minútami';
	                }
	                break;
	            case 'h':  // an hour / in an hour / an hour ago
	                return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
	            case 'hh': // 9 hours / in 9 hours / 9 hours ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'hodiny' : 'hodín');
	                } else {
	                    return result + 'hodinami';
	                }
	                break;
	            case 'd':  // a day / in a day / a day ago
	                return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
	            case 'dd': // 9 days / in 9 days / 9 days ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'dni' : 'dní');
	                } else {
	                    return result + 'dňami';
	                }
	                break;
	            case 'M':  // a month / in a month / a month ago
	                return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
	            case 'MM': // 9 months / in 9 months / 9 months ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'mesiace' : 'mesiacov');
	                } else {
	                    return result + 'mesiacmi';
	                }
	                break;
	            case 'y':  // a year / in a year / a year ago
	                return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
	            case 'yy': // 9 years / in 9 years / 9 years ago
	                if (withoutSuffix || isFuture) {
	                    return result + (plural(number) ? 'roky' : 'rokov');
	                } else {
	                    return result + 'rokmi';
	                }
	                break;
	        }
	    }

	    var sk = moment.defineLocale('sk', {
	        months : months,
	        monthsShort : monthsShort,
	        weekdays : 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
	        weekdaysShort : 'ne_po_ut_st_št_pi_so'.split('_'),
	        weekdaysMin : 'ne_po_ut_st_št_pi_so'.split('_'),
	        longDateFormat : {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay: '[dnes o] LT',
	            nextDay: '[zajtra o] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[v] dddd [o] LT';
	                    case 3:
	                        return '[v stredu o] LT';
	                    case 4:
	                        return '[vo štvrtok o] LT';
	                    case 5:
	                        return '[v piatok o] LT';
	                    case 6:
	                        return '[v sobotu o] LT';
	                }
	            },
	            lastDay: '[včera o] LT',
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[minulú nedeľu o] LT';
	                    case 1:
	                    case 2:
	                        return '[minulý] dddd [o] LT';
	                    case 3:
	                        return '[minulú stredu o] LT';
	                    case 4:
	                    case 5:
	                        return '[minulý] dddd [o] LT';
	                    case 6:
	                        return '[minulú sobotu o] LT';
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past : 'pred %s',
	            s : translate,
	            m : translate,
	            mm : translate,
	            h : translate,
	            hh : translate,
	            d : translate,
	            dd : translate,
	            M : translate,
	            MM : translate,
	            y : translate,
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sk;

	}));

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Slovenian [sl]
	//! author : Robert Sedovšek : https://github.com/sedovsek

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var result = number + ' ';
	        switch (key) {
	            case 's':
	                return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
	            case 'm':
	                return withoutSuffix ? 'ena minuta' : 'eno minuto';
	            case 'mm':
	                if (number === 1) {
	                    result += withoutSuffix ? 'minuta' : 'minuto';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'minute' : 'minutami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'minut' : 'minutami';
	                }
	                return result;
	            case 'h':
	                return withoutSuffix ? 'ena ura' : 'eno uro';
	            case 'hh':
	                if (number === 1) {
	                    result += withoutSuffix ? 'ura' : 'uro';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'uri' : 'urama';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'ure' : 'urami';
	                } else {
	                    result += withoutSuffix || isFuture ? 'ur' : 'urami';
	                }
	                return result;
	            case 'd':
	                return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
	            case 'dd':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'dan' : 'dnem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
	                } else {
	                    result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
	                }
	                return result;
	            case 'M':
	                return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
	            case 'MM':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
	                } else {
	                    result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
	                }
	                return result;
	            case 'y':
	                return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
	            case 'yy':
	                if (number === 1) {
	                    result += withoutSuffix || isFuture ? 'leto' : 'letom';
	                } else if (number === 2) {
	                    result += withoutSuffix || isFuture ? 'leti' : 'letoma';
	                } else if (number < 5) {
	                    result += withoutSuffix || isFuture ? 'leta' : 'leti';
	                } else {
	                    result += withoutSuffix || isFuture ? 'let' : 'leti';
	                }
	                return result;
	        }
	    }

	    var sl = moment.defineLocale('sl', {
	        months : 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
	        weekdaysShort : 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
	        weekdaysMin : 'ne_po_to_sr_če_pe_so'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H:mm',
	            LTS : 'H:mm:ss',
	            L : 'DD. MM. YYYY',
	            LL : 'D. MMMM YYYY',
	            LLL : 'D. MMMM YYYY H:mm',
	            LLLL : 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar : {
	            sameDay  : '[danes ob] LT',
	            nextDay  : '[jutri ob] LT',

	            nextWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[v] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[v] [sredo] [ob] LT';
	                    case 6:
	                        return '[v] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[v] dddd [ob] LT';
	                }
	            },
	            lastDay  : '[včeraj ob] LT',
	            lastWeek : function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[prejšnjo] [nedeljo] [ob] LT';
	                    case 3:
	                        return '[prejšnjo] [sredo] [ob] LT';
	                    case 6:
	                        return '[prejšnjo] [soboto] [ob] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[prejšnji] dddd [ob] LT';
	                }
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'čez %s',
	            past   : 'pred %s',
	            s      : processRelativeTime,
	            m      : processRelativeTime,
	            mm     : processRelativeTime,
	            h      : processRelativeTime,
	            hh     : processRelativeTime,
	            d      : processRelativeTime,
	            dd     : processRelativeTime,
	            M      : processRelativeTime,
	            MM     : processRelativeTime,
	            y      : processRelativeTime,
	            yy     : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sl;

	}));

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Albanian [sq]
	//! author : Flakërim Ismani : https://github.com/flakerimi
	//! author: Menelion Elensúle: https://github.com/Oire (tests)
	//! author : Oerd Cukalla : https://github.com/oerd (fixes)

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var sq = moment.defineLocale('sq', {
	        months : 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
	        monthsShort : 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
	        weekdays : 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
	        weekdaysShort : 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
	        weekdaysMin : 'D_H_Ma_Më_E_P_Sh'.split('_'),
	        weekdaysParseExact : true,
	        meridiemParse: /PD|MD/,
	        isPM: function (input) {
	            return input.charAt(0) === 'M';
	        },
	        meridiem : function (hours, minutes, isLower) {
	            return hours < 12 ? 'PD' : 'MD';
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[Sot në] LT',
	            nextDay : '[Nesër në] LT',
	            nextWeek : 'dddd [në] LT',
	            lastDay : '[Dje në] LT',
	            lastWeek : 'dddd [e kaluar në] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'në %s',
	            past : '%s më parë',
	            s : 'disa sekonda',
	            m : 'një minutë',
	            mm : '%d minuta',
	            h : 'një orë',
	            hh : '%d orë',
	            d : 'një ditë',
	            dd : '%d ditë',
	            M : 'një muaj',
	            MM : '%d muaj',
	            y : 'një vit',
	            yy : '%d vite'
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sq;

	}));

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian [sr]
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var translator = {
	        words: { //Different grammatical cases
	            m: ['jedan minut', 'jedne minute'],
	            mm: ['minut', 'minute', 'minuta'],
	            h: ['jedan sat', 'jednog sata'],
	            hh: ['sat', 'sata', 'sati'],
	            dd: ['dan', 'dana', 'dana'],
	            MM: ['mesec', 'meseca', 'meseci'],
	            yy: ['godina', 'godine', 'godina']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var sr = moment.defineLocale('sr', {
	        months: 'januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar'.split('_'),
	        monthsShort: 'jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.'.split('_'),
	        monthsParseExact: true,
	        weekdays: 'nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota'.split('_'),
	        weekdaysShort: 'ned._pon._uto._sre._čet._pet._sub.'.split('_'),
	        weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[danas u] LT',
	            nextDay: '[sutra u] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[u] [nedelju] [u] LT';
	                    case 3:
	                        return '[u] [sredu] [u] LT';
	                    case 6:
	                        return '[u] [subotu] [u] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[u] dddd [u] LT';
	                }
	            },
	            lastDay  : '[juče u] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[prošle] [nedelje] [u] LT',
	                    '[prošlog] [ponedeljka] [u] LT',
	                    '[prošlog] [utorka] [u] LT',
	                    '[prošle] [srede] [u] LT',
	                    '[prošlog] [četvrtka] [u] LT',
	                    '[prošlog] [petka] [u] LT',
	                    '[prošle] [subote] [u] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'za %s',
	            past   : 'pre %s',
	            s      : 'nekoliko sekundi',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'dan',
	            dd     : translator.translate,
	            M      : 'mesec',
	            MM     : translator.translate,
	            y      : 'godinu',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sr;

	}));

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Serbian Cyrillic [sr-cyrl]
	//! author : Milan Janačković<milanjanackovic@gmail.com> : https://github.com/milan-j

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var translator = {
	        words: { //Different grammatical cases
	            m: ['један минут', 'једне минуте'],
	            mm: ['минут', 'минуте', 'минута'],
	            h: ['један сат', 'једног сата'],
	            hh: ['сат', 'сата', 'сати'],
	            dd: ['дан', 'дана', 'дана'],
	            MM: ['месец', 'месеца', 'месеци'],
	            yy: ['година', 'године', 'година']
	        },
	        correctGrammaticalCase: function (number, wordKey) {
	            return number === 1 ? wordKey[0] : (number >= 2 && number <= 4 ? wordKey[1] : wordKey[2]);
	        },
	        translate: function (number, withoutSuffix, key) {
	            var wordKey = translator.words[key];
	            if (key.length === 1) {
	                return withoutSuffix ? wordKey[0] : wordKey[1];
	            } else {
	                return number + ' ' + translator.correctGrammaticalCase(number, wordKey);
	            }
	        }
	    };

	    var sr_cyrl = moment.defineLocale('sr-cyrl', {
	        months: 'јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар'.split('_'),
	        monthsShort: 'јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.'.split('_'),
	        monthsParseExact: true,
	        weekdays: 'недеља_понедељак_уторак_среда_четвртак_петак_субота'.split('_'),
	        weekdaysShort: 'нед._пон._уто._сре._чет._пет._суб.'.split('_'),
	        weekdaysMin: 'не_по_ут_ср_че_пе_су'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat: {
	            LT: 'H:mm',
	            LTS : 'H:mm:ss',
	            L: 'DD. MM. YYYY',
	            LL: 'D. MMMM YYYY',
	            LLL: 'D. MMMM YYYY H:mm',
	            LLLL: 'dddd, D. MMMM YYYY H:mm'
	        },
	        calendar: {
	            sameDay: '[данас у] LT',
	            nextDay: '[сутра у] LT',
	            nextWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                        return '[у] [недељу] [у] LT';
	                    case 3:
	                        return '[у] [среду] [у] LT';
	                    case 6:
	                        return '[у] [суботу] [у] LT';
	                    case 1:
	                    case 2:
	                    case 4:
	                    case 5:
	                        return '[у] dddd [у] LT';
	                }
	            },
	            lastDay  : '[јуче у] LT',
	            lastWeek : function () {
	                var lastWeekDays = [
	                    '[прошле] [недеље] [у] LT',
	                    '[прошлог] [понедељка] [у] LT',
	                    '[прошлог] [уторка] [у] LT',
	                    '[прошле] [среде] [у] LT',
	                    '[прошлог] [четвртка] [у] LT',
	                    '[прошлог] [петка] [у] LT',
	                    '[прошле] [суботе] [у] LT'
	                ];
	                return lastWeekDays[this.day()];
	            },
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past   : 'пре %s',
	            s      : 'неколико секунди',
	            m      : translator.translate,
	            mm     : translator.translate,
	            h      : translator.translate,
	            hh     : translator.translate,
	            d      : 'дан',
	            dd     : translator.translate,
	            M      : 'месец',
	            MM     : translator.translate,
	            y      : 'годину',
	            yy     : translator.translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sr_cyrl;

	}));

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swazi [ss]
	//! author : Nicolai Davies<mail@nicolai.io> : https://github.com/nicolaidavies

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';



	    var ss = moment.defineLocale('ss', {
	        months : "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split('_'),
	        monthsShort : 'Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo'.split('_'),
	        weekdays : 'Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo'.split('_'),
	        weekdaysShort : 'Lis_Umb_Lsb_Les_Lsi_Lsh_Umg'.split('_'),
	        weekdaysMin : 'Li_Us_Lb_Lt_Ls_Lh_Ug'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'h:mm A',
	            LTS : 'h:mm:ss A',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY h:mm A',
	            LLLL : 'dddd, D MMMM YYYY h:mm A'
	        },
	        calendar : {
	            sameDay : '[Namuhla nga] LT',
	            nextDay : '[Kusasa nga] LT',
	            nextWeek : 'dddd [nga] LT',
	            lastDay : '[Itolo nga] LT',
	            lastWeek : 'dddd [leliphelile] [nga] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'nga %s',
	            past : 'wenteka nga %s',
	            s : 'emizuzwana lomcane',
	            m : 'umzuzu',
	            mm : '%d emizuzu',
	            h : 'lihora',
	            hh : '%d emahora',
	            d : 'lilanga',
	            dd : '%d emalanga',
	            M : 'inyanga',
	            MM : '%d tinyanga',
	            y : 'umnyaka',
	            yy : '%d iminyaka'
	        },
	        meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 11) {
	                return 'ekuseni';
	            } else if (hours < 15) {
	                return 'emini';
	            } else if (hours < 19) {
	                return 'entsambama';
	            } else {
	                return 'ebusuku';
	            }
	        },
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'ekuseni') {
	                return hour;
	            } else if (meridiem === 'emini') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === 'entsambama' || meridiem === 'ebusuku') {
	                if (hour === 0) {
	                    return 0;
	                }
	                return hour + 12;
	            }
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : '%d',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return ss;

	}));

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swedish [sv]
	//! author : Jens Alm : https://github.com/ulmus

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var sv = moment.defineLocale('sv', {
	        months : 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
	        monthsShort : 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
	        weekdays : 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	        weekdaysShort : 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	        weekdaysMin : 'sö_må_ti_on_to_fr_lö'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'YYYY-MM-DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY [kl.] HH:mm',
	            LLLL : 'dddd D MMMM YYYY [kl.] HH:mm',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Idag] LT',
	            nextDay: '[Imorgon] LT',
	            lastDay: '[Igår] LT',
	            nextWeek: '[På] dddd LT',
	            lastWeek: '[I] dddd[s] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'om %s',
	            past : 'för %s sedan',
	            s : 'några sekunder',
	            m : 'en minut',
	            mm : '%d minuter',
	            h : 'en timme',
	            hh : '%d timmar',
	            d : 'en dag',
	            dd : '%d dagar',
	            M : 'en månad',
	            MM : '%d månader',
	            y : 'ett år',
	            yy : '%d år'
	        },
	        ordinalParse: /\d{1,2}(e|a)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'e' :
	                (b === 1) ? 'a' :
	                (b === 2) ? 'a' :
	                (b === 3) ? 'e' : 'e';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return sv;

	}));

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Swahili [sw]
	//! author : Fahad Kassim : https://github.com/fadsel

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var sw = moment.defineLocale('sw', {
	        months : 'Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba'.split('_'),
	        monthsShort : 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des'.split('_'),
	        weekdays : 'Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi'.split('_'),
	        weekdaysShort : 'Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos'.split('_'),
	        weekdaysMin : 'J2_J3_J4_J5_Al_Ij_J1'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[leo saa] LT',
	            nextDay : '[kesho saa] LT',
	            nextWeek : '[wiki ijayo] dddd [saat] LT',
	            lastDay : '[jana] LT',
	            lastWeek : '[wiki iliyopita] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s baadaye',
	            past : 'tokea %s',
	            s : 'hivi punde',
	            m : 'dakika moja',
	            mm : 'dakika %d',
	            h : 'saa limoja',
	            hh : 'masaa %d',
	            d : 'siku moja',
	            dd : 'masiku %d',
	            M : 'mwezi mmoja',
	            MM : 'miezi %d',
	            y : 'mwaka mmoja',
	            yy : 'miaka %d'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return sw;

	}));

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tamil [ta]
	//! author : Arjunkumar Krishnamoorthy : https://github.com/tk120404

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var symbolMap = {
	        '1': '௧',
	        '2': '௨',
	        '3': '௩',
	        '4': '௪',
	        '5': '௫',
	        '6': '௬',
	        '7': '௭',
	        '8': '௮',
	        '9': '௯',
	        '0': '௦'
	    }, numberMap = {
	        '௧': '1',
	        '௨': '2',
	        '௩': '3',
	        '௪': '4',
	        '௫': '5',
	        '௬': '6',
	        '௭': '7',
	        '௮': '8',
	        '௯': '9',
	        '௦': '0'
	    };

	    var ta = moment.defineLocale('ta', {
	        months : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        monthsShort : 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
	        weekdays : 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
	        weekdaysShort : 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
	        weekdaysMin : 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, HH:mm',
	            LLLL : 'dddd, D MMMM YYYY, HH:mm'
	        },
	        calendar : {
	            sameDay : '[இன்று] LT',
	            nextDay : '[நாளை] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[நேற்று] LT',
	            lastWeek : '[கடந்த வாரம்] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s இல்',
	            past : '%s முன்',
	            s : 'ஒரு சில விநாடிகள்',
	            m : 'ஒரு நிமிடம்',
	            mm : '%d நிமிடங்கள்',
	            h : 'ஒரு மணி நேரம்',
	            hh : '%d மணி நேரம்',
	            d : 'ஒரு நாள்',
	            dd : '%d நாட்கள்',
	            M : 'ஒரு மாதம்',
	            MM : '%d மாதங்கள்',
	            y : 'ஒரு வருடம்',
	            yy : '%d ஆண்டுகள்'
	        },
	        ordinalParse: /\d{1,2}வது/,
	        ordinal : function (number) {
	            return number + 'வது';
	        },
	        preparse: function (string) {
	            return string.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (match) {
	                return numberMap[match];
	            });
	        },
	        postformat: function (string) {
	            return string.replace(/\d/g, function (match) {
	                return symbolMap[match];
	            });
	        },
	        // refer http://ta.wikipedia.org/s/1er1
	        meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 2) {
	                return ' யாமம்';
	            } else if (hour < 6) {
	                return ' வைகறை';  // வைகறை
	            } else if (hour < 10) {
	                return ' காலை'; // காலை
	            } else if (hour < 14) {
	                return ' நண்பகல்'; // நண்பகல்
	            } else if (hour < 18) {
	                return ' எற்பாடு'; // எற்பாடு
	            } else if (hour < 22) {
	                return ' மாலை'; // மாலை
	            } else {
	                return ' யாமம்';
	            }
	        },
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'யாமம்') {
	                return hour < 2 ? hour : hour + 12;
	            } else if (meridiem === 'வைகறை' || meridiem === 'காலை') {
	                return hour;
	            } else if (meridiem === 'நண்பகல்') {
	                return hour >= 10 ? hour : hour + 12;
	            } else {
	                return hour + 12;
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return ta;

	}));

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Telugu [te]
	//! author : Krishna Chaitanya Thota : https://github.com/kcthota

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var te = moment.defineLocale('te', {
	        months : 'జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్'.split('_'),
	        monthsShort : 'జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం'.split('_'),
	        weekdaysShort : 'ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని'.split('_'),
	        weekdaysMin : 'ఆ_సో_మం_బు_గు_శు_శ'.split('_'),
	        longDateFormat : {
	            LT : 'A h:mm',
	            LTS : 'A h:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY, A h:mm',
	            LLLL : 'dddd, D MMMM YYYY, A h:mm'
	        },
	        calendar : {
	            sameDay : '[నేడు] LT',
	            nextDay : '[రేపు] LT',
	            nextWeek : 'dddd, LT',
	            lastDay : '[నిన్న] LT',
	            lastWeek : '[గత] dddd, LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s లో',
	            past : '%s క్రితం',
	            s : 'కొన్ని క్షణాలు',
	            m : 'ఒక నిమిషం',
	            mm : '%d నిమిషాలు',
	            h : 'ఒక గంట',
	            hh : '%d గంటలు',
	            d : 'ఒక రోజు',
	            dd : '%d రోజులు',
	            M : 'ఒక నెల',
	            MM : '%d నెలలు',
	            y : 'ఒక సంవత్సరం',
	            yy : '%d సంవత్సరాలు'
	        },
	        ordinalParse : /\d{1,2}వ/,
	        ordinal : '%dవ',
	        meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === 'రాత్రి') {
	                return hour < 4 ? hour : hour + 12;
	            } else if (meridiem === 'ఉదయం') {
	                return hour;
	            } else if (meridiem === 'మధ్యాహ్నం') {
	                return hour >= 10 ? hour : hour + 12;
	            } else if (meridiem === 'సాయంత్రం') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'రాత్రి';
	            } else if (hour < 10) {
	                return 'ఉదయం';
	            } else if (hour < 17) {
	                return 'మధ్యాహ్నం';
	            } else if (hour < 20) {
	                return 'సాయంత్రం';
	            } else {
	                return 'రాత్రి';
	            }
	        },
	        week : {
	            dow : 0, // Sunday is the first day of the week.
	            doy : 6  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return te;

	}));

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Thai [th]
	//! author : Kridsada Thanabulpong : https://github.com/sirn

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var th = moment.defineLocale('th', {
	        months : 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
	        monthsShort : 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
	        monthsParseExact: true,
	        weekdays : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
	        weekdaysShort : 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'), // yes, three characters difference
	        weekdaysMin : 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'H นาฬิกา m นาที',
	            LTS : 'H นาฬิกา m นาที s วินาที',
	            L : 'YYYY/MM/DD',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY เวลา H นาฬิกา m นาที',
	            LLLL : 'วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที'
	        },
	        meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
	        isPM: function (input) {
	            return input === 'หลังเที่ยง';
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 12) {
	                return 'ก่อนเที่ยง';
	            } else {
	                return 'หลังเที่ยง';
	            }
	        },
	        calendar : {
	            sameDay : '[วันนี้ เวลา] LT',
	            nextDay : '[พรุ่งนี้ เวลา] LT',
	            nextWeek : 'dddd[หน้า เวลา] LT',
	            lastDay : '[เมื่อวานนี้ เวลา] LT',
	            lastWeek : '[วัน]dddd[ที่แล้ว เวลา] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'อีก %s',
	            past : '%sที่แล้ว',
	            s : 'ไม่กี่วินาที',
	            m : '1 นาที',
	            mm : '%d นาที',
	            h : '1 ชั่วโมง',
	            hh : '%d ชั่วโมง',
	            d : '1 วัน',
	            dd : '%d วัน',
	            M : '1 เดือน',
	            MM : '%d เดือน',
	            y : '1 ปี',
	            yy : '%d ปี'
	        }
	    });

	    return th;

	}));

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Tagalog (Philippines) [tl-ph]
	//! author : Dan Hagman

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var tl_ph = moment.defineLocale('tl-ph', {
	        months : 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
	        monthsShort : 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
	        weekdays : 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
	        weekdaysShort : 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
	        weekdaysMin : 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'MM/D/YYYY',
	            LL : 'MMMM D, YYYY',
	            LLL : 'MMMM D, YYYY HH:mm',
	            LLLL : 'dddd, MMMM DD, YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Ngayon sa] LT',
	            nextDay: '[Bukas sa] LT',
	            nextWeek: 'dddd [sa] LT',
	            lastDay: '[Kahapon sa] LT',
	            lastWeek: 'dddd [huling linggo] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'sa loob ng %s',
	            past : '%s ang nakalipas',
	            s : 'ilang segundo',
	            m : 'isang minuto',
	            mm : '%d minuto',
	            h : 'isang oras',
	            hh : '%d oras',
	            d : 'isang araw',
	            dd : '%d araw',
	            M : 'isang buwan',
	            MM : '%d buwan',
	            y : 'isang taon',
	            yy : '%d taon'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return tl_ph;

	}));

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Klingon [tlh]
	//! author : Dominika Kruk : https://github.com/amaranthrose

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var numbersNouns = 'pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut'.split('_');

	    function translateFuture(output) {
	        var time = output;
	        time = (output.indexOf('jaj') !== -1) ?
	        time.slice(0, -3) + 'leS' :
	        (output.indexOf('jar') !== -1) ?
	        time.slice(0, -3) + 'waQ' :
	        (output.indexOf('DIS') !== -1) ?
	        time.slice(0, -3) + 'nem' :
	        time + ' pIq';
	        return time;
	    }

	    function translatePast(output) {
	        var time = output;
	        time = (output.indexOf('jaj') !== -1) ?
	        time.slice(0, -3) + 'Hu’' :
	        (output.indexOf('jar') !== -1) ?
	        time.slice(0, -3) + 'wen' :
	        (output.indexOf('DIS') !== -1) ?
	        time.slice(0, -3) + 'ben' :
	        time + ' ret';
	        return time;
	    }

	    function translate(number, withoutSuffix, string, isFuture) {
	        var numberNoun = numberAsNoun(number);
	        switch (string) {
	            case 'mm':
	                return numberNoun + ' tup';
	            case 'hh':
	                return numberNoun + ' rep';
	            case 'dd':
	                return numberNoun + ' jaj';
	            case 'MM':
	                return numberNoun + ' jar';
	            case 'yy':
	                return numberNoun + ' DIS';
	        }
	    }

	    function numberAsNoun(number) {
	        var hundred = Math.floor((number % 1000) / 100),
	        ten = Math.floor((number % 100) / 10),
	        one = number % 10,
	        word = '';
	        if (hundred > 0) {
	            word += numbersNouns[hundred] + 'vatlh';
	        }
	        if (ten > 0) {
	            word += ((word !== '') ? ' ' : '') + numbersNouns[ten] + 'maH';
	        }
	        if (one > 0) {
	            word += ((word !== '') ? ' ' : '') + numbersNouns[one];
	        }
	        return (word === '') ? 'pagh' : word;
	    }

	    var tlh = moment.defineLocale('tlh', {
	        months : 'tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’'.split('_'),
	        monthsShort : 'jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        weekdaysShort : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        weekdaysMin : 'lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[DaHjaj] LT',
	            nextDay: '[wa’leS] LT',
	            nextWeek: 'LLL',
	            lastDay: '[wa’Hu’] LT',
	            lastWeek: 'LLL',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : translateFuture,
	            past : translatePast,
	            s : 'puS lup',
	            m : 'wa’ tup',
	            mm : translate,
	            h : 'wa’ rep',
	            hh : translate,
	            d : 'wa’ jaj',
	            dd : translate,
	            M : 'wa’ jar',
	            MM : translate,
	            y : 'wa’ DIS',
	            yy : translate
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return tlh;

	}));

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Turkish [tr]
	//! authors : Erhan Gundogan : https://github.com/erhangundogan,
	//!           Burak Yiğit Kaya: https://github.com/BYK

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var suffixes = {
	        1: '\'inci',
	        5: '\'inci',
	        8: '\'inci',
	        70: '\'inci',
	        80: '\'inci',
	        2: '\'nci',
	        7: '\'nci',
	        20: '\'nci',
	        50: '\'nci',
	        3: '\'üncü',
	        4: '\'üncü',
	        100: '\'üncü',
	        6: '\'ncı',
	        9: '\'uncu',
	        10: '\'uncu',
	        30: '\'uncu',
	        60: '\'ıncı',
	        90: '\'ıncı'
	    };

	    var tr = moment.defineLocale('tr', {
	        months : 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
	        monthsShort : 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
	        weekdays : 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
	        weekdaysShort : 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
	        weekdaysMin : 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[bugün saat] LT',
	            nextDay : '[yarın saat] LT',
	            nextWeek : '[haftaya] dddd [saat] LT',
	            lastDay : '[dün] LT',
	            lastWeek : '[geçen hafta] dddd [saat] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : '%s sonra',
	            past : '%s önce',
	            s : 'birkaç saniye',
	            m : 'bir dakika',
	            mm : '%d dakika',
	            h : 'bir saat',
	            hh : '%d saat',
	            d : 'bir gün',
	            dd : '%d gün',
	            M : 'bir ay',
	            MM : '%d ay',
	            y : 'bir yıl',
	            yy : '%d yıl'
	        },
	        ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
	        ordinal : function (number) {
	            if (number === 0) {  // special case for zero
	                return number + '\'ıncı';
	            }
	            var a = number % 10,
	                b = number % 100 - a,
	                c = number >= 100 ? 100 : null;
	            return number + (suffixes[a] || suffixes[b] || suffixes[c]);
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tr;

	}));

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Talossan [tzl]
	//! author : Robin van der Vliet : https://github.com/robin0van0der0v with the help of Iustì Canun

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';



	    // After the year there should be a slash and the amount of years since December 26, 1979 in Roman numerals.
	    // This is currently too difficult (maybe even impossible) to add.
	    var tzl = moment.defineLocale('tzl', {
	        months : 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
	        monthsShort : 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
	        weekdays : 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
	        weekdaysShort : 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
	        weekdaysMin : 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
	        longDateFormat : {
	            LT : 'HH.mm',
	            LTS : 'HH.mm.ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D. MMMM [dallas] YYYY',
	            LLL : 'D. MMMM [dallas] YYYY HH.mm',
	            LLLL : 'dddd, [li] D. MMMM [dallas] YYYY HH.mm'
	        },
	        meridiemParse: /d\'o|d\'a/i,
	        isPM : function (input) {
	            return 'd\'o' === input.toLowerCase();
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours > 11) {
	                return isLower ? 'd\'o' : 'D\'O';
	            } else {
	                return isLower ? 'd\'a' : 'D\'A';
	            }
	        },
	        calendar : {
	            sameDay : '[oxhi à] LT',
	            nextDay : '[demà à] LT',
	            nextWeek : 'dddd [à] LT',
	            lastDay : '[ieiri à] LT',
	            lastWeek : '[sür el] dddd [lasteu à] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'osprei %s',
	            past : 'ja%s',
	            s : processRelativeTime,
	            m : processRelativeTime,
	            mm : processRelativeTime,
	            h : processRelativeTime,
	            hh : processRelativeTime,
	            d : processRelativeTime,
	            dd : processRelativeTime,
	            M : processRelativeTime,
	            MM : processRelativeTime,
	            y : processRelativeTime,
	            yy : processRelativeTime
	        },
	        ordinalParse: /\d{1,2}\./,
	        ordinal : '%d.',
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    function processRelativeTime(number, withoutSuffix, key, isFuture) {
	        var format = {
	            's': ['viensas secunds', '\'iensas secunds'],
	            'm': ['\'n míut', '\'iens míut'],
	            'mm': [number + ' míuts', '' + number + ' míuts'],
	            'h': ['\'n þora', '\'iensa þora'],
	            'hh': [number + ' þoras', '' + number + ' þoras'],
	            'd': ['\'n ziua', '\'iensa ziua'],
	            'dd': [number + ' ziuas', '' + number + ' ziuas'],
	            'M': ['\'n mes', '\'iens mes'],
	            'MM': [number + ' mesen', '' + number + ' mesen'],
	            'y': ['\'n ar', '\'iens ar'],
	            'yy': [number + ' ars', '' + number + ' ars']
	        };
	        return isFuture ? format[key][0] : (withoutSuffix ? format[key][0] : format[key][1]);
	    }

	    return tzl;

	}));

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Central Atlas Tamazight [tzm]
	//! author : Abdel Said : https://github.com/abdelsaid

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var tzm = moment.defineLocale('tzm', {
	        months : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        monthsShort : 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
	        weekdays : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysShort : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        weekdaysMin : 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS: 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
	            nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
	            nextWeek: 'dddd [ⴴ] LT',
	            lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
	            lastWeek: 'dddd [ⴴ] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
	            past : 'ⵢⴰⵏ %s',
	            s : 'ⵉⵎⵉⴽ',
	            m : 'ⵎⵉⵏⵓⴺ',
	            mm : '%d ⵎⵉⵏⵓⴺ',
	            h : 'ⵙⴰⵄⴰ',
	            hh : '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
	            d : 'ⴰⵙⵙ',
	            dd : '%d oⵙⵙⴰⵏ',
	            M : 'ⴰⵢoⵓⵔ',
	            MM : '%d ⵉⵢⵢⵉⵔⵏ',
	            y : 'ⴰⵙⴳⴰⵙ',
	            yy : '%d ⵉⵙⴳⴰⵙⵏ'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tzm;

	}));

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Central Atlas Tamazight Latin [tzm-latn]
	//! author : Abdel Said : https://github.com/abdelsaid

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var tzm_latn = moment.defineLocale('tzm-latn', {
	        months : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        monthsShort : 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
	        weekdays : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysShort : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        weekdaysMin : 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[asdkh g] LT',
	            nextDay: '[aska g] LT',
	            nextWeek: 'dddd [g] LT',
	            lastDay: '[assant g] LT',
	            lastWeek: 'dddd [g] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'dadkh s yan %s',
	            past : 'yan %s',
	            s : 'imik',
	            m : 'minuḍ',
	            mm : '%d minuḍ',
	            h : 'saɛa',
	            hh : '%d tassaɛin',
	            d : 'ass',
	            dd : '%d ossan',
	            M : 'ayowr',
	            MM : '%d iyyirn',
	            y : 'asgas',
	            yy : '%d isgasn'
	        },
	        week : {
	            dow : 6, // Saturday is the first day of the week.
	            doy : 12  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return tzm_latn;

	}));

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Ukrainian [uk]
	//! author : zemlanin : https://github.com/zemlanin
	//! Author : Menelion Elensúle : https://github.com/Oire

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    function plural(word, num) {
	        var forms = word.split('_');
	        return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
	    }
	    function relativeTimeWithPlural(number, withoutSuffix, key) {
	        var format = {
	            'mm': withoutSuffix ? 'хвилина_хвилини_хвилин' : 'хвилину_хвилини_хвилин',
	            'hh': withoutSuffix ? 'година_години_годин' : 'годину_години_годин',
	            'dd': 'день_дні_днів',
	            'MM': 'місяць_місяці_місяців',
	            'yy': 'рік_роки_років'
	        };
	        if (key === 'm') {
	            return withoutSuffix ? 'хвилина' : 'хвилину';
	        }
	        else if (key === 'h') {
	            return withoutSuffix ? 'година' : 'годину';
	        }
	        else {
	            return number + ' ' + plural(format[key], +number);
	        }
	    }
	    function weekdaysCaseReplace(m, format) {
	        var weekdays = {
	            'nominative': 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
	            'accusative': 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
	            'genitive': 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
	        },
	        nounCase = (/(\[[ВвУу]\]) ?dddd/).test(format) ?
	            'accusative' :
	            ((/\[?(?:минулої|наступної)? ?\] ?dddd/).test(format) ?
	                'genitive' :
	                'nominative');
	        return weekdays[nounCase][m.day()];
	    }
	    function processHoursFunction(str) {
	        return function () {
	            return str + 'о' + (this.hours() === 11 ? 'б' : '') + '] LT';
	        };
	    }

	    var uk = moment.defineLocale('uk', {
	        months : {
	            'format': 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_'),
	            'standalone': 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_')
	        },
	        monthsShort : 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
	        weekdays : weekdaysCaseReplace,
	        weekdaysShort : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        weekdaysMin : 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD.MM.YYYY',
	            LL : 'D MMMM YYYY р.',
	            LLL : 'D MMMM YYYY р., HH:mm',
	            LLLL : 'dddd, D MMMM YYYY р., HH:mm'
	        },
	        calendar : {
	            sameDay: processHoursFunction('[Сьогодні '),
	            nextDay: processHoursFunction('[Завтра '),
	            lastDay: processHoursFunction('[Вчора '),
	            nextWeek: processHoursFunction('[У] dddd ['),
	            lastWeek: function () {
	                switch (this.day()) {
	                    case 0:
	                    case 3:
	                    case 5:
	                    case 6:
	                        return processHoursFunction('[Минулої] dddd [').call(this);
	                    case 1:
	                    case 2:
	                    case 4:
	                        return processHoursFunction('[Минулого] dddd [').call(this);
	                }
	            },
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : 'за %s',
	            past : '%s тому',
	            s : 'декілька секунд',
	            m : relativeTimeWithPlural,
	            mm : relativeTimeWithPlural,
	            h : 'годину',
	            hh : relativeTimeWithPlural,
	            d : 'день',
	            dd : relativeTimeWithPlural,
	            M : 'місяць',
	            MM : relativeTimeWithPlural,
	            y : 'рік',
	            yy : relativeTimeWithPlural
	        },
	        // M. E.: those two are virtually unused but a user might want to implement them for his/her website for some reason
	        meridiemParse: /ночі|ранку|дня|вечора/,
	        isPM: function (input) {
	            return /^(дня|вечора)$/.test(input);
	        },
	        meridiem : function (hour, minute, isLower) {
	            if (hour < 4) {
	                return 'ночі';
	            } else if (hour < 12) {
	                return 'ранку';
	            } else if (hour < 17) {
	                return 'дня';
	            } else {
	                return 'вечора';
	            }
	        },
	        ordinalParse: /\d{1,2}-(й|го)/,
	        ordinal: function (number, period) {
	            switch (period) {
	                case 'M':
	                case 'd':
	                case 'DDD':
	                case 'w':
	                case 'W':
	                    return number + '-й';
	                case 'D':
	                    return number + '-го';
	                default:
	                    return number;
	            }
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 1st is the first week of the year.
	        }
	    });

	    return uk;

	}));

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Uzbek [uz]
	//! author : Sardor Muminov : https://github.com/muminoff

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var uz = moment.defineLocale('uz', {
	        months : 'январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр'.split('_'),
	        monthsShort : 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
	        weekdays : 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
	        weekdaysShort : 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
	        weekdaysMin : 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'D MMMM YYYY, dddd HH:mm'
	        },
	        calendar : {
	            sameDay : '[Бугун соат] LT [да]',
	            nextDay : '[Эртага] LT [да]',
	            nextWeek : 'dddd [куни соат] LT [да]',
	            lastDay : '[Кеча соат] LT [да]',
	            lastWeek : '[Утган] dddd [куни соат] LT [да]',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'Якин %s ичида',
	            past : 'Бир неча %s олдин',
	            s : 'фурсат',
	            m : 'бир дакика',
	            mm : '%d дакика',
	            h : 'бир соат',
	            hh : '%d соат',
	            d : 'бир кун',
	            dd : '%d кун',
	            M : 'бир ой',
	            MM : '%d ой',
	            y : 'бир йил',
	            yy : '%d йил'
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 7  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return uz;

	}));

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Vietnamese [vi]
	//! author : Bang Nguyen : https://github.com/bangnk

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var vi = moment.defineLocale('vi', {
	        months : 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
	        monthsShort : 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
	        weekdaysShort : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysMin : 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
	        weekdaysParseExact : true,
	        meridiemParse: /sa|ch/i,
	        isPM : function (input) {
	            return /^ch$/i.test(input);
	        },
	        meridiem : function (hours, minutes, isLower) {
	            if (hours < 12) {
	                return isLower ? 'sa' : 'SA';
	            } else {
	                return isLower ? 'ch' : 'CH';
	            }
	        },
	        longDateFormat : {
	            LT : 'HH:mm',
	            LTS : 'HH:mm:ss',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM [năm] YYYY',
	            LLL : 'D MMMM [năm] YYYY HH:mm',
	            LLLL : 'dddd, D MMMM [năm] YYYY HH:mm',
	            l : 'DD/M/YYYY',
	            ll : 'D MMM YYYY',
	            lll : 'D MMM YYYY HH:mm',
	            llll : 'ddd, D MMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay: '[Hôm nay lúc] LT',
	            nextDay: '[Ngày mai lúc] LT',
	            nextWeek: 'dddd [tuần tới lúc] LT',
	            lastDay: '[Hôm qua lúc] LT',
	            lastWeek: 'dddd [tuần rồi lúc] LT',
	            sameElse: 'L'
	        },
	        relativeTime : {
	            future : '%s tới',
	            past : '%s trước',
	            s : 'vài giây',
	            m : 'một phút',
	            mm : '%d phút',
	            h : 'một giờ',
	            hh : '%d giờ',
	            d : 'một ngày',
	            dd : '%d ngày',
	            M : 'một tháng',
	            MM : '%d tháng',
	            y : 'một năm',
	            yy : '%d năm'
	        },
	        ordinalParse: /\d{1,2}/,
	        ordinal : function (number) {
	            return number;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return vi;

	}));

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Pseudo [x-pseudo]
	//! author : Andrew Hood : https://github.com/andrewhood125

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var x_pseudo = moment.defineLocale('x-pseudo', {
	        months : 'J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér'.split('_'),
	        monthsShort : 'J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc'.split('_'),
	        monthsParseExact : true,
	        weekdays : 'S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý'.split('_'),
	        weekdaysShort : 'S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát'.split('_'),
	        weekdaysMin : 'S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá'.split('_'),
	        weekdaysParseExact : true,
	        longDateFormat : {
	            LT : 'HH:mm',
	            L : 'DD/MM/YYYY',
	            LL : 'D MMMM YYYY',
	            LLL : 'D MMMM YYYY HH:mm',
	            LLLL : 'dddd, D MMMM YYYY HH:mm'
	        },
	        calendar : {
	            sameDay : '[T~ódá~ý át] LT',
	            nextDay : '[T~ómó~rró~w át] LT',
	            nextWeek : 'dddd [át] LT',
	            lastDay : '[Ý~ést~érdá~ý át] LT',
	            lastWeek : '[L~ást] dddd [át] LT',
	            sameElse : 'L'
	        },
	        relativeTime : {
	            future : 'í~ñ %s',
	            past : '%s á~gó',
	            s : 'á ~féw ~sécó~ñds',
	            m : 'á ~míñ~úté',
	            mm : '%d m~íñú~tés',
	            h : 'á~ñ hó~úr',
	            hh : '%d h~óúrs',
	            d : 'á ~dáý',
	            dd : '%d d~áýs',
	            M : 'á ~móñ~th',
	            MM : '%d m~óñt~hs',
	            y : 'á ~ýéár',
	            yy : '%d ý~éárs'
	        },
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (~~(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        },
	        week : {
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return x_pseudo;

	}));

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (China) [zh-cn]
	//! author : suupic : https://github.com/suupic
	//! author : Zeno Zeng : https://github.com/zenozeng

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var zh_cn = moment.defineLocale('zh-cn', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '周日_周一_周二_周三_周四_周五_周六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah点mm分',
	            LTS : 'Ah点m分s秒',
	            L : 'YYYY-MM-DD',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日Ah点mm分',
	            LLLL : 'YYYY年MMMD日ddddAh点mm分',
	            l : 'YYYY-MM-DD',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日Ah点mm分',
	            llll : 'YYYY年MMMD日ddddAh点mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour: function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' ||
	                    meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            } else {
	                // '中午'
	                return hour >= 11 ? hour : hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : function () {
	                return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
	            },
	            nextDay : function () {
	                return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
	            },
	            lastDay : function () {
	                return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
	            },
	            nextWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            lastWeek : function () {
	                var startOfWeek, prefix;
	                startOfWeek = moment().startOf('week');
	                prefix = this.unix() < startOfWeek.unix()  ? '[上]' : '[本]';
	                return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
	            },
	            sameElse : 'LL'
	        },
	        ordinalParse: /\d{1,2}(日|月|周)/,
	        ordinal : function (number, period) {
	            switch (period) {
	                case 'd':
	                case 'D':
	                case 'DDD':
	                    return number + '日';
	                case 'M':
	                    return number + '月';
	                case 'w':
	                case 'W':
	                    return number + '周';
	                default:
	                    return number;
	            }
	        },
	        relativeTime : {
	            future : '%s内',
	            past : '%s前',
	            s : '几秒',
	            m : '1 分钟',
	            mm : '%d 分钟',
	            h : '1 小时',
	            hh : '%d 小时',
	            d : '1 天',
	            dd : '%d 天',
	            M : '1 个月',
	            MM : '%d 个月',
	            y : '1 年',
	            yy : '%d 年'
	        },
	        week : {
	            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
	            dow : 1, // Monday is the first day of the week.
	            doy : 4  // The week that contains Jan 4th is the first week of the year.
	        }
	    });

	    return zh_cn;

	}));

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	//! moment.js locale configuration
	//! locale : Chinese (Taiwan) [zh-tw]
	//! author : Ben : https://github.com/ben-lin
	//! author : Chris Lam : https://github.com/hehachris

	;(function (global, factory) {
	    true ? factory(__webpack_require__(4)) :
	   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
	   factory(global.moment)
	}(this, function (moment) { 'use strict';


	    var zh_tw = moment.defineLocale('zh-tw', {
	        months : '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
	        monthsShort : '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
	        weekdays : '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
	        weekdaysShort : '週日_週一_週二_週三_週四_週五_週六'.split('_'),
	        weekdaysMin : '日_一_二_三_四_五_六'.split('_'),
	        longDateFormat : {
	            LT : 'Ah點mm分',
	            LTS : 'Ah點m分s秒',
	            L : 'YYYY年MMMD日',
	            LL : 'YYYY年MMMD日',
	            LLL : 'YYYY年MMMD日Ah點mm分',
	            LLLL : 'YYYY年MMMD日ddddAh點mm分',
	            l : 'YYYY年MMMD日',
	            ll : 'YYYY年MMMD日',
	            lll : 'YYYY年MMMD日Ah點mm分',
	            llll : 'YYYY年MMMD日ddddAh點mm分'
	        },
	        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
	        meridiemHour : function (hour, meridiem) {
	            if (hour === 12) {
	                hour = 0;
	            }
	            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
	                return hour;
	            } else if (meridiem === '中午') {
	                return hour >= 11 ? hour : hour + 12;
	            } else if (meridiem === '下午' || meridiem === '晚上') {
	                return hour + 12;
	            }
	        },
	        meridiem : function (hour, minute, isLower) {
	            var hm = hour * 100 + minute;
	            if (hm < 600) {
	                return '凌晨';
	            } else if (hm < 900) {
	                return '早上';
	            } else if (hm < 1130) {
	                return '上午';
	            } else if (hm < 1230) {
	                return '中午';
	            } else if (hm < 1800) {
	                return '下午';
	            } else {
	                return '晚上';
	            }
	        },
	        calendar : {
	            sameDay : '[今天]LT',
	            nextDay : '[明天]LT',
	            nextWeek : '[下]ddddLT',
	            lastDay : '[昨天]LT',
	            lastWeek : '[上]ddddLT',
	            sameElse : 'L'
	        },
	        ordinalParse: /\d{1,2}(日|月|週)/,
	        ordinal : function (number, period) {
	            switch (period) {
	                case 'd' :
	                case 'D' :
	                case 'DDD' :
	                    return number + '日';
	                case 'M' :
	                    return number + '月';
	                case 'w' :
	                case 'W' :
	                    return number + '週';
	                default :
	                    return number;
	            }
	        },
	        relativeTime : {
	            future : '%s內',
	            past : '%s前',
	            s : '幾秒',
	            m : '1 分鐘',
	            mm : '%d 分鐘',
	            h : '1 小時',
	            hh : '%d 小時',
	            d : '1 天',
	            dd : '%d 天',
	            M : '1 個月',
	            MM : '%d 個月',
	            y : '1 年',
	            yy : '%d 年'
	        }
	    });

	    return zh_tw;

	}));

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(109),
	    now = __webpack_require__(110),
	    toNumber = __webpack_require__(113);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide `options` to indicate whether `func` should be invoked on the
	 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent
	 * calls to the debounced function return the result of the last `func`
	 * invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the debounced function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
	 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastInvokeTime = 0;
	    lastArgs = lastCallTime = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(111);

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred invocation.
	 */
	var now = function() {
	  return root.Date.now();
	};

	module.exports = now;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(112);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 112 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(109),
	    isSymbol = __webpack_require__(114);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(115);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var createRange = __webpack_require__(117);

	/**
	 * Creates an array of numbers (positive and/or negative) progressing from
	 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
	 * `start` is specified without an `end` or `step`. If `end` is not specified,
	 * it's set to `start` with `start` then set to `0`.
	 *
	 * **Note:** JavaScript follows the IEEE-754 standard for resolving
	 * floating-point values which can produce unexpected results.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {number} [start=0] The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} [step=1] The value to increment or decrement by.
	 * @returns {Array} Returns the range of numbers.
	 * @see _.inRange, _.rangeRight
	 * @example
	 *
	 * _.range(4);
	 * // => [0, 1, 2, 3]
	 *
	 * _.range(-4);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 5);
	 * // => [1, 2, 3, 4]
	 *
	 * _.range(0, 20, 5);
	 * // => [0, 5, 10, 15]
	 *
	 * _.range(0, -4, -1);
	 * // => [0, -1, -2, -3]
	 *
	 * _.range(1, 4, 0);
	 * // => [1, 1, 1]
	 *
	 * _.range(0);
	 * // => []
	 */
	var range = createRange();

	module.exports = range;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseRange = __webpack_require__(118),
	    isIterateeCall = __webpack_require__(119),
	    toFinite = __webpack_require__(125);

	/**
	 * Creates a `_.range` or `_.rangeRight` function.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new range function.
	 */
	function createRange(fromRight) {
	  return function(start, end, step) {
	    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
	      end = step = undefined;
	    }
	    // Ensure the sign of `-0` is preserved.
	    start = toFinite(start);
	    if (end === undefined) {
	      end = start;
	      start = 0;
	    } else {
	      end = toFinite(end);
	    }
	    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
	    return baseRange(start, end, step, fromRight);
	  };
	}

	module.exports = createRange;


/***/ },
/* 118 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeCeil = Math.ceil,
	    nativeMax = Math.max;

	/**
	 * The base implementation of `_.range` and `_.rangeRight` which doesn't
	 * coerce arguments.
	 *
	 * @private
	 * @param {number} start The start of the range.
	 * @param {number} end The end of the range.
	 * @param {number} step The value to increment or decrement by.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Array} Returns the range of numbers.
	 */
	function baseRange(start, end, step, fromRight) {
	  var index = -1,
	      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
	      result = Array(length);

	  while (length--) {
	    result[fromRight ? length : ++index] = start;
	    start += step;
	  }
	  return result;
	}

	module.exports = baseRange;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(120),
	    isArrayLike = __webpack_require__(121),
	    isIndex = __webpack_require__(124),
	    isObject = __webpack_require__(109);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 120 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(122),
	    isLength = __webpack_require__(123);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(109);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 123 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 124 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(113);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}

	module.exports = toFinite;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	exports.scrollbarSize = exports.keyCodes = undefined;
	exports.getDaysInMonth = getDaysInMonth;
	exports.getMonthsForYear = getMonthsForYear;
	exports.getMonth = getMonth;
	exports.getWeeksInMonth = getWeeksInMonth;
	exports.getScrollSpeed = getScrollSpeed;
	exports.parseDate = parseDate;
	exports.validDate = validDate;
	exports.validParsedDate = validParsedDate;
	exports.validLayout = validLayout;
	exports.validDisplay = validDisplay;

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	__webpack_require__(127);

	var _scrollbarSize = __webpack_require__(128);

	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var keyCodes = exports.keyCodes = {
					enter: 13,
					left: 37,
					up: 38,
					right: 39,
					down: 40,
					shift: 16,
					control: 17,
					command: 91,
					escape: 27
	};

	function getDaysInMonth(date) {
					return (0, _moment2.default)(date).range('month').toArray('days');
	}

	function getMonthsForYear(year, min, max) {
					var months = void 0;

					if (min && min.year() == year) {
									months = _moment2.default.range([min, max && max.year() == year ? max : (0, _moment2.default)(min).endOf('year')]);
					} else if (max && max.year() == year) {
									months = _moment2.default.range([min && min.year() == year ? min : (0, _moment2.default)(year, 'YYYY').startOf('year'), max]);
					} else if (year) {
									months = (0, _moment2.default)(year, 'YYYY').range('year');
					} else {
									months = (0, _moment2.default)().range('year');
					}

					return months.toArray('months');
	}

	function getMonth(monthDate) {
					var rows = {};
					var daysInMonth = monthDate.daysInMonth();
					var year = monthDate.year();
					var month = monthDate.month();

					var week = void 0,
					    date = void 0,
					    lastWeekVal = void 0;
					var weekIndex = -1;

					for (var i = 0; i < daysInMonth; i++) {
									date = (0, _moment2.default)(new Date(year, month, i + 1));
									week = date.week();

									if (week !== lastWeekVal) {
													lastWeekVal = week;
													weekIndex++;
									}

									if (!rows[weekIndex]) {
													rows[weekIndex] = [];
									}

									rows[weekIndex].push({
													date: date,
													yyyymmdd: date.format('YYYYMMDD')
									});
					}

					return {
									date: monthDate,
									rows: Object.keys(rows).map(function (row) {
													return rows[row];
									})
					};
	}

	function getWeeksInMonth(date, locale) {
					var first = (0, _moment2.default)(date).startOf('month');
					var last = (0, _moment2.default)(date).endOf('month');
					var firstWeek = first.locale(locale.name).week();
					var lastWeek = last.locale(locale.name).week();

					// For those tricky months...
					//
					// SCENARIO 1
					// firstWeek = 48
					// lastWeek = 1
					//
					// SCENARIO 2
					// firstWeek = 48
					// lastWeek = 5
					if (firstWeek > lastWeek) {
									if (firstWeek > 50) {
													firstWeek = 0;
									} else {
													lastWeek = last.weeksInYear() + 1;
									}
					}

					var rows = lastWeek - firstWeek;

					// If the last week contains 7 days, we need to add an extra row
					if (last.clone().subtract(6, 'day').locale(locale.name).day() == locale.week.dow) {
									rows++;
					}

					return rows;
	}

	function getScrollSpeed(settings) {
					settings = settings || {};

					var lastPos,
					    newPos,
					    timer,
					    delta,
					    delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

					function clear() {
									lastPos = null;
									delta = 0;
					}

					clear();

					return function (scrollY) {
									newPos = scrollY;
									if (lastPos != null) {
													// && newPos < maxScroll
													delta = newPos - lastPos;
									}
									lastPos = newPos;
									clearTimeout(timer);
									timer = setTimeout(clear, delay);
									return delta;
					};
	}

	function parseDate(date) {
					if (date) {
									if (!date._isAMomentObject) date = (0, _moment2.default)(date);

									return {
													date: date,
													yyyymmdd: date.format('YYYYMMDD')
									};
					}
	}

	// Custom date prop validation
	function validDate(props, propName, componentName) {
					if (props[propName] && !(0, _moment2.default)(props[propName]).isValid()) {
									return new Error('Invalid prop `' + propName + '` supplied to ' + componentName + '. Should be a format supported by Moment.js, see http://momentjs.com/docs/.');
					}
	}

	// Custom date prop validation
	function validParsedDate(props, propName, componentName) {
					var prop = props[propName];

					if (prop.date && (0, _moment2.default)(prop.date).isValid() && prop.yyyymmdd && prop.yyyymmdd.length == 8) {
									// valid
					} else {
									return new Error('Invalid prop `' + propName + '` supplied to ' + componentName + '.');
					}
	}

	function validLayout(props, propName, componentName) {
					if (['portrait', 'landscape'].indexOf(props[propName]) == -1) {
									return new Error('Invalid prop `' + propName + '` supplied to ' + componentName + '. Should be one of `landscape` or `portrait`.');
					}
	}

	function validDisplay(props, propName, componentName) {
					if (['years', 'days'].indexOf(props[propName]) == -1) {
									return new Error('Invalid prop `' + propName + '` supplied to ' + componentName + '. Should be one of `days` or `years`.');
					}
	}

	var scrollbarSize = exports.scrollbarSize = (0, _scrollbarSize2.default)();

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function (a0) {
	      return (root['DateRange'] = factory(a0));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(require("moment"));
	  } else {
	    root['DateRange'] = factory(moment);
	  }
	}(this, function (moment) {

	//-----------------------------------------------------------------------------
	// Contstants
	//-----------------------------------------------------------------------------



	var INTERVALS = {
	  year:   true,
	  month:  true,
	  week:   true,
	  day:    true,
	  hour:   true,
	  minute: true,
	  second: true
	};


	//-----------------------------------------------------------------------------
	// Date Ranges
	//-----------------------------------------------------------------------------

	/**
	 * DateRange class to store ranges and query dates.
	 *
	 * @constructor
	 * @param {(Moment|Date)} start Start of interval
	 * @param {(Moment|Date)} end End of interval
	 *//**
	 * DateRange class to store ranges and query dates.
	 *
	 * @constructor
	 * @param {!Array} range Array containing start and end dates.
	 *//**
	 * DateRange class to store ranges and query dates.
	 *
	 * @constructor
	 * @param {!String} range String formatted as an IS0 8601 time interval
	 */
	function DateRange(start, end) {
	  var parts;
	  var s = start;
	  var e = end;

	  if (arguments.length === 1 || end === undefined) {
	    if (typeof start === 'object' && start.length === 2) {
	      s = start[0];
	      e = start[1];
	    }
	    else if (typeof start === 'string') {
	      parts = start.split('/');
	      s = parts[0];
	      e = parts[1];
	    }
	  }

	  this.start = (s === null) ? moment(-8640000000000000) : moment(s);
	  this.end   = (e === null) ? moment(8640000000000000) : moment(e);
	}

	/**
	 * Constructor for prototype.
	 *
	 * @type {DateRange}
	 */
	DateRange.prototype.constructor = DateRange;

	/**
	 * Deep clone range.
	 *
	 * @return {!DateRange}
	 */
	DateRange.prototype.clone = function() {
	  return moment().range(this.start, this.end);
	};

	/**
	 * Determine if the current interval contains a given moment/date/range.
	 *
	 * @param {(Moment|Date|DateRange)} other Date to check
	 * @param {!boolean} exclusive True if the to value is exclusive
	 *
	 * @return {!boolean}
	 */
	DateRange.prototype.contains = function(other, exclusive) {
	  var start = this.start;
	  var end   = this.end;

	  if (other instanceof DateRange) {
	    return start <= other.start && (end > other.end || (end.isSame(other.end) && !exclusive));
	  }
	  else {
	    return start <= other && (end > other || (end.isSame(other) && !exclusive));
	  }
	};

	/**
	 * Determine if the current date range overlaps a given date range.
	 *
	 * @param {!DateRange} range Date range to check
	 *
	 * @return {!boolean}
	 */
	DateRange.prototype.overlaps = function(range) {
	  return this.intersect(range) !== null;
	};

	/**
	 * Determine the intersecting periods from one or more date ranges.
	 *
	 * @param {!DateRange} other A date range to intersect with this one
	 *
	 * @return {DateRange} Returns the intersecting date or `null` if the ranges do
	 *                     not intersect
	 */
	DateRange.prototype.intersect = function(other) {
	  var start = this.start;
	  var end   = this.end;

	  if ((start <= other.start) && (other.start < end) && (end < other.end)) {
	    return new DateRange(other.start, end);
	  }
	  else if ((other.start < start) && (start < other.end) && (other.end <= end)) {
	    return new DateRange(start, other.end);
	  }
	  else if ((other.start < start) && (start <= end) && (end < other.end)) {
	    return this;
	  }
	  else if ((start <= other.start) && (other.start <= other.end) && (other.end <= end)) {
	    return other;
	  }

	  return null;
	};

	/**
	 * Merge date ranges if they intersect.
	 *
	 * @param {!DateRange} other A date range to add to this one
	 *
	 * @return {DateRange} Returns the new `DateRange` or `null` if they do not
	 *                     overlap
	 */
	DateRange.prototype.add = function(other) {
	  if (this.overlaps(other)) {
	    return new DateRange(moment.min(this.start, other.start), moment.max(this.end, other.end));
	  }

	  return null;
	};

	/**
	 * Subtract one range from another.
	 *
	 * @param {!DateRange} other A date range to substract from this one
	 *
	 * @return {!Array<DateRange>}
	 */
	DateRange.prototype.subtract = function(other) {
	  var start = this.start;
	  var end   = this.end;

	  if (this.intersect(other) === null) {
	    return [this];
	  }
	  else if ((other.start <= start) && (start < end) && (end <= other.end)) {
	    return [];
	  }
	  else if ((other.start <= start) && (start < other.end) && (other.end < end)) {
	    return [new DateRange(other.end, end)];
	  }
	  else if ((start < other.start) && (other.start < end) && (end <= other.end)) {
	    return [new DateRange(start, other.start)];
	  }
	  else if ((start < other.start) && (other.start < other.end) && (other.end < end)) {
	    return [new DateRange(start, other.start), new DateRange(other.end, end)];
	  }
	  else if ((start < other.start) && (other.start < end) && (other.end < end)) {
	    return [new DateRange(start, other.start), new DateRange(other.start, end)];
	  }
	};

	/**
	 * Build a n array of dates.
	 *
	 * @param {(!DateRange|String)} range Date range to be used for iteration or
	 *                                    shorthand string (shorthands:
	 *                                    http://momentjs.com/docs/#/manipulating/add/)
	 * @param {!boolean} exclusive Indicate that the end of the range should not
	 *                             be included in the iter.
	 *
	 * @return {!Array}
	 */
	DateRange.prototype.toArray = function(by, exclusive) {
	  var acc = [];
	  this.by(by, function(unit) {
	    acc.push(unit);
	  }, exclusive);
	  return acc;
	};

	/**
	 * Iterate over the date range by a given date range, executing a function
	 * for each sub-range.
	 *
	 * @param {(!DateRange|String)} range Date range to be used for iteration or
	 *                                    shorthand string (shorthands:
	 *                                    http://momentjs.com/docs/#/manipulating/add/)
	 * @param {!DateRange~by} hollaback Callback
	 * @param {!boolean} exclusive Indicate that the end of the range should not
	 *                             be included in the iter.
	 *
	 * @return {DateRange} `this`
	 */
	DateRange.prototype.by = function(range, hollaback, exclusive) {
	  if (typeof range === 'string') {
	    _byString.call(this, range, hollaback, exclusive);
	  }
	  else {
	    _byRange.call(this, range, hollaback, exclusive);
	  }
	  return this;
	};


	/**
	 * Callback executed for each sub-range.
	 *
	 * @callback DateRange~by
	 *
	 * @param {!Moment} current Current moment object for iteration
	 */

	/**
	 * @private
	 */
	function _byString(interval, hollaback, exclusive) {
	  var current = moment(this.start);

	  while (this.contains(current, exclusive)) {
	    hollaback.call(this, current.clone());
	    current.add(1, interval);
	  }
	}

	/**
	 * @private
	 */
	function _byRange(interval, hollaback, exclusive) {
	  var div = this / interval;
	  var l = Math.floor(div);

	  if (l === Infinity) { return; }
	  if (l === div && exclusive) {
	    l--;
	  }

	  for (var i = 0; i <= l; i++) {
	    hollaback.call(this, moment(this.start.valueOf() + interval.valueOf() * i));
	  }
	}

	/**
	 * Date range formatted as an [ISO8601 Time
	 * Interval](http://en.wikipedia.org/wiki/ISO_8601#Time_intervals).
	 *
	 * @return {!String}
	 */
	DateRange.prototype.toString = function() {
	  return this.start.format() + '/' + this.end.format();
	};

	/**
	 * Date range in milliseconds. Allows basic coercion math of date ranges.
	 *
	 * @return {!number}
	 */
	DateRange.prototype.valueOf = function() {
	  return this.end - this.start;
	};

	/**
	 * Center date of the range.
	 *
	 * @return {!Moment}
	 */
	DateRange.prototype.center = function() {
	  var center = this.start + this.diff() / 2;
	  return moment(center);
	};

	/**
	 * Date range toDate
	 *
	 * @return {!Array<Date>}
	 */
	DateRange.prototype.toDate = function() {
	  return [this.start.toDate(), this.end.toDate()];
	};

	/**
	 * Determine if this date range is the same as another.
	 *
	 * @param {!DateRange} other Another date range to compare to
	 *
	 * @return {!boolean}
	 */
	DateRange.prototype.isSame = function(other) {
	  return this.start.isSame(other.start) && this.end.isSame(other.end);
	};

	/**
	 * The difference of the end vs start.
	 *
	 * @param {number} unit Unit of difference, if no unit is passed in
	 *                      milliseconds are returned. E.g.: `"days"`, `"months"`,
	 *                      etc...
	 *
	 * @return {!number}
	 */
	DateRange.prototype.diff = function(unit) {
	  return this.end.diff(this.start, unit);
	};


	//-----------------------------------------------------------------------------
	// Moment Extensions
	//-----------------------------------------------------------------------------

	/**
	 * Build a date range.
	 *
	 * @param {(Moment|Date)} start Start of range
	 * @param {(Moment|Date)} end End of range
	 *
	 * @this {Moment}
	 *
	 * @return {!DateRange}
	 */
	moment.range = function(start, end) {
	  if (start in INTERVALS) {
	    return new DateRange(moment(this).startOf(start), moment(this).endOf(start));
	  }
	  else {
	    return new DateRange(start, end);
	  }
	};

	/**
	 * Expose constructor
	 *
	 * @const
	 */
	moment.range.constructor = DateRange;

	/**
	 * @deprecated
	 */
	moment.fn.range = moment.range;

	/**
	 * Check if the current moment is within a given date range.
	 *
	 * @param {!DateRange} range Date range to check
	 *
	 * @this {Moment}
	 *
	 * @return {!boolean}
	 */
	moment.fn.within = function(range) {
	  return range.contains(this._d);
	};


	//-----------------------------------------------------------------------------
	// Export
	//-----------------------------------------------------------------------------



	return DateRange;

	}));


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var canUseDOM = __webpack_require__(129);

	var size;

	module.exports = function (recalc) {
	  if (!size || recalc) {
	    if (canUseDOM) {
	      var scrollDiv = document.createElement('div');

	      scrollDiv.style.position = 'absolute';
	      scrollDiv.style.top = '-9999px';
	      scrollDiv.style.width = '50px';
	      scrollDiv.style.height = '50px';
	      scrollDiv.style.overflow = 'scroll';

	      document.body.appendChild(scrollDiv);
	      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	      document.body.removeChild(scrollDiv);
	    }
	  }

	  return size;
	};

/***/ },
/* 129 */
/***/ function(module, exports) {

	'use strict';
	module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ },
/* 130 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	  name: 'sv',
	  todayLabel: {
	    long: 'Idag'
	  },
	  blank: 'Välj ett datum...',
	  headerFormat: 'ddd, MMM Do',
	  week: {
	    dow: 1,
	    doy: 4
	  },
	  months: 'Januari_Februari_Mars_April_Maj_Juni_Juli_Augusti_September_Oktober_November_December'.split('_'),
	  monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
	  weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
	  weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
	  weekdaysMin: 'Sö_Må_Ti_On_To_Fr_Lö'.split('_'),
	  longDateFormat: {
	    LT: 'HH:mm',
	    L: 'YYYY-MM-DD',
	    LL: 'D MMMM YYYY',
	    LLL: 'D MMMM YYYY LT',
	    LLLL: 'dddd D MMMM YYYY LT'
	  },
	  calendar: {
	    sameDay: '[Idag] LT',
	    nextDay: '[Imorgon] LT',
	    lastDay: '[Igår] LT',
	    nextWeek: 'dddd LT',
	    lastWeek: '[Förra] dddd[en] LT',
	    sameElse: 'L'
	  },
	  relativeTime: {
	    future: 'om %s',
	    past: 'för %s sedan',
	    s: 'några sekunder',
	    m: 'en minut',
	    mm: '%d minuter',
	    h: 'en timme',
	    hh: '%d timmar',
	    d: 'en dag',
	    dd: '%d dagar',
	    M: 'en månad',
	    MM: '%d månader',
	    y: 'ett år',
	    yy: '%d år'
	  },
	  ordinalParse: /\d{1,2}(e|a)/,
	  ordinal: function ordinal(number) {
	    var b = number % 10,
	        output = ~~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
	    return number + output;
	  }
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {
	    textColor: {
	        default: '#3E3F40',
	        active: '#FFF'
	    },
	    weekBackground: '#EDEDED',
	    selectedWeekBackground: '#FF466E',
	    selectionColor: '#FF466E',
	    todayColor: '#F5387A',
	    weekdayColor: '#FFFFFF',
	    headerColor: '#448AFF',
	    floatingNav: {
	        background: 'rgba(56, 87, 138, 0.94)',
	        color: '#FFF',
	        chevron: '#FFA726'
	    }
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(133);

	var Today = function (_Component) {
		_inherits(Today, _Component);

		function Today() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Today);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Today.__proto__ || Object.getPrototypeOf(Today)).call.apply(_ref, [this].concat(args))), _this), _this.scrollToToday = function () {
				var scrollToDate = _this.props.scrollToDate;


				scrollToDate((0, _moment2.default)(), -40);
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Today, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps) {
				var _props = this.props;
				var locale = _props.locale;
				var show = _props.show;
				var theme = _props.theme;

				return nextProps.locale !== locale || nextProps.show !== show || nextProps.theme !== theme;
			}
		}, {
			key: 'render',
			value: function render() {
				var _classNames;

				var _props2 = this.props;
				var locale = _props2.locale;
				var show = _props2.show;
				var theme = _props2.theme;

				return _react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)(style.root, (_classNames = {}, _defineProperty(_classNames, style.show, show), _defineProperty(_classNames, style.chevronUp, show === 1), _defineProperty(_classNames, style.chevronDown, show === -1), _classNames)), style: { color: theme.floatingNav.color, backgroundColor: theme.floatingNav.background }, onClick: this.scrollToToday, ref: 'node' },
					_react2.default.createElement(
						'div',
						{ className: style.wrapper },
						locale.todayLabel.long,
						_react2.default.createElement('img', { className: style.chevron, width: '14', src: 'data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path fill="' + (theme.floatingNav.chevron || theme.floatingNav.color) + '" d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z"/></svg>' })
					)
				);
			}
		}]);

		return Today;
	}(_react.Component);

	Today.propTypes = {
		locale: _react.PropTypes.object,
		scrollToDate: _react.PropTypes.func,
		show: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
		theme: _react.PropTypes.object
	};
	exports.default = Today;

/***/ },
/* 133 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Today__root","show":"Cal__Today__show","chevron":"Cal__Today__chevron","chevronUp":"Cal__Today__chevronUp","chevronDown":"Cal__Today__chevronDown"};

/***/ },
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _reactAddonsCssTransitionGroup = __webpack_require__(139);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(140);
	var animation = __webpack_require__(142);

	var Header = function (_Component) {
		_inherits(Header, _Component);

		function Header() {
			_classCallCheck(this, Header);

			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}

		_createClass(Header, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps) {
				return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
			}
		}, {
			key: 'render',
			value: function render() {
				var _classNames;

				var _props = this.props;
				var display = _props.display;
				var layout = _props.layout;
				var locale = _props.locale;
				var scrollToDate = _props.scrollToDate;
				var selectedDate = _props.selectedDate;
				var setDisplay = _props.setDisplay;
				var shouldHeaderAnimate = _props.shouldHeaderAnimate;
				var theme = _props.theme;

				var values = selectedDate && [{
					item: 'year',
					value: selectedDate.year(),
					active: display === 'years',
					title: display === 'days' ? 'Change year' : null,
					handleClick: function handleClick(e) {
						e && e.stopPropagation();
						setDisplay('years');
					}
				}, {
					item: 'day',
					key: selectedDate.format('YYYYMMDD'),
					value: selectedDate.format(locale.headerFormat),
					active: display === 'days',
					title: display === 'days' ? 'Scroll to ' + selectedDate.format(locale.headerFormat) : null,
					handleClick: function handleClick(e) {
						e && e.stopPropagation();

						if (display !== 'days') {
							setDisplay('days');
						} else if (selectedDate) {
							scrollToDate(selectedDate, -40);
						}
					}
				}];

				return _react2.default.createElement(
					'div',
					{ className: (0, _classnames2.default)(style.root, (_classNames = {}, _defineProperty(_classNames, style.blank, !selectedDate), _defineProperty(_classNames, style.landscape, layout == 'landscape'), _classNames)), style: theme && { backgroundColor: theme.headerColor, color: theme.textColor.active } },
					selectedDate ? _react2.default.createElement(
						'div',
						{ className: style.wrapper, 'aria-label': selectedDate.format(locale.headerFormat + ' YYYY') },
						values.map(function (_ref) {
							var handleClick = _ref.handleClick;
							var item = _ref.item;
							var key = _ref.key;
							var value = _ref.value;
							var active = _ref.active;
							var title = _ref.title;

							return _react2.default.createElement(
								'div',
								{ key: item, className: (0, _classnames2.default)(style.dateWrapper, style[item], _defineProperty({}, style.active, active)), title: title },
								_react2.default.createElement(
									_reactAddonsCssTransitionGroup2.default,
									{ transitionName: animation, transitionEnterTimeout: 250, transitionLeaveTimeout: 250, transitionEnter: shouldHeaderAnimate, transitionLeave: shouldHeaderAnimate },
									_react2.default.createElement(
										'span',
										{ key: item + '-' + (key || value), className: style.date, 'aria-hidden': true, onClick: handleClick },
										value
									)
								)
							);
						})
					) : _react2.default.createElement(
						'div',
						{ className: style.wrapper },
						locale.blank
					)
				);
			}
		}]);

		return Header;
	}(_react.Component);

	Header.propTypes = {
		layout: _react.PropTypes.string,
		locale: _react.PropTypes.object,
		onClick: _react.PropTypes.func,
		selectedDate: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.bool]),
		shouldHeaderAnimate: _react.PropTypes.bool,
		theme: _react.PropTypes.object,
		display: _react.PropTypes.string
	};
	exports.default = Header;

/***/ },
/* 138 */
/***/ function(module, exports) {

	module.exports = React.addons.shallowCompare;

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = React.addons.CSSTransitionGroup;

/***/ },
/* 140 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Header__root","blank":"Cal__Header__blank","wrapper":"Cal__Header__wrapper","landscape":"Cal__Header__landscape","dateWrapper":"Cal__Header__dateWrapper","day":"Cal__Header__day","active":"Cal__Header__active","year":"Cal__Header__year","date":"Cal__Header__date"};

/***/ },
/* 141 */,
/* 142 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"enter":"Cal__Animation__enter","enterActive":"Cal__Animation__enterActive","leave":"Cal__Animation__leave","leaveActive":"Cal__Animation__leaveActive"};

/***/ },
/* 143 */,
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactVirtualized = __webpack_require__(145);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	var _utils = __webpack_require__(126);

	var _Month = __webpack_require__(193);

	var _Month2 = _interopRequireDefault(_Month);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(202);

	var List = function (_Component) {
		_inherits(List, _Component);

		function List() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, List);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), _this), _this.cache = {}, _this.state = {}, _this.memoize = function (param) {
				if (!this.cache[param]) {
					var result = (0, _utils.getMonth)(param); //custom function
					this.cache[param] = result;
				}
				return this.cache[param];
			}, _this.monthHeights = [], _this.getMonthHeight = function (_ref2) {
				var index = _ref2.index;

				if (!_this.monthHeights[index]) {
					var _this$props = _this.props;
					var locale = _this$props.locale;
					var months = _this$props.months;
					var rowHeight = _this$props.rowHeight;

					var date = months[index];
					var weeks = (0, _utils.getWeeksInMonth)(date, locale);
					var height = weeks * rowHeight;
					_this.monthHeights[index] = height;
				}

				return _this.monthHeights[index];
			}, _this.getMonthIndex = function (date) {
				var min = _this.props.min.date;
				var index = date.diff(min, 'months');

				return index;
			}, _this.getDateOffset = function (date) {
				var _this$props2 = _this.props;
				var min = _this$props2.min;
				var rowHeight = _this$props2.rowHeight;

				var weeks = date.clone().startOf('week').diff(min.date.clone().startOf('month'), 'weeks');

				return weeks * rowHeight + rowHeight;
			}, _this.getCurrentOffset = function () {
				if (_this.scrollEl) {
					return _this.scrollEl.scrollTop;
				}
			}, _this.scrollToDate = function (date) {
				var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

				var offsetTop = _this.getDateOffset(date);
				_this.scrollTo(offsetTop + offset);
			}, _this.scrollTo = function () {
				var scrollTop = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

				if (_this.scrollEl) {
					_this.scrollEl.scrollTop = scrollTop;
				}
			}, _this.renderMonth = function (_ref3) {
				var index = _ref3.index;
				var isScrolling = _ref3.isScrolling;
				var _this$props3 = _this.props;
				var disabledDates = _this$props3.disabledDates;
				var disabledDays = _this$props3.disabledDays;
				var locale = _this$props3.locale;
				var months = _this$props3.months;
				var maxDate = _this$props3.maxDate;
				var minDate = _this$props3.minDate;
				var onDaySelect = _this$props3.onDaySelect;
				var onWeekSelect = _this$props3.onWeekSelect;
				var rowHeight = _this$props3.rowHeight;
				var selectedDate = _this$props3.selectedDate;
				var selectedWeek = _this$props3.selectedWeek;
				var showOverlay = _this$props3.showOverlay;
				var theme = _this$props3.theme;
				var today = _this$props3.today;
				var showSelectionText = _this$props3.showSelectionText;
				var hideYearsOnDate = _this$props3.hideYearsOnDate;

				var _this$memoize = _this.memoize(months[index]);

				var date = _this$memoize.date;
				var rows = _this$memoize.rows;
				var weeks = _this$memoize.weeks;


				return _react2.default.createElement(_Month2.default, {
					key: 'Month-' + index,
					selectedDate: selectedDate,
					selectedWeek: selectedWeek,
					displayDate: date,
					disabledDates: disabledDates,
					disabledDays: disabledDays,
					maxDate: maxDate,
					minDate: minDate,
					onDaySelect: onDaySelect,
					onWeekSelect: onWeekSelect,
					rows: rows,
					weeks: weeks,
					rowHeight: rowHeight,
					isScrolling: isScrolling,
					showOverlay: showOverlay,
					today: today,
					theme: theme,
					locale: locale,
					showSelectionText: showSelectionText,
					hideYearsOnDate: hideYearsOnDate
				});
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(List, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				var vs = this.refs.VirtualScroll;
				var grid = vs && vs.Grid || vs && vs._grid;
				this.scrollEl = grid && grid._scrollingContainer;
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var height = _props.height;
				var isScrolling = _props.isScrolling;
				var onScroll = _props.onScroll;
				var overscanMonthCount = _props.overscanMonthCount;
				var months = _props.months;
				var rowHeight = _props.rowHeight;
				var selectedDate = _props.selectedDate;
				var today = _props.today;
				var width = _props.width;

				if (!this._initScrollTop) this._initScrollTop = this.getDateOffset(selectedDate && selectedDate.date || today.date);
				if (typeof width == 'string' && width.indexOf('%') !== -1) {
					width = window.innerWidth * parseInt(width.replace('%', ''), 10) / 100; // See https://github.com/bvaughn/react-virtualized/issues/229
				}

				return _react2.default.createElement(_reactVirtualized.VirtualScroll, {
					ref: 'VirtualScroll',
					width: width,
					height: height,
					rowCount: months.length,
					rowHeight: this.getMonthHeight,
					estimatedRowSize: rowHeight * 5,
					rowRenderer: this.renderMonth,
					onScroll: onScroll,
					scrollTop: this._initScrollTop,
					className: (0, _classnames2.default)(style.root, _defineProperty({}, style.scrolling, isScrolling)),
					style: { lineHeight: rowHeight + 'px' },
					overscanRowCount: overscanMonthCount
				});
			}
		}]);

		return List;
	}(_react.Component);

	List.propTypes = {
		width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
		height: _react.PropTypes.number,
		rowHeight: _react.PropTypes.number,
		selectedDate: _react.PropTypes.object,
		selectedWeek: _react.PropTypes.object,
		disabledDates: _react.PropTypes.arrayOf(_react.PropTypes.string),
		disabledDays: _react.PropTypes.arrayOf(_react.PropTypes.number),
		months: _react.PropTypes.arrayOf(_react.PropTypes.object),
		onDaySelect: _react.PropTypes.func,
		onWeekSelect: _react.PropTypes.func,
		onScroll: _react.PropTypes.func,
		overscanMonthCount: _react.PropTypes.number,
		isScrolling: _react.PropTypes.bool,
		today: _utils.validParsedDate,
		min: _utils.validParsedDate,
		minDate: _utils.validParsedDate,
		maxDate: _utils.validParsedDate,
		showOverlay: _react.PropTypes.bool,
		theme: _react.PropTypes.object,
		locale: _react.PropTypes.object,
		showSelectionText: _react.PropTypes.bool,
		hideYearsOnDate: _react.PropTypes.bool
	};
	exports.default = List;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _ArrowKeyStepper = __webpack_require__(146);

	Object.defineProperty(exports, 'ArrowKeyStepper', {
	  enumerable: true,
	  get: function get() {
	    return _ArrowKeyStepper.ArrowKeyStepper;
	  }
	});

	var _AutoSizer = __webpack_require__(148);

	Object.defineProperty(exports, 'AutoSizer', {
	  enumerable: true,
	  get: function get() {
	    return _AutoSizer.AutoSizer;
	  }
	});

	var _CellMeasurer = __webpack_require__(151);

	Object.defineProperty(exports, 'CellMeasurer', {
	  enumerable: true,
	  get: function get() {
	    return _CellMeasurer.CellMeasurer;
	  }
	});
	Object.defineProperty(exports, 'defaultCellMeasurerCellSizeCache', {
	  enumerable: true,
	  get: function get() {
	    return _CellMeasurer.defaultCellSizeCache;
	  }
	});

	var _Collection = __webpack_require__(155);

	Object.defineProperty(exports, 'Collection', {
	  enumerable: true,
	  get: function get() {
	    return _Collection.Collection;
	  }
	});

	var _ColumnSizer = __webpack_require__(166);

	Object.defineProperty(exports, 'ColumnSizer', {
	  enumerable: true,
	  get: function get() {
	    return _ColumnSizer.ColumnSizer;
	  }
	});

	var _FlexTable = __webpack_require__(176);

	Object.defineProperty(exports, 'defaultFlexTableCellDataGetter', {
	  enumerable: true,
	  get: function get() {
	    return _FlexTable.defaultCellDataGetter;
	  }
	});
	Object.defineProperty(exports, 'defaultFlexTableCellRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _FlexTable.defaultCellRenderer;
	  }
	});
	Object.defineProperty(exports, 'defaultFlexTableHeaderRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _FlexTable.defaultHeaderRenderer;
	  }
	});
	Object.defineProperty(exports, 'defaultFlexTableRowRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _FlexTable.defaultRowRenderer;
	  }
	});
	Object.defineProperty(exports, 'FlexTable', {
	  enumerable: true,
	  get: function get() {
	    return _FlexTable.FlexTable;
	  }
	});
	Object.defineProperty(exports, 'FlexColumn', {
	  enumerable: true,
	  get: function get() {
	    return _FlexTable.FlexColumn;
	  }
	});
	Object.defineProperty(exports, 'SortDirection', {
	  enumerable: true,
	  get: function get() {
	    return _FlexTable.SortDirection;
	  }
	});
	Object.defineProperty(exports, 'SortIndicator', {
	  enumerable: true,
	  get: function get() {
	    return _FlexTable.SortIndicator;
	  }
	});

	var _Grid = __webpack_require__(168);

	Object.defineProperty(exports, 'defaultCellRangeRenderer', {
	  enumerable: true,
	  get: function get() {
	    return _Grid.defaultCellRangeRenderer;
	  }
	});
	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _Grid.Grid;
	  }
	});

	var _InfiniteLoader = __webpack_require__(185);

	Object.defineProperty(exports, 'InfiniteLoader', {
	  enumerable: true,
	  get: function get() {
	    return _InfiniteLoader.InfiniteLoader;
	  }
	});

	var _ScrollSync = __webpack_require__(187);

	Object.defineProperty(exports, 'ScrollSync', {
	  enumerable: true,
	  get: function get() {
	    return _ScrollSync.ScrollSync;
	  }
	});

	var _VirtualScroll = __webpack_require__(189);

	Object.defineProperty(exports, 'VirtualScroll', {
	  enumerable: true,
	  get: function get() {
	    return _VirtualScroll.VirtualScroll;
	  }
	});

	var _WindowScroller = __webpack_require__(191);

	Object.defineProperty(exports, 'WindowScroller', {
	  enumerable: true,
	  get: function get() {
	    return _WindowScroller.WindowScroller;
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ArrowKeyStepper = exports.default = undefined;

	var _ArrowKeyStepper2 = __webpack_require__(147);

	var _ArrowKeyStepper3 = _interopRequireDefault(_ArrowKeyStepper2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ArrowKeyStepper3.default;
	exports.ArrowKeyStepper = _ArrowKeyStepper3.default;

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * This HOC decorates a virtualized component and responds to arrow-key events by scrolling one row or column at a time.
	 */

	var ArrowKeyStepper = function (_Component) {
	  _inherits(ArrowKeyStepper, _Component);

	  function ArrowKeyStepper(props, context) {
	    _classCallCheck(this, ArrowKeyStepper);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArrowKeyStepper).call(this, props, context));

	    _this.state = {
	      scrollToColumn: 0,
	      scrollToRow: 0
	    };

	    _this._columnStartIndex = 0;
	    _this._columnStopIndex = 0;
	    _this._rowStartIndex = 0;
	    _this._rowStopIndex = 0;

	    _this._onKeyDown = _this._onKeyDown.bind(_this);
	    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
	    return _this;
	  }

	  _createClass(ArrowKeyStepper, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var className = _props.className;
	      var children = _props.children;
	      var _state = this.state;
	      var scrollToColumn = _state.scrollToColumn;
	      var scrollToRow = _state.scrollToRow;


	      return _react2.default.createElement(
	        'div',
	        {
	          className: className,
	          onKeyDown: this._onKeyDown
	        },
	        children({
	          onSectionRendered: this._onSectionRendered,
	          scrollToColumn: scrollToColumn,
	          scrollToRow: scrollToRow
	        })
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_onKeyDown',
	    value: function _onKeyDown(event) {
	      var _props2 = this.props;
	      var columnCount = _props2.columnCount;
	      var rowCount = _props2.rowCount;

	      // The above cases all prevent default event event behavior.
	      // This is to keep the grid from scrolling after the snap-to update.

	      switch (event.key) {
	        case 'ArrowDown':
	          event.preventDefault();
	          this.setState({
	            scrollToRow: Math.min(this._rowStopIndex + 1, rowCount - 1)
	          });
	          break;
	        case 'ArrowLeft':
	          event.preventDefault();
	          this.setState({
	            scrollToColumn: Math.max(this._columnStartIndex - 1, 0)
	          });
	          break;
	        case 'ArrowRight':
	          event.preventDefault();
	          this.setState({
	            scrollToColumn: Math.min(this._columnStopIndex + 1, columnCount - 1)
	          });
	          break;
	        case 'ArrowUp':
	          event.preventDefault();
	          this.setState({
	            scrollToRow: Math.max(this._rowStartIndex - 1, 0)
	          });
	          break;
	      }
	    }
	  }, {
	    key: '_onSectionRendered',
	    value: function _onSectionRendered(_ref) {
	      var columnStartIndex = _ref.columnStartIndex;
	      var columnStopIndex = _ref.columnStopIndex;
	      var rowStartIndex = _ref.rowStartIndex;
	      var rowStopIndex = _ref.rowStopIndex;

	      this._columnStartIndex = columnStartIndex;
	      this._columnStopIndex = columnStopIndex;
	      this._rowStartIndex = rowStartIndex;
	      this._rowStopIndex = rowStopIndex;
	    }
	  }]);

	  return ArrowKeyStepper;
	}(_react.Component);

	ArrowKeyStepper.propTypes = {
	  children: _react.PropTypes.func.isRequired,
	  className: _react.PropTypes.string,
	  columnCount: _react.PropTypes.number.isRequired,
	  rowCount: _react.PropTypes.number.isRequired
	};
	exports.default = ArrowKeyStepper;

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AutoSizer = exports.default = undefined;

	var _AutoSizer2 = __webpack_require__(149);

	var _AutoSizer3 = _interopRequireDefault(_AutoSizer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _AutoSizer3.default;
	exports.AutoSizer = _AutoSizer3.default;

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Decorator component that automatically adjusts the width and height of a single child.
	 * Child component should not be declared as a child but should rather be specified by a `ChildComponent` property.
	 * All other properties will be passed through to the child component.
	 */

	var AutoSizer = function (_Component) {
	  _inherits(AutoSizer, _Component);

	  function AutoSizer(props) {
	    _classCallCheck(this, AutoSizer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AutoSizer).call(this, props));

	    _this.state = {
	      height: 0,
	      width: 0
	    };

	    _this._onResize = _this._onResize.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._setRef = _this._setRef.bind(_this);
	    return _this;
	  }

	  _createClass(AutoSizer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Defer requiring resize handler in order to support server-side rendering.
	      // See issue #41
	      this._detectElementResize = __webpack_require__(150);
	      this._detectElementResize.addResizeListener(this._parentNode, this._onResize);

	      this._onResize();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._detectElementResize) {
	        this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var disableHeight = _props.disableHeight;
	      var disableWidth = _props.disableWidth;
	      var _state = this.state;
	      var height = _state.height;
	      var width = _state.width;

	      // Outer div should not force width/height since that may prevent containers from shrinking.
	      // Inner component should overflow and use calculated width/height.
	      // See issue #68 for more information.

	      var outerStyle = { overflow: 'visible' };

	      if (!disableHeight) {
	        outerStyle.height = 0;
	      }

	      if (!disableWidth) {
	        outerStyle.width = 0;
	      }

	      return _react2.default.createElement(
	        'div',
	        {
	          ref: this._setRef,
	          onScroll: this._onScroll,
	          style: outerStyle
	        },
	        children({ height: height, width: width })
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_onResize',
	    value: function _onResize() {
	      var onResize = this.props.onResize;

	      // Gaurd against AutoSizer component being removed from the DOM immediately after being added.
	      // This can result in invalid style values which can result in NaN values if we don't handle them.
	      // See issue #150 for more context.

	      var boundingRect = this._parentNode.getBoundingClientRect();
	      var height = boundingRect.height || 0;
	      var width = boundingRect.width || 0;

	      var style = getComputedStyle(this._parentNode);
	      var paddingLeft = parseInt(style.paddingLeft, 10) || 0;
	      var paddingRight = parseInt(style.paddingRight, 10) || 0;
	      var paddingTop = parseInt(style.paddingTop, 10) || 0;
	      var paddingBottom = parseInt(style.paddingBottom, 10) || 0;

	      this.setState({
	        height: height - paddingTop - paddingBottom,
	        width: width - paddingLeft - paddingRight
	      });

	      onResize({ height: height, width: width });
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(event) {
	      // Prevent detectElementResize library from being triggered by this scroll event.
	      event.stopPropagation();
	    }
	  }, {
	    key: '_setRef',
	    value: function _setRef(autoSizer) {
	      // In case the component has been unmounted
	      this._parentNode = autoSizer && autoSizer.parentNode;
	    }
	  }]);

	  return AutoSizer;
	}(_react.Component);

	AutoSizer.propTypes = {
	  /**
	   * Function respondible for rendering children.
	   * This function should implement the following signature:
	   * ({ height, width }) => PropTypes.element
	   */
	  children: _react.PropTypes.func.isRequired,

	  /** Disable dynamic :height property */
	  disableHeight: _react.PropTypes.bool,

	  /** Disable dynamic :width property */
	  disableWidth: _react.PropTypes.bool,

	  /** Callback to be invoked on-resize: ({ height, width }) */
	  onResize: _react.PropTypes.func.isRequired
	};
	AutoSizer.defaultProps = {
	  onResize: function onResize() {}
	};
	exports.default = AutoSizer;

/***/ },
/* 150 */
/***/ function(module, exports) {

	'use strict';

	/**
	* Detect Element Resize.
	* Forked in order to guard against unsafe 'window' and 'document' references.
	*
	* https://github.com/sdecima/javascript-detect-element-resize
	* Sebastian Decima
	*
	* version: 0.5.3
	**/

	// Check `document` and `window` in case of server-side rendering
	var _window;
	if (typeof window !== 'undefined') {
	  _window = window;
	} else if (typeof self !== 'undefined') {
	  _window = self;
	} else {
	  _window = undefined;
	}

	var attachEvent = typeof document !== 'undefined' && document.attachEvent;
	var stylesCreated = false;

	if (!attachEvent) {
	  var requestFrame = function () {
	    var raf = _window.requestAnimationFrame || _window.mozRequestAnimationFrame || _window.webkitRequestAnimationFrame || function (fn) {
	      return _window.setTimeout(fn, 20);
	    };
	    return function (fn) {
	      return raf(fn);
	    };
	  }();

	  var cancelFrame = function () {
	    var cancel = _window.cancelAnimationFrame || _window.mozCancelAnimationFrame || _window.webkitCancelAnimationFrame || _window.clearTimeout;
	    return function (id) {
	      return cancel(id);
	    };
	  }();

	  var resetTriggers = function resetTriggers(element) {
	    var triggers = element.__resizeTriggers__,
	        expand = triggers.firstElementChild,
	        contract = triggers.lastElementChild,
	        expandChild = expand.firstElementChild;
	    contract.scrollLeft = contract.scrollWidth;
	    contract.scrollTop = contract.scrollHeight;
	    expandChild.style.width = expand.offsetWidth + 1 + 'px';
	    expandChild.style.height = expand.offsetHeight + 1 + 'px';
	    expand.scrollLeft = expand.scrollWidth;
	    expand.scrollTop = expand.scrollHeight;
	  };

	  var checkTriggers = function checkTriggers(element) {
	    return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height;
	  };

	  var scrollListener = function scrollListener(e) {
	    var element = this;
	    resetTriggers(this);
	    if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
	    this.__resizeRAF__ = requestFrame(function () {
	      if (checkTriggers(element)) {
	        element.__resizeLast__.width = element.offsetWidth;
	        element.__resizeLast__.height = element.offsetHeight;
	        element.__resizeListeners__.forEach(function (fn) {
	          fn.call(element, e);
	        });
	      }
	    });
	  };

	  /* Detect CSS Animations support to detect element display/re-attach */
	  var animation = false,
	      animationstring = 'animation',
	      keyframeprefix = '',
	      animationstartevent = 'animationstart',
	      domPrefixes = 'Webkit Moz O ms'.split(' '),
	      startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
	      pfx = '';
	  {
	    var elm = document.createElement('fakeelement');
	    if (elm.style.animationName !== undefined) {
	      animation = true;
	    }

	    if (animation === false) {
	      for (var i = 0; i < domPrefixes.length; i++) {
	        if (elm.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
	          pfx = domPrefixes[i];
	          animationstring = pfx + 'Animation';
	          keyframeprefix = '-' + pfx.toLowerCase() + '-';
	          animationstartevent = startEvents[i];
	          animation = true;
	          break;
	        }
	      }
	    }
	  }

	  var animationName = 'resizeanim';
	  var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
	  var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
	}

	var createStyles = function createStyles() {
	  if (!stylesCreated) {
	    //opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
	    var css = (animationKeyframes ? animationKeyframes : '') + '.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
	        head = document.head || document.getElementsByTagName('head')[0],
	        style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = css;
	    } else {
	      style.appendChild(document.createTextNode(css));
	    }

	    head.appendChild(style);
	    stylesCreated = true;
	  }
	};

	var addResizeListener = function addResizeListener(element, fn) {
	  if (attachEvent) element.attachEvent('onresize', fn);else {
	    if (!element.__resizeTriggers__) {
	      if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
	      createStyles();
	      element.__resizeLast__ = {};
	      element.__resizeListeners__ = [];
	      (element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
	      element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
	      element.appendChild(element.__resizeTriggers__);
	      resetTriggers(element);
	      element.addEventListener('scroll', scrollListener, true);

	      /* Listen for a css animation to detect element display/re-attach */
	      animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function (e) {
	        if (e.animationName == animationName) resetTriggers(element);
	      });
	    }
	    element.__resizeListeners__.push(fn);
	  }
	};

	var removeResizeListener = function removeResizeListener(element, fn) {
	  if (attachEvent) element.detachEvent('onresize', fn);else {
	    element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
	    if (!element.__resizeListeners__.length) {
	      element.removeEventListener('scroll', scrollListener, true);
	      element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
	    }
	  }
	};

	module.exports = {
	  addResizeListener: addResizeListener,
	  removeResizeListener: removeResizeListener
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultCellSizeCache = exports.CellMeasurer = exports.default = undefined;

	var _CellMeasurer2 = __webpack_require__(152);

	var _CellMeasurer3 = _interopRequireDefault(_CellMeasurer2);

	var _defaultCellSizeCache2 = __webpack_require__(154);

	var _defaultCellSizeCache3 = _interopRequireDefault(_defaultCellSizeCache2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _CellMeasurer3.default;
	exports.CellMeasurer = _CellMeasurer3.default;
	exports.defaultCellSizeCache = _defaultCellSizeCache3.default;

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _reactDom = __webpack_require__(153);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _defaultCellSizeCache = __webpack_require__(154);

	var _defaultCellSizeCache2 = _interopRequireDefault(_defaultCellSizeCache);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Measures a Grid cell's contents by rendering them in a way that is not visible to the user.
	 * Either a fixed width or height may be provided if it is desirable to measure only in one direction.
	 */

	var CellMeasurer = function (_Component) {
	  _inherits(CellMeasurer, _Component);

	  function CellMeasurer(props, state) {
	    _classCallCheck(this, CellMeasurer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CellMeasurer).call(this, props, state));

	    _this._cellSizeCache = props.cellSizeCache || new _defaultCellSizeCache2.default();

	    _this.getColumnWidth = _this.getColumnWidth.bind(_this);
	    _this.getRowHeight = _this.getRowHeight.bind(_this);
	    _this.resetMeasurements = _this.resetMeasurements.bind(_this);
	    _this.resetMeasurementForColumn = _this.resetMeasurementForColumn.bind(_this);
	    _this.resetMeasurementForRow = _this.resetMeasurementForRow.bind(_this);
	    return _this;
	  }

	  _createClass(CellMeasurer, [{
	    key: 'getColumnWidth',
	    value: function getColumnWidth(_ref) {
	      var index = _ref.index;

	      if (this._cellSizeCache.hasColumnWidth(index)) {
	        return this._cellSizeCache.getColumnWidth(index);
	      }

	      var rowCount = this.props.rowCount;


	      var maxWidth = 0;

	      for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
	        var _measureCell2 = this._measureCell({
	          clientWidth: true,
	          columnIndex: index,
	          rowIndex: rowIndex
	        });

	        var width = _measureCell2.width;


	        maxWidth = Math.max(maxWidth, width);
	      }

	      this._cellSizeCache.setColumnWidth(index, maxWidth);

	      return maxWidth;
	    }
	  }, {
	    key: 'getRowHeight',
	    value: function getRowHeight(_ref2) {
	      var index = _ref2.index;

	      if (this._cellSizeCache.hasRowHeight(index)) {
	        return this._cellSizeCache.getRowHeight(index);
	      }

	      var columnCount = this.props.columnCount;


	      var maxHeight = 0;

	      for (var columnIndex = 0; columnIndex < columnCount; columnIndex++) {
	        var _measureCell3 = this._measureCell({
	          clientHeight: true,
	          columnIndex: columnIndex,
	          rowIndex: index
	        });

	        var height = _measureCell3.height;


	        maxHeight = Math.max(maxHeight, height);
	      }

	      this._cellSizeCache.setRowHeight(index, maxHeight);

	      return maxHeight;
	    }
	  }, {
	    key: 'resetMeasurementForColumn',
	    value: function resetMeasurementForColumn(columnIndex) {
	      this._cellSizeCache.clearColumnWidth(columnIndex);
	    }
	  }, {
	    key: 'resetMeasurementForRow',
	    value: function resetMeasurementForRow(rowIndex) {
	      this._cellSizeCache.clearRowHeight(rowIndex);
	    }
	  }, {
	    key: 'resetMeasurements',
	    value: function resetMeasurements() {
	      this._cellSizeCache.clearAllColumnWidths();
	      this._cellSizeCache.clearAllRowHeights();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._renderAndMount();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var cellSizeCache = this.props.cellSizeCache;


	      if (cellSizeCache !== nextProps.cellSizeCache) {
	        this._cellSizeCache = nextProps.cellSizeCache;
	      }

	      this._updateDivDimensions(nextProps);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this._unmountContainer();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;


	      return children({
	        getColumnWidth: this.getColumnWidth,
	        getRowHeight: this.getRowHeight,
	        resetMeasurements: this.resetMeasurements,
	        resetMeasurementForColumn: this.resetMeasurementForColumn,
	        resetMeasurementForRow: this.resetMeasurementForRow
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_getContainerNode',
	    value: function _getContainerNode(props) {
	      var container = props.container;


	      if (container) {
	        return _reactDom2.default.findDOMNode(typeof container === 'function' ? container() : container);
	      } else {
	        return document.body;
	      }
	    }
	  }, {
	    key: '_measureCell',
	    value: function _measureCell(_ref3) {
	      var _ref3$clientHeight = _ref3.clientHeight;
	      var clientHeight = _ref3$clientHeight === undefined ? false : _ref3$clientHeight;
	      var _ref3$clientWidth = _ref3.clientWidth;
	      var clientWidth = _ref3$clientWidth === undefined ? true : _ref3$clientWidth;
	      var columnIndex = _ref3.columnIndex;
	      var rowIndex = _ref3.rowIndex;
	      var cellRenderer = this.props.cellRenderer;


	      var rendered = cellRenderer({
	        columnIndex: columnIndex,
	        rowIndex: rowIndex
	      });

	      // Handle edge case where this method is called before the CellMeasurer has completed its initial render (and mounted).
	      this._renderAndMount();

	      // @TODO Keep an eye on this for future React updates as the interface may change:
	      // https://twitter.com/soprano/status/737316379712331776
	      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, rendered, this._div);

	      var measurements = {
	        height: clientHeight && this._div.clientHeight,
	        width: clientWidth && this._div.clientWidth
	      };

	      _reactDom2.default.unmountComponentAtNode(this._div);

	      return measurements;
	    }
	  }, {
	    key: '_renderAndMount',
	    value: function _renderAndMount() {
	      if (!this._div) {
	        this._div = document.createElement('div');
	        this._div.style.display = 'inline-block';
	        this._div.style.position = 'absolute';
	        this._div.style.visibility = 'hidden';
	        this._div.style.zIndex = -1;

	        this._updateDivDimensions(this.props);

	        this._containerNode = this._getContainerNode(this.props);
	        this._containerNode.appendChild(this._div);
	      }
	    }
	  }, {
	    key: '_unmountContainer',
	    value: function _unmountContainer() {
	      if (this._div) {
	        this._containerNode.removeChild(this._div);

	        this._div = null;
	      }

	      this._containerNode = null;
	    }
	  }, {
	    key: '_updateDivDimensions',
	    value: function _updateDivDimensions(props) {
	      var height = props.height;
	      var width = props.width;


	      if (height && height !== this._divHeight) {
	        this._divHeight = height;
	        this._div.style.height = height + 'px';
	      }

	      if (width && width !== this._divWidth) {
	        this._divWidth = width;
	        this._div.style.width = width + 'px';
	      }
	    }
	  }]);

	  return CellMeasurer;
	}(_react.Component);

	CellMeasurer.propTypes = {
	  /**
	   * Renders a cell given its indices.
	   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
	   */
	  cellRenderer: _react.PropTypes.func.isRequired,

	  /**
	   * Optional, custom caching strategy for cell sizes.
	   */
	  cellSizeCache: _react.PropTypes.object,

	  /**
	   * Function respondible for rendering a virtualized component.
	   * This function should implement the following signature:
	   * ({ getColumnWidth, getRowHeight, resetMeasurements }) => PropTypes.element
	   */
	  children: _react.PropTypes.func.isRequired,

	  /**
	   * Number of columns in grid.
	   */
	  columnCount: _react.PropTypes.number.isRequired,

	  /**
	   * A Node, Component instance, or function that returns either.
	   * If this property is not specified the document body will be used.
	   */
	  container: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.func, _react2.default.PropTypes.node]),

	  /**
	   * Assign a fixed :height in order to measure dynamic text :width only.
	   */
	  height: _react.PropTypes.number,

	  /**
	   * Number of rows in grid.
	   */
	  rowCount: _react.PropTypes.number.isRequired,

	  /**
	   * Assign a fixed :width in order to measure dynamic text :height only.
	   */
	  width: _react.PropTypes.number
	};
	exports.default = CellMeasurer;

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_153__;

/***/ },
/* 154 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Default CellMeasurer `cellSizeCache` implementation.
	 * Permanently caches all cell sizes (identified by column and row index) unless explicitly cleared.
	 */

	var CellSizeCache = function () {
	  function CellSizeCache() {
	    _classCallCheck(this, CellSizeCache);

	    this._cachedColumnWidths = {};
	    this._cachedRowHeights = {};
	  }

	  _createClass(CellSizeCache, [{
	    key: "clearAllColumnWidths",
	    value: function clearAllColumnWidths() {
	      this._cachedColumnWidths = {};
	    }
	  }, {
	    key: "clearAllRowHeights",
	    value: function clearAllRowHeights() {
	      this._cachedRowHeights = {};
	    }
	  }, {
	    key: "clearColumnWidth",
	    value: function clearColumnWidth(index) {
	      delete this._cachedColumnWidths[index];
	    }
	  }, {
	    key: "clearRowHeight",
	    value: function clearRowHeight(index) {
	      delete this._cachedRowHeights[index];
	    }
	  }, {
	    key: "getColumnWidth",
	    value: function getColumnWidth(index) {
	      return this._cachedColumnWidths[index];
	    }
	  }, {
	    key: "getRowHeight",
	    value: function getRowHeight(index) {
	      return this._cachedRowHeights[index];
	    }
	  }, {
	    key: "hasColumnWidth",
	    value: function hasColumnWidth(index) {
	      return this._cachedColumnWidths[index] >= 0;
	    }
	  }, {
	    key: "hasRowHeight",
	    value: function hasRowHeight(index) {
	      return this._cachedRowHeights[index] >= 0;
	    }
	  }, {
	    key: "setColumnWidth",
	    value: function setColumnWidth(index, width) {
	      this._cachedColumnWidths[index] = width;
	    }
	  }, {
	    key: "setRowHeight",
	    value: function setRowHeight(index, height) {
	      this._cachedRowHeights[index] = height;
	    }
	  }]);

	  return CellSizeCache;
	}();

	exports.default = CellSizeCache;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Collection = exports.default = undefined;

	var _Collection2 = __webpack_require__(156);

	var _Collection3 = _interopRequireDefault(_Collection2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Collection3.default;
	exports.Collection = _Collection3.default;

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _CollectionView = __webpack_require__(157);

	var _CollectionView2 = _interopRequireDefault(_CollectionView);

	var _calculateSizeAndPositionData2 = __webpack_require__(162);

	var _calculateSizeAndPositionData3 = _interopRequireDefault(_calculateSizeAndPositionData2);

	var _getUpdatedOffsetForIndex = __webpack_require__(165);

	var _getUpdatedOffsetForIndex2 = _interopRequireDefault(_getUpdatedOffsetForIndex);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Renders scattered or non-linear data.
	 * Unlike Grid, which renders checkerboard data, Collection can render arbitrarily positioned- even overlapping- data.
	 */

	var Collection = function (_Component) {
	  _inherits(Collection, _Component);

	  function Collection(props, context) {
	    _classCallCheck(this, Collection);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Collection).call(this, props, context));

	    _this._cellMetadata = [];
	    _this._lastRenderedCellIndices = [];
	    return _this;
	  }

	  /** See Collection#recomputeCellSizesAndPositions */


	  _createClass(Collection, [{
	    key: 'recomputeCellSizesAndPositions',
	    value: function recomputeCellSizesAndPositions() {
	      this._collectionView.recomputeCellSizesAndPositions();
	    }

	    /** React lifecycle methods */

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var props = _objectWithoutProperties(this.props, []);

	      return _react2.default.createElement(_CollectionView2.default, _extends({
	        cellLayoutManager: this,
	        ref: function ref(_ref) {
	          _this2._collectionView = _ref;
	        }
	      }, props));
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }

	    /** CellLayoutManager interface */

	  }, {
	    key: 'calculateSizeAndPositionData',
	    value: function calculateSizeAndPositionData() {
	      var _props = this.props;
	      var cellCount = _props.cellCount;
	      var cellSizeAndPositionGetter = _props.cellSizeAndPositionGetter;
	      var sectionSize = _props.sectionSize;


	      var data = (0, _calculateSizeAndPositionData3.default)({
	        cellCount: cellCount,
	        cellSizeAndPositionGetter: cellSizeAndPositionGetter,
	        sectionSize: sectionSize
	      });

	      this._cellMetadata = data.cellMetadata;
	      this._sectionManager = data.sectionManager;
	      this._height = data.height;
	      this._width = data.width;
	    }

	    /**
	     * Returns the most recently rendered set of cell indices.
	     */

	  }, {
	    key: 'getLastRenderedIndices',
	    value: function getLastRenderedIndices() {
	      return this._lastRenderedCellIndices;
	    }

	    /**
	     * Calculates the minimum amount of change from the current scroll position to ensure the specified cell is (fully) visible.
	     */

	  }, {
	    key: 'getScrollPositionForCell',
	    value: function getScrollPositionForCell(_ref2) {
	      var align = _ref2.align;
	      var cellIndex = _ref2.cellIndex;
	      var height = _ref2.height;
	      var scrollLeft = _ref2.scrollLeft;
	      var scrollTop = _ref2.scrollTop;
	      var width = _ref2.width;
	      var cellCount = this.props.cellCount;


	      if (cellIndex >= 0 && cellIndex < cellCount) {
	        var cellMetadata = this._cellMetadata[cellIndex];

	        scrollLeft = (0, _getUpdatedOffsetForIndex2.default)({
	          align: align,
	          cellOffset: cellMetadata.x,
	          cellSize: cellMetadata.width,
	          containerSize: width,
	          currentOffset: scrollLeft,
	          targetIndex: cellIndex
	        });

	        scrollTop = (0, _getUpdatedOffsetForIndex2.default)({
	          align: align,
	          cellOffset: cellMetadata.y,
	          cellSize: cellMetadata.height,
	          containerSize: height,
	          currentOffset: scrollTop,
	          targetIndex: cellIndex
	        });
	      }

	      return {
	        scrollLeft: scrollLeft,
	        scrollTop: scrollTop
	      };
	    }
	  }, {
	    key: 'getTotalSize',
	    value: function getTotalSize() {
	      return {
	        height: this._height,
	        width: this._width
	      };
	    }
	  }, {
	    key: 'cellRenderers',
	    value: function cellRenderers(_ref3) {
	      var _this3 = this;

	      var height = _ref3.height;
	      var isScrolling = _ref3.isScrolling;
	      var width = _ref3.width;
	      var x = _ref3.x;
	      var y = _ref3.y;
	      var _props2 = this.props;
	      var cellGroupRenderer = _props2.cellGroupRenderer;
	      var cellRenderer = _props2.cellRenderer;

	      // Store for later calls to getLastRenderedIndices()

	      this._lastRenderedCellIndices = this._sectionManager.getCellIndices({
	        height: height,
	        width: width,
	        x: x,
	        y: y
	      });

	      return cellGroupRenderer({
	        cellRenderer: cellRenderer,
	        cellSizeAndPositionGetter: function cellSizeAndPositionGetter(_ref4) {
	          var index = _ref4.index;
	          return _this3._sectionManager.getCellMetadata({ index: index });
	        },
	        indices: this._lastRenderedCellIndices,
	        isScrolling: isScrolling
	      });
	    }
	  }]);

	  return Collection;
	}(_react.Component);

	Collection.propTypes = {
	  'aria-label': _react.PropTypes.string,

	  /**
	   * Number of cells in Collection.
	   */
	  cellCount: _react.PropTypes.number.isRequired,

	  /**
	   * Responsible for rendering a group of cells given their indices.
	   * Should implement the following interface: ({
	   *   cellSizeAndPositionGetter:Function,
	   *   indices: Array<number>,
	   *   cellRenderer: Function
	   * }): Array<PropTypes.node>
	   */
	  cellGroupRenderer: _react.PropTypes.func.isRequired,

	  /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ index: number }): PropTypes.element
	   */
	  cellRenderer: _react.PropTypes.func.isRequired,

	  /**
	   * Callback responsible for returning size and offset/position information for a given cell (index).
	   * ({ index: number }): { height: number, width: number, x: number, y: number }
	   */
	  cellSizeAndPositionGetter: _react.PropTypes.func.isRequired,

	  /**
	   * Optionally override the size of the sections a Collection's cells are split into.
	   */
	  sectionSize: _react.PropTypes.number
	};
	Collection.defaultProps = {
	  'aria-label': 'grid',
	  cellGroupRenderer: defaultCellGroupRenderer
	};
	exports.default = Collection;


	function defaultCellGroupRenderer(_ref5) {
	  var cellRenderer = _ref5.cellRenderer;
	  var cellSizeAndPositionGetter = _ref5.cellSizeAndPositionGetter;
	  var indices = _ref5.indices;
	  var isScrolling = _ref5.isScrolling;

	  return indices.map(function (index) {
	    var cellMetadata = cellSizeAndPositionGetter({ index: index });
	    var renderedCell = cellRenderer({
	      index: index,
	      isScrolling: isScrolling
	    });

	    if (renderedCell == null || renderedCell === false) {
	      return null;
	    }

	    return _react2.default.createElement(
	      'div',
	      {
	        className: 'Collection__cell',
	        key: index,
	        style: {
	          height: cellMetadata.height,
	          left: cellMetadata.x,
	          top: cellMetadata.y,
	          width: cellMetadata.width
	        }
	      },
	      renderedCell
	    );
	  }).filter(function (renderedCell) {
	    return !!renderedCell;
	  });
	}

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _createCallbackMemoizer = __webpack_require__(158);

	var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);

	var _scrollbarSize = __webpack_require__(128);

	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

	var _raf = __webpack_require__(159);

	var _raf2 = _interopRequireDefault(_raf);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// @TODO It would be nice to refactor Grid to use this code as well.

	/**
	 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
	 * This improves performance and makes scrolling smoother.
	 */
	var IS_SCROLLING_TIMEOUT = 150;

	/**
	 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
	 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
	 */
	var SCROLL_POSITION_CHANGE_REASONS = {
	  OBSERVED: 'observed',
	  REQUESTED: 'requested'
	};

	/**
	 * Monitors changes in properties (eg. cellCount) and state (eg. scroll offsets) to determine when rendering needs to occur.
	 * This component does not render any visible content itself; it defers to the specified :cellLayoutManager.
	 */

	var CollectionView = function (_Component) {
	  _inherits(CollectionView, _Component);

	  function CollectionView(props, context) {
	    _classCallCheck(this, CollectionView);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollectionView).call(this, props, context));

	    _this.state = {
	      calculateSizeAndPositionDataOnNextUpdate: false,
	      isScrolling: false,
	      scrollLeft: 0,
	      scrollTop: 0
	    };

	    // Invokes callbacks only when their values have changed.
	    _this._onSectionRenderedMemoizer = (0, _createCallbackMemoizer2.default)();
	    _this._onScrollMemoizer = (0, _createCallbackMemoizer2.default)(false);

	    // Bind functions to instance so they don't lose context when passed around.
	    _this._invokeOnSectionRenderedHelper = _this._invokeOnSectionRenderedHelper.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._updateScrollPositionForScrollToCell = _this._updateScrollPositionForScrollToCell.bind(_this);
	    return _this;
	  }

	  /**
	   * Forced recompute of cell sizes and positions.
	   * This function should be called if cell sizes have changed but nothing else has.
	   * Since cell positions are calculated by callbacks, the collection view has no way of detecting when the underlying data has changed.
	   */


	  _createClass(CollectionView, [{
	    key: 'recomputeCellSizesAndPositions',
	    value: function recomputeCellSizesAndPositions() {
	      this.setState({
	        calculateSizeAndPositionDataOnNextUpdate: true
	      });
	    }

	    /* ---------------------------- Component lifecycle methods ---------------------------- */

	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props;
	      var cellLayoutManager = _props.cellLayoutManager;
	      var scrollLeft = _props.scrollLeft;
	      var scrollToCell = _props.scrollToCell;
	      var scrollTop = _props.scrollTop;

	      // If this component was first rendered server-side, scrollbar size will be undefined.
	      // In that event we need to remeasure.

	      if (!this._scrollbarSizeMeasured) {
	        this._scrollbarSize = (0, _scrollbarSize2.default)();
	        this._scrollbarSizeMeasured = true;
	        this.setState({});
	      }

	      if (scrollToCell >= 0) {
	        this._updateScrollPositionForScrollToCell();
	      } else if (scrollLeft >= 0 || scrollTop >= 0) {
	        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
	      }

	      // Update onSectionRendered callback.
	      this._invokeOnSectionRenderedHelper();

	      var _cellLayoutManager$ge = cellLayoutManager.getTotalSize();

	      var totalHeight = _cellLayoutManager$ge.height;
	      var totalWidth = _cellLayoutManager$ge.width;

	      // Initialize onScroll callback.

	      this._invokeOnScrollMemoizer({
	        scrollLeft: scrollLeft || 0,
	        scrollTop: scrollTop || 0,
	        totalHeight: totalHeight,
	        totalWidth: totalWidth
	      });
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _props2 = this.props;
	      var height = _props2.height;
	      var scrollToCell = _props2.scrollToCell;
	      var width = _props2.width;
	      var _state = this.state;
	      var scrollLeft = _state.scrollLeft;
	      var scrollPositionChangeReason = _state.scrollPositionChangeReason;
	      var scrollToAlignment = _state.scrollToAlignment;
	      var scrollTop = _state.scrollTop;

	      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
	      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
	      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
	      // So we only set these when we require an adjustment of the scroll position.
	      // See issue #2 for more information.

	      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
	        if (scrollLeft >= 0 && scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft) {
	          this._scrollingContainer.scrollLeft = scrollLeft;
	        }
	        if (scrollTop >= 0 && scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop) {
	          this._scrollingContainer.scrollTop = scrollTop;
	        }
	      }

	      // Update scroll offsets if the current :scrollToCell values requires it
	      if (height !== prevProps.height || scrollToAlignment !== prevProps.scrollToAlignment || scrollToCell !== prevProps.scrollToCell || width !== prevProps.width) {
	        this._updateScrollPositionForScrollToCell();
	      }

	      // Update onRowsRendered callback if start/stop indices have changed
	      this._invokeOnSectionRenderedHelper();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var cellLayoutManager = this.props.cellLayoutManager;


	      cellLayoutManager.calculateSizeAndPositionData();

	      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
	      // We handle this case in componentDidMount()
	      this._scrollbarSize = (0, _scrollbarSize2.default)();
	      if (this._scrollbarSize === undefined) {
	        this._scrollbarSizeMeasured = false;
	        this._scrollbarSize = 0;
	      } else {
	        this._scrollbarSizeMeasured = true;
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }

	      if (this._setNextStateAnimationFrameId) {
	        _raf2.default.cancel(this._setNextStateAnimationFrameId);
	      }
	    }

	    /**
	     * @private
	     * This method updates scrollLeft/scrollTop in state for the following conditions:
	     * 1) Empty content (0 rows or columns)
	     * 2) New scroll props overriding the current state
	     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
	     */

	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (nextProps.cellCount === 0 && (nextState.scrollLeft !== 0 || nextState.scrollTop !== 0)) {
	        this._setScrollPosition({
	          scrollLeft: 0,
	          scrollTop: 0
	        });
	      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
	        this._setScrollPosition({
	          scrollLeft: nextProps.scrollLeft,
	          scrollTop: nextProps.scrollTop
	        });
	      }

	      if (nextProps.cellCount !== this.props.cellCount || nextProps.cellLayoutManager !== this.props.cellLayoutManager || nextState.calculateSizeAndPositionDataOnNextUpdate) {
	        nextProps.cellLayoutManager.calculateSizeAndPositionData();
	      }

	      if (nextState.calculateSizeAndPositionDataOnNextUpdate) {
	        this.setState({
	          calculateSizeAndPositionDataOnNextUpdate: false
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props3 = this.props;
	      var cellCount = _props3.cellCount;
	      var cellLayoutManager = _props3.cellLayoutManager;
	      var className = _props3.className;
	      var height = _props3.height;
	      var horizontalOverscanSize = _props3.horizontalOverscanSize;
	      var noContentRenderer = _props3.noContentRenderer;
	      var style = _props3.style;
	      var verticalOverscanSize = _props3.verticalOverscanSize;
	      var width = _props3.width;
	      var _state2 = this.state;
	      var isScrolling = _state2.isScrolling;
	      var scrollLeft = _state2.scrollLeft;
	      var scrollTop = _state2.scrollTop;

	      var _cellLayoutManager$ge2 = cellLayoutManager.getTotalSize();

	      var totalHeight = _cellLayoutManager$ge2.height;
	      var totalWidth = _cellLayoutManager$ge2.width;

	      // Safely expand the rendered area by the specified overscan amount

	      var left = Math.max(0, scrollLeft - horizontalOverscanSize);
	      var top = Math.max(0, scrollTop - verticalOverscanSize);
	      var right = Math.min(totalWidth, scrollLeft + width + horizontalOverscanSize);
	      var bottom = Math.min(totalHeight, scrollTop + height + verticalOverscanSize);

	      var childrenToDisplay = height > 0 && width > 0 ? cellLayoutManager.cellRenderers({
	        height: bottom - top,
	        isScrolling: isScrolling,
	        width: right - left,
	        x: left,
	        y: top
	      }) : [];

	      var collectionStyle = {
	        height: height,
	        width: width
	      };

	      // Force browser to hide scrollbars when we know they aren't necessary.
	      // Otherwise once scrollbars appear they may not disappear again.
	      // For more info see issue #116
	      var verticalScrollBarSize = totalHeight > height ? this._scrollbarSize : 0;
	      var horizontalScrollBarSize = totalWidth > width ? this._scrollbarSize : 0;
	      if (totalWidth + verticalScrollBarSize <= width) {
	        collectionStyle.overflowX = 'hidden';
	      }
	      if (totalHeight + horizontalScrollBarSize <= height) {
	        collectionStyle.overflowY = 'hidden';
	      }

	      return _react2.default.createElement(
	        'div',
	        {
	          ref: function ref(_ref) {
	            _this2._scrollingContainer = _ref;
	          },
	          'aria-label': this.props['aria-label'],
	          className: (0, _classnames2.default)('Collection', className),
	          onScroll: this._onScroll,
	          role: 'grid',
	          style: _extends({}, collectionStyle, style),
	          tabIndex: 0
	        },
	        cellCount > 0 && _react2.default.createElement(
	          'div',
	          {
	            className: 'Collection__innerScrollContainer',
	            style: {
	              height: totalHeight,
	              maxHeight: totalHeight,
	              maxWidth: totalWidth,
	              pointerEvents: isScrolling ? 'none' : 'auto',
	              width: totalWidth
	            }
	          },
	          childrenToDisplay
	        ),
	        cellCount === 0 && noContentRenderer()
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }

	    /* ---------------------------- Helper methods ---------------------------- */

	    /**
	     * Sets an :isScrolling flag for a small window of time.
	     * This flag is used to disable pointer events on the scrollable portion of the Collection.
	     * This prevents jerky/stuttery mouse-wheel scrolling.
	     */

	  }, {
	    key: '_enablePointerEventsAfterDelay',
	    value: function _enablePointerEventsAfterDelay() {
	      var _this3 = this;

	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }

	      this._disablePointerEventsTimeoutId = setTimeout(function () {
	        _this3._disablePointerEventsTimeoutId = null;
	        _this3.setState({
	          isScrolling: false
	        });
	      }, IS_SCROLLING_TIMEOUT);
	    }
	  }, {
	    key: '_invokeOnSectionRenderedHelper',
	    value: function _invokeOnSectionRenderedHelper() {
	      var _props4 = this.props;
	      var cellLayoutManager = _props4.cellLayoutManager;
	      var onSectionRendered = _props4.onSectionRendered;


	      this._onSectionRenderedMemoizer({
	        callback: onSectionRendered,
	        indices: {
	          indices: cellLayoutManager.getLastRenderedIndices()
	        }
	      });
	    }
	  }, {
	    key: '_invokeOnScrollMemoizer',
	    value: function _invokeOnScrollMemoizer(_ref2) {
	      var _this4 = this;

	      var scrollLeft = _ref2.scrollLeft;
	      var scrollTop = _ref2.scrollTop;
	      var totalHeight = _ref2.totalHeight;
	      var totalWidth = _ref2.totalWidth;

	      this._onScrollMemoizer({
	        callback: function callback(_ref3) {
	          var scrollLeft = _ref3.scrollLeft;
	          var scrollTop = _ref3.scrollTop;
	          var _props5 = _this4.props;
	          var height = _props5.height;
	          var onScroll = _props5.onScroll;
	          var width = _props5.width;


	          onScroll({
	            clientHeight: height,
	            clientWidth: width,
	            scrollHeight: totalHeight,
	            scrollLeft: scrollLeft,
	            scrollTop: scrollTop,
	            scrollWidth: totalWidth
	          });
	        },
	        indices: {
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop
	        }
	      });
	    }

	    /**
	     * Updates the state during the next animation frame.
	     * Use this method to avoid multiple renders in a small span of time.
	     * This helps performance for bursty events (like onScroll).
	     */

	  }, {
	    key: '_setNextState',
	    value: function _setNextState(state) {
	      var _this5 = this;

	      if (this._setNextStateAnimationFrameId) {
	        _raf2.default.cancel(this._setNextStateAnimationFrameId);
	      }

	      this._setNextStateAnimationFrameId = (0, _raf2.default)(function () {
	        _this5._setNextStateAnimationFrameId = null;
	        _this5.setState(state);
	      });
	    }
	  }, {
	    key: '_setScrollPosition',
	    value: function _setScrollPosition(_ref4) {
	      var scrollLeft = _ref4.scrollLeft;
	      var scrollTop = _ref4.scrollTop;

	      var newState = {
	        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
	      };

	      if (scrollLeft >= 0) {
	        newState.scrollLeft = scrollLeft;
	      }

	      if (scrollTop >= 0) {
	        newState.scrollTop = scrollTop;
	      }

	      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
	        this.setState(newState);
	      }
	    }
	  }, {
	    key: '_updateScrollPositionForScrollToCell',
	    value: function _updateScrollPositionForScrollToCell() {
	      var _props6 = this.props;
	      var cellLayoutManager = _props6.cellLayoutManager;
	      var height = _props6.height;
	      var scrollToAlignment = _props6.scrollToAlignment;
	      var scrollToCell = _props6.scrollToCell;
	      var width = _props6.width;
	      var _state3 = this.state;
	      var scrollLeft = _state3.scrollLeft;
	      var scrollTop = _state3.scrollTop;


	      if (scrollToCell >= 0) {
	        var scrollPosition = cellLayoutManager.getScrollPositionForCell({
	          align: scrollToAlignment,
	          cellIndex: scrollToCell,
	          height: height,
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop,
	          width: width
	        });

	        if (scrollPosition.scrollLeft !== scrollLeft || scrollPosition.scrollTop !== scrollTop) {
	          this._setScrollPosition(scrollPosition);
	        }
	      }
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(event) {
	      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
	      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
	      // See issue #404 for more information.
	      if (event.target !== this._scrollingContainer) {
	        return;
	      }

	      // Prevent pointer events from interrupting a smooth scroll
	      this._enablePointerEventsAfterDelay();

	      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
	      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
	      // This causes a series of rapid renders that is slow for long lists.
	      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
	      var _props7 = this.props;
	      var cellLayoutManager = _props7.cellLayoutManager;
	      var height = _props7.height;
	      var width = _props7.width;

	      var scrollbarSize = this._scrollbarSize;

	      var _cellLayoutManager$ge3 = cellLayoutManager.getTotalSize();

	      var totalHeight = _cellLayoutManager$ge3.height;
	      var totalWidth = _cellLayoutManager$ge3.width;

	      var scrollLeft = Math.max(0, Math.min(totalWidth - width + scrollbarSize, event.target.scrollLeft));
	      var scrollTop = Math.max(0, Math.min(totalHeight - height + scrollbarSize, event.target.scrollTop));

	      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
	      // Don't force a re-render if this is the case.
	      // The mouse may move faster then the animation frame does.
	      // Use requestAnimationFrame to avoid over-updating.
	      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
	        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
	        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
	        // All things considered, this seems to be the best current work around that I'm aware of.
	        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
	        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;

	        // Synchronously set :isScrolling the first time (since _setNextState will reschedule its animation frame each time it's called)
	        if (!this.state.isScrolling) {
	          this.setState({
	            isScrolling: true
	          });
	        }

	        this._setNextState({
	          isScrolling: true,
	          scrollLeft: scrollLeft,
	          scrollPositionChangeReason: scrollPositionChangeReason,
	          scrollTop: scrollTop
	        });
	      }

	      this._invokeOnScrollMemoizer({
	        scrollLeft: scrollLeft,
	        scrollTop: scrollTop,
	        totalWidth: totalWidth,
	        totalHeight: totalHeight
	      });
	    }
	  }]);

	  return CollectionView;
	}(_react.Component);

	CollectionView.propTypes = {
	  'aria-label': _react.PropTypes.string,

	  /**
	   * Number of cells in collection.
	   */
	  cellCount: _react.PropTypes.number.isRequired,

	  /**
	   * Calculates cell sizes and positions and manages rendering the appropriate cells given a specified window.
	   */
	  cellLayoutManager: _react.PropTypes.object.isRequired,

	  /**
	   * Optional custom CSS class name to attach to root Collection element.
	   */
	  className: _react.PropTypes.string,

	  /**
	   * Height of Collection; this property determines the number of visible (vs virtualized) rows.
	   */
	  height: _react.PropTypes.number.isRequired,

	  /**
	   * Enables the `Collection` to horiontally "overscan" its content similar to how `Grid` does.
	   * This can reduce flicker around the edges when a user scrolls quickly.
	   */
	  horizontalOverscanSize: _react.PropTypes.number.isRequired,

	  /**
	   * Optional renderer to be used in place of rows when either :rowCount or :cellCount is 0.
	   */
	  noContentRenderer: _react.PropTypes.func.isRequired,

	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,

	  /**
	   * Callback invoked with information about the section of the Collection that was just rendered.
	   * This callback is passed a named :indices parameter which is an Array of the most recently rendered section indices.
	   */
	  onSectionRendered: _react.PropTypes.func.isRequired,

	  /**
	   * Horizontal offset.
	   */
	  scrollLeft: _react.PropTypes.number,

	  /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

	  /**
	   * Cell index to ensure visible (by forcefully scrolling if necessary).
	   */
	  scrollToCell: _react.PropTypes.number,

	  /**
	   * Vertical offset.
	   */
	  scrollTop: _react.PropTypes.number,

	  /**
	   * Optional custom inline style to attach to root Collection element.
	   */
	  style: _react.PropTypes.object,

	  /**
	   * Enables the `Collection` to vertically "overscan" its content similar to how `Grid` does.
	   * This can reduce flicker around the edges when a user scrolls quickly.
	   */
	  verticalOverscanSize: _react.PropTypes.number.isRequired,

	  /**
	   * Width of Collection; this property determines the number of visible (vs virtualized) columns.
	   */
	  width: _react.PropTypes.number.isRequired
	};
	CollectionView.defaultProps = {
	  'aria-label': 'grid',
	  horizontalOverscanSize: 0,
	  noContentRenderer: function noContentRenderer() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  onSectionRendered: function onSectionRendered() {
	    return null;
	  },
	  scrollToAlignment: 'auto',
	  style: {},
	  verticalOverscanSize: 0
	};
	exports.default = CollectionView;

/***/ },
/* 158 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createCallbackMemoizer;
	/**
	 * Helper utility that updates the specified callback whenever any of the specified indices have changed.
	 */
	function createCallbackMemoizer() {
	  var requireAllKeys = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	  var cachedIndices = {};

	  return function (_ref) {
	    var callback = _ref.callback;
	    var indices = _ref.indices;

	    var keys = Object.keys(indices);
	    var allInitialized = !requireAllKeys || keys.every(function (key) {
	      var value = indices[key];
	      return Array.isArray(value) ? value.length > 0 : value >= 0;
	    });
	    var indexChanged = keys.length !== Object.keys(cachedIndices).length || keys.some(function (key) {
	      var cachedValue = cachedIndices[key];
	      var value = indices[key];

	      return Array.isArray(value) ? cachedValue.join(',') !== value.join(',') : cachedValue !== value;
	    });

	    cachedIndices = indices;

	    if (allInitialized && indexChanged) {
	      callback(indices);
	    }
	  };
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var now = __webpack_require__(160)
	  , root = typeof window === 'undefined' ? global : window
	  , vendors = ['moz', 'webkit']
	  , suffix = 'AnimationFrame'
	  , raf = root['request' + suffix]
	  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

	for(var i = 0; !raf && i < vendors.length; i++) {
	  raf = root[vendors[i] + 'Request' + suffix]
	  caf = root[vendors[i] + 'Cancel' + suffix]
	      || root[vendors[i] + 'CancelRequest' + suffix]
	}

	// Some versions of FF have rAF but not cAF
	if(!raf || !caf) {
	  var last = 0
	    , id = 0
	    , queue = []
	    , frameDuration = 1000 / 60

	  raf = function(callback) {
	    if(queue.length === 0) {
	      var _now = now()
	        , next = Math.max(0, frameDuration - (_now - last))
	      last = next + _now
	      setTimeout(function() {
	        var cp = queue.slice(0)
	        // Clear queue here to prevent
	        // callbacks from appending listeners
	        // to the current frame's queue
	        queue.length = 0
	        for(var i = 0; i < cp.length; i++) {
	          if(!cp[i].cancelled) {
	            try{
	              cp[i].callback(last)
	            } catch(e) {
	              setTimeout(function() { throw e }, 0)
	            }
	          }
	        }
	      }, Math.round(next))
	    }
	    queue.push({
	      handle: ++id,
	      callback: callback,
	      cancelled: false
	    })
	    return id
	  }

	  caf = function(handle) {
	    for(var i = 0; i < queue.length; i++) {
	      if(queue[i].handle === handle) {
	        queue[i].cancelled = true
	      }
	    }
	  }
	}

	module.exports = function(fn) {
	  // Wrap in a new function to prevent
	  // `cancel` potentially being assigned
	  // to the native rAF function
	  return raf.call(root, fn)
	}
	module.exports.cancel = function() {
	  caf.apply(root, arguments)
	}
	module.exports.polyfill = function() {
	  root.requestAnimationFrame = raf
	  root.cancelAnimationFrame = caf
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {// Generated by CoffeeScript 1.7.1
	(function() {
	  var getNanoSeconds, hrtime, loadTime;

	  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
	    module.exports = function() {
	      return performance.now();
	    };
	  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
	    module.exports = function() {
	      return (getNanoSeconds() - loadTime) / 1e6;
	    };
	    hrtime = process.hrtime;
	    getNanoSeconds = function() {
	      var hr;
	      hr = hrtime();
	      return hr[0] * 1e9 + hr[1];
	    };
	    loadTime = getNanoSeconds();
	  } else if (Date.now) {
	    module.exports = function() {
	      return Date.now() - loadTime;
	    };
	    loadTime = Date.now();
	  } else {
	    module.exports = function() {
	      return new Date().getTime() - loadTime;
	    };
	    loadTime = new Date().getTime();
	  }

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(161)))

/***/ },
/* 161 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calculateSizeAndPositionData;

	var _SectionManager = __webpack_require__(163);

	var _SectionManager2 = _interopRequireDefault(_SectionManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function calculateSizeAndPositionData(_ref) {
	  var cellCount = _ref.cellCount;
	  var cellSizeAndPositionGetter = _ref.cellSizeAndPositionGetter;
	  var sectionSize = _ref.sectionSize;

	  var cellMetadata = [];
	  var sectionManager = new _SectionManager2.default(sectionSize);
	  var height = 0;
	  var width = 0;

	  for (var index = 0; index < cellCount; index++) {
	    var cellMetadatum = cellSizeAndPositionGetter({ index: index });

	    if (cellMetadatum.height == null || isNaN(cellMetadatum.height) || cellMetadatum.width == null || isNaN(cellMetadatum.width) || cellMetadatum.x == null || isNaN(cellMetadatum.x) || cellMetadatum.y == null || isNaN(cellMetadatum.y)) {
	      throw Error('Invalid metadata returned for cell ' + index + ':\n        x:' + cellMetadatum.x + ', y:' + cellMetadatum.y + ', width:' + cellMetadatum.width + ', height:' + cellMetadatum.height);
	    }

	    height = Math.max(height, cellMetadatum.y + cellMetadatum.height);
	    width = Math.max(width, cellMetadatum.x + cellMetadatum.width);

	    cellMetadata[index] = cellMetadatum;
	    sectionManager.registerCell({
	      cellMetadatum: cellMetadatum,
	      index: index
	    });
	  }

	  return {
	    cellMetadata: cellMetadata,
	    height: height,
	    sectionManager: sectionManager,
	    width: width
	  };
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Window Sections are used to group nearby cells.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This enables us to more quickly determine which cells to display in a given region of the Window.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


	var _Section = __webpack_require__(164);

	var _Section2 = _interopRequireDefault(_Section);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SECTION_SIZE = 100;

	/**
	 * Contains 0 to many Sections.
	 * Grows (and adds Sections) dynamically as cells are registered.
	 * Automatically adds cells to the appropriate Section(s).
	 */

	var SectionManager = function () {
	  function SectionManager() {
	    var sectionSize = arguments.length <= 0 || arguments[0] === undefined ? SECTION_SIZE : arguments[0];

	    _classCallCheck(this, SectionManager);

	    this._sectionSize = sectionSize;

	    this._cellMetadata = [];
	    this._sections = {};
	  }

	  /**
	   * Gets all cell indices contained in the specified region.
	   * A region may encompass 1 or more Sections.
	   */


	  _createClass(SectionManager, [{
	    key: 'getCellIndices',
	    value: function getCellIndices(_ref) {
	      var height = _ref.height;
	      var width = _ref.width;
	      var x = _ref.x;
	      var y = _ref.y;

	      var indices = {};

	      this.getSections({ height: height, width: width, x: x, y: y }).forEach(function (section) {
	        return section.getCellIndices().forEach(function (index) {
	          indices[index] = index;
	        });
	      });

	      // Object keys are strings; this function returns numbers
	      return Object.keys(indices).map(function (index) {
	        return indices[index];
	      });
	    }

	    /** Get size and position information for the cell specified. */

	  }, {
	    key: 'getCellMetadata',
	    value: function getCellMetadata(_ref2) {
	      var index = _ref2.index;

	      return this._cellMetadata[index];
	    }

	    /** Get all Sections overlapping the specified region. */

	  }, {
	    key: 'getSections',
	    value: function getSections(_ref3) {
	      var height = _ref3.height;
	      var width = _ref3.width;
	      var x = _ref3.x;
	      var y = _ref3.y;

	      var sectionXStart = Math.floor(x / this._sectionSize);
	      var sectionXStop = Math.floor((x + width - 1) / this._sectionSize);
	      var sectionYStart = Math.floor(y / this._sectionSize);
	      var sectionYStop = Math.floor((y + height - 1) / this._sectionSize);

	      var sections = [];

	      for (var sectionX = sectionXStart; sectionX <= sectionXStop; sectionX++) {
	        for (var sectionY = sectionYStart; sectionY <= sectionYStop; sectionY++) {
	          var key = sectionX + '.' + sectionY;

	          if (!this._sections[key]) {
	            this._sections[key] = new _Section2.default({
	              height: this._sectionSize,
	              width: this._sectionSize,
	              x: sectionX * this._sectionSize,
	              y: sectionY * this._sectionSize
	            });
	          }

	          sections.push(this._sections[key]);
	        }
	      }

	      return sections;
	    }

	    /** Total number of Sections based on the currently registered cells. */

	  }, {
	    key: 'getTotalSectionCount',
	    value: function getTotalSectionCount() {
	      return Object.keys(this._sections).length;
	    }

	    /** Intended for debugger/test purposes only */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      var _this = this;

	      return Object.keys(this._sections).map(function (index) {
	        return _this._sections[index].toString();
	      });
	    }

	    /** Adds a cell to the appropriate Sections and registers it metadata for later retrievable. */

	  }, {
	    key: 'registerCell',
	    value: function registerCell(_ref4) {
	      var cellMetadatum = _ref4.cellMetadatum;
	      var index = _ref4.index;

	      this._cellMetadata[index] = cellMetadatum;

	      this.getSections(cellMetadatum).forEach(function (section) {
	        return section.addCellIndex({ index: index });
	      });
	    }
	  }]);

	  return SectionManager;
	}();

	exports.default = SectionManager;

/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A section of the Window.
	 * Window Sections are used to group nearby cells.
	 * This enables us to more quickly determine which cells to display in a given region of the Window.
	 * Sections have a fixed size and contain 0 to many cells (tracked by their indices).
	 */

	var Section = function () {
	  function Section(_ref) {
	    var height = _ref.height;
	    var width = _ref.width;
	    var x = _ref.x;
	    var y = _ref.y;

	    _classCallCheck(this, Section);

	    this.height = height;
	    this.width = width;
	    this.x = x;
	    this.y = y;

	    this._indexMap = {};
	    this._indices = [];
	  }

	  /** Add a cell to this section. */


	  _createClass(Section, [{
	    key: 'addCellIndex',
	    value: function addCellIndex(_ref2) {
	      var index = _ref2.index;

	      if (!this._indexMap[index]) {
	        this._indexMap[index] = true;
	        this._indices.push(index);
	      }
	    }

	    /** Get all cell indices that have been added to this section. */

	  }, {
	    key: 'getCellIndices',
	    value: function getCellIndices() {
	      return this._indices;
	    }

	    /** Intended for debugger/test purposes only */

	  }, {
	    key: 'toString',
	    value: function toString() {
	      return this.x + ',' + this.y + ' ' + this.width + 'x' + this.height;
	    }
	  }]);

	  return Section;
	}(); /** @rlow */


	exports.default = Section;

/***/ },
/* 165 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getUpdatedOffsetForIndex;
	/**
	 * Determines a new offset that ensures a certain cell is visible, given the current offset.
	 * If the cell is already visible then the current offset will be returned.
	 * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
	 *
	 * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
	 * @param cellOffset Offset (x or y) position for cell
	 * @param cellSize Size (width or height) of cell
	 * @param containerSize Total size (width or height) of the container
	 * @param currentOffset Container's current (x or y) offset
	 * @return Offset to use to ensure the specified cell is visible
	 */
	function getUpdatedOffsetForIndex(_ref) {
	  var _ref$align = _ref.align;
	  var align = _ref$align === undefined ? 'auto' : _ref$align;
	  var cellOffset = _ref.cellOffset;
	  var cellSize = _ref.cellSize;
	  var containerSize = _ref.containerSize;
	  var currentOffset = _ref.currentOffset;

	  var maxOffset = cellOffset;
	  var minOffset = maxOffset - containerSize + cellSize;

	  switch (align) {
	    case 'start':
	      return maxOffset;
	    case 'end':
	      return minOffset;
	    case 'center':
	      return maxOffset - (containerSize - cellSize) / 2;
	    default:
	      return Math.max(minOffset, Math.min(maxOffset, currentOffset));
	  }
	}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ColumnSizer = exports.default = undefined;

	var _ColumnSizer2 = __webpack_require__(167);

	var _ColumnSizer3 = _interopRequireDefault(_ColumnSizer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ColumnSizer3.default;
	exports.ColumnSizer = _ColumnSizer3.default;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _Grid = __webpack_require__(168);

	var _Grid2 = _interopRequireDefault(_Grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * High-order component that auto-calculates column-widths for `Grid` cells.
	 */

	var ColumnSizer = function (_Component) {
	  _inherits(ColumnSizer, _Component);

	  function ColumnSizer(props, context) {
	    _classCallCheck(this, ColumnSizer);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColumnSizer).call(this, props, context));

	    _this._registerChild = _this._registerChild.bind(_this);
	    return _this;
	  }

	  _createClass(ColumnSizer, [{
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _props = this.props;
	      var columnMaxWidth = _props.columnMaxWidth;
	      var columnMinWidth = _props.columnMinWidth;
	      var columnCount = _props.columnCount;
	      var width = _props.width;


	      if (columnMaxWidth !== prevProps.columnMaxWidth || columnMinWidth !== prevProps.columnMinWidth || columnCount !== prevProps.columnCount || width !== prevProps.width) {
	        if (this._registeredChild) {
	          this._registeredChild.recomputeGridSize();
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var children = _props2.children;
	      var columnMaxWidth = _props2.columnMaxWidth;
	      var columnMinWidth = _props2.columnMinWidth;
	      var columnCount = _props2.columnCount;
	      var width = _props2.width;


	      var safeColumnMinWidth = columnMinWidth || 1;

	      var safeColumnMaxWidth = columnMaxWidth ? Math.min(columnMaxWidth, width) : width;

	      var columnWidth = width / columnCount;
	      columnWidth = Math.max(safeColumnMinWidth, columnWidth);
	      columnWidth = Math.min(safeColumnMaxWidth, columnWidth);
	      columnWidth = Math.floor(columnWidth);

	      var adjustedWidth = Math.min(width, columnWidth * columnCount);

	      return children({
	        adjustedWidth: adjustedWidth,
	        getColumnWidth: function getColumnWidth() {
	          return columnWidth;
	        },
	        registerChild: this._registerChild
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_registerChild',
	    value: function _registerChild(child) {
	      if (child !== null && !(child instanceof _Grid2.default)) {
	        throw Error('Unexpected child type registered; only Grid children are supported.');
	      }

	      this._registeredChild = child;

	      if (this._registeredChild) {
	        this._registeredChild.recomputeGridSize();
	      }
	    }
	  }]);

	  return ColumnSizer;
	}(_react.Component);

	ColumnSizer.propTypes = {
	  /**
	   * Function respondible for rendering a virtualized Grid.
	   * This function should implement the following signature:
	   * ({ adjustedWidth, getColumnWidth, registerChild }) => PropTypes.element
	   *
	   * The specified :getColumnWidth function should be passed to the Grid's :columnWidth property.
	   * The :registerChild should be passed to the Grid's :ref property.
	   * The :adjustedWidth property is optional; it reflects the lesser of the overall width or the width of all columns.
	   */
	  children: _react.PropTypes.func.isRequired,

	  /** Optional maximum allowed column width */
	  columnMaxWidth: _react.PropTypes.number,

	  /** Optional minimum allowed column width */
	  columnMinWidth: _react.PropTypes.number,

	  /** Number of columns in Grid or FlexTable child */
	  columnCount: _react.PropTypes.number.isRequired,

	  /** Width of Grid or FlexTable child */
	  width: _react.PropTypes.number.isRequired
	};
	exports.default = ColumnSizer;

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultCellRangeRenderer = exports.Grid = exports.default = undefined;

	var _Grid2 = __webpack_require__(169);

	var _Grid3 = _interopRequireDefault(_Grid2);

	var _defaultCellRangeRenderer2 = __webpack_require__(175);

	var _defaultCellRangeRenderer3 = _interopRequireDefault(_defaultCellRangeRenderer2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Grid3.default;
	exports.Grid = _Grid3.default;
	exports.defaultCellRangeRenderer = _defaultCellRangeRenderer3.default;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _calculateSizeAndPositionDataAndUpdateScrollOffset = __webpack_require__(170);

	var _calculateSizeAndPositionDataAndUpdateScrollOffset2 = _interopRequireDefault(_calculateSizeAndPositionDataAndUpdateScrollOffset);

	var _ScalingCellSizeAndPositionManager = __webpack_require__(171);

	var _ScalingCellSizeAndPositionManager2 = _interopRequireDefault(_ScalingCellSizeAndPositionManager);

	var _createCallbackMemoizer = __webpack_require__(158);

	var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);

	var _getOverscanIndices = __webpack_require__(173);

	var _getOverscanIndices2 = _interopRequireDefault(_getOverscanIndices);

	var _scrollbarSize = __webpack_require__(128);

	var _scrollbarSize2 = _interopRequireDefault(_scrollbarSize);

	var _raf = __webpack_require__(159);

	var _raf2 = _interopRequireDefault(_raf);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _updateScrollIndexHelper = __webpack_require__(174);

	var _updateScrollIndexHelper2 = _interopRequireDefault(_updateScrollIndexHelper);

	var _defaultCellRangeRenderer = __webpack_require__(175);

	var _defaultCellRangeRenderer2 = _interopRequireDefault(_defaultCellRangeRenderer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
	 * This improves performance and makes scrolling smoother.
	 */
	var IS_SCROLLING_TIMEOUT = 150;

	/**
	 * Controls whether the Grid updates the DOM element's scrollLeft/scrollTop based on the current state or just observes it.
	 * This prevents Grid from interrupting mouse-wheel animations (see issue #2).
	 */
	var SCROLL_POSITION_CHANGE_REASONS = {
	  OBSERVED: 'observed',
	  REQUESTED: 'requested'
	};

	/**
	 * Renders tabular data with virtualization along the vertical and horizontal axes.
	 * Row heights and column widths must be known ahead of time and specified as properties.
	 */

	var Grid = function (_Component) {
	  _inherits(Grid, _Component);

	  function Grid(props, context) {
	    _classCallCheck(this, Grid);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props, context));

	    _this.state = {
	      isScrolling: false,
	      scrollLeft: 0,
	      scrollTop: 0
	    };

	    // Invokes onSectionRendered callback only when start/stop row or column indices change
	    _this._onGridRenderedMemoizer = (0, _createCallbackMemoizer2.default)();
	    _this._onScrollMemoizer = (0, _createCallbackMemoizer2.default)(false);

	    // Bind functions to instance so they don't lose context when passed around
	    _this._enablePointerEventsAfterDelayCallback = _this._enablePointerEventsAfterDelayCallback.bind(_this);
	    _this._invokeOnGridRenderedHelper = _this._invokeOnGridRenderedHelper.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._setNextStateCallback = _this._setNextStateCallback.bind(_this);
	    _this._updateScrollLeftForScrollToColumn = _this._updateScrollLeftForScrollToColumn.bind(_this);
	    _this._updateScrollTopForScrollToRow = _this._updateScrollTopForScrollToRow.bind(_this);

	    _this._columnWidthGetter = _this._wrapSizeGetter(props.columnWidth);
	    _this._rowHeightGetter = _this._wrapSizeGetter(props.rowHeight);

	    _this._columnSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
	      cellCount: props.columnCount,
	      cellSizeGetter: function cellSizeGetter(index) {
	        return _this._columnWidthGetter(index);
	      },
	      estimatedCellSize: _this._getEstimatedColumnSize(props)
	    });
	    _this._rowSizeAndPositionManager = new _ScalingCellSizeAndPositionManager2.default({
	      cellCount: props.rowCount,
	      cellSizeGetter: function cellSizeGetter(index) {
	        return _this._rowHeightGetter(index);
	      },
	      estimatedCellSize: _this._getEstimatedRowSize(props)
	    });

	    // See defaultCellRangeRenderer() for more information on the usage of this cache
	    _this._cellCache = {};
	    return _this;
	  }

	  /**
	   * Pre-measure all columns and rows in a Grid.
	   * Typically cells are only measured as needed and estimated sizes are used for cells that have not yet been measured.
	   * This method ensures that the next call to getTotalSize() returns an exact size (as opposed to just an estimated one).
	   */


	  _createClass(Grid, [{
	    key: 'measureAllCells',
	    value: function measureAllCells() {
	      var _props = this.props;
	      var columnCount = _props.columnCount;
	      var rowCount = _props.rowCount;


	      this._columnSizeAndPositionManager.getSizeAndPositionOfCell(columnCount - 1);
	      this._rowSizeAndPositionManager.getSizeAndPositionOfCell(rowCount - 1);
	    }

	    /**
	     * Forced recompute of row heights and column widths.
	     * This function should be called if dynamic column or row sizes have changed but nothing else has.
	     * Since Grid only receives :columnCount and :rowCount it has no way of detecting when the underlying data changes.
	     */

	  }, {
	    key: 'recomputeGridSize',
	    value: function recomputeGridSize() {
	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$columnIndex = _ref.columnIndex;
	      var columnIndex = _ref$columnIndex === undefined ? 0 : _ref$columnIndex;
	      var _ref$rowIndex = _ref.rowIndex;
	      var rowIndex = _ref$rowIndex === undefined ? 0 : _ref$rowIndex;

	      this._columnSizeAndPositionManager.resetCell(columnIndex);
	      this._rowSizeAndPositionManager.resetCell(rowIndex);
	      this.forceUpdate();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props2 = this.props;
	      var scrollLeft = _props2.scrollLeft;
	      var scrollToColumn = _props2.scrollToColumn;
	      var scrollTop = _props2.scrollTop;
	      var scrollToRow = _props2.scrollToRow;

	      // If this component was first rendered server-side, scrollbar size will be undefined.
	      // In that event we need to remeasure.

	      if (!this._scrollbarSizeMeasured) {
	        this._scrollbarSize = (0, _scrollbarSize2.default)();
	        this._scrollbarSizeMeasured = true;
	        this.setState({});
	      }

	      if (scrollLeft >= 0 || scrollTop >= 0) {
	        this._setScrollPosition({ scrollLeft: scrollLeft, scrollTop: scrollTop });
	      }

	      if (scrollToColumn >= 0 || scrollToRow >= 0) {
	        this._updateScrollLeftForScrollToColumn();
	        this._updateScrollTopForScrollToRow();
	      }

	      // Update onRowsRendered callback
	      this._invokeOnGridRenderedHelper();

	      // Initialize onScroll callback
	      this._invokeOnScrollMemoizer({
	        scrollLeft: scrollLeft || 0,
	        scrollTop: scrollTop || 0,
	        totalColumnsWidth: this._columnSizeAndPositionManager.getTotalSize(),
	        totalRowsHeight: this._rowSizeAndPositionManager.getTotalSize()
	      });
	    }

	    /**
	     * @private
	     * This method updates scrollLeft/scrollTop in state for the following conditions:
	     * 1) New scroll-to-cell props have been set
	     */

	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      var _this2 = this;

	      var _props3 = this.props;
	      var autoHeight = _props3.autoHeight;
	      var columnCount = _props3.columnCount;
	      var height = _props3.height;
	      var rowCount = _props3.rowCount;
	      var scrollToAlignment = _props3.scrollToAlignment;
	      var scrollToColumn = _props3.scrollToColumn;
	      var scrollToRow = _props3.scrollToRow;
	      var width = _props3.width;
	      var _state = this.state;
	      var scrollLeft = _state.scrollLeft;
	      var scrollPositionChangeReason = _state.scrollPositionChangeReason;
	      var scrollTop = _state.scrollTop;

	      // Handle edge case where column or row count has only just increased over 0.
	      // In this case we may have to restore a previously-specified scroll offset.
	      // For more info see bvaughn/react-virtualized/issues/218

	      var columnOrRowCountJustIncreasedFromZero = columnCount > 0 && prevProps.columnCount === 0 || rowCount > 0 && prevProps.rowCount === 0;

	      // Make sure requested changes to :scrollLeft or :scrollTop get applied.
	      // Assigning to scrollLeft/scrollTop tells the browser to interrupt any running scroll animations,
	      // And to discard any pending async changes to the scroll position that may have happened in the meantime (e.g. on a separate scrolling thread).
	      // So we only set these when we require an adjustment of the scroll position.
	      // See issue #2 for more information.
	      if (scrollPositionChangeReason === SCROLL_POSITION_CHANGE_REASONS.REQUESTED) {
	        if (scrollLeft >= 0 && (scrollLeft !== prevState.scrollLeft && scrollLeft !== this._scrollingContainer.scrollLeft || columnOrRowCountJustIncreasedFromZero)) {
	          this._scrollingContainer.scrollLeft = scrollLeft;
	        }

	        // @TRICKY :autoHeight property instructs Grid to leave :scrollTop management to an external HOC (eg WindowScroller).
	        // In this case we should avoid checking scrollingContainer.scrollTop since it forces layout/flow.
	        if (!autoHeight && scrollTop >= 0 && (scrollTop !== prevState.scrollTop && scrollTop !== this._scrollingContainer.scrollTop || columnOrRowCountJustIncreasedFromZero)) {
	          this._scrollingContainer.scrollTop = scrollTop;
	        }
	      }

	      // Update scroll offsets if the current :scrollToColumn or :scrollToRow values requires it
	      // @TODO Do we also need this check or can the one in componentWillUpdate() suffice?
	      (0, _updateScrollIndexHelper2.default)({
	        cellSizeAndPositionManager: this._columnSizeAndPositionManager,
	        previousCellsCount: prevProps.columnCount,
	        previousCellSize: prevProps.columnWidth,
	        previousScrollToAlignment: prevProps.scrollToAlignment,
	        previousScrollToIndex: prevProps.scrollToColumn,
	        previousSize: prevProps.width,
	        scrollOffset: scrollLeft,
	        scrollToAlignment: scrollToAlignment,
	        scrollToIndex: scrollToColumn,
	        size: width,
	        updateScrollIndexCallback: function updateScrollIndexCallback(scrollToColumn) {
	          return _this2._updateScrollLeftForScrollToColumn(_extends({}, _this2.props, { scrollToColumn: scrollToColumn }));
	        }
	      });
	      (0, _updateScrollIndexHelper2.default)({
	        cellSizeAndPositionManager: this._rowSizeAndPositionManager,
	        previousCellsCount: prevProps.rowCount,
	        previousCellSize: prevProps.rowHeight,
	        previousScrollToAlignment: prevProps.scrollToAlignment,
	        previousScrollToIndex: prevProps.scrollToRow,
	        previousSize: prevProps.height,
	        scrollOffset: scrollTop,
	        scrollToAlignment: scrollToAlignment,
	        scrollToIndex: scrollToRow,
	        size: height,
	        updateScrollIndexCallback: function updateScrollIndexCallback(scrollToRow) {
	          return _this2._updateScrollTopForScrollToRow(_extends({}, _this2.props, { scrollToRow: scrollToRow }));
	        }
	      });

	      // Update onRowsRendered callback if start/stop indices have changed
	      this._invokeOnGridRenderedHelper();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      // If this component is being rendered server-side, getScrollbarSize() will return undefined.
	      // We handle this case in componentDidMount()
	      this._scrollbarSize = (0, _scrollbarSize2.default)();
	      if (this._scrollbarSize === undefined) {
	        this._scrollbarSizeMeasured = false;
	        this._scrollbarSize = 0;
	      } else {
	        this._scrollbarSizeMeasured = true;
	      }

	      this._calculateChildrenToRender();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }

	      if (this._setNextStateAnimationFrameId) {
	        _raf2.default.cancel(this._setNextStateAnimationFrameId);
	      }
	    }

	    /**
	     * @private
	     * This method updates scrollLeft/scrollTop in state for the following conditions:
	     * 1) Empty content (0 rows or columns)
	     * 2) New scroll props overriding the current state
	     * 3) Cells-count or cells-size has changed, making previous scroll offsets invalid
	     */

	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      var _this3 = this;

	      if (nextProps.columnCount === 0 && nextState.scrollLeft !== 0 || nextProps.rowCount === 0 && nextState.scrollTop !== 0) {
	        this._setScrollPosition({
	          scrollLeft: 0,
	          scrollTop: 0
	        });
	      } else if (nextProps.scrollLeft !== this.props.scrollLeft || nextProps.scrollTop !== this.props.scrollTop) {
	        this._setScrollPosition({
	          scrollLeft: nextProps.scrollLeft,
	          scrollTop: nextProps.scrollTop
	        });
	      }

	      this._columnWidthGetter = this._wrapSizeGetter(nextProps.columnWidth);
	      this._rowHeightGetter = this._wrapSizeGetter(nextProps.rowHeight);

	      this._columnSizeAndPositionManager.configure({
	        cellCount: nextProps.columnCount,
	        estimatedCellSize: this._getEstimatedColumnSize(nextProps)
	      });
	      this._rowSizeAndPositionManager.configure({
	        cellCount: nextProps.rowCount,
	        estimatedCellSize: this._getEstimatedRowSize(nextProps)
	      });

	      // Update scroll offsets if the size or number of cells have changed, invalidating the previous value
	      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
	        cellCount: this.props.columnCount,
	        cellSize: this.props.columnWidth,
	        computeMetadataCallback: function computeMetadataCallback() {
	          return _this3._columnSizeAndPositionManager.resetCell(0);
	        },
	        computeMetadataCallbackProps: nextProps,
	        nextCellsCount: nextProps.columnCount,
	        nextCellSize: nextProps.columnWidth,
	        nextScrollToIndex: nextProps.scrollToColumn,
	        scrollToIndex: this.props.scrollToColumn,
	        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
	          return _this3._updateScrollLeftForScrollToColumn(nextProps, nextState);
	        }
	      });
	      (0, _calculateSizeAndPositionDataAndUpdateScrollOffset2.default)({
	        cellCount: this.props.rowCount,
	        cellSize: this.props.rowHeight,
	        computeMetadataCallback: function computeMetadataCallback() {
	          return _this3._rowSizeAndPositionManager.resetCell(0);
	        },
	        computeMetadataCallbackProps: nextProps,
	        nextCellsCount: nextProps.rowCount,
	        nextCellSize: nextProps.rowHeight,
	        nextScrollToIndex: nextProps.scrollToRow,
	        scrollToIndex: this.props.scrollToRow,
	        updateScrollOffsetForScrollToIndex: function updateScrollOffsetForScrollToIndex() {
	          return _this3._updateScrollTopForScrollToRow(nextProps, nextState);
	        }
	      });

	      this._calculateChildrenToRender(nextProps, nextState);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this4 = this;

	      var _props4 = this.props;
	      var autoContainerWidth = _props4.autoContainerWidth;
	      var autoHeight = _props4.autoHeight;
	      var className = _props4.className;
	      var height = _props4.height;
	      var noContentRenderer = _props4.noContentRenderer;
	      var style = _props4.style;
	      var tabIndex = _props4.tabIndex;
	      var width = _props4.width;
	      var isScrolling = this.state.isScrolling;


	      var gridStyle = {
	        height: autoHeight ? 'auto' : height,
	        width: width
	      };

	      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();

	      // Force browser to hide scrollbars when we know they aren't necessary.
	      // Otherwise once scrollbars appear they may not disappear again.
	      // For more info see issue #116
	      var verticalScrollBarSize = totalRowsHeight > height ? this._scrollbarSize : 0;
	      var horizontalScrollBarSize = totalColumnsWidth > width ? this._scrollbarSize : 0;

	      // Also explicitly init styles to 'auto' if scrollbars are required.
	      // This works around an obscure edge case where external CSS styles have not yet been loaded,
	      // But an initial scroll index of offset is set as an external prop.
	      // Without this style, Grid would render the correct range of cells but would NOT update its internal offset.
	      // This was originally reported via clauderic/react-infinite-calendar/issues/23
	      gridStyle.overflowX = totalColumnsWidth + verticalScrollBarSize <= width ? 'hidden' : 'auto';
	      gridStyle.overflowY = totalRowsHeight + horizontalScrollBarSize <= height ? 'hidden' : 'auto';

	      var childrenToDisplay = this._childrenToDisplay;

	      var showNoContentRenderer = childrenToDisplay.length === 0 && height > 0 && width > 0;

	      return _react2.default.createElement(
	        'div',
	        {
	          ref: function ref(_ref2) {
	            _this4._scrollingContainer = _ref2;
	          },
	          'aria-label': this.props['aria-label'],
	          className: (0, _classnames2.default)('Grid', className),
	          onScroll: this._onScroll,
	          role: 'grid',
	          style: _extends({}, gridStyle, style),
	          tabIndex: tabIndex
	        },
	        childrenToDisplay.length > 0 && _react2.default.createElement(
	          'div',
	          {
	            className: 'Grid__innerScrollContainer',
	            style: {
	              width: autoContainerWidth ? 'auto' : totalColumnsWidth,
	              height: totalRowsHeight,
	              maxWidth: totalColumnsWidth,
	              maxHeight: totalRowsHeight,
	              pointerEvents: isScrolling ? 'none' : 'auto'
	            }
	          },
	          childrenToDisplay
	        ),
	        showNoContentRenderer && noContentRenderer()
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }

	    /* ---------------------------- Helper methods ---------------------------- */

	  }, {
	    key: '_calculateChildrenToRender',
	    value: function _calculateChildrenToRender() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	      var state = arguments.length <= 1 || arguments[1] === undefined ? this.state : arguments[1];
	      var cellClassName = props.cellClassName;
	      var cellRenderer = props.cellRenderer;
	      var cellRangeRenderer = props.cellRangeRenderer;
	      var cellStyle = props.cellStyle;
	      var columnCount = props.columnCount;
	      var height = props.height;
	      var overscanColumnCount = props.overscanColumnCount;
	      var overscanRowCount = props.overscanRowCount;
	      var rowCount = props.rowCount;
	      var width = props.width;
	      var isScrolling = state.isScrolling;
	      var scrollLeft = state.scrollLeft;
	      var scrollTop = state.scrollTop;


	      this._childrenToDisplay = [];

	      // Render only enough columns and rows to cover the visible area of the grid.
	      if (height > 0 && width > 0) {
	        var visibleColumnIndices = this._columnSizeAndPositionManager.getVisibleCellRange({
	          containerSize: width,
	          offset: scrollLeft
	        });
	        var visibleRowIndices = this._rowSizeAndPositionManager.getVisibleCellRange({
	          containerSize: height,
	          offset: scrollTop
	        });

	        var horizontalOffsetAdjustment = this._columnSizeAndPositionManager.getOffsetAdjustment({
	          containerSize: width,
	          offset: scrollLeft
	        });
	        var verticalOffsetAdjustment = this._rowSizeAndPositionManager.getOffsetAdjustment({
	          containerSize: height,
	          offset: scrollTop
	        });

	        // Store for _invokeOnGridRenderedHelper()
	        this._renderedColumnStartIndex = visibleColumnIndices.start;
	        this._renderedColumnStopIndex = visibleColumnIndices.stop;
	        this._renderedRowStartIndex = visibleRowIndices.start;
	        this._renderedRowStopIndex = visibleRowIndices.stop;

	        var overscanColumnIndices = (0, _getOverscanIndices2.default)({
	          cellCount: columnCount,
	          overscanCellsCount: overscanColumnCount,
	          startIndex: this._renderedColumnStartIndex,
	          stopIndex: this._renderedColumnStopIndex
	        });

	        var overscanRowIndices = (0, _getOverscanIndices2.default)({
	          cellCount: rowCount,
	          overscanCellsCount: overscanRowCount,
	          startIndex: this._renderedRowStartIndex,
	          stopIndex: this._renderedRowStopIndex
	        });

	        // Store for _invokeOnGridRenderedHelper()
	        this._columnStartIndex = overscanColumnIndices.overscanStartIndex;
	        this._columnStopIndex = overscanColumnIndices.overscanStopIndex;
	        this._rowStartIndex = overscanRowIndices.overscanStartIndex;
	        this._rowStopIndex = overscanRowIndices.overscanStopIndex;

	        this._childrenToDisplay = cellRangeRenderer({
	          cellCache: this._cellCache,
	          cellClassName: this._wrapCellClassNameGetter(cellClassName),
	          cellRenderer: cellRenderer,
	          cellStyle: this._wrapCellStyleGetter(cellStyle),
	          columnSizeAndPositionManager: this._columnSizeAndPositionManager,
	          columnStartIndex: this._columnStartIndex,
	          columnStopIndex: this._columnStopIndex,
	          horizontalOffsetAdjustment: horizontalOffsetAdjustment,
	          isScrolling: isScrolling,
	          rowSizeAndPositionManager: this._rowSizeAndPositionManager,
	          rowStartIndex: this._rowStartIndex,
	          rowStopIndex: this._rowStopIndex,
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop,
	          verticalOffsetAdjustment: verticalOffsetAdjustment
	        });
	      }
	    }

	    /**
	     * Sets an :isScrolling flag for a small window of time.
	     * This flag is used to disable pointer events on the scrollable portion of the Grid.
	     * This prevents jerky/stuttery mouse-wheel scrolling.
	     */

	  }, {
	    key: '_enablePointerEventsAfterDelay',
	    value: function _enablePointerEventsAfterDelay() {
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }

	      this._disablePointerEventsTimeoutId = setTimeout(this._enablePointerEventsAfterDelayCallback, IS_SCROLLING_TIMEOUT);
	    }
	  }, {
	    key: '_enablePointerEventsAfterDelayCallback',
	    value: function _enablePointerEventsAfterDelayCallback() {
	      this._disablePointerEventsTimeoutId = null;

	      // Throw away cell cache once scrolling is complete
	      this._cellCache = {};

	      this.setState({
	        isScrolling: false
	      });
	    }
	  }, {
	    key: '_getEstimatedColumnSize',
	    value: function _getEstimatedColumnSize(props) {
	      return typeof props.columnWidth === 'number' ? props.columnWidth : props.estimatedColumnSize;
	    }
	  }, {
	    key: '_getEstimatedRowSize',
	    value: function _getEstimatedRowSize(props) {
	      return typeof props.rowHeight === 'number' ? props.rowHeight : props.estimatedRowSize;
	    }
	  }, {
	    key: '_invokeOnGridRenderedHelper',
	    value: function _invokeOnGridRenderedHelper() {
	      var onSectionRendered = this.props.onSectionRendered;


	      this._onGridRenderedMemoizer({
	        callback: onSectionRendered,
	        indices: {
	          columnOverscanStartIndex: this._columnStartIndex,
	          columnOverscanStopIndex: this._columnStopIndex,
	          columnStartIndex: this._renderedColumnStartIndex,
	          columnStopIndex: this._renderedColumnStopIndex,
	          rowOverscanStartIndex: this._rowStartIndex,
	          rowOverscanStopIndex: this._rowStopIndex,
	          rowStartIndex: this._renderedRowStartIndex,
	          rowStopIndex: this._renderedRowStopIndex
	        }
	      });
	    }
	  }, {
	    key: '_invokeOnScrollMemoizer',
	    value: function _invokeOnScrollMemoizer(_ref3) {
	      var _this5 = this;

	      var scrollLeft = _ref3.scrollLeft;
	      var scrollTop = _ref3.scrollTop;
	      var totalColumnsWidth = _ref3.totalColumnsWidth;
	      var totalRowsHeight = _ref3.totalRowsHeight;

	      this._onScrollMemoizer({
	        callback: function callback(_ref4) {
	          var scrollLeft = _ref4.scrollLeft;
	          var scrollTop = _ref4.scrollTop;
	          var _props5 = _this5.props;
	          var height = _props5.height;
	          var onScroll = _props5.onScroll;
	          var width = _props5.width;


	          onScroll({
	            clientHeight: height,
	            clientWidth: width,
	            scrollHeight: totalRowsHeight,
	            scrollLeft: scrollLeft,
	            scrollTop: scrollTop,
	            scrollWidth: totalColumnsWidth
	          });
	        },
	        indices: {
	          scrollLeft: scrollLeft,
	          scrollTop: scrollTop
	        }
	      });
	    }

	    /**
	     * Updates the state during the next animation frame.
	     * Use this method to avoid multiple renders in a small span of time.
	     * This helps performance for bursty events (like onScroll).
	     */

	  }, {
	    key: '_setNextState',
	    value: function _setNextState(state) {
	      this._nextState = state;

	      if (!this._setNextStateAnimationFrameId) {
	        this._setNextStateAnimationFrameId = (0, _raf2.default)(this._setNextStateCallback);
	      }
	    }
	  }, {
	    key: '_setNextStateCallback',
	    value: function _setNextStateCallback() {
	      var state = this._nextState;

	      this._setNextStateAnimationFrameId = null;
	      this._nextState = null;

	      this.setState(state);
	    }
	  }, {
	    key: '_setScrollPosition',
	    value: function _setScrollPosition(_ref5) {
	      var scrollLeft = _ref5.scrollLeft;
	      var scrollTop = _ref5.scrollTop;

	      var newState = {
	        scrollPositionChangeReason: SCROLL_POSITION_CHANGE_REASONS.REQUESTED
	      };

	      if (scrollLeft >= 0) {
	        newState.scrollLeft = scrollLeft;
	      }

	      if (scrollTop >= 0) {
	        newState.scrollTop = scrollTop;
	      }

	      if (scrollLeft >= 0 && scrollLeft !== this.state.scrollLeft || scrollTop >= 0 && scrollTop !== this.state.scrollTop) {
	        this.setState(newState);
	      }
	    }
	  }, {
	    key: '_wrapCellClassNameGetter',
	    value: function _wrapCellClassNameGetter(className) {
	      return this._wrapPropertyGetter(className);
	    }
	  }, {
	    key: '_wrapCellStyleGetter',
	    value: function _wrapCellStyleGetter(style) {
	      return this._wrapPropertyGetter(style);
	    }
	  }, {
	    key: '_wrapPropertyGetter',
	    value: function _wrapPropertyGetter(value) {
	      return value instanceof Function ? value : function () {
	        return value;
	      };
	    }
	  }, {
	    key: '_wrapSizeGetter',
	    value: function _wrapSizeGetter(size) {
	      return this._wrapPropertyGetter(size);
	    }
	  }, {
	    key: '_updateScrollLeftForScrollToColumn',
	    value: function _updateScrollLeftForScrollToColumn() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	      var state = arguments.length <= 1 || arguments[1] === undefined ? this.state : arguments[1];
	      var columnCount = props.columnCount;
	      var scrollToAlignment = props.scrollToAlignment;
	      var scrollToColumn = props.scrollToColumn;
	      var width = props.width;
	      var scrollLeft = state.scrollLeft;


	      if (scrollToColumn >= 0 && columnCount > 0) {
	        var targetIndex = Math.max(0, Math.min(columnCount - 1, scrollToColumn));

	        var calculatedScrollLeft = this._columnSizeAndPositionManager.getUpdatedOffsetForIndex({
	          align: scrollToAlignment,
	          containerSize: width,
	          currentOffset: scrollLeft,
	          targetIndex: targetIndex
	        });

	        if (scrollLeft !== calculatedScrollLeft) {
	          this._setScrollPosition({
	            scrollLeft: calculatedScrollLeft
	          });
	        }
	      }
	    }
	  }, {
	    key: '_updateScrollTopForScrollToRow',
	    value: function _updateScrollTopForScrollToRow() {
	      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
	      var state = arguments.length <= 1 || arguments[1] === undefined ? this.state : arguments[1];
	      var height = props.height;
	      var rowCount = props.rowCount;
	      var scrollToAlignment = props.scrollToAlignment;
	      var scrollToRow = props.scrollToRow;
	      var scrollTop = state.scrollTop;


	      if (scrollToRow >= 0 && rowCount > 0) {
	        var targetIndex = Math.max(0, Math.min(rowCount - 1, scrollToRow));

	        var calculatedScrollTop = this._rowSizeAndPositionManager.getUpdatedOffsetForIndex({
	          align: scrollToAlignment,
	          containerSize: height,
	          currentOffset: scrollTop,
	          targetIndex: targetIndex
	        });

	        if (scrollTop !== calculatedScrollTop) {
	          this._setScrollPosition({
	            scrollTop: calculatedScrollTop
	          });
	        }
	      }
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(event) {
	      // In certain edge-cases React dispatches an onScroll event with an invalid target.scrollLeft / target.scrollTop.
	      // This invalid event can be detected by comparing event.target to this component's scrollable DOM element.
	      // See issue #404 for more information.
	      if (event.target !== this._scrollingContainer) {
	        return;
	      }

	      // Prevent pointer events from interrupting a smooth scroll
	      this._enablePointerEventsAfterDelay();

	      // When this component is shrunk drastically, React dispatches a series of back-to-back scroll events,
	      // Gradually converging on a scrollTop that is within the bounds of the new, smaller height.
	      // This causes a series of rapid renders that is slow for long lists.
	      // We can avoid that by doing some simple bounds checking to ensure that scrollTop never exceeds the total height.
	      var _props6 = this.props;
	      var height = _props6.height;
	      var width = _props6.width;

	      var scrollbarSize = this._scrollbarSize;
	      var totalRowsHeight = this._rowSizeAndPositionManager.getTotalSize();
	      var totalColumnsWidth = this._columnSizeAndPositionManager.getTotalSize();
	      var scrollLeft = Math.min(Math.max(0, totalColumnsWidth - width + scrollbarSize), event.target.scrollLeft);
	      var scrollTop = Math.min(Math.max(0, totalRowsHeight - height + scrollbarSize), event.target.scrollTop);

	      // Certain devices (like Apple touchpad) rapid-fire duplicate events.
	      // Don't force a re-render if this is the case.
	      // The mouse may move faster then the animation frame does.
	      // Use requestAnimationFrame to avoid over-updating.
	      if (this.state.scrollLeft !== scrollLeft || this.state.scrollTop !== scrollTop) {
	        // Browsers with cancelable scroll events (eg. Firefox) interrupt scrolling animations if scrollTop/scrollLeft is set.
	        // Other browsers (eg. Safari) don't scroll as well without the help under certain conditions (DOM or style changes during scrolling).
	        // All things considered, this seems to be the best current work around that I'm aware of.
	        // For more information see https://github.com/bvaughn/react-virtualized/pull/124
	        var scrollPositionChangeReason = event.cancelable ? SCROLL_POSITION_CHANGE_REASONS.OBSERVED : SCROLL_POSITION_CHANGE_REASONS.REQUESTED;

	        if (!this.state.isScrolling) {
	          this.setState({
	            isScrolling: true
	          });
	        }

	        this._setNextState({
	          isScrolling: true,
	          scrollLeft: scrollLeft,
	          scrollPositionChangeReason: scrollPositionChangeReason,
	          scrollTop: scrollTop
	        });
	      }

	      this._invokeOnScrollMemoizer({ scrollLeft: scrollLeft, scrollTop: scrollTop, totalColumnsWidth: totalColumnsWidth, totalRowsHeight: totalRowsHeight });
	    }
	  }]);

	  return Grid;
	}(_react.Component);

	Grid.propTypes = {
	  'aria-label': _react.PropTypes.string,

	  /**
	   * Set the width of the inner scrollable container to 'auto'.
	   * This is useful for single-column Grids to ensure that the column doesn't extend below a vertical scrollbar.
	   */
	  autoContainerWidth: _react.PropTypes.bool,

	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,

	  /** Optional custom CSS class for individual cells */
	  cellClassName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),

	  /** Optional custom styles for individual cells */
	  cellStyle: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),

	  /**
	   * Responsible for rendering a cell given an row and column index.
	   * Should implement the following interface: ({ columnIndex: number, rowIndex: number }): PropTypes.node
	   */
	  cellRenderer: _react.PropTypes.func.isRequired,

	  /**
	   * Responsible for rendering a group of cells given their index ranges.
	   * Should implement the following interface: ({
	   *   cellCache: Map,
	   *   cellRenderer: Function,
	   *   columnSizeAndPositionManager: CellSizeAndPositionManager,
	   *   columnStartIndex: number,
	   *   columnStopIndex: number,
	   *   isScrolling: boolean,
	   *   rowSizeAndPositionManager: CellSizeAndPositionManager,
	   *   rowStartIndex: number,
	   *   rowStopIndex: number,
	   *   scrollLeft: number,
	   *   scrollTop: number
	   * }): Array<PropTypes.node>
	   */
	  cellRangeRenderer: _react.PropTypes.func.isRequired,

	  /**
	   * Optional custom CSS class name to attach to root Grid element.
	   */
	  className: _react.PropTypes.string,

	  /**
	   * Number of columns in grid.
	   */
	  columnCount: _react.PropTypes.number.isRequired,

	  /**
	   * Either a fixed column width (number) or a function that returns the width of a column given its index.
	   * Should implement the following interface: (index: number): number
	   */
	  columnWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,

	  /**
	   * Used to estimate the total width of a Grid before all of its columns have actually been measured.
	   * The estimated total width is adjusted as columns are rendered.
	   */
	  estimatedColumnSize: _react.PropTypes.number.isRequired,

	  /**
	   * Used to estimate the total height of a Grid before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
	  estimatedRowSize: _react.PropTypes.number.isRequired,

	  /**
	   * Height of Grid; this property determines the number of visible (vs virtualized) rows.
	   */
	  height: _react.PropTypes.number.isRequired,

	  /**
	   * Optional renderer to be used in place of rows when either :rowCount or :columnCount is 0.
	   */
	  noContentRenderer: _react.PropTypes.func.isRequired,

	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, clientWidth, scrollHeight, scrollLeft, scrollTop, scrollWidth }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,

	  /**
	   * Callback invoked with information about the section of the Grid that was just rendered.
	   * ({ columnStartIndex, columnStopIndex, rowStartIndex, rowStopIndex }): void
	   */
	  onSectionRendered: _react.PropTypes.func.isRequired,

	  /**
	   * Number of columns to render before/after the visible section of the grid.
	   * These columns can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
	  overscanColumnCount: _react.PropTypes.number.isRequired,

	  /**
	   * Number of rows to render above/below the visible section of the grid.
	   * These rows can help for smoother scrolling on touch devices or browsers that send scroll events infrequently.
	   */
	  overscanRowCount: _react.PropTypes.number.isRequired,

	  /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * Should implement the following interface: ({ index: number }): number
	   */
	  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,

	  /**
	   * Number of rows in grid.
	   */
	  rowCount: _react.PropTypes.number.isRequired,

	  /** Horizontal offset. */
	  scrollLeft: _react.PropTypes.number,

	  /**
	   * Controls scroll-to-cell behavior of the Grid.
	   * The default ("auto") scrolls the least amount possible to ensure that the specified cell is fully visible.
	   * Use "start" to align cells to the top/left of the Grid and "end" to align bottom/right.
	   */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

	  /**
	   * Column index to ensure visible (by forcefully scrolling if necessary)
	   */
	  scrollToColumn: _react.PropTypes.number,

	  /** Vertical offset. */
	  scrollTop: _react.PropTypes.number,

	  /**
	   * Row index to ensure visible (by forcefully scrolling if necessary)
	   */
	  scrollToRow: _react.PropTypes.number,

	  /** Optional inline style */
	  style: _react.PropTypes.object,

	  /** Tab index for focus */
	  tabIndex: _react.PropTypes.number,

	  /**
	   * Width of Grid; this property determines the number of visible (vs virtualized) columns.
	   */
	  width: _react.PropTypes.number.isRequired
	};
	Grid.defaultProps = {
	  'aria-label': 'grid',
	  cellStyle: {},
	  cellRangeRenderer: _defaultCellRangeRenderer2.default,
	  estimatedColumnSize: 100,
	  estimatedRowSize: 30,
	  noContentRenderer: function noContentRenderer() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  onSectionRendered: function onSectionRendered() {
	    return null;
	  },
	  overscanColumnCount: 0,
	  overscanRowCount: 10,
	  scrollToAlignment: 'auto',
	  style: {},
	  tabIndex: 0
	};
	exports.default = Grid;

/***/ },
/* 170 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = calculateSizeAndPositionDataAndUpdateScrollOffset;
	/**
	 * Helper method that determines when to recalculate row or column metadata.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param cellsSize Width or height of cells for the current axis
	 * @param computeMetadataCallback Method to invoke if cell metadata should be recalculated
	 * @param computeMetadataCallbackProps Parameters to pass to :computeMetadataCallback
	 * @param nextCellsCount Newly updated number of rows or columns in the current axis
	 * @param nextCellsSize Newly updated width or height of cells for the current axis
	 * @param nextScrollToIndex Newly updated scroll-to-index
	 * @param scrollToIndex Scroll-to-index
	 * @param updateScrollOffsetForScrollToIndex Callback to invoke if the scroll position should be recalculated
	 */
	function calculateSizeAndPositionDataAndUpdateScrollOffset(_ref) {
	  var cellCount = _ref.cellCount;
	  var cellSize = _ref.cellSize;
	  var computeMetadataCallback = _ref.computeMetadataCallback;
	  var computeMetadataCallbackProps = _ref.computeMetadataCallbackProps;
	  var nextCellsCount = _ref.nextCellsCount;
	  var nextCellSize = _ref.nextCellSize;
	  var nextScrollToIndex = _ref.nextScrollToIndex;
	  var scrollToIndex = _ref.scrollToIndex;
	  var updateScrollOffsetForScrollToIndex = _ref.updateScrollOffsetForScrollToIndex;

	  // Don't compare cell sizes if they are functions because inline functions would cause infinite loops.
	  // In that event users should use the manual recompute methods to inform of changes.
	  if (cellCount !== nextCellsCount || (typeof cellSize === 'number' || typeof nextCellSize === 'number') && cellSize !== nextCellSize) {
	    computeMetadataCallback(computeMetadataCallbackProps);

	    // Updated cell metadata may have hidden the previous scrolled-to item.
	    // In this case we should also update the scrollTop to ensure it stays visible.
	    if (scrollToIndex >= 0 && scrollToIndex === nextScrollToIndex) {
	      updateScrollOffsetForScrollToIndex();
	    }
	  }
	}

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DEFAULT_MAX_SCROLL_SIZE = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _CellSizeAndPositionManager = __webpack_require__(172);

	var _CellSizeAndPositionManager2 = _interopRequireDefault(_CellSizeAndPositionManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Browsers have scroll offset limitations (eg Chrome stops scrolling at ~33.5M pixels).
	 * After a certain position, the browser won't allow the user to scroll further (even via JavaScript scroll offset adjustments).
	 * This util picks a lower ceiling for max size and artificially adjusts positions within to make it transparent for users.
	 */
	var DEFAULT_MAX_SCROLL_SIZE = exports.DEFAULT_MAX_SCROLL_SIZE = 10000000;

	/**
	 * Extends CellSizeAndPositionManager and adds scaling behavior for lists that are too large to fit within a browser's native limits.
	 */

	var ScalingCellSizeAndPositionManager = function () {
	  function ScalingCellSizeAndPositionManager(_ref) {
	    var _ref$maxScrollSize = _ref.maxScrollSize;
	    var maxScrollSize = _ref$maxScrollSize === undefined ? DEFAULT_MAX_SCROLL_SIZE : _ref$maxScrollSize;

	    var params = _objectWithoutProperties(_ref, ['maxScrollSize']);

	    _classCallCheck(this, ScalingCellSizeAndPositionManager);

	    // Favor composition over inheritance to simplify IE10 support
	    this._cellSizeAndPositionManager = new _CellSizeAndPositionManager2.default(params);
	    this._maxScrollSize = maxScrollSize;
	  }

	  _createClass(ScalingCellSizeAndPositionManager, [{
	    key: 'configure',
	    value: function configure(params) {
	      this._cellSizeAndPositionManager.configure(params);
	    }
	  }, {
	    key: 'getCellCount',
	    value: function getCellCount() {
	      return this._cellSizeAndPositionManager.getCellCount();
	    }
	  }, {
	    key: 'getEstimatedCellSize',
	    value: function getEstimatedCellSize() {
	      return this._cellSizeAndPositionManager.getEstimatedCellSize();
	    }
	  }, {
	    key: 'getLastMeasuredIndex',
	    value: function getLastMeasuredIndex() {
	      return this._cellSizeAndPositionManager.getLastMeasuredIndex();
	    }

	    /**
	     * Number of pixels a cell at the given position (offset) should be shifted in order to fit within the scaled container.
	     * The offset passed to this function is scalled (safe) as well.
	     */

	  }, {
	    key: 'getOffsetAdjustment',
	    value: function getOffsetAdjustment(_ref2) {
	      var containerSize = _ref2.containerSize;
	      var offset // safe
	      = _ref2.offset;

	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();
	      var offsetPercentage = this._getOffsetPercentage({
	        containerSize: containerSize,
	        offset: offset,
	        totalSize: safeTotalSize
	      });

	      return Math.round(offsetPercentage * (safeTotalSize - totalSize));
	    }
	  }, {
	    key: 'getSizeAndPositionOfCell',
	    value: function getSizeAndPositionOfCell(index) {
	      return this._cellSizeAndPositionManager.getSizeAndPositionOfCell(index);
	    }
	  }, {
	    key: 'getSizeAndPositionOfLastMeasuredCell',
	    value: function getSizeAndPositionOfLastMeasuredCell() {
	      return this._cellSizeAndPositionManager.getSizeAndPositionOfLastMeasuredCell();
	    }

	    /** See CellSizeAndPositionManager#getTotalSize */

	  }, {
	    key: 'getTotalSize',
	    value: function getTotalSize() {
	      return Math.min(this._maxScrollSize, this._cellSizeAndPositionManager.getTotalSize());
	    }

	    /** See CellSizeAndPositionManager#getUpdatedOffsetForIndex */

	  }, {
	    key: 'getUpdatedOffsetForIndex',
	    value: function getUpdatedOffsetForIndex(_ref3) {
	      var _ref3$align = _ref3.align;
	      var align = _ref3$align === undefined ? 'auto' : _ref3$align;
	      var containerSize = _ref3.containerSize;
	      var currentOffset = _ref3.currentOffset;
	      var // safe
	      targetIndex = _ref3.targetIndex;
	      var totalSize = _ref3.totalSize;

	      currentOffset = this._safeOffsetToOffset({
	        containerSize: containerSize,
	        offset: currentOffset
	      });

	      var offset = this._cellSizeAndPositionManager.getUpdatedOffsetForIndex({
	        align: align,
	        containerSize: containerSize,
	        currentOffset: currentOffset,
	        targetIndex: targetIndex,
	        totalSize: totalSize
	      });

	      return this._offsetToSafeOffset({
	        containerSize: containerSize,
	        offset: offset
	      });
	    }

	    /** See CellSizeAndPositionManager#getVisibleCellRange */

	  }, {
	    key: 'getVisibleCellRange',
	    value: function getVisibleCellRange(_ref4) {
	      var containerSize = _ref4.containerSize;
	      var offset // safe
	      = _ref4.offset;

	      offset = this._safeOffsetToOffset({
	        containerSize: containerSize,
	        offset: offset
	      });

	      return this._cellSizeAndPositionManager.getVisibleCellRange({
	        containerSize: containerSize,
	        offset: offset
	      });
	    }
	  }, {
	    key: 'resetCell',
	    value: function resetCell(index) {
	      this._cellSizeAndPositionManager.resetCell(index);
	    }
	  }, {
	    key: '_getOffsetPercentage',
	    value: function _getOffsetPercentage(_ref5) {
	      var containerSize = _ref5.containerSize;
	      var offset = _ref5.offset;
	      var // safe
	      totalSize = _ref5.totalSize;

	      return totalSize <= containerSize ? 0 : offset / (totalSize - containerSize);
	    }
	  }, {
	    key: '_offsetToSafeOffset',
	    value: function _offsetToSafeOffset(_ref6) {
	      var containerSize = _ref6.containerSize;
	      var offset // unsafe
	      = _ref6.offset;

	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();

	      if (totalSize === safeTotalSize) {
	        return offset;
	      } else {
	        var offsetPercentage = this._getOffsetPercentage({
	          containerSize: containerSize,
	          offset: offset,
	          totalSize: totalSize
	        });

	        return Math.round(offsetPercentage * (safeTotalSize - containerSize));
	      }
	    }
	  }, {
	    key: '_safeOffsetToOffset',
	    value: function _safeOffsetToOffset(_ref7) {
	      var containerSize = _ref7.containerSize;
	      var offset // safe
	      = _ref7.offset;

	      var totalSize = this._cellSizeAndPositionManager.getTotalSize();
	      var safeTotalSize = this.getTotalSize();

	      if (totalSize === safeTotalSize) {
	        return offset;
	      } else {
	        var offsetPercentage = this._getOffsetPercentage({
	          containerSize: containerSize,
	          offset: offset,
	          totalSize: safeTotalSize
	        });

	        return Math.round(offsetPercentage * (totalSize - containerSize));
	      }
	    }
	  }]);

	  return ScalingCellSizeAndPositionManager;
	}();

	exports.default = ScalingCellSizeAndPositionManager;

/***/ },
/* 172 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Just-in-time calculates and caches size and position information for a collection of cells.
	 */

	var CellSizeAndPositionManager = function () {
	  function CellSizeAndPositionManager(_ref) {
	    var cellCount = _ref.cellCount;
	    var cellSizeGetter = _ref.cellSizeGetter;
	    var estimatedCellSize = _ref.estimatedCellSize;

	    _classCallCheck(this, CellSizeAndPositionManager);

	    this._cellSizeGetter = cellSizeGetter;
	    this._cellCount = cellCount;
	    this._estimatedCellSize = estimatedCellSize;

	    // Cache of size and position data for cells, mapped by cell index.
	    // Note that invalid values may exist in this map so only rely on cells up to this._lastMeasuredIndex
	    this._cellSizeAndPositionData = {};

	    // Measurements for cells up to this index can be trusted; cells afterward should be estimated.
	    this._lastMeasuredIndex = -1;
	  }

	  _createClass(CellSizeAndPositionManager, [{
	    key: 'configure',
	    value: function configure(_ref2) {
	      var cellCount = _ref2.cellCount;
	      var estimatedCellSize = _ref2.estimatedCellSize;

	      this._cellCount = cellCount;
	      this._estimatedCellSize = estimatedCellSize;
	    }
	  }, {
	    key: 'getCellCount',
	    value: function getCellCount() {
	      return this._cellCount;
	    }
	  }, {
	    key: 'getEstimatedCellSize',
	    value: function getEstimatedCellSize() {
	      return this._estimatedCellSize;
	    }
	  }, {
	    key: 'getLastMeasuredIndex',
	    value: function getLastMeasuredIndex() {
	      return this._lastMeasuredIndex;
	    }

	    /**
	     * This method returns the size and position for the cell at the specified index.
	     * It just-in-time calculates (or used cached values) for cells leading up to the index.
	     */

	  }, {
	    key: 'getSizeAndPositionOfCell',
	    value: function getSizeAndPositionOfCell(index) {
	      if (index < 0 || index >= this._cellCount) {
	        throw Error('Requested index ' + index + ' is outside of range 0..' + this._cellCount);
	      }

	      if (index > this._lastMeasuredIndex) {
	        var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
	        var _offset = lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size;

	        for (var i = this._lastMeasuredIndex + 1; i <= index; i++) {
	          var _size = this._cellSizeGetter({ index: i });

	          if (_size == null || isNaN(_size)) {
	            throw Error('Invalid size returned for cell ' + i + ' of value ' + _size);
	          }

	          this._cellSizeAndPositionData[i] = {
	            offset: _offset,
	            size: _size
	          };

	          _offset += _size;
	        }

	        this._lastMeasuredIndex = index;
	      }

	      return this._cellSizeAndPositionData[index];
	    }
	  }, {
	    key: 'getSizeAndPositionOfLastMeasuredCell',
	    value: function getSizeAndPositionOfLastMeasuredCell() {
	      return this._lastMeasuredIndex >= 0 ? this._cellSizeAndPositionData[this._lastMeasuredIndex] : {
	        offset: 0,
	        size: 0
	      };
	    }

	    /**
	     * Total size of all cells being measured.
	     * This value will be completedly estimated initially.
	     * As cells as measured the estimate will be updated.
	     */

	  }, {
	    key: 'getTotalSize',
	    value: function getTotalSize() {
	      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();

	      return lastMeasuredCellSizeAndPosition.offset + lastMeasuredCellSizeAndPosition.size + (this._cellCount - this._lastMeasuredIndex - 1) * this._estimatedCellSize;
	    }

	    /**
	     * Determines a new offset that ensures a certain cell is visible, given the current offset.
	     * If the cell is already visible then the current offset will be returned.
	     * If the current offset is too great or small, it will be adjusted just enough to ensure the specified index is visible.
	     *
	     * @param align Desired alignment within container; one of "auto" (default), "start", or "end"
	     * @param containerSize Size (width or height) of the container viewport
	     * @param currentOffset Container's current (x or y) offset
	     * @param totalSize Total size (width or height) of all cells
	     * @return Offset to use to ensure the specified cell is visible
	     */

	  }, {
	    key: 'getUpdatedOffsetForIndex',
	    value: function getUpdatedOffsetForIndex(_ref3) {
	      var _ref3$align = _ref3.align;
	      var align = _ref3$align === undefined ? 'auto' : _ref3$align;
	      var containerSize = _ref3.containerSize;
	      var currentOffset = _ref3.currentOffset;
	      var targetIndex = _ref3.targetIndex;

	      var datum = this.getSizeAndPositionOfCell(targetIndex);
	      var maxOffset = datum.offset;
	      var minOffset = maxOffset - containerSize + datum.size;

	      var idealOffset = void 0;

	      switch (align) {
	        case 'start':
	          idealOffset = maxOffset;
	          break;
	        case 'end':
	          idealOffset = minOffset;
	          break;
	        case 'center':
	          idealOffset = maxOffset - (containerSize - datum.size) / 2;
	          break;
	        default:
	          idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
	          break;
	      }

	      var totalSize = this.getTotalSize();

	      return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
	    }
	  }, {
	    key: 'getVisibleCellRange',
	    value: function getVisibleCellRange(_ref4) {
	      var containerSize = _ref4.containerSize;
	      var offset = _ref4.offset;

	      var totalSize = this.getTotalSize();

	      if (totalSize === 0) {
	        return {};
	      }

	      var maxOffset = offset + containerSize;
	      var start = this._findNearestCell(offset);

	      var datum = this.getSizeAndPositionOfCell(start);
	      offset = datum.offset + datum.size;

	      var stop = start;

	      while (offset < maxOffset && stop < this._cellCount - 1) {
	        stop++;

	        offset += this.getSizeAndPositionOfCell(stop).size;
	      }

	      return {
	        start: start,
	        stop: stop
	      };
	    }

	    /**
	     * Clear all cached values for cells after the specified index.
	     * This method should be called for any cell that has changed its size.
	     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionOfCell() is called.
	     */

	  }, {
	    key: 'resetCell',
	    value: function resetCell(index) {
	      this._lastMeasuredIndex = Math.min(this._lastMeasuredIndex, index - 1);
	    }
	  }, {
	    key: '_binarySearch',
	    value: function _binarySearch(_ref5) {
	      var high = _ref5.high;
	      var low = _ref5.low;
	      var offset = _ref5.offset;

	      var middle = void 0;
	      var currentOffset = void 0;

	      while (low <= high) {
	        middle = low + Math.floor((high - low) / 2);
	        currentOffset = this.getSizeAndPositionOfCell(middle).offset;

	        if (currentOffset === offset) {
	          return middle;
	        } else if (currentOffset < offset) {
	          low = middle + 1;
	        } else if (currentOffset > offset) {
	          high = middle - 1;
	        }
	      }

	      if (low > 0) {
	        return low - 1;
	      }
	    }
	  }, {
	    key: '_exponentialSearch',
	    value: function _exponentialSearch(_ref6) {
	      var index = _ref6.index;
	      var offset = _ref6.offset;

	      var interval = 1;

	      while (index < this._cellCount && this.getSizeAndPositionOfCell(index).offset < offset) {
	        index += interval;
	        interval *= 2;
	      }

	      return this._binarySearch({
	        high: Math.min(index, this._cellCount - 1),
	        low: Math.floor(index / 2),
	        offset: offset
	      });
	    }

	    /**
	     * Searches for the cell (index) nearest the specified offset.
	     *
	     * If no exact match is found the next lowest cell index will be returned.
	     * This allows partially visible cells (with offsets just before/above the fold) to be visible.
	     */

	  }, {
	    key: '_findNearestCell',
	    value: function _findNearestCell(offset) {
	      if (isNaN(offset)) {
	        throw Error('Invalid offset ' + offset + ' specified');
	      }

	      // Our search algorithms find the nearest match at or below the specified offset.
	      // So make sure the offset is at least 0 or no match will be found.
	      offset = Math.max(0, offset);

	      var lastMeasuredCellSizeAndPosition = this.getSizeAndPositionOfLastMeasuredCell();
	      var lastMeasuredIndex = Math.max(0, this._lastMeasuredIndex);

	      if (lastMeasuredCellSizeAndPosition.offset >= offset) {
	        // If we've already measured cells within this range just use a binary search as it's faster.
	        return this._binarySearch({
	          high: lastMeasuredIndex,
	          low: 0,
	          offset: offset
	        });
	      } else {
	        // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
	        // The exponential search avoids pre-computing sizes for the full set of cells as a binary search would.
	        // The overall complexity for this approach is O(log n).
	        return this._exponentialSearch({
	          index: lastMeasuredIndex,
	          offset: offset
	        });
	      }
	    }
	  }]);

	  return CellSizeAndPositionManager;
	}();

	exports.default = CellSizeAndPositionManager;

/***/ },
/* 173 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getOverscanIndices;
	/**
	 * Calculates the number of cells to overscan before and after a specified range.
	 * This function ensures that overscanning doesn't exceed the available cells.
	 *
	 * @param cellCount Number of rows or columns in the current axis
	 * @param overscanCellsCount Maximum number of cells to over-render in either direction
	 * @param startIndex Begin of range of visible cells
	 * @param stopIndex End of range of visible cells
	 */
	function getOverscanIndices(_ref) {
	  var cellCount = _ref.cellCount;
	  var overscanCellsCount = _ref.overscanCellsCount;
	  var startIndex = _ref.startIndex;
	  var stopIndex = _ref.stopIndex;

	  return {
	    overscanStartIndex: Math.max(0, startIndex - overscanCellsCount),
	    overscanStopIndex: Math.min(cellCount - 1, stopIndex + overscanCellsCount)
	  };
	}

/***/ },
/* 174 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = updateScrollIndexHelper;
	/**
	 * Helper function that determines when to update scroll offsets to ensure that a scroll-to-index remains visible.
	 * This function also ensures that the scroll ofset isn't past the last column/row of cells.
	 *
	 * @param cellsSize Width or height of cells for the current axis
	 * @param cellSizeAndPositionManager Manages size and position metadata of cells
	 * @param previousCellsCount Previous number of rows or columns
	 * @param previousCellsSize Previous width or height of cells
	 * @param previousScrollToIndex Previous scroll-to-index
	 * @param previousSize Previous width or height of the virtualized container
	 * @param scrollOffset Current scrollLeft or scrollTop
	 * @param scrollToIndex Scroll-to-index
	 * @param size Width or height of the virtualized container
	 * @param updateScrollIndexCallback Callback to invoke with an scroll-to-index value
	 */
	function updateScrollIndexHelper(_ref) {
	  var cellSize = _ref.cellSize;
	  var cellSizeAndPositionManager = _ref.cellSizeAndPositionManager;
	  var previousCellsCount = _ref.previousCellsCount;
	  var previousCellSize = _ref.previousCellSize;
	  var previousScrollToAlignment = _ref.previousScrollToAlignment;
	  var previousScrollToIndex = _ref.previousScrollToIndex;
	  var previousSize = _ref.previousSize;
	  var scrollOffset = _ref.scrollOffset;
	  var scrollToAlignment = _ref.scrollToAlignment;
	  var scrollToIndex = _ref.scrollToIndex;
	  var size = _ref.size;
	  var updateScrollIndexCallback = _ref.updateScrollIndexCallback;

	  var cellCount = cellSizeAndPositionManager.getCellCount();
	  var hasScrollToIndex = scrollToIndex >= 0 && scrollToIndex < cellCount;
	  var sizeHasChanged = size !== previousSize || !previousCellSize || typeof cellSize === 'number' && cellSize !== previousCellSize;

	  // If we have a new scroll target OR if height/row-height has changed,
	  // We should ensure that the scroll target is visible.
	  if (hasScrollToIndex && (sizeHasChanged || scrollToAlignment !== previousScrollToAlignment || scrollToIndex !== previousScrollToIndex)) {
	    updateScrollIndexCallback(scrollToIndex);

	    // If we don't have a selected item but list size or number of children have decreased,
	    // Make sure we aren't scrolled too far past the current content.
	  } else if (!hasScrollToIndex && cellCount > 0 && (size < previousSize || cellCount < previousCellsCount)) {
	      scrollToIndex = cellCount - 1;

	      var calculatedScrollOffset = cellSizeAndPositionManager.getUpdatedOffsetForIndex({
	        containerSize: size,
	        currentOffset: scrollOffset,
	        targetIndex: scrollToIndex
	      });

	      // Only adjust the scroll position if we've scrolled below the last set of rows.
	      if (calculatedScrollOffset < scrollOffset) {
	        updateScrollIndexCallback(cellCount - 1);
	      }
	    }
	}

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = defaultCellRangeRenderer;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Default implementation of cellRangeRenderer used by Grid.
	 * This renderer supports cell-caching while the user is scrolling.
	 */
	function defaultCellRangeRenderer(_ref) {
	  var cellCache = _ref.cellCache;
	  var cellClassName = _ref.cellClassName;
	  var cellRenderer = _ref.cellRenderer;
	  var cellStyle = _ref.cellStyle;
	  var columnSizeAndPositionManager = _ref.columnSizeAndPositionManager;
	  var columnStartIndex = _ref.columnStartIndex;
	  var columnStopIndex = _ref.columnStopIndex;
	  var horizontalOffsetAdjustment = _ref.horizontalOffsetAdjustment;
	  var isScrolling = _ref.isScrolling;
	  var rowSizeAndPositionManager = _ref.rowSizeAndPositionManager;
	  var rowStartIndex = _ref.rowStartIndex;
	  var rowStopIndex = _ref.rowStopIndex;
	  var scrollLeft = _ref.scrollLeft;
	  var scrollTop = _ref.scrollTop;
	  var verticalOffsetAdjustment = _ref.verticalOffsetAdjustment;

	  var renderedCells = [];

	  for (var rowIndex = rowStartIndex; rowIndex <= rowStopIndex; rowIndex++) {
	    var rowDatum = rowSizeAndPositionManager.getSizeAndPositionOfCell(rowIndex);

	    for (var columnIndex = columnStartIndex; columnIndex <= columnStopIndex; columnIndex++) {
	      var columnDatum = columnSizeAndPositionManager.getSizeAndPositionOfCell(columnIndex);
	      var key = rowIndex + '-' + columnIndex;
	      var cellStyleObject = cellStyle({ rowIndex: rowIndex, columnIndex: columnIndex });
	      var renderedCell = void 0;

	      // Avoid re-creating cells while scrolling.
	      // This can lead to the same cell being created many times and can cause performance issues for "heavy" cells.
	      // If a scroll is in progress- cache and reuse cells.
	      // This cache will be thrown away once scrolling complets.
	      if (isScrolling) {
	        if (!cellCache[key]) {
	          cellCache[key] = cellRenderer({
	            columnIndex: columnIndex,
	            isScrolling: isScrolling,
	            rowIndex: rowIndex
	          });
	        }
	        renderedCell = cellCache[key];
	        // If the user is no longer scrolling, don't cache cells.
	        // This makes dynamic cell content difficult for users and would also lead to a heavier memory footprint.
	      } else {
	          renderedCell = cellRenderer({
	            columnIndex: columnIndex,
	            isScrolling: isScrolling,
	            rowIndex: rowIndex
	          });
	        }

	      if (renderedCell == null || renderedCell === false) {
	        continue;
	      }

	      var className = cellClassName({ columnIndex: columnIndex, rowIndex: rowIndex });

	      var child = _react2.default.createElement(
	        'div',
	        {
	          key: key,
	          className: (0, _classnames2.default)('Grid__cell', className),
	          style: _extends({
	            height: rowDatum.size,
	            left: columnDatum.offset + horizontalOffsetAdjustment,
	            top: rowDatum.offset + verticalOffsetAdjustment,
	            width: columnDatum.size
	          }, cellStyleObject)
	        },
	        renderedCell
	      );

	      renderedCells.push(child);
	    }
	  }

	  return renderedCells;
	}

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SortIndicator = exports.SortDirection = exports.FlexColumn = exports.FlexTable = exports.defaultRowRenderer = exports.defaultHeaderRenderer = exports.defaultCellRenderer = exports.defaultCellDataGetter = exports.default = undefined;

	var _FlexTable2 = __webpack_require__(177);

	var _FlexTable3 = _interopRequireDefault(_FlexTable2);

	var _defaultCellDataGetter2 = __webpack_require__(183);

	var _defaultCellDataGetter3 = _interopRequireDefault(_defaultCellDataGetter2);

	var _defaultCellRenderer2 = __webpack_require__(182);

	var _defaultCellRenderer3 = _interopRequireDefault(_defaultCellRenderer2);

	var _defaultHeaderRenderer2 = __webpack_require__(179);

	var _defaultHeaderRenderer3 = _interopRequireDefault(_defaultHeaderRenderer2);

	var _defaultRowRenderer2 = __webpack_require__(184);

	var _defaultRowRenderer3 = _interopRequireDefault(_defaultRowRenderer2);

	var _FlexColumn2 = __webpack_require__(178);

	var _FlexColumn3 = _interopRequireDefault(_FlexColumn2);

	var _SortDirection2 = __webpack_require__(181);

	var _SortDirection3 = _interopRequireDefault(_SortDirection2);

	var _SortIndicator2 = __webpack_require__(180);

	var _SortIndicator3 = _interopRequireDefault(_SortIndicator2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _FlexTable3.default;
	exports.defaultCellDataGetter = _defaultCellDataGetter3.default;
	exports.defaultCellRenderer = _defaultCellRenderer3.default;
	exports.defaultHeaderRenderer = _defaultHeaderRenderer3.default;
	exports.defaultRowRenderer = _defaultRowRenderer3.default;
	exports.FlexTable = _FlexTable3.default;
	exports.FlexColumn = _FlexColumn3.default;
	exports.SortDirection = _SortDirection3.default;
	exports.SortIndicator = _SortIndicator3.default;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FlexColumn = __webpack_require__(178);

	var _FlexColumn2 = _interopRequireDefault(_FlexColumn);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(153);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _Grid = __webpack_require__(168);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _defaultRowRenderer = __webpack_require__(184);

	var _defaultRowRenderer2 = _interopRequireDefault(_defaultRowRenderer);

	var _SortDirection = __webpack_require__(181);

	var _SortDirection2 = _interopRequireDefault(_SortDirection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Table component with fixed headers and virtualized rows for improved performance with large data sets.
	 * This component expects explicit width, height, and padding parameters.
	 */

	var FlexTable = function (_Component) {
	  _inherits(FlexTable, _Component);

	  function FlexTable(props) {
	    _classCallCheck(this, FlexTable);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FlexTable).call(this, props));

	    _this.state = {
	      scrollbarWidth: 0
	    };

	    _this._cellClassName = _this._cellClassName.bind(_this);
	    _this._cellStyle = _this._cellStyle.bind(_this);
	    _this._createColumn = _this._createColumn.bind(_this);
	    _this._createRow = _this._createRow.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
	    return _this;
	  }

	  _createClass(FlexTable, [{
	    key: 'forceUpdateGrid',
	    value: function forceUpdateGrid() {
	      this.Grid.forceUpdate();
	    }

	    /** See Grid#measureAllCells */

	  }, {
	    key: 'measureAllRows',
	    value: function measureAllRows() {
	      this.Grid.measureAllCells();
	    }

	    /** See Grid#recomputeGridSize */

	  }, {
	    key: 'recomputeRowHeights',
	    value: function recomputeRowHeights() {
	      var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.Grid.recomputeGridSize({
	        rowIndex: index
	      });
	      this.forceUpdateGrid();
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._setScrollbarWidth();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this._setScrollbarWidth();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var children = _props.children;
	      var className = _props.className;
	      var disableHeader = _props.disableHeader;
	      var gridClassName = _props.gridClassName;
	      var gridStyle = _props.gridStyle;
	      var headerHeight = _props.headerHeight;
	      var height = _props.height;
	      var noRowsRenderer = _props.noRowsRenderer;
	      var rowClassName = _props.rowClassName;
	      var rowStyle = _props.rowStyle;
	      var scrollToIndex = _props.scrollToIndex;
	      var style = _props.style;
	      var width = _props.width;
	      var scrollbarWidth = this.state.scrollbarWidth;


	      var availableRowsHeight = height - headerHeight;

	      var rowClass = rowClassName instanceof Function ? rowClassName({ index: -1 }) : rowClassName;
	      var rowStyleObject = rowStyle instanceof Function ? rowStyle({ index: -1 }) : rowStyle;

	      // Precompute and cache column styles before rendering rows and columns to speed things up
	      this._cachedColumnStyles = [];
	      _react2.default.Children.toArray(children).forEach(function (column, index) {
	        _this2._cachedColumnStyles[index] = _this2._getFlexStyleForColumn(column, column.props.style);
	      });

	      // Note that we specify :numChildren, :scrollbarWidth, :sortBy, and :sortDirection as properties on Grid even though these have nothing to do with Grid.
	      // This is done because Grid is a pure component and won't update unless its properties or state has changed.
	      // Any property that should trigger a re-render of Grid then is specified here to avoid a stale display.
	      return _react2.default.createElement(
	        'div',
	        {
	          className: (0, _classnames2.default)('FlexTable', className),
	          style: style
	        },
	        !disableHeader && _react2.default.createElement(
	          'div',
	          {
	            className: (0, _classnames2.default)('FlexTable__headerRow', rowClass),
	            style: _extends({}, rowStyleObject, {
	              height: headerHeight,
	              paddingRight: scrollbarWidth,
	              width: width
	            })
	          },
	          this._getRenderedHeaderRow()
	        ),
	        _react2.default.createElement(_Grid2.default, _extends({}, this.props, {
	          autoContainerWidth: true,
	          className: (0, _classnames2.default)('FlexTable__Grid', gridClassName),
	          cellClassName: this._cellClassName,
	          cellRenderer: this._createRow,
	          cellStyle: this._cellStyle,
	          columnWidth: width,
	          columnCount: 1,
	          height: availableRowsHeight,
	          noContentRenderer: noRowsRenderer,
	          onScroll: this._onScroll,
	          onSectionRendered: this._onSectionRendered,
	          ref: function ref(_ref) {
	            _this2.Grid = _ref;
	          },
	          scrollbarWidth: scrollbarWidth,
	          scrollToRow: scrollToIndex,
	          style: gridStyle
	        }))
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_cellClassName',
	    value: function _cellClassName(_ref2) {
	      var rowIndex = _ref2.rowIndex;
	      var rowWrapperClassName = this.props.rowWrapperClassName;


	      return rowWrapperClassName instanceof Function ? rowWrapperClassName({ index: rowIndex - 1 }) : rowWrapperClassName;
	    }
	  }, {
	    key: '_cellStyle',
	    value: function _cellStyle(_ref3) {
	      var rowIndex = _ref3.rowIndex;
	      var rowWrapperStyle = this.props.rowWrapperStyle;


	      return rowWrapperStyle instanceof Function ? rowWrapperStyle({ index: rowIndex - 1 }) : rowWrapperStyle;
	    }
	  }, {
	    key: '_createColumn',
	    value: function _createColumn(_ref4) {
	      var column = _ref4.column;
	      var columnIndex = _ref4.columnIndex;
	      var isScrolling = _ref4.isScrolling;
	      var rowData = _ref4.rowData;
	      var rowIndex = _ref4.rowIndex;
	      var _column$props = column.props;
	      var cellDataGetter = _column$props.cellDataGetter;
	      var cellRenderer = _column$props.cellRenderer;
	      var className = _column$props.className;
	      var columnData = _column$props.columnData;
	      var dataKey = _column$props.dataKey;


	      var cellData = cellDataGetter({ columnData: columnData, dataKey: dataKey, rowData: rowData });
	      var renderedCell = cellRenderer({ cellData: cellData, columnData: columnData, dataKey: dataKey, isScrolling: isScrolling, rowData: rowData, rowIndex: rowIndex });

	      var style = this._cachedColumnStyles[columnIndex];

	      var title = typeof renderedCell === 'string' ? renderedCell : null;

	      return _react2.default.createElement(
	        'div',
	        {
	          key: 'Row' + rowIndex + '-Col' + columnIndex,
	          className: (0, _classnames2.default)('FlexTable__rowColumn', className),
	          style: style,
	          title: title
	        },
	        renderedCell
	      );
	    }
	  }, {
	    key: '_createHeader',
	    value: function _createHeader(_ref5) {
	      var column = _ref5.column;
	      var index = _ref5.index;
	      var _props2 = this.props;
	      var headerClassName = _props2.headerClassName;
	      var headerStyle = _props2.headerStyle;
	      var onHeaderClick = _props2.onHeaderClick;
	      var sort = _props2.sort;
	      var sortBy = _props2.sortBy;
	      var sortDirection = _props2.sortDirection;
	      var _column$props2 = column.props;
	      var dataKey = _column$props2.dataKey;
	      var disableSort = _column$props2.disableSort;
	      var headerRenderer = _column$props2.headerRenderer;
	      var label = _column$props2.label;
	      var columnData = _column$props2.columnData;

	      var sortEnabled = !disableSort && sort;

	      var classNames = (0, _classnames2.default)('FlexTable__headerColumn', headerClassName, column.props.headerClassName, {
	        'FlexTable__sortableHeaderColumn': sortEnabled
	      });
	      var style = this._getFlexStyleForColumn(column, headerStyle);

	      var renderedHeader = headerRenderer({
	        columnData: columnData,
	        dataKey: dataKey,
	        disableSort: disableSort,
	        label: label,
	        sortBy: sortBy,
	        sortDirection: sortDirection
	      });

	      var a11yProps = {};

	      if (sortEnabled || onHeaderClick) {
	        (function () {
	          // If this is a sortable header, clicking it should update the table data's sorting.
	          var newSortDirection = sortBy !== dataKey || sortDirection === _SortDirection2.default.DESC ? _SortDirection2.default.ASC : _SortDirection2.default.DESC;

	          var onClick = function onClick() {
	            sortEnabled && sort({
	              sortBy: dataKey,
	              sortDirection: newSortDirection
	            });
	            onHeaderClick && onHeaderClick({ columnData: columnData, dataKey: dataKey });
	          };

	          var onKeyDown = function onKeyDown(event) {
	            if (event.key === 'Enter' || event.key === ' ') {
	              onClick();
	            }
	          };

	          a11yProps['aria-label'] = column.props['aria-label'] || label || dataKey;
	          a11yProps.role = 'rowheader';
	          a11yProps.tabIndex = 0;
	          a11yProps.onClick = onClick;
	          a11yProps.onKeyDown = onKeyDown;
	        })();
	      }

	      return _react2.default.createElement(
	        'div',
	        _extends({}, a11yProps, {
	          key: 'Header-Col' + index,
	          className: classNames,
	          style: style
	        }),
	        renderedHeader
	      );
	    }
	  }, {
	    key: '_createRow',
	    value: function _createRow(_ref6) {
	      var _this3 = this;

	      var index = _ref6.rowIndex;
	      var isScrolling = _ref6.isScrolling;
	      var _props3 = this.props;
	      var children = _props3.children;
	      var onRowClick = _props3.onRowClick;
	      var onRowDoubleClick = _props3.onRowDoubleClick;
	      var onRowMouseOver = _props3.onRowMouseOver;
	      var onRowMouseOut = _props3.onRowMouseOut;
	      var rowClassName = _props3.rowClassName;
	      var rowGetter = _props3.rowGetter;
	      var rowRenderer = _props3.rowRenderer;
	      var rowStyle = _props3.rowStyle;
	      var scrollbarWidth = this.state.scrollbarWidth;


	      var rowClass = rowClassName instanceof Function ? rowClassName({ index: index }) : rowClassName;
	      var rowStyleObject = rowStyle instanceof Function ? rowStyle({ index: index }) : rowStyle;
	      var rowData = rowGetter({ index: index });

	      var columns = _react2.default.Children.toArray(children).map(function (column, columnIndex) {
	        return _this3._createColumn({
	          column: column,
	          columnIndex: columnIndex,
	          isScrolling: isScrolling,
	          rowData: rowData,
	          rowIndex: index,
	          scrollbarWidth: scrollbarWidth
	        });
	      });

	      var className = (0, _classnames2.default)('FlexTable__row', rowClass);
	      var style = _extends({}, rowStyleObject, {
	        height: this._getRowHeight(index),
	        paddingRight: scrollbarWidth
	      });

	      return rowRenderer({
	        className: className,
	        columns: columns,
	        index: index,
	        isScrolling: isScrolling,
	        onRowClick: onRowClick,
	        onRowDoubleClick: onRowDoubleClick,
	        onRowMouseOver: onRowMouseOver,
	        onRowMouseOut: onRowMouseOut,
	        rowData: rowData,
	        style: style
	      });
	    }

	    /**
	     * Determines the flex-shrink, flex-grow, and width values for a cell (header or column).
	     */

	  }, {
	    key: '_getFlexStyleForColumn',
	    value: function _getFlexStyleForColumn(column) {
	      var customStyle = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	      var flexValue = column.props.flexGrow + ' ' + column.props.flexShrink + ' ' + column.props.width + 'px';

	      var style = _extends({}, customStyle, {
	        flex: flexValue,
	        msFlex: flexValue,
	        WebkitFlex: flexValue
	      });

	      if (column.props.maxWidth) {
	        style.maxWidth = column.props.maxWidth;
	      }

	      if (column.props.minWidth) {
	        style.minWidth = column.props.minWidth;
	      }

	      return style;
	    }
	  }, {
	    key: '_getRenderedHeaderRow',
	    value: function _getRenderedHeaderRow() {
	      var _this4 = this;

	      var _props4 = this.props;
	      var children = _props4.children;
	      var disableHeader = _props4.disableHeader;

	      var items = disableHeader ? [] : _react2.default.Children.toArray(children);

	      return items.map(function (column, index) {
	        return _this4._createHeader({ column: column, index: index });
	      });
	    }
	  }, {
	    key: '_getRowHeight',
	    value: function _getRowHeight(rowIndex) {
	      var rowHeight = this.props.rowHeight;


	      return rowHeight instanceof Function ? rowHeight({ index: rowIndex }) : rowHeight;
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(_ref7) {
	      var clientHeight = _ref7.clientHeight;
	      var scrollHeight = _ref7.scrollHeight;
	      var scrollTop = _ref7.scrollTop;
	      var onScroll = this.props.onScroll;


	      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
	    }
	  }, {
	    key: '_onSectionRendered',
	    value: function _onSectionRendered(_ref8) {
	      var rowOverscanStartIndex = _ref8.rowOverscanStartIndex;
	      var rowOverscanStopIndex = _ref8.rowOverscanStopIndex;
	      var rowStartIndex = _ref8.rowStartIndex;
	      var rowStopIndex = _ref8.rowStopIndex;
	      var onRowsRendered = this.props.onRowsRendered;


	      onRowsRendered({
	        overscanStartIndex: rowOverscanStartIndex,
	        overscanStopIndex: rowOverscanStopIndex,
	        startIndex: rowStartIndex,
	        stopIndex: rowStopIndex
	      });
	    }
	  }, {
	    key: '_setScrollbarWidth',
	    value: function _setScrollbarWidth() {
	      var Grid = (0, _reactDom.findDOMNode)(this.Grid);
	      var clientWidth = Grid.clientWidth || 0;
	      var offsetWidth = Grid.offsetWidth || 0;
	      var scrollbarWidth = offsetWidth - clientWidth;

	      this.setState({ scrollbarWidth: scrollbarWidth });
	    }
	  }]);

	  return FlexTable;
	}(_react.Component);

	FlexTable.propTypes = {
	  'aria-label': _react.PropTypes.string,

	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,

	  /** One or more FlexColumns describing the data displayed in this row */
	  children: function children(props, propName, componentName) {
	    var children = _react2.default.Children.toArray(props.children);
	    for (var i = 0; i < children.length; i++) {
	      if (children[i].type !== _FlexColumn2.default) {
	        return new Error('FlexTable only accepts children of type FlexColumn');
	      }
	    }
	  },

	  /** Optional CSS class name */
	  className: _react.PropTypes.string,

	  /** Disable rendering the header at all */
	  disableHeader: _react.PropTypes.bool,

	  /**
	   * Used to estimate the total height of a FlexTable before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
	  estimatedRowSize: _react.PropTypes.number.isRequired,

	  /** Optional custom CSS class name to attach to inner Grid element. */
	  gridClassName: _react.PropTypes.string,

	  /** Optional inline style to attach to inner Grid element. */
	  gridStyle: _react.PropTypes.object,

	  /** Optional CSS class to apply to all column headers */
	  headerClassName: _react.PropTypes.string,

	  /** Fixed height of header row */
	  headerHeight: _react.PropTypes.number.isRequired,

	  /** Fixed/available height for out DOM element */
	  height: _react.PropTypes.number.isRequired,

	  /** Optional renderer to be used in place of table body rows when rowCount is 0 */
	  noRowsRenderer: _react.PropTypes.func,

	  /**
	  * Optional callback when a column's header is clicked.
	  * ({ columnData: any, dataKey: string }): void
	  */
	  onHeaderClick: _react.PropTypes.func,

	  /** Optional custom inline style to attach to table header columns. */
	  headerStyle: _react.PropTypes.object,

	  /**
	   * Callback invoked when a user clicks on a table row.
	   * ({ index: number }): void
	   */
	  onRowClick: _react.PropTypes.func,

	  /**
	   * Callback invoked when a user double-clicks on a table row.
	   * ({ index: number }): void
	   */
	  onRowDoubleClick: _react.PropTypes.func,

	  /**
	   * Callback invoked when the mouse leaves a table row.
	   * ({ index: number }): void
	   */
	  onRowMouseOut: _react.PropTypes.func,

	  /**
	   * Callback invoked when a user moves the mouse over a table row.
	   * ({ index: number }): void
	   */
	  onRowMouseOver: _react.PropTypes.func,

	  /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
	  onRowsRendered: _react.PropTypes.func,

	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,

	  /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
	  overscanRowCount: _react.PropTypes.number.isRequired,

	  /**
	   * Optional CSS class to apply to all table rows (including the header row).
	   * This property can be a CSS class name (string) or a function that returns a class name.
	   * If a function is provided its signature should be: ({ index: number }): string
	   */
	  rowClassName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),

	  /**
	   * Callback responsible for returning a data row given an index.
	   * ({ index: number }): any
	   */
	  rowGetter: _react.PropTypes.func.isRequired,

	  /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
	  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,

	  /** Number of rows in table. */
	  rowCount: _react.PropTypes.number.isRequired,

	  /**
	   * Responsible for rendering a table row given an array of columns:
	   * Should implement the following interface: ({
	   *   className: string,
	   *   columns: Array,
	   *   index: number,
	   *   isScrolling: boolean,
	   *   onRowClick: ?Function,
	   *   onRowDoubleClick: ?Function,
	   *   onRowMouseOver: ?Function,
	   *   onRowMouseOut: ?Function,
	   *   rowData: any,
	   *   style: any
	   * }): PropTypes.node
	   */
	  rowRenderer: _react.PropTypes.func,

	  /** Optional custom inline style to attach to table rows. */
	  rowStyle: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]).isRequired,

	  /** Optional custom CSS class for individual rows */
	  rowWrapperClassName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),

	  /** Optional custom CSS class for individual rows */
	  rowWrapperStyle: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),

	  /** See Grid#scrollToAlignment */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

	  /** Row index to ensure visible (by forcefully scrolling if necessary) */
	  scrollToIndex: _react.PropTypes.number,

	  /** Vertical offset. */
	  scrollTop: _react.PropTypes.number,

	  /**
	   * Sort function to be called if a sortable header is clicked.
	   * ({ sortBy: string, sortDirection: SortDirection }): void
	   */
	  sort: _react.PropTypes.func,

	  /** FlexTable data is currently sorted by this :dataKey (if it is sorted at all) */
	  sortBy: _react.PropTypes.string,

	  /** FlexTable data is currently sorted in this direction (if it is sorted at all) */
	  sortDirection: _react.PropTypes.oneOf([_SortDirection2.default.ASC, _SortDirection2.default.DESC]),

	  /** Optional inline style */
	  style: _react.PropTypes.object,

	  /** Tab index for focus */
	  tabIndex: _react.PropTypes.number,

	  /** Width of list */
	  width: _react.PropTypes.number.isRequired
	};
	FlexTable.defaultProps = {
	  disableHeader: false,
	  estimatedRowSize: 30,
	  headerHeight: 0,
	  headerStyle: {},
	  noRowsRenderer: function noRowsRenderer() {
	    return null;
	  },
	  onRowsRendered: function onRowsRendered() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  overscanRowCount: 10,
	  rowRenderer: _defaultRowRenderer2.default,
	  rowStyle: {},
	  scrollToAlignment: 'auto',
	  style: {}
	};
	exports.default = FlexTable;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(2);

	var _defaultHeaderRenderer = __webpack_require__(179);

	var _defaultHeaderRenderer2 = _interopRequireDefault(_defaultHeaderRenderer);

	var _defaultCellRenderer = __webpack_require__(182);

	var _defaultCellRenderer2 = _interopRequireDefault(_defaultCellRenderer);

	var _defaultCellDataGetter = __webpack_require__(183);

	var _defaultCellDataGetter2 = _interopRequireDefault(_defaultCellDataGetter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Describes the header and cell contents of a table column.
	 */

	var Column = function (_Component) {
	  _inherits(Column, _Component);

	  function Column() {
	    _classCallCheck(this, Column);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Column).apply(this, arguments));
	  }

	  return Column;
	}(_react.Component);

	Column.defaultProps = {
	  cellDataGetter: _defaultCellDataGetter2.default,
	  cellRenderer: _defaultCellRenderer2.default,
	  cellStyle: {},
	  flexGrow: 0,
	  flexShrink: 1,
	  headerRenderer: _defaultHeaderRenderer2.default
	};
	Column.propTypes = {
	  /** Optional aria-label value to set on the column header */
	  'aria-label': _react.PropTypes.string,

	  /**
	   * Callback responsible for returning a cell's data, given its :dataKey
	   * ({ columnData: any, dataKey: string, rowData: any }): any
	   */
	  cellDataGetter: _react.PropTypes.func,

	  /**
	   * Callback responsible for rendering a cell's contents.
	   * ({ cellData: any, columnData: any, dataKey: string, rowData: any, rowIndex: number }): node
	   */
	  cellRenderer: _react.PropTypes.func,

	  /** Optional CSS class to apply to cell */
	  className: _react.PropTypes.string,

	  /** Optional additional data passed to this column's :cellDataGetter */
	  columnData: _react.PropTypes.object,

	  /** Uniquely identifies the row-data attribute correspnding to this cell */
	  dataKey: _react.PropTypes.any.isRequired,

	  /** If sort is enabled for the table at large, disable it for this column */
	  disableSort: _react.PropTypes.bool,

	  /** Flex grow style; defaults to 0 */
	  flexGrow: _react.PropTypes.number,

	  /** Flex shrink style; defaults to 1 */
	  flexShrink: _react.PropTypes.number,

	  /** Optional CSS class to apply to this column's header */
	  headerClassName: _react.PropTypes.string,

	  /**
	   * Optional callback responsible for rendering a column header contents.
	   * ({ columnData: object, dataKey: string, disableSort: boolean, label: string, sortBy: string, sortDirection: string }): PropTypes.node
	   */
	  headerRenderer: _react.PropTypes.func.isRequired,

	  /** Header label for this column */
	  label: _react.PropTypes.string,

	  /** Maximum width of column; this property will only be used if :flexGrow is > 0. */
	  maxWidth: _react.PropTypes.number,

	  /** Minimum width of column. */
	  minWidth: _react.PropTypes.number,

	  /** Optional inline style to apply to cell */
	  style: _react.PropTypes.object,

	  /** Flex basis (width) for this column; This value can grow or shrink based on :flexGrow and :flexShrink properties. */
	  width: _react.PropTypes.number.isRequired
	};
	exports.default = Column;

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultHeaderRenderer;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _SortIndicator = __webpack_require__(180);

	var _SortIndicator2 = _interopRequireDefault(_SortIndicator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Default table header renderer.
	 */
	function defaultHeaderRenderer(_ref) {
	  var columnData = _ref.columnData;
	  var dataKey = _ref.dataKey;
	  var disableSort = _ref.disableSort;
	  var label = _ref.label;
	  var sortBy = _ref.sortBy;
	  var sortDirection = _ref.sortDirection;

	  var showSortIndicator = sortBy === dataKey;
	  var children = [_react2.default.createElement(
	    'span',
	    {
	      className: 'FlexTable__headerTruncatedText',
	      key: 'label',
	      title: label
	    },
	    label
	  )];

	  if (showSortIndicator) {
	    children.push(_react2.default.createElement(_SortIndicator2.default, {
	      key: 'SortIndicator',
	      sortDirection: sortDirection
	    }));
	  }

	  return children;
	}

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = SortIndicator;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _SortDirection = __webpack_require__(181);

	var _SortDirection2 = _interopRequireDefault(_SortDirection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Displayed beside a header to indicate that a FlexTable is currently sorted by this column.
	 */
	function SortIndicator(_ref) {
	  var sortDirection = _ref.sortDirection;

	  var classNames = (0, _classnames2.default)('FlexTable__sortableHeaderIcon', {
	    'FlexTable__sortableHeaderIcon--ASC': sortDirection === _SortDirection2.default.ASC,
	    'FlexTable__sortableHeaderIcon--DESC': sortDirection === _SortDirection2.default.DESC
	  });

	  return _react2.default.createElement(
	    'svg',
	    {
	      className: classNames,
	      width: 18,
	      height: 18,
	      viewBox: '0 0 24 24'
	    },
	    sortDirection === _SortDirection2.default.ASC ? _react2.default.createElement('path', { d: 'M7 14l5-5 5 5z' }) : _react2.default.createElement('path', { d: 'M7 10l5 5 5-5z' }),
	    _react2.default.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' })
	  );
	}
	SortIndicator.propTypes = {
	  sortDirection: _react.PropTypes.oneOf([_SortDirection2.default.ASC, _SortDirection2.default.DESC])
	};

/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SortDirection = {
	  /**
	   * Sort items in ascending order.
	   * This means arranging from the lowest value to the highest (e.g. a-z, 0-9).
	   */
	  ASC: 'ASC',

	  /**
	   * Sort items in descending order.
	   * This means arranging from the highest value to the lowest (e.g. z-a, 9-0).
	   */
	  DESC: 'DESC'
	};

	exports.default = SortDirection;

/***/ },
/* 182 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultCellRenderer;


	/**
	 * Default cell renderer that displays an attribute as a simple string
	 * You should override the column's cellRenderer if your data is some other type of object.
	 */
	function defaultCellRenderer(_ref) {
	  var cellData = _ref.cellData;
	  var cellDataKey = _ref.cellDataKey;
	  var columnData = _ref.columnData;
	  var rowData = _ref.rowData;
	  var rowIndex = _ref.rowIndex;

	  if (cellData == null) {
	    return '';
	  } else {
	    return String(cellData);
	  }
	}

/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = defaultCellDataGetter;


	/**
	 * Default accessor for returning a cell value for a given attribute.
	 * This function expects to operate on either a vanilla Object or an Immutable Map.
	 * You should override the column's cellDataGetter if your data is some other type of object.
	 */
	function defaultCellDataGetter(_ref) {
	  var columnData = _ref.columnData;
	  var dataKey = _ref.dataKey;
	  var rowData = _ref.rowData;

	  if (rowData.get instanceof Function) {
	    return rowData.get(dataKey);
	  } else {
	    return rowData[dataKey];
	  }
	}

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = defaultRowRenderer;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Default row renderer for FlexTable.
	 */
	function defaultRowRenderer(_ref) {
	  var className = _ref.className;
	  var columns = _ref.columns;
	  var index = _ref.index;
	  var isScrolling = _ref.isScrolling;
	  var onRowClick = _ref.onRowClick;
	  var onRowDoubleClick = _ref.onRowDoubleClick;
	  var onRowMouseOver = _ref.onRowMouseOver;
	  var onRowMouseOut = _ref.onRowMouseOut;
	  var rowData = _ref.rowData;
	  var style = _ref.style;

	  var a11yProps = {};

	  if (onRowClick || onRowDoubleClick || onRowMouseOver || onRowMouseOut) {
	    a11yProps['aria-label'] = 'row';
	    a11yProps.role = 'row';
	    a11yProps.tabIndex = 0;

	    if (onRowClick) {
	      a11yProps.onClick = function () {
	        return onRowClick({ index: index });
	      };
	    }
	    if (onRowDoubleClick) {
	      a11yProps.onDoubleClick = function () {
	        return onRowDoubleClick({ index: index });
	      };
	    }
	    if (onRowMouseOut) {
	      a11yProps.onMouseOut = function () {
	        return onRowMouseOut({ index: index });
	      };
	    }
	    if (onRowMouseOver) {
	      a11yProps.onMouseOver = function () {
	        return onRowMouseOver({ index: index });
	      };
	    }
	  }

	  return _react2.default.createElement(
	    'div',
	    _extends({}, a11yProps, {
	      className: className,
	      style: style
	    }),
	    columns
	  );
	}

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.InfiniteLoader = exports.default = undefined;

	var _InfiniteLoader2 = __webpack_require__(186);

	var _InfiniteLoader3 = _interopRequireDefault(_InfiniteLoader2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _InfiniteLoader3.default;
	exports.InfiniteLoader = _InfiniteLoader3.default;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.isRangeVisible = isRangeVisible;
	exports.scanForUnloadedRanges = scanForUnloadedRanges;

	var _react = __webpack_require__(2);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _createCallbackMemoizer = __webpack_require__(158);

	var _createCallbackMemoizer2 = _interopRequireDefault(_createCallbackMemoizer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Higher-order component that manages lazy-loading for "infinite" data.
	 * This component decorates a virtual component and just-in-time prefetches rows as a user scrolls.
	 * It is intended as a convenience component; fork it if you'd like finer-grained control over data-loading.
	 */

	var InfiniteLoader = function (_Component) {
	  _inherits(InfiniteLoader, _Component);

	  function InfiniteLoader(props, context) {
	    _classCallCheck(this, InfiniteLoader);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InfiniteLoader).call(this, props, context));

	    _this._loadMoreRowsMemoizer = (0, _createCallbackMemoizer2.default)();

	    _this._onRowsRendered = _this._onRowsRendered.bind(_this);
	    _this._registerChild = _this._registerChild.bind(_this);
	    return _this;
	  }

	  _createClass(InfiniteLoader, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;


	      return children({
	        onRowsRendered: this._onRowsRendered,
	        registerChild: this._registerChild
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_loadUnloadedRanges',
	    value: function _loadUnloadedRanges(unloadedRanges) {
	      var _this2 = this;

	      var loadMoreRows = this.props.loadMoreRows;


	      unloadedRanges.forEach(function (unloadedRange) {
	        var promise = loadMoreRows(unloadedRange);
	        if (promise) {
	          promise.then(function () {
	            // Refresh the visible rows if any of them have just been loaded.
	            // Otherwise they will remain in their unloaded visual state.
	            if (isRangeVisible({
	              lastRenderedStartIndex: _this2._lastRenderedStartIndex,
	              lastRenderedStopIndex: _this2._lastRenderedStopIndex,
	              startIndex: unloadedRange.startIndex,
	              stopIndex: unloadedRange.stopIndex
	            })) {
	              if (_this2._registeredChild) {
	                _this2._registeredChild.forceUpdate();
	              }
	            }
	          });
	        }
	      });
	    }
	  }, {
	    key: '_onRowsRendered',
	    value: function _onRowsRendered(_ref) {
	      var _this3 = this;

	      var startIndex = _ref.startIndex;
	      var stopIndex = _ref.stopIndex;
	      var _props = this.props;
	      var isRowLoaded = _props.isRowLoaded;
	      var minimumBatchSize = _props.minimumBatchSize;
	      var rowCount = _props.rowCount;
	      var threshold = _props.threshold;


	      this._lastRenderedStartIndex = startIndex;
	      this._lastRenderedStopIndex = stopIndex;

	      var unloadedRanges = scanForUnloadedRanges({
	        isRowLoaded: isRowLoaded,
	        minimumBatchSize: minimumBatchSize,
	        rowCount: rowCount,
	        startIndex: Math.max(0, startIndex - threshold),
	        stopIndex: Math.min(rowCount - 1, stopIndex + threshold)
	      });

	      // For memoize comparison
	      var squashedUnloadedRanges = unloadedRanges.reduce(function (reduced, unloadedRange) {
	        return reduced.concat([unloadedRange.startIndex, unloadedRange.stopIndex]);
	      }, []);

	      this._loadMoreRowsMemoizer({
	        callback: function callback() {
	          _this3._loadUnloadedRanges(unloadedRanges);
	        },
	        indices: { squashedUnloadedRanges: squashedUnloadedRanges }
	      });
	    }
	  }, {
	    key: '_registerChild',
	    value: function _registerChild(registeredChild) {
	      this._registeredChild = registeredChild;
	    }
	  }]);

	  return InfiniteLoader;
	}(_react.Component);

	/**
	 * Determines if the specified start/stop range is visible based on the most recently rendered range.
	 */


	InfiniteLoader.propTypes = {
	  /**
	   * Function respondible for rendering a virtualized component.
	   * This function should implement the following signature:
	   * ({ onRowsRendered, registerChild }) => PropTypes.element
	   *
	   * The specified :onRowsRendered function should be passed through to the child's :onRowsRendered property.
	   * The :registerChild callback should be set as the virtualized component's :ref.
	   */
	  children: _react.PropTypes.func.isRequired,

	  /**
	   * Function responsible for tracking the loaded state of each row.
	   * It should implement the following signature: ({ index: number }): boolean
	   */
	  isRowLoaded: _react.PropTypes.func.isRequired,

	  /**
	   * Callback to be invoked when more rows must be loaded.
	   * It should implement the following signature: ({ startIndex, stopIndex }): Promise
	   * The returned Promise should be resolved once row data has finished loading.
	   * It will be used to determine when to refresh the list with the newly-loaded data.
	   * This callback may be called multiple times in reaction to a single scroll event.
	   */
	  loadMoreRows: _react.PropTypes.func.isRequired,

	  /**
	   * Minimum number of rows to be loaded at a time.
	   * This property can be used to batch requests to reduce HTTP requests.
	   */
	  minimumBatchSize: _react.PropTypes.number.isRequired,

	  /**
	   * Number of rows in list; can be arbitrary high number if actual number is unknown.
	   */
	  rowCount: _react.PropTypes.number.isRequired,

	  /**
	   * Threshold at which to pre-fetch data.
	   * A threshold X means that data will start loading when a user scrolls within X rows.
	   * This value defaults to 15.
	   */
	  threshold: _react.PropTypes.number.isRequired
	};
	InfiniteLoader.defaultProps = {
	  minimumBatchSize: 10,
	  rowCount: 0,
	  threshold: 15
	};
	exports.default = InfiniteLoader;
	function isRangeVisible(_ref2) {
	  var lastRenderedStartIndex = _ref2.lastRenderedStartIndex;
	  var lastRenderedStopIndex = _ref2.lastRenderedStopIndex;
	  var startIndex = _ref2.startIndex;
	  var stopIndex = _ref2.stopIndex;

	  return !(startIndex > lastRenderedStopIndex || stopIndex < lastRenderedStartIndex);
	}

	/**
	 * Returns all of the ranges within a larger range that contain unloaded rows.
	 */
	function scanForUnloadedRanges(_ref3) {
	  var isRowLoaded = _ref3.isRowLoaded;
	  var minimumBatchSize = _ref3.minimumBatchSize;
	  var rowCount = _ref3.rowCount;
	  var startIndex = _ref3.startIndex;
	  var stopIndex = _ref3.stopIndex;

	  var unloadedRanges = [];

	  var rangeStartIndex = null;
	  var rangeStopIndex = null;

	  for (var index = startIndex; index <= stopIndex; index++) {
	    var loaded = isRowLoaded({ index: index });

	    if (!loaded) {
	      rangeStopIndex = index;
	      if (rangeStartIndex === null) {
	        rangeStartIndex = index;
	      }
	    } else if (rangeStopIndex !== null) {
	      unloadedRanges.push({
	        startIndex: rangeStartIndex,
	        stopIndex: rangeStopIndex
	      });

	      rangeStartIndex = rangeStopIndex = null;
	    }
	  }

	  // If :rangeStopIndex is not null it means we haven't ran out of unloaded rows.
	  // Scan forward to try filling our :minimumBatchSize.
	  if (rangeStopIndex !== null) {
	    var potentialStopIndex = Math.min(Math.max(rangeStopIndex, rangeStartIndex + minimumBatchSize - 1), rowCount - 1);

	    for (var _index = rangeStopIndex + 1; _index <= potentialStopIndex; _index++) {
	      if (!isRowLoaded({ index: _index })) {
	        rangeStopIndex = _index;
	      } else {
	        break;
	      }
	    }

	    unloadedRanges.push({
	      startIndex: rangeStartIndex,
	      stopIndex: rangeStopIndex
	    });
	  }

	  // Check to see if our first range ended prematurely.
	  // In this case we should scan backwards to try filling our :minimumBatchSize.
	  if (unloadedRanges.length) {
	    var firstUnloadedRange = unloadedRanges[0];

	    while (firstUnloadedRange.stopIndex - firstUnloadedRange.startIndex + 1 < minimumBatchSize && firstUnloadedRange.startIndex > 0) {
	      var _index2 = firstUnloadedRange.startIndex - 1;

	      if (!isRowLoaded({ index: _index2 })) {
	        firstUnloadedRange.startIndex = _index2;
	      } else {
	        break;
	      }
	    }
	  }

	  return unloadedRanges;
	}

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ScrollSync = exports.default = undefined;

	var _ScrollSync2 = __webpack_require__(188);

	var _ScrollSync3 = _interopRequireDefault(_ScrollSync2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _ScrollSync3.default;
	exports.ScrollSync = _ScrollSync3.default;

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * HOC that simplifies the process of synchronizing scrolling between two or more virtualized components.
	 */

	var ScrollSync = function (_Component) {
	  _inherits(ScrollSync, _Component);

	  function ScrollSync(props, context) {
	    _classCallCheck(this, ScrollSync);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScrollSync).call(this, props, context));

	    _this.state = {
	      clientHeight: 0,
	      clientWidth: 0,
	      scrollHeight: 0,
	      scrollLeft: 0,
	      scrollTop: 0,
	      scrollWidth: 0
	    };

	    _this._onScroll = _this._onScroll.bind(_this);
	    return _this;
	  }

	  _createClass(ScrollSync, [{
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	      var _state = this.state;
	      var clientHeight = _state.clientHeight;
	      var clientWidth = _state.clientWidth;
	      var scrollHeight = _state.scrollHeight;
	      var scrollLeft = _state.scrollLeft;
	      var scrollTop = _state.scrollTop;
	      var scrollWidth = _state.scrollWidth;


	      return children({
	        clientHeight: clientHeight,
	        clientWidth: clientWidth,
	        onScroll: this._onScroll,
	        scrollHeight: scrollHeight,
	        scrollLeft: scrollLeft,
	        scrollTop: scrollTop,
	        scrollWidth: scrollWidth
	      });
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(_ref) {
	      var clientHeight = _ref.clientHeight;
	      var clientWidth = _ref.clientWidth;
	      var scrollHeight = _ref.scrollHeight;
	      var scrollLeft = _ref.scrollLeft;
	      var scrollTop = _ref.scrollTop;
	      var scrollWidth = _ref.scrollWidth;

	      this.setState({ clientHeight: clientHeight, clientWidth: clientWidth, scrollHeight: scrollHeight, scrollLeft: scrollLeft, scrollTop: scrollTop, scrollWidth: scrollWidth });
	    }
	  }]);

	  return ScrollSync;
	}(_react.Component);

	ScrollSync.propTypes = {
	  /**
	   * Function respondible for rendering 2 or more virtualized components.
	   * This function should implement the following signature:
	   * ({ onScroll, scrollLeft, scrollTop }) => PropTypes.element
	   */
	  children: _react.PropTypes.func.isRequired
	};
	exports.default = ScrollSync;

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.VirtualScroll = exports.default = undefined;

	var _VirtualScroll2 = __webpack_require__(190);

	var _VirtualScroll3 = _interopRequireDefault(_VirtualScroll2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _VirtualScroll3.default;
	exports.VirtualScroll = _VirtualScroll3.default;

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Grid = __webpack_require__(168);

	var _Grid2 = _interopRequireDefault(_Grid);

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * It is inefficient to create and manage a large list of DOM elements within a scrolling container
	 * if only a few of those elements are visible. The primary purpose of this component is to improve
	 * performance by only rendering the DOM nodes that a user is able to see based on their current
	 * scroll position.
	 *
	 * This component renders a virtualized list of elements with either fixed or dynamic heights.
	 */

	var VirtualScroll = function (_Component) {
	  _inherits(VirtualScroll, _Component);

	  function VirtualScroll(props, context) {
	    _classCallCheck(this, VirtualScroll);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(VirtualScroll).call(this, props, context));

	    _this._cellRenderer = _this._cellRenderer.bind(_this);
	    _this._createRowClassNameGetter = _this._createRowClassNameGetter.bind(_this);
	    _this._createRowStyleGetter = _this._createRowStyleGetter.bind(_this);
	    _this._onScroll = _this._onScroll.bind(_this);
	    _this._onSectionRendered = _this._onSectionRendered.bind(_this);
	    return _this;
	  }

	  _createClass(VirtualScroll, [{
	    key: 'forceUpdateGrid',
	    value: function forceUpdateGrid() {
	      this.Grid.forceUpdate();
	    }

	    /** See Grid#measureAllCells */

	  }, {
	    key: 'measureAllRows',
	    value: function measureAllRows() {
	      this.Grid.measureAllCells();
	    }

	    /** See Grid#recomputeGridSize */

	  }, {
	    key: 'recomputeRowHeights',
	    value: function recomputeRowHeights() {
	      var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];

	      this.Grid.recomputeGridSize({
	        rowIndex: index
	      });
	      this.forceUpdateGrid();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var className = _props.className;
	      var noRowsRenderer = _props.noRowsRenderer;
	      var scrollToIndex = _props.scrollToIndex;
	      var width = _props.width;


	      var classNames = (0, _classnames2.default)('VirtualScroll', className);

	      return _react2.default.createElement(_Grid2.default, _extends({}, this.props, {
	        autoContainerWidth: true,
	        cellRenderer: this._cellRenderer,
	        cellClassName: this._createRowClassNameGetter(),
	        cellStyle: this._createRowStyleGetter(),
	        className: classNames,
	        columnWidth: width,
	        columnCount: 1,
	        noContentRenderer: noRowsRenderer,
	        onScroll: this._onScroll,
	        onSectionRendered: this._onSectionRendered,
	        ref: function ref(_ref) {
	          _this2.Grid = _ref;
	        },
	        scrollToRow: scrollToIndex
	      }));
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_cellRenderer',
	    value: function _cellRenderer(_ref2) {
	      var columnIndex = _ref2.columnIndex;
	      var isScrolling = _ref2.isScrolling;
	      var rowIndex = _ref2.rowIndex;
	      var rowRenderer = this.props.rowRenderer;


	      return rowRenderer({
	        index: rowIndex,
	        isScrolling: isScrolling
	      });
	    }
	  }, {
	    key: '_createRowClassNameGetter',
	    value: function _createRowClassNameGetter() {
	      var rowClassName = this.props.rowClassName;


	      return rowClassName instanceof Function ? function (_ref3) {
	        var rowIndex = _ref3.rowIndex;
	        return rowClassName({ index: rowIndex });
	      } : function () {
	        return rowClassName;
	      };
	    }
	  }, {
	    key: '_createRowStyleGetter',
	    value: function _createRowStyleGetter() {
	      var rowStyle = this.props.rowStyle;


	      var wrapped = rowStyle instanceof Function ? rowStyle : function () {
	        return rowStyle;
	      };

	      // Default width to 100% to prevent list rows from flowing under the vertical scrollbar
	      return function (_ref4) {
	        var rowIndex = _ref4.rowIndex;
	        return _extends({
	          width: '100%'
	        }, wrapped({ index: rowIndex }));
	      };
	    }
	  }, {
	    key: '_onScroll',
	    value: function _onScroll(_ref5) {
	      var clientHeight = _ref5.clientHeight;
	      var scrollHeight = _ref5.scrollHeight;
	      var scrollTop = _ref5.scrollTop;
	      var onScroll = this.props.onScroll;


	      onScroll({ clientHeight: clientHeight, scrollHeight: scrollHeight, scrollTop: scrollTop });
	    }
	  }, {
	    key: '_onSectionRendered',
	    value: function _onSectionRendered(_ref6) {
	      var rowOverscanStartIndex = _ref6.rowOverscanStartIndex;
	      var rowOverscanStopIndex = _ref6.rowOverscanStopIndex;
	      var rowStartIndex = _ref6.rowStartIndex;
	      var rowStopIndex = _ref6.rowStopIndex;
	      var onRowsRendered = this.props.onRowsRendered;


	      onRowsRendered({
	        overscanStartIndex: rowOverscanStartIndex,
	        overscanStopIndex: rowOverscanStopIndex,
	        startIndex: rowStartIndex,
	        stopIndex: rowStopIndex
	      });
	    }
	  }]);

	  return VirtualScroll;
	}(_react.Component);

	VirtualScroll.propTypes = {
	  'aria-label': _react.PropTypes.string,

	  /**
	   * Removes fixed height from the scrollingContainer so that the total height
	   * of rows can stretch the window. Intended for use with WindowScroller
	   */
	  autoHeight: _react.PropTypes.bool,

	  /** Optional CSS class name */
	  className: _react.PropTypes.string,

	  /**
	   * Used to estimate the total height of a VirtualScroll before all of its rows have actually been measured.
	   * The estimated total height is adjusted as rows are rendered.
	   */
	  estimatedRowSize: _react.PropTypes.number.isRequired,

	  /** Height constraint for list (determines how many actual rows are rendered) */
	  height: _react.PropTypes.number.isRequired,

	  /** Optional renderer to be used in place of rows when rowCount is 0 */
	  noRowsRenderer: _react.PropTypes.func.isRequired,

	  /**
	   * Callback invoked with information about the slice of rows that were just rendered.
	   * ({ startIndex, stopIndex }): void
	   */
	  onRowsRendered: _react.PropTypes.func.isRequired,

	  /**
	   * Number of rows to render above/below the visible bounds of the list.
	   * These rows can help for smoother scrolling on touch devices.
	   */
	  overscanRowCount: _react.PropTypes.number.isRequired,

	  /**
	   * Callback invoked whenever the scroll offset changes within the inner scrollable region.
	   * This callback can be used to sync scrolling between lists, tables, or grids.
	   * ({ clientHeight, scrollHeight, scrollTop }): void
	   */
	  onScroll: _react.PropTypes.func.isRequired,

	  /**
	   * Either a fixed row height (number) or a function that returns the height of a row given its index.
	   * ({ index: number }): number
	   */
	  rowHeight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.func]).isRequired,

	  /** Responsbile for rendering a row given an index; ({ index: number }): node */
	  rowRenderer: _react.PropTypes.func.isRequired,

	  /** Optional custom CSS class for individual rows */
	  rowClassName: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),

	  /** Number of rows in list. */
	  rowCount: _react.PropTypes.number.isRequired,

	  /** Optional custom styles for individual cells */
	  rowStyle: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),

	  /** See Grid#scrollToAlignment */
	  scrollToAlignment: _react.PropTypes.oneOf(['auto', 'end', 'start', 'center']).isRequired,

	  /** Row index to ensure visible (by forcefully scrolling if necessary) */
	  scrollToIndex: _react.PropTypes.number,

	  /** Vertical offset. */
	  scrollTop: _react.PropTypes.number,

	  /** Optional inline style */
	  style: _react.PropTypes.object,

	  /** Tab index for focus */
	  tabIndex: _react.PropTypes.number,

	  /** Width of list */
	  width: _react.PropTypes.number.isRequired
	};
	VirtualScroll.defaultProps = {
	  estimatedRowSize: 30,
	  noRowsRenderer: function noRowsRenderer() {
	    return null;
	  },
	  onRowsRendered: function onRowsRendered() {
	    return null;
	  },
	  onScroll: function onScroll() {
	    return null;
	  },
	  overscanRowCount: 10,
	  scrollToAlignment: 'auto',
	  style: {}
	};
	exports.default = VirtualScroll;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WindowScroller = exports.default = undefined;

	var _WindowScroller2 = __webpack_require__(192);

	var _WindowScroller3 = _interopRequireDefault(_WindowScroller2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _WindowScroller3.default;
	exports.WindowScroller = _WindowScroller3.default;

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IS_SCROLLING_TIMEOUT = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(153);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _raf = __webpack_require__(159);

	var _raf2 = _interopRequireDefault(_raf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Specifies the number of miliseconds during which to disable pointer events while a scroll is in progress.
	 * This improves performance and makes scrolling smoother.
	 */
	var IS_SCROLLING_TIMEOUT = exports.IS_SCROLLING_TIMEOUT = 150;

	var WindowScroller = function (_Component) {
	  _inherits(WindowScroller, _Component);

	  function WindowScroller(props) {
	    _classCallCheck(this, WindowScroller);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WindowScroller).call(this, props));

	    var height = typeof window !== 'undefined' ? window.innerHeight : 0;

	    _this.state = {
	      isScrolling: false,
	      height: height,
	      scrollTop: 0
	    };

	    _this._onScrollWindow = _this._onScrollWindow.bind(_this);
	    _this._onResizeWindow = _this._onResizeWindow.bind(_this);
	    _this._enablePointerEventsAfterDelayCallback = _this._enablePointerEventsAfterDelayCallback.bind(_this);
	    return _this;
	  }

	  _createClass(WindowScroller, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var height = this.state.height;

	      // Subtract documentElement top to handle edge-case where a user is navigating back (history) from an already-scrolled bage.
	      // In this case the body's top position will be a negative number and this element's top will be increased (by that amount).

	      this._positionFromTop = _reactDom2.default.findDOMNode(this).getBoundingClientRect().top - document.documentElement.getBoundingClientRect().top;

	      if (height !== window.innerHeight) {
	        this.setState({
	          height: window.innerHeight
	        });
	      }

	      window.addEventListener('scroll', this._onScrollWindow, false);
	      window.addEventListener('resize', this._onResizeWindow, false);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      window.removeEventListener('scroll', this._onScrollWindow, false);
	      window.removeEventListener('resize', this._onResizeWindow, false);

	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);

	        this._enablePointerEventsIfDisabled();
	      }
	    }

	    /**
	     * Updates the state during the next animation frame.
	     * Use this method to avoid multiple renders in a small span of time.
	     * This helps performance for bursty events (like onScroll).
	     */

	  }, {
	    key: '_setNextState',
	    value: function _setNextState(state) {
	      var _this2 = this;

	      if (this._setNextStateAnimationFrameId) {
	        _raf2.default.cancel(this._setNextStateAnimationFrameId);
	      }

	      this._setNextStateAnimationFrameId = (0, _raf2.default)(function () {
	        _this2._setNextStateAnimationFrameId = null;
	        _this2.setState(state);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var children = this.props.children;
	      var _state = this.state;
	      var isScrolling = _state.isScrolling;
	      var scrollTop = _state.scrollTop;
	      var height = _state.height;


	      return _react2.default.createElement(
	        'div',
	        null,
	        children({
	          height: height,
	          isScrolling: isScrolling,
	          scrollTop: scrollTop
	        })
	      );
	    }
	  }, {
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps, nextState) {
	      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);
	    }
	  }, {
	    key: '_enablePointerEventsAfterDelay',
	    value: function _enablePointerEventsAfterDelay() {
	      if (this._disablePointerEventsTimeoutId) {
	        clearTimeout(this._disablePointerEventsTimeoutId);
	      }

	      this._disablePointerEventsTimeoutId = setTimeout(this._enablePointerEventsAfterDelayCallback, IS_SCROLLING_TIMEOUT);
	    }
	  }, {
	    key: '_enablePointerEventsAfterDelayCallback',
	    value: function _enablePointerEventsAfterDelayCallback() {
	      this._enablePointerEventsIfDisabled();

	      this.setState({
	        isScrolling: false
	      });
	    }
	  }, {
	    key: '_enablePointerEventsIfDisabled',
	    value: function _enablePointerEventsIfDisabled() {
	      if (this._disablePointerEventsTimeoutId) {
	        this._disablePointerEventsTimeoutId = null;

	        document.body.style.pointerEvents = this._originalBodyPointerEvents;

	        this._originalBodyPointerEvents = null;
	      }
	    }
	  }, {
	    key: '_onResizeWindow',
	    value: function _onResizeWindow(event) {
	      var onResize = this.props.onResize;


	      var height = window.innerHeight || 0;

	      this.setState({ height: height });

	      onResize({ height: height });
	    }
	  }, {
	    key: '_onScrollWindow',
	    value: function _onScrollWindow(event) {
	      var onScroll = this.props.onScroll;

	      // In IE10+ scrollY is undefined, so we replace that with the latter

	      var scrollY = 'scrollY' in window ? window.scrollY : document.documentElement.scrollTop;

	      var scrollTop = Math.max(0, scrollY - this._positionFromTop);

	      if (this._originalBodyPointerEvents == null) {
	        this._originalBodyPointerEvents = document.body.style.pointerEvents;

	        document.body.style.pointerEvents = 'none';

	        this._enablePointerEventsAfterDelay();
	      }

	      var state = {
	        isScrolling: true,
	        scrollTop: scrollTop
	      };

	      if (!this.state.isScrolling) {
	        this.setState(state);
	      } else {
	        this._setNextState(state);
	      }

	      onScroll({ scrollTop: scrollTop });
	    }
	  }]);

	  return WindowScroller;
	}(_react.Component);

	WindowScroller.propTypes = {
	  /**
	   * Function respondible for rendering children.
	   * This function should implement the following signature:
	   * ({ height, scrollTop }) => PropTypes.element
	   */
	  children: _react.PropTypes.func.isRequired,

	  /** Callback to be invoked on-resize: ({ height }) */
	  onResize: _react.PropTypes.func.isRequired,

	  /** Callback to be invoked on-scroll: ({ scrollTop }) */
	  onScroll: _react.PropTypes.func.isRequired
	};
	WindowScroller.defaultProps = {
	  onResize: function onResize() {},
	  onScroll: function onScroll() {}
	};
	exports.default = WindowScroller;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Day = __webpack_require__(194);

	var _Day2 = _interopRequireDefault(_Day);

	var _Week = __webpack_require__(197);

	var _Week2 = _interopRequireDefault(_Week);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(200);

	var Month = function (_Component) {
		_inherits(Month, _Component);

		function Month() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Month);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.scrollToToday = function () {
				var scrollToDate = _this.props.scrollToDate;

				scrollToDate((0, _moment2.default)(), 0);
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Month, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps) {
				return !nextProps.isScrolling && !this.props.isScrolling;
			}
		}, {
			key: 'renderRows',
			value: function renderRows() {
				var _props = this.props;
				var disabledDates = _props.disabledDates;
				var disabledDays = _props.disabledDays;
				var displayDate = _props.displayDate;
				var locale = _props.locale;
				var maxDate = _props.maxDate;
				var minDate = _props.minDate;
				var onDaySelect = _props.onDaySelect;
				var onWeekSelect = _props.onWeekSelect;
				var rowHeight = _props.rowHeight;
				var rows = _props.rows;
				var selectedDate = _props.selectedDate;
				var selectedWeek = _props.selectedWeek;
				var today = _props.today;
				var theme = _props.theme;
				var showSelectionText = _props.showSelectionText;
				var hideYearsOnDate = _props.hideYearsOnDate;

				var currentYear = today.date.year();
				var monthShort = displayDate.format('MMM');
				var monthRows = [];
				var day = 0;
				var isDisabled = false;
				var isSelected = false;
				var isWeekSelected = false;
				var isToday = false;
				var row = void 0,
				    date = void 0,
				    days = void 0;

				// Oh the things we do in the name of performance...
				for (var i = 0, len = rows.length; i < len; i++) {
					row = rows[i];
					days = [];

					date = row[0];
					isWeekSelected = selectedWeek && date.date.format('YYYY-ww') === selectedWeek.date.format('YYYY-ww');

					for (var k = 0, _len2 = row.length; k < _len2; k++) {
						date = row[k];
						day++;

						isSelected = selectedDate && date.yyyymmdd == selectedDate.yyyymmdd;
						isToday = today && date.yyyymmdd == today.yyyymmdd;
						isDisabled = minDate && date.yyyymmdd < minDate.yyyymmdd || maxDate && date.yyyymmdd > maxDate.yyyymmdd || disabledDays && disabledDays.length && disabledDays.indexOf(date.date.day()) !== -1 || disabledDates && disabledDates.length && disabledDates.indexOf(date.yyyymmdd) !== -1;

						if (date.date.format('e') === '0') {
							days[0] = _react2.default.createElement(_Week2.default, {
								key: 'week-' + (i + 1),
								currentYear: currentYear,
								date: date,
								day: day,
								handleWeekClick: onWeekSelect,
								isDisabled: isDisabled,
								isSelected: isSelected,
								isWeekSelected: isWeekSelected,
								locale: locale,
								monthShort: monthShort,
								theme: theme,
								rowHeight: rowHeight
							});
						}

						days[days.length] = _react2.default.createElement(_Day2.default, {
							key: 'day-' + day,
							currentYear: currentYear,
							date: date,
							day: day,
							handleDayClick: onDaySelect,
							isDisabled: isDisabled,
							isToday: isToday,
							isSelected: isSelected,
							isWeekSelected: isWeekSelected,
							locale: locale,
							monthShort: monthShort,
							theme: theme,
							showSelectionText: showSelectionText,
							hideYearsOnDate: hideYearsOnDate
						});
					}
					monthRows[i] = _react2.default.createElement(
						'ul',
						{
							className: (0, _classnames2.default)(style.row, _defineProperty({}, style.partial, row.length !== 7)),
							style: { height: rowHeight },
							key: 'Row-' + i,
							role: 'row',
							'aria-label': 'Week ' + days[0].props.date.date.format('ww'),
							'data-week': '' + days[0].props.date.date.format('YYYY-MM-DD')
						},
						days
					);
				}

				return monthRows;
			}
		}, {
			key: 'render',
			value: function render() {
				var _props2 = this.props;
				var displayDate = _props2.displayDate;
				var today = _props2.today;
				var rows = _props2.rows;
				var showOverlay = _props2.showOverlay;
				var theme = _props2.theme;


				return _react2.default.createElement(
					'div',
					{ className: style.root },
					_react2.default.createElement(
						'div',
						{ className: style.rows },
						this.renderRows()
					),
					showOverlay && _react2.default.createElement(
						'label',
						{ className: (0, _classnames2.default)(style.label, _defineProperty({}, style.partialFirstRow, rows[0].length !== 7)), style: theme && theme.overlayColor && { backgroundColor: theme.overlayColor } },
						_react2.default.createElement(
							'span',
							null,
							'' + displayDate.format('MMMM') + (!displayDate.isSame(today.date, 'year') ? ' ' + displayDate.year() : '')
						)
					)
				);
			}
		}]);

		return Month;
	}(_react.Component);

	exports.default = Month;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Day;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var style = __webpack_require__(195);

	function Day(_ref) {
		var currentYear = _ref.currentYear;
		var hideYearsOnDate = _ref.hideYearsOnDate;
		var date = _ref.date;
		var day = _ref.day;
		var handleDayClick = _ref.handleDayClick;
		var isDisabled = _ref.isDisabled;
		var isToday = _ref.isToday;
		var isSelected = _ref.isSelected;
		var isWeekSelected = _ref.isWeekSelected;
		var monthShort = _ref.monthShort;
		var locale = _ref.locale;
		var theme = _ref.theme;
		var showSelectionText = _ref.showSelectionText;
		var mmt = date.date;

		var year = mmt.year();
		var isWeekend = date.date.day() === 6 || date.date.day() === 0;
		var isPast = (0, _moment2.default)().startOf('day').diff(date.date) > 0;

		return _react2.default.createElement(
			'li',
			{
				style: (isToday ? { 'color': theme.textColor.active } : null, isWeekSelected ? { 'backgroundColor': theme.selectedWeekBackground } : null),
				className: '' + style.root + (isToday ? ' ' + style.today : '') + (isSelected ? ' ' + style.selected : '') + (isDisabled ? ' ' + style.disabled : ' ' + style.enabled) + (isWeekSelected ? ' ' + style.weekSelected : '') + (isWeekend ? ' ' + style.weekend : '') + (isPast ? ' ' + style.past : ''),
				'data-date': date.date.format('YYYY-MM-DD'),
				onClick: !isDisabled && handleDayClick ? handleDayClick.bind(this, mmt) : null
			},
			showSelectionText && day === 1 && _react2.default.createElement(
				'span',
				{ className: style.month },
				monthShort
			),
			_react2.default.createElement(
				'span',
				null,
				day
			),
			showSelectionText && day === 1 && currentYear !== year && !hideYearsOnDate && _react2.default.createElement(
				'span',
				{ className: style.year },
				year
			),
			isSelected && _react2.default.createElement(
				'div',
				{ className: '' + style.selection + (isToday ? ' ' + style.today : ''), style: { backgroundColor: typeof theme.selectionColor == 'function' ? theme.selectionColor(mmt) : theme.selectionColor, color: theme.textColor.active } },
				showSelectionText && _react2.default.createElement(
					'span',
					{ className: style.month },
					isToday ? locale.todayLabel.short || locale.todayLabel.long : monthShort
				),
				_react2.default.createElement(
					'span',
					{ className: (!showSelectionText && style.dayHiddenText, showSelectionText && style.day) },
					day
				)
			)
		);
	}

/***/ },
/* 195 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Day__root","selected":"Cal__Day__selected","month":"Cal__Day__month","year":"Cal__Day__year","selection":"Cal__Day__selection","day":"Cal__Day__day","dayHiddenText":"Cal__Day__dayHiddenText","disabled":"Cal__Day__disabled","weekend":"Cal__Day__weekend","past":"Cal__Day__past","weekSelected":"Cal__Day__weekSelected"};

/***/ },
/* 196 */,
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Week;

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var style = __webpack_require__(198);

	function Week(_ref) {
		var date = _ref.date;
		var handleWeekClick = _ref.handleWeekClick;
		var isWeekSelected = _ref.isWeekSelected;
		var theme = _ref.theme;
		var rowHeight = _ref.rowHeight;
		var isDisabled = _ref.isDisabled;

		var weekNumber = date.date.format('ww');
		var weekDistance = (0, _moment2.default)().startOf('week').diff(date.date, "weeks");
		var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" + Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";
		var weekItemHeight = rowHeight / 2;

		return _react2.default.createElement(
			'li',
			{ className: (0, _classnames2.default)(style.root, isWeekSelected ? style.weekSelected : null),
				onClick: !isDisabled && handleWeekClick ? handleWeekClick.bind(this, date.date) : null,
				style: isWeekSelected ? { 'backgroundColor': theme.selectedWeekBackground } : { 'backgroundColor': theme.weekBackground } },
			_react2.default.createElement(
				'span',
				{ className: (0, _classnames2.default)(style.weekItem, style.weekNumber), style: { height: weekItemHeight } },
				'v.',
				weekNumber
			),
			_react2.default.createElement(
				'span',
				{ className: (0, _classnames2.default)(style.weekItem, style.weekDistance), style: { height: weekItemHeight } },
				weekDistanceLabel
			)
		);
	}

/***/ },
/* 198 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Week__root","weekItem":"Cal__Week__weekItem","weekSelected":"Cal__Week__weekSelected","weekNumber":"Cal__Week__weekNumber","weekDistance":"Cal__Week__weekDistance"};

/***/ },
/* 199 */,
/* 200 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Month__root","row":"Cal__Month__row","partial":"Cal__Month__partial","label":"Cal__Month__label","partialFirstRow":"Cal__Month__partialFirstRow"};

/***/ },
/* 201 */,
/* 202 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__List__root","scrolling":"Cal__List__scrolling"};

/***/ },
/* 203 */,
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	var _range = __webpack_require__(116);

	var _range2 = _interopRequireDefault(_range);

	var _utils = __webpack_require__(126);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(205);

	var Weekdays = function (_Component) {
		_inherits(Weekdays, _Component);

		function Weekdays() {
			_classCallCheck(this, Weekdays);

			return _possibleConstructorReturn(this, (Weekdays.__proto__ || Object.getPrototypeOf(Weekdays)).apply(this, arguments));
		}

		_createClass(Weekdays, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps) {
				return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var theme = _props.theme;
				var locale = _props.locale;


				return _react2.default.createElement(
					'ul',
					{ className: style.root, style: { backgroundColor: theme.weekdayColor, color: theme.textColor.default } },
					(0, _range2.default)(0, 8).map(function (val, index) {
						if (index === 0) {
							return _react2.default.createElement('li', { key: 'Week-column', className: style.weekColumn });
						} else {
							return _react2.default.createElement(
								'li',
								{ key: 'Weekday-' + index, className: style.day },
								(0, _moment2.default)().weekday(index - 1).format('dd').substring(1, 0)
							);
						}
					})
				);
			}
		}]);

		return Weekdays;
	}(_react.Component);

	Weekdays.propTypes = {
		locale: _react.PropTypes.object,
		theme: _react.PropTypes.object
	};
	exports.default = Weekdays;

/***/ },
/* 205 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Weekdays__root","day":"Cal__Weekdays__day","weekColumn":"Cal__Weekdays__weekColumn"};

/***/ },
/* 206 */,
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsShallowCompare = __webpack_require__(138);

	var _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	var _range = __webpack_require__(116);

	var _range2 = _interopRequireDefault(_range);

	var _utils = __webpack_require__(126);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(208);

	var Shortcuts = function (_Component) {
		_inherits(Shortcuts, _Component);

		function Shortcuts() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, Shortcuts);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Shortcuts.__proto__ || Object.getPrototypeOf(Shortcuts)).call.apply(_ref, [this].concat(args))), _this), _this.handleTodayClick = function () {
				var handleTodayClick = _this.props.handleTodayClick;


				handleTodayClick((0, _moment2.default)());
			}, _this.handleJumpClick = function (distance) {
				var _this$props = _this.props;
				var scrollToDate = _this$props.scrollToDate;
				var handleTodayClick = _this$props.handleTodayClick;


				handleTodayClick((0, _moment2.default)().add(distance, 'weeks'));
				scrollToDate((0, _moment2.default)().add(distance, 'weeks'), 0);
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Shortcuts, [{
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps) {
				return (0, _reactAddonsShallowCompare2.default)(this, nextProps);
			}
		}, {
			key: 'render',
			value: function render() {
				var _this2 = this;

				var _props = this.props;
				var theme = _props.theme;
				var locale = _props.locale;


				return _react2.default.createElement(
					'ul',
					{ className: style.root, style: { backgroundColor: '#F5F5F5' } },
					_react2.default.createElement(
						'li',
						{ key: 'Shortcut-0', className: (0, _classnames2.default)(style.root, style.shortcut, style.today) },
						_react2.default.createElement(
							'span',
							{ onClick: this.handleTodayClick },
							locale.todayLabel.long
						)
					),
					_react2.default.createElement(
						'li',
						{ key: 'Shortcut-1', className: (0, _classnames2.default)(style.root, style.shortcut) },
						_react2.default.createElement(
							'span',
							{ onClick: function onClick() {
									return _this2.handleJumpClick(4);
								} },
							'+4'
						)
					),
					_react2.default.createElement(
						'li',
						{ key: 'Shortcut-3', className: (0, _classnames2.default)(style.root, style.shortcut) },
						_react2.default.createElement(
							'span',
							{ onClick: function onClick() {
									return _this2.handleJumpClick(6);
								} },
							'+6'
						)
					),
					_react2.default.createElement(
						'li',
						{ key: 'Shortcut-4', className: (0, _classnames2.default)(style.root, style.shortcut) },
						_react2.default.createElement(
							'span',
							{ onClick: function onClick() {
									return _this2.handleJumpClick(7);
								} },
							'+7'
						)
					),
					_react2.default.createElement(
						'li',
						{ key: 'Shortcut-5', className: (0, _classnames2.default)(style.root, style.shortcut) },
						_react2.default.createElement(
							'span',
							{ onClick: function onClick() {
									return _this2.handleJumpClick(8);
								} },
							'+8'
						)
					),
					_react2.default.createElement(
						'li',
						{ key: 'Shortcut-6', className: (0, _classnames2.default)(style.root, style.shortcut) },
						_react2.default.createElement(
							'span',
							{ onClick: function onClick() {
									return _this2.handleJumpClick(9);
								} },
							'+9'
						)
					)
				);
			}
		}]);

		return Shortcuts;
	}(_react.Component);

	Shortcuts.propTypes = {
		locale: _react.PropTypes.object,
		theme: _react.PropTypes.object,
		handleTodayClick: _react.PropTypes.func,
		scrollToDate: _react.PropTypes.func
	};
	exports.default = Shortcuts;

/***/ },
/* 208 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Shortcuts__root","shortcut":"Cal__Shortcuts__shortcut","today":"Cal__Shortcuts__today"};

/***/ },
/* 209 */,
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactVirtualized = __webpack_require__(145);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _utils = __webpack_require__(126);

	var _moment = __webpack_require__(4);

	var _moment2 = _interopRequireDefault(_moment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = __webpack_require__(211);

	var Years = function (_Component) {
	    _inherits(Years, _Component);

	    function Years(props) {
	        _classCallCheck(this, Years);

	        var _this = _possibleConstructorReturn(this, (Years.__proto__ || Object.getPrototypeOf(Years)).call(this, props));

	        _this.state = {
	            selectedYear: props.selectedDate ? props.selectedDate.year() : (0, _moment2.default)().year()
	        };
	        return _this;
	    }

	    _createClass(Years, [{
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            var vs = this.refs.VirtualScroll;
	            var grid = vs && vs.refs.Grid;

	            this.scrollEl = grid && grid.refs.scrollingContainer;
	        }
	    }, {
	        key: 'handleClick',
	        value: function handleClick(year, e) {
	            var _props = this.props;
	            var hideYearsOnSelect = _props.hideYearsOnSelect;
	            var scrollToDate = _props.scrollToDate;
	            var selectedDate = _props.selectedDate;
	            var setDisplay = _props.setDisplay;

	            var date = selectedDate || (0, _moment2.default)();
	            var newDate = date.clone().year(year);

	            this.selectDate(newDate, e, !hideYearsOnSelect);
	            scrollToDate(newDate, -40);

	            if (hideYearsOnSelect) {
	                setDisplay('days');
	            }
	        }
	    }, {
	        key: 'selectDate',
	        value: function selectDate(date, e) {
	            var updateState = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
	            var shouldHeaderAnimate = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
	            var _props2 = this.props;
	            var minDate = _props2.minDate;
	            var maxDate = _props2.maxDate;
	            var onDaySelect = _props2.onDaySelect;


	            if (!date.isBefore(minDate, 'day') && !date.isAfter(maxDate, 'day')) {
	                if (updateState) {
	                    this.setState({
	                        selectedYear: date.year()
	                    });
	                }

	                onDaySelect(date, e, shouldHeaderAnimate);
	            }
	        }
	    }, {
	        key: 'handleKeyDown',
	        value: function handleKeyDown(e) {
	            var _props3 = this.props;
	            var scrollToDate = _props3.scrollToDate;
	            var setDisplay = _props3.setDisplay;
	            var selectedDate = _props3.selectedDate;
	            var selectedYear = this.state.selectedYear;

	            var delta = 0;

	            switch (e.keyCode) {
	                case _utils.keyCodes.enter:
	                case _utils.keyCodes.escape:
	                    setDisplay('days');
	                    scrollToDate(selectedDate || (0, _moment2.default)(selectedYear, 'YYYY'), -40);
	                    return;
	                case _utils.keyCodes.down:
	                    delta = +1;
	                    break;
	                case _utils.keyCodes.up:
	                    delta = -1;
	                    break;
	            }

	            if (delta) {
	                if (!selectedDate) selectedDate = (0, _moment2.default)().year(selectedYear);

	                var newSelectedDate = selectedDate.clone().add(delta, 'year');
	                this.selectDate(newSelectedDate, e);
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            var _props4 = this.props;
	            var height = _props4.height;
	            var selectedDate = _props4.selectedDate;
	            var theme = _props4.theme;
	            var width = _props4.width;
	            var selectedYear = this.state.selectedYear;

	            var currentYear = (0, _moment2.default)().year();
	            var years = this.props.years.slice(0, this.props.years.length);
	            // Add spacer rows at the top and bottom
	            years.unshift(null);
	            years.push(null);

	            var selectedYearIndex = years.indexOf(selectedYear);
	            var rowHeight = 50;
	            var containerHeight = years.length * rowHeight < height + 50 ? years.length * rowHeight : height + 50;

	            if (typeof width == 'string' && width.indexOf('%') !== -1) {
	                width = window.innerWidth * parseInt(width.replace('%', ''), 10) / 100; // See https://github.com/bvaughn/react-virtualized/issues/229
	            }

	            return _react2.default.createElement(
	                'div',
	                {
	                    className: style.root,
	                    style: { color: theme.selectionColor, height: height + 50 }
	                },
	                _react2.default.createElement(_reactVirtualized.VirtualScroll, {
	                    ref: 'VirtualScroll',
	                    className: style.list,
	                    width: width,
	                    height: containerHeight,
	                    rowCount: years.length,
	                    rowHeight: rowHeight,
	                    scrollToIndex: selectedYearIndex + 1,
	                    scrollToAlignment: 'center',
	                    rowRenderer: function rowRenderer(_ref) {
	                        var index = _ref.index;

	                        var year = years[index];

	                        if (year !== null) {
	                            var _classNames;

	                            var isActive = index == selectedYearIndex;

	                            return _react2.default.createElement(
	                                'div',
	                                {
	                                    className: (0, _classnames2.default)(style.year, (_classNames = {}, _defineProperty(_classNames, style.active, isActive), _defineProperty(_classNames, style.currentYear, year == currentYear), _classNames)),
	                                    onClick: function onClick() {
	                                        return _this2.handleClick(year);
	                                    },
	                                    title: 'Set year to ' + year,
	                                    'data-year': year,
	                                    style: { color: typeof theme.selectionColor == 'function' ? theme.selectionColor(selectedDate.clone().year(year)) : theme.selectionColor }
	                                },
	                                _react2.default.createElement(
	                                    'span',
	                                    { style: year == currentYear ? { borderColor: theme.todayColor } : null },
	                                    year
	                                )
	                            );
	                        } else {
	                            return _react2.default.createElement('div', { className: style.spacer });
	                        }
	                    }
	                })
	            );
	        }
	    }]);

	    return Years;
	}(_react.Component);

	Years.propTypes = {
	    height: _react.PropTypes.number,
	    width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
	    hideYearsOnSelect: _react.PropTypes.bool,
	    maxDate: _react.PropTypes.object,
	    minDate: _react.PropTypes.object,
	    onDaySelect: _react.PropTypes.func,
	    scrollToDate: _react.PropTypes.func,
	    selectedDate: _react.PropTypes.object,
	    setDisplay: _react.PropTypes.func,
	    theme: _react.PropTypes.object,
	    years: _react.PropTypes.array
	};
	exports.default = Years;

/***/ },
/* 211 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Years__root","list":"Cal__Years__list","center":"Cal__Years__center","year":"Cal__Years__year","active":"Cal__Years__active","currentYear":"Cal__Years__currentYear"};

/***/ },
/* 212 */,
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * A higher-order-component for handling onClickOutside for React components.
	 */
	(function(root) {
	  "use strict";

	  // administrative
	  var registeredComponents = [];
	  var handlers = [];
	  var IGNORE_CLASS = 'ignore-react-onclickoutside';
	  var DEFAULT_EVENTS = ['mousedown', 'touchstart'];

	  /**
	   * Check whether some DOM node is our Component's node.
	   */
	  var isNodeFound = function(current, componentNode, ignoreClass) {
	    if (current === componentNode) {
	      return true;
	    }
	    // SVG <use/> elements do not technically reside in the rendered DOM, so
	    // they do not have classList directly, but they offer a link to their
	    // corresponding element, which can have classList. This extra check is for
	    // that case.
	    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
	    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
	    if (current.correspondingElement) {
	      return current.correspondingElement.classList.contains(ignoreClass);
	    }
	    return current.classList.contains(ignoreClass);
	  };

	  /**
	   * Generate the event handler that checks whether a clicked DOM node
	   * is inside of, or lives outside of, our Component's node tree.
	   */
	  var generateOutsideCheck = function(componentNode, componentInstance, ignoreClass, preventDefault, stopPropagation) {
	    return function(evt) {
	      if (preventDefault) {
	        evt.preventDefault();
	      }
	      if (stopPropagation) {
	        evt.stopPropagation();
	      }
	      var current = evt.target;
	      var found = false;
	      // If source=local then this event came from "somewhere"
	      // inside and should be ignored. We could handle this with
	      // a layered approach, too, but that requires going back to
	      // thinking in terms of Dom node nesting, running counter
	      // to React's "you shouldn't care about the DOM" philosophy.
	      while(current.parentNode) {
	        found = isNodeFound(current, componentNode, ignoreClass);
	        if(found) return;
	        current = current.parentNode;
	      }
	      // If element is in a detached DOM, consider it "not clicked
	      // outside", as it cannot be known whether it was outside.
	      if(current !== document) return;
	      componentInstance.handleClickOutside.bind(componentInstance, evt)();
	    }
	  };


	  /**
	   * This function generates the HOC function that you'll use
	   * in order to impart onOutsideClick listening to an
	   * arbitrary component.
	   */
	  function setupHOC(root, React, ReactDOM) {

	    // The actual Component-wrapping HOC:
	    return function(Component) {
	      var wrapComponentWithOnClickOutsideHandling = React.createClass({
	        statics: {
	          /**
	           * Access the wrapped Component's class.
	           */
	          getClass: function() {
	            if (Component.getClass) {
	              return Component.getClass();
	            }
	            return Component;
	          }
	        },

	        /**
	         * Access the wrapped Component's instance.
	         */
	        getInstance: function() {
	          return this.refs.instance;
	        },

	        // this is given meaning in componentDidMount
	        __outsideClickHandler: function(evt) {},

	        /**
	         * Add click listeners to the current document,
	         * linked to this component's state.
	         */
	        componentDidMount: function() {
	          var instance = this.getInstance();

	          if(typeof instance.handleClickOutside !== "function") {
	            throw new Error("Component lacks a handleClickOutside(event) function for processing outside click events.");
	          }

	          var fn = this.__outsideClickHandler = generateOutsideCheck(
	            ReactDOM.findDOMNode(instance),
	            instance,
	            this.props.outsideClickIgnoreClass || IGNORE_CLASS,
	            this.props.preventDefault || false,
	            this.props.stopPropagation || false
	          );

	          var pos = registeredComponents.length;
	          registeredComponents.push(this);
	          handlers[pos] = fn;

	          // If there is a truthy disableOnClickOutside property for this
	          // component, don't immediately start listening for outside events.
	          if (!this.props.disableOnClickOutside) {
	            this.enableOnClickOutside();
	          }
	        },

	        /**
	        * Track for disableOnClickOutside props changes and enable/disable click outside
	        */
	        componentWillReceiveProps: function(nextProps) {
	          if (this.props.disableOnClickOutside && !nextProps.disableOnClickOutside) {
	            this.enableOnClickOutside();
	          } else if (!this.props.disableOnClickOutside && nextProps.disableOnClickOutside) {
	            this.disableOnClickOutside();
	          }
	        },

	        /**
	         * Remove the document's event listeners
	         */
	        componentWillUnmount: function() {
	          this.disableOnClickOutside();
	          this.__outsideClickHandler = false;
	          var pos = registeredComponents.indexOf(this);
	          if( pos>-1) {
	            // clean up so we don't leak memory
	            if (handlers[pos]) { handlers.splice(pos, 1); }
	            registeredComponents.splice(pos, 1);
	          }
	        },

	        /**
	         * Can be called to explicitly enable event listening
	         * for clicks and touches outside of this element.
	         */
	        enableOnClickOutside: function() {
	          var fn = this.__outsideClickHandler;
	          if (typeof document !== "undefined") {
	            var events = this.props.eventTypes || DEFAULT_EVENTS;
	            if (!events.forEach) { events = [events] };
	            events.forEach(function (eventName) {
	              document.addEventListener(eventName, fn);
	            });
	          }
	        },

	        /**
	         * Can be called to explicitly disable event listening
	         * for clicks and touches outside of this element.
	         */
	        disableOnClickOutside: function() {
	          var fn = this.__outsideClickHandler;
	          if (typeof document !== "undefined") {
	            var events = this.props.eventTypes || DEFAULT_EVENTS;
	            if (!events.forEach) { events = [events] };
	            events.forEach(function (eventName) {
	              document.removeEventListener(eventName, fn);
	            });
	          }
	        },

	        /**
	         * Pass-through render
	         */
	        render: function() {
	          var passedProps = this.props;
	          var props = { ref: 'instance' };
	          Object.keys(this.props).forEach(function(key) {
	            props[key] = passedProps[key];
	          });
	          return React.createElement(Component,  props);
	        }
	      });

	      // Add display name for React devtools
	      (function bindWrappedComponentName(c, wrapper) {
	        var componentName = c.displayName || c.name || 'Component'
	        wrapper.displayName = 'OnClickOutside(' + componentName + ')';
	      }(Component, wrapComponentWithOnClickOutsideHandling));

	      return wrapComponentWithOnClickOutsideHandling;
	    };
	  }

	  /**
	   * This function sets up the library in ways that
	   * work with the various modulde loading solutions
	   * used in JavaScript land today.
	   */
	  function setupBinding(root, factory) {
	    if (true) {
	      // AMD. Register as an anonymous module.
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),__webpack_require__(153)], __WEBPACK_AMD_DEFINE_RESULT__ = function(React, ReactDom) {
	        return factory(root, React, ReactDom);
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	      // Node. Note that this does not work with strict
	      // CommonJS, but only CommonJS-like environments
	      // that support module.exports
	      module.exports = factory(root, require('react'), require('react-dom'));
	    } else {
	      // Browser globals (root is window)
	      root.onClickOutside = factory(root, React, ReactDOM);
	    }
	  }

	  // Make it all happen
	  setupBinding(root, setupHOC);

	}(this));


/***/ },
/* 214 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__Container__root","landscape":"Cal__Container__landscape","wrapper":"Cal__Container__wrapper","listWrapper":"Cal__Container__listWrapper"};

/***/ },
/* 215 */,
/* 216 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"Cal__ExpansionButton__root"};

/***/ }
/******/ ])
});
;
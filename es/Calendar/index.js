import _defaultProps from 'recompose/defaultProps';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { debounce, emptyFn, range, ScrollSpeed } from '../utils';

import defaultDisplayOptions from '../utils/defaultDisplayOptions';
import defaultLocale from '../utils/defaultLocale';
import defaultTheme from '../utils/defaultTheme';
import Today, { DIRECTION_UP, DIRECTION_DOWN } from '../Today';
import Header from '../Header';
import MonthList from '../MonthList';
import Weekdays from '../Weekdays';
import Years from '../Years';
import Day from '../Day';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import startOfDay from 'date-fns/start_of_day';

var styles = {
  container: {
    'root': 'Cal__Container__root',
    'landscape': 'Cal__Container__landscape',
    'wrapper': 'Cal__Container__wrapper',
    'listWrapper': 'Cal__Container__listWrapper'
  },
  day: {
    'root': 'Cal__Day__root',
    'enabled': 'Cal__Day__enabled',
    'highlighted': 'Cal__Day__highlighted',
    'today': 'Cal__Day__today',
    'disabled': 'Cal__Day__disabled',
    'selected': 'Cal__Day__selected',
    'month': 'Cal__Day__month',
    'year': 'Cal__Day__year',
    'selection': 'Cal__Day__selection',
    'day': 'Cal__Day__day',
    'range': 'Cal__Day__range',
    'start': 'Cal__Day__start',
    'end': 'Cal__Day__end',
    'betweenRange': 'Cal__Day__betweenRange'
  }
};

export var withDefaultProps = _defaultProps({
  autoFocus: true,
  DayComponent: Day,
  display: 'days',
  displayOptions: {},
  HeaderComponent: Header,
  height: 500,
  keyboardSupport: true,
  max: new Date(2050, 11, 31),
  maxDate: new Date(2050, 11, 31),
  min: new Date(1980, 0, 1),
  minDate: new Date(1980, 0, 1),
  onHighlightedDateChange: emptyFn,
  onScroll: emptyFn,
  onScrollEnd: emptyFn,
  onSelect: emptyFn,
  passThrough: {},
  rowHeight: 56,
  tabIndex: 1,
  width: 400,
  YearsComponent: Years
});

var Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

    _this._displayOptions = {};
    _this._locale = {};
    _this._theme = {};

    _this.getCurrentOffset = function () {
      return _this.scrollTop;
    };

    _this.getDateOffset = function (date) {
      return _this._MonthList && _this._MonthList.getDateOffset(date);
    };

    _this.scrollTo = function (offset) {
      return _this._MonthList && _this._MonthList.scrollTo(offset);
    };

    _this.scrollToDate = function () {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
      var offset = arguments[1];
      var shouldAnimate = arguments[2];
      var display = _this.props.display;


      return _this._MonthList && _this._MonthList.scrollToDate(date, offset, shouldAnimate && display === 'days', function () {
        return _this.setState({ isScrolling: false });
      });
    };

    _this.getScrollSpeed = new ScrollSpeed().getScrollSpeed;

    _this.handleScroll = function (scrollTop, e) {
      var _this$props = _this.props,
          onScroll = _this$props.onScroll,
          rowHeight = _this$props.rowHeight;
      var isScrolling = _this.state.isScrolling;

      var _this$getDisplayOptio = _this.getDisplayOptions(),
          showTodayHelper = _this$getDisplayOptio.showTodayHelper,
          showOverlay = _this$getDisplayOptio.showOverlay;

      var scrollSpeed = _this.scrollSpeed = Math.abs(_this.getScrollSpeed(scrollTop));
      _this.scrollTop = scrollTop;

      // We only want to display the months overlay if the user is rapidly scrolling
      if (showOverlay && scrollSpeed > rowHeight && !isScrolling) {
        _this.setState({
          isScrolling: true
        });
      }

      if (showTodayHelper) {
        _this.updateTodayHelperPosition(scrollSpeed);
      }

      onScroll(scrollTop, e);
      _this.handleScrollEnd();
    };

    _this.handleScrollEnd = debounce(function () {
      var onScrollEnd = _this.props.onScrollEnd;
      var isScrolling = _this.state.isScrolling;

      var _this$getDisplayOptio2 = _this.getDisplayOptions(),
          showTodayHelper = _this$getDisplayOptio2.showTodayHelper;

      if (isScrolling) {
        _this.setState({ isScrolling: false });
      }

      if (showTodayHelper) {
        _this.updateTodayHelperPosition(0);
      }

      onScrollEnd(_this.scrollTop);
    }, 150);

    _this.updateTodayHelperPosition = function (scrollSpeed) {
      var today = _this.today;
      var scrollTop = _this.scrollTop;
      var showToday = _this.state.showToday;
      var _this$props2 = _this.props,
          height = _this$props2.height,
          rowHeight = _this$props2.rowHeight;

      var _this$getDisplayOptio3 = _this.getDisplayOptions(),
          todayHelperRowOffset = _this$getDisplayOptio3.todayHelperRowOffset;

      var newState = void 0;

      if (!_this._todayOffset) {
        _this._todayOffset = _this.getDateOffset(today);
      }

      // Today is above the fold
      if (scrollTop >= _this._todayOffset + (height - rowHeight) / 2 + rowHeight * todayHelperRowOffset) {
        if (showToday !== DIRECTION_UP) newState = DIRECTION_UP;
      }
      // Today is below the fold
      else if (scrollTop <= _this._todayOffset - height / 2 - rowHeight * (todayHelperRowOffset + 1)) {
          if (showToday !== DIRECTION_DOWN) newState = DIRECTION_DOWN;
        } else if (showToday && scrollSpeed <= 1) {
          newState = false;
        }

      if (scrollTop === 0) {
        newState = false;
      }

      if (newState != null) {
        _this.setState({ showToday: newState });
      }
    };

    _this.setDisplay = function (display) {
      _this.setState({ display: display });
    };

    _this.updateYears(props);

    _this.state = {
      display: props.display
    };
    return _this;
  }

  Calendar.prototype.componentDidMount = function componentDidMount() {
    var autoFocus = this.props.autoFocus;


    if (autoFocus) {
      this.node.focus();
    }
  };

  Calendar.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    var _props = this.props,
        min = _props.min,
        minDate = _props.minDate,
        max = _props.max,
        maxDate = _props.maxDate;


    if (nextProps.min !== min || nextProps.minDate !== minDate || nextProps.max !== max || nextProps.maxDate !== maxDate) {
      this.updateYears(nextProps);
    }

    if (nextProps.display !== this.props.display) {
      this.setState({ display: nextProps.display });
    }
  };

  Calendar.prototype.updateYears = function updateYears() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

    this._min = parse(props.min);
    this._max = parse(props.max);
    this._minDate = parse(props.minDate);
    this._maxDate = parse(props.maxDate);

    var min = this._min.getFullYear();
    var minMonth = this._min.getMonth();
    var max = this._max.getFullYear();
    var maxMonth = this._max.getMonth();

    var months = [];
    var year = void 0,
        month = void 0;
    for (year = min; year <= max; year++) {
      for (month = 0; month < 12; month++) {
        if (year === min && month < minMonth || year === max && month > maxMonth) {
          continue;
        }

        months.push({ month: month, year: year });
      }
    }

    this.months = months;
  };

  Calendar.prototype.getDisabledDates = function getDisabledDates(disabledDates) {
    return disabledDates && disabledDates.map(function (date) {
      return format(parse(date), 'YYYY-MM-DD');
    });
  };

  Calendar.prototype.getDisplayOptions = function getDisplayOptions() {
    var displayOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.displayOptions;

    return Object.assign(this._displayOptions, defaultDisplayOptions, displayOptions);
  };

  Calendar.prototype.getLocale = function getLocale() {
    return Object.assign(this._locale, defaultLocale, this.props.locale);
  };

  Calendar.prototype.getTheme = function getTheme() {
    return Object.assign(this._theme, defaultTheme, this.props.theme);
  };

  Calendar.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props2 = this.props,
        className = _props2.className,
        passThrough = _props2.passThrough,
        DayComponent = _props2.DayComponent,
        disabledDays = _props2.disabledDays,
        displayDate = _props2.displayDate,
        height = _props2.height,
        HeaderComponent = _props2.HeaderComponent,
        rowHeight = _props2.rowHeight,
        scrollDate = _props2.scrollDate,
        selected = _props2.selected,
        tabIndex = _props2.tabIndex,
        width = _props2.width,
        YearsComponent = _props2.YearsComponent;

    var _getDisplayOptions = this.getDisplayOptions(),
        hideYearsOnSelect = _getDisplayOptions.hideYearsOnSelect,
        layout = _getDisplayOptions.layout,
        overscanMonthCount = _getDisplayOptions.overscanMonthCount,
        shouldHeaderAnimate = _getDisplayOptions.shouldHeaderAnimate,
        showHeader = _getDisplayOptions.showHeader,
        showMonthsForYears = _getDisplayOptions.showMonthsForYears,
        showOverlay = _getDisplayOptions.showOverlay,
        showTodayHelper = _getDisplayOptions.showTodayHelper,
        showWeekdays = _getDisplayOptions.showWeekdays;

    var _state = this.state,
        display = _state.display,
        isScrolling = _state.isScrolling,
        showToday = _state.showToday;

    var disabledDates = this.getDisabledDates(this.props.disabledDates);
    var locale = this.getLocale();
    var theme = this.getTheme();
    var today = this.today = startOfDay(new Date());

    return React.createElement(
      'div',
      _extends({
        tabIndex: tabIndex,
        className: classNames(className, styles.container.root, (_classNames = {}, _classNames[styles.container.landscape] = layout === 'landscape', _classNames)),
        style: { color: theme.textColor.default, width: width },
        'aria-label': 'Calendar',
        ref: function ref(node) {
          _this2.node = node;
        }
      }, passThrough.rootNode),
      showHeader && React.createElement(HeaderComponent, _extends({
        selected: selected,
        shouldAnimate: Boolean(shouldHeaderAnimate && display !== 'years'),
        layout: layout,
        theme: theme,
        locale: locale,
        scrollToDate: this.scrollToDate,
        setDisplay: this.setDisplay,
        dateFormat: locale.headerFormat,
        display: display,
        displayDate: displayDate
      }, passThrough.Header)),
      React.createElement(
        'div',
        { className: styles.container.wrapper },
        showWeekdays && React.createElement(Weekdays, { weekdays: locale.weekdays, weekStartsOn: locale.weekStartsOn, theme: theme }),
        React.createElement(
          'div',
          { className: styles.container.listWrapper },
          showTodayHelper && React.createElement(Today, {
            scrollToDate: this.scrollToDate,
            show: showToday,
            today: today,
            theme: theme,
            todayLabel: locale.todayLabel.long
          }),
          React.createElement(MonthList, {
            ref: function ref(instance) {
              _this2._MonthList = instance;
            },
            DayComponent: DayComponent,
            disabledDates: disabledDates,
            disabledDays: disabledDays,
            height: height,
            isScrolling: isScrolling,
            locale: locale,
            maxDate: this._maxDate,
            min: this._min,
            minDate: this._minDate,
            months: this.months,
            onScroll: this.handleScroll,
            overscanMonthCount: overscanMonthCount,
            passThrough: passThrough,
            theme: theme,
            today: today,
            rowHeight: rowHeight,
            selected: selected,
            scrollDate: scrollDate,
            showOverlay: showOverlay,
            width: width
          })
        ),
        display === 'years' && React.createElement(YearsComponent, _extends({
          ref: function ref(instance) {
            _this2._Years = instance;
          },
          height: height,
          hideOnSelect: hideYearsOnSelect,
          locale: locale,
          max: this._max,
          maxDate: this._maxDate,
          min: this._min,
          minDate: this._minDate,
          scrollToDate: this.scrollToDate,
          selected: selected,
          setDisplay: this.setDisplay,
          showMonths: showMonthsForYears,
          theme: theme,
          today: today,
          width: width,
          years: range(this._min.getFullYear(), this._max.getFullYear() + 1)
        }, passThrough.Years))
      )
    );
  };

  return Calendar;
}(Component);

export { Calendar as default };
process.env.NODE_ENV !== "production" ? Calendar.propTypes = {
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  DayComponent: PropTypes.func,
  disabledDates: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  disabledDays: PropTypes.arrayOf(PropTypes.number),
  display: PropTypes.oneOf(['years', 'days']),
  displayOptions: PropTypes.shape({
    hideYearsOnSelect: PropTypes.bool,
    layout: PropTypes.oneOf(['portrait', 'landscape']),
    overscanMonthCount: PropTypes.number,
    shouldHeaderAnimate: PropTypes.bool,
    showHeader: PropTypes.bool,
    showMonthsForYears: PropTypes.bool,
    showOverlay: PropTypes.bool,
    showTodayHelper: PropTypes.bool,
    showWeekdays: PropTypes.bool,
    todayHelperRowOffset: PropTypes.number
  }),
  height: PropTypes.number,
  keyboardSupport: PropTypes.bool,
  locale: PropTypes.shape({
    blank: PropTypes.string,
    headerFormat: PropTypes.string,
    todayLabel: PropTypes.shape({
      long: PropTypes.string,
      short: PropTypes.string
    }),
    weekdays: PropTypes.arrayOf(PropTypes.string),
    weekStartsOn: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6])
  }),
  max: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  min: PropTypes.instanceOf(Date),
  minDate: PropTypes.instanceOf(Date),
  onScroll: PropTypes.func,
  onScrollEnd: PropTypes.func,
  onSelect: PropTypes.func,
  rowHeight: PropTypes.number,
  tabIndex: PropTypes.number,
  theme: PropTypes.shape({
    floatingNav: PropTypes.shape({
      background: PropTypes.string,
      chevron: PropTypes.string,
      color: PropTypes.string
    }),
    headerColor: PropTypes.string,
    selectionColor: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    textColor: PropTypes.shape({
      active: PropTypes.string,
      default: PropTypes.string
    }),
    todayColor: PropTypes.string,
    weekdayColor: PropTypes.string
  }),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  YearsComponent: PropTypes.func
} : void 0;
;
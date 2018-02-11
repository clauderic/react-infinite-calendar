'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTinyVirtualList = require('react-tiny-virtual-list');

var _reactTinyVirtualList2 = _interopRequireDefault(_reactTinyVirtualList);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('../utils');

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _start_of_month = require('date-fns/start_of_month');

var _start_of_month2 = _interopRequireDefault(_start_of_month);

var _add_weeks = require('date-fns/add_weeks');

var _add_weeks2 = _interopRequireDefault(_add_weeks);

var _set_day = require('date-fns/set_day');

var _set_day2 = _interopRequireDefault(_set_day);

var _Month = require('../Month');

var _Month2 = _interopRequireDefault(_Month);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'root': 'Cal__MonthList__root',
  'scrolling': 'Cal__MonthList__scrolling'
};


var AVERAGE_ROWS_PER_MONTH = 5;

var MonthList = function (_PureComponent) {
  _inherits(MonthList, _PureComponent);

  function MonthList(props) {
    _classCallCheck(this, MonthList);

    var _this = _possibleConstructorReturn(this, _PureComponent.call(this));

    _this.memoize = function (param) {
      if (!this.cache[param]) {
        var weekStartsOn = this.props.locale.weekStartsOn;

        var _param$split = param.split(':'),
            year = _param$split[0],
            month = _param$split[1];

        var result = (0, _utils.getMonth)(year, month, weekStartsOn);
        this.cache[param] = result;
      }
      return this.cache[param];
    };

    _this._getRef = function (instance) {
      _this.VirtualList = instance;
    };

    _this.getMonthHeight = function (index) {
      if (!_this.monthHeights[index]) {
        var _this$props = _this.props,
            weekStartsOn = _this$props.locale.weekStartsOn,
            months = _this$props.months,
            rowHeight = _this$props.rowHeight;
        var _months$index = months[index],
            month = _months$index.month,
            year = _months$index.year;

        var weeks = (0, _utils.getWeeksInMonth)(month, year, weekStartsOn, index === months.length - 1);
        var height = weeks * rowHeight;
        _this.monthHeights[index] = height;
      }

      return _this.monthHeights[index];
    };

    _this.scrollToDate = function (date) {
      for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        rest[_key - 2] = arguments[_key];
      }

      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var offsetTop = _this.getDateOffset(date);
      _this.scrollTo.apply(_this, [offsetTop + offset].concat(rest));
    };

    _this.scrollTo = function () {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var shouldAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var onScrollEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils.emptyFn;

      var onComplete = function onComplete() {
        return setTimeout(function () {
          _this.scrollEl.style.overflowY = 'auto';
          onScrollEnd();
        });
      };

      // Interrupt iOS Momentum scroll
      _this.scrollEl.style.overflowY = 'hidden';

      if (shouldAnimate) {
        /* eslint-disable sort-keys */
        (0, _utils.animate)({
          fromValue: _this.scrollEl.scrollTop,
          toValue: scrollTop,
          onUpdate: function onUpdate(scrollTop, callback) {
            return _this.setState({ scrollTop: scrollTop }, callback);
          },
          onComplete: onComplete
        });
      } else {
        window.requestAnimationFrame(function () {
          _this.scrollEl.scrollTop = scrollTop;
          onComplete();
        });
      }
    };

    _this.renderMonth = function (_ref) {
      var index = _ref.index,
          style = _ref.style;
      var _this$props2 = _this.props,
          DayComponent = _this$props2.DayComponent,
          disabledDates = _this$props2.disabledDates,
          disabledDays = _this$props2.disabledDays,
          locale = _this$props2.locale,
          maxDate = _this$props2.maxDate,
          minDate = _this$props2.minDate,
          months = _this$props2.months,
          passThrough = _this$props2.passThrough,
          rowHeight = _this$props2.rowHeight,
          selected = _this$props2.selected,
          showOverlay = _this$props2.showOverlay,
          theme = _this$props2.theme,
          today = _this$props2.today;
      var _months$index2 = months[index],
          month = _months$index2.month,
          year = _months$index2.year;

      var key = year + ':' + month;

      var _this$memoize = _this.memoize(key),
          date = _this$memoize.date,
          rows = _this$memoize.rows;

      return _react2.default.createElement(_Month2.default, _extends({
        key: key,
        selected: selected,
        DayComponent: DayComponent,
        monthDate: date,
        disabledDates: disabledDates,
        disabledDays: disabledDays,
        maxDate: maxDate,
        minDate: minDate,
        rows: rows,
        rowHeight: rowHeight,
        isScrolling: false,
        showOverlay: showOverlay,
        today: today,
        theme: theme,
        style: style,
        locale: locale,
        passThrough: passThrough
      }, passThrough.Month));
    };

    var dateOffset = _this.getDateOffset.call({ props: props }, props.scrollDate);
    var viewportCenterOffset = (props.height - props.rowHeight / 2) / 2;

    _this.state = {
      scrollTop: Math.max(0, dateOffset - viewportCenterOffset)
    };

    _this.cache = {};
    _this.monthHeights = [];
    return _this;
  }

  MonthList.prototype.componentDidMount = function componentDidMount() {
    this.scrollEl = this.VirtualList.rootNode;
  };

  MonthList.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
    var scrollDate = _ref2.scrollDate;

    if (scrollDate !== this.props.scrollDate) {
      var dateOffset = this.getDateOffset(scrollDate);
      var viewportCenterOffset = (this.props.height - this.props.rowHeight / 2) / 2;

      this.setState({
        scrollTop: Math.max(0, dateOffset - viewportCenterOffset)
      });
    }
  };

  MonthList.prototype.getDateOffset = function getDateOffset(date) {
    var _props = this.props,
        min = _props.min,
        rowHeight = _props.rowHeight,
        weekStartsOn = _props.locale.weekStartsOn;

    var weeks = (0, _utils.getWeek)((0, _start_of_month2.default)(min), (0, _parse2.default)(date), weekStartsOn);

    return (weeks - 1) * rowHeight;
  };

  MonthList.prototype.getScrollDate = function getScrollDate() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var _props2 = this.props,
        min = _props2.min,
        weekStartsOn = _props2.locale.weekStartsOn,
        rowHeight = _props2.rowHeight;


    var scrollTop = this.scrollEl.scrollTop || this.state.scrollTop;
    var scrollOffset = scrollTop + offset;
    var weeks = Math.floor(scrollOffset / rowHeight);
    var date = (0, _add_weeks2.default)(new Date(min), weeks);
    return (0, _set_day2.default)(date, weekStartsOn);
  };

  MonthList.prototype.render = function render() {
    var _classNames;

    var _props3 = this.props,
        height = _props3.height,
        isScrolling = _props3.isScrolling,
        onScroll = _props3.onScroll,
        overscanMonthCount = _props3.overscanMonthCount,
        months = _props3.months,
        rowHeight = _props3.rowHeight,
        width = _props3.width;
    var scrollTop = this.state.scrollTop;


    return _react2.default.createElement(_reactTinyVirtualList2.default, {
      ref: this._getRef,
      width: width,
      height: height,
      itemCount: months.length,
      itemSize: this.getMonthHeight,
      estimatedItemSize: rowHeight * AVERAGE_ROWS_PER_MONTH,
      renderItem: this.renderMonth,
      onScroll: onScroll,
      scrollOffset: scrollTop,
      className: (0, _classnames2.default)(styles.root, (_classNames = {}, _classNames[styles.scrolling] = isScrolling, _classNames)),
      style: { lineHeight: rowHeight + 'px' },
      overscanCount: overscanMonthCount
    });
  };

  return MonthList;
}(_react.PureComponent);

exports.default = MonthList;
MonthList.propTypes = process.env.NODE_ENV !== "production" ? {
  disabledDates: _propTypes2.default.arrayOf(_propTypes2.default.string),
  disabledDays: _propTypes2.default.arrayOf(_propTypes2.default.number),
  height: _propTypes2.default.number,
  isScrolling: _propTypes2.default.bool,
  locale: _propTypes2.default.object,
  maxDate: _propTypes2.default.instanceOf(Date),
  min: _propTypes2.default.instanceOf(Date),
  minDate: _propTypes2.default.instanceOf(Date),
  months: _propTypes2.default.arrayOf(_propTypes2.default.object),
  onDaySelect: _propTypes2.default.func,
  onScroll: _propTypes2.default.func,
  overscanMonthCount: _propTypes2.default.number,
  rowHeight: _propTypes2.default.number,
  selectedDate: _propTypes2.default.instanceOf(Date),
  showOverlay: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  today: _propTypes2.default.instanceOf(Date),
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
} : {};
module.exports = exports['default'];
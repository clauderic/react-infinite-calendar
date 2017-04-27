'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('../utils');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _get_day = require('date-fns/get_day');

var _get_day2 = _interopRequireDefault(_get_day);

var _is_same_year = require('date-fns/is_same_year');

var _is_same_year2 = _interopRequireDefault(_is_same_year);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'rows': 'Cal__Month__rows',
  'row': 'Cal__Month__row',
  'partial': 'Cal__Month__partial',
  'label': 'Cal__Month__label',
  'partialFirstRow': 'Cal__Month__partialFirstRow'
};

var Month = function (_PureComponent) {
  _inherits(Month, _PureComponent);

  function Month() {
    _classCallCheck(this, Month);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Month.prototype.renderRows = function renderRows() {
    var _props = this.props,
        DayComponent = _props.DayComponent,
        disabledDates = _props.disabledDates,
        disabledDays = _props.disabledDays,
        monthDate = _props.monthDate,
        locale = _props.locale,
        maxDate = _props.maxDate,
        minDate = _props.minDate,
        rowHeight = _props.rowHeight,
        rows = _props.rows,
        selected = _props.selected,
        today = _props.today,
        theme = _props.theme,
        passThrough = _props.passThrough;

    var currentYear = today.getFullYear();
    var year = monthDate.getFullYear();
    var month = monthDate.getMonth();
    var monthShort = (0, _format2.default)(monthDate, 'MMM', { locale: locale.locale });
    var monthRows = [];
    var day = 0;
    var isDisabled = false;
    var isToday = false;
    var date = void 0,
        days = void 0,
        dow = void 0,
        row = void 0;

    // Used for faster comparisons
    var _today = (0, _format2.default)(today, 'YYYY-MM-DD');
    var _minDate = (0, _format2.default)(minDate, 'YYYY-MM-DD');
    var _maxDate = (0, _format2.default)(maxDate, 'YYYY-MM-DD');

    // Oh the things we do in the name of performance...
    for (var i = 0, len = rows.length; i < len; i++) {
      var _classNames;

      row = rows[i];
      days = [];
      dow = (0, _get_day2.default)(new Date(year, month, row[0]));

      for (var k = 0, _len = row.length; k < _len; k++) {
        day = row[k];

        date = (0, _utils.getDateString)(year, month, day);
        isToday = date === _today;

        isDisabled = minDate && date < _minDate || maxDate && date > _maxDate || disabledDays && disabledDays.length && disabledDays.indexOf(dow) !== -1 || disabledDates && disabledDates.length && disabledDates.indexOf(date) !== -1;

        days[k] = _react2.default.createElement(DayComponent, _extends({
          key: 'day-' + day,
          currentYear: currentYear,
          date: date,
          day: day,
          selected: selected,
          isDisabled: isDisabled,
          isToday: isToday,
          locale: locale,
          month: month,
          monthShort: monthShort,
          theme: theme,
          year: year
        }, passThrough.Day));

        dow += 1;
      }
      monthRows[i] = _react2.default.createElement(
        'ul',
        {
          key: 'Row-' + i,
          className: (0, _classnames2.default)(styles.row, (_classNames = {}, _classNames[styles.partial] = row.length !== 7, _classNames)),
          style: { height: rowHeight },
          role: 'row',
          'aria-label': 'Week ' + (i + 1)
        },
        days
      );
    }

    return monthRows;
  };

  Month.prototype.render = function render() {
    var _classNames2;

    var _props2 = this.props,
        locale = _props2.locale.locale,
        monthDate = _props2.monthDate,
        today = _props2.today,
        rows = _props2.rows,
        rowHeight = _props2.rowHeight,
        showOverlay = _props2.showOverlay,
        style = _props2.style,
        theme = _props2.theme;

    var dateFormat = (0, _is_same_year2.default)(monthDate, today) ? 'MMMM' : 'MMMM YYYY';

    return _react2.default.createElement(
      'div',
      { className: styles.root, style: _extends({}, style, { lineHeight: rowHeight + 'px' }) },
      _react2.default.createElement(
        'div',
        { className: styles.rows },
        this.renderRows(),
        showOverlay && _react2.default.createElement(
          'label',
          {
            className: (0, _classnames2.default)(styles.label, (_classNames2 = {}, _classNames2[styles.partialFirstRow] = rows[0].length !== 7, _classNames2)),
            style: { backgroundColor: theme.overlayColor }
          },
          _react2.default.createElement(
            'span',
            null,
            (0, _format2.default)(monthDate, dateFormat, { locale: locale })
          )
        )
      )
    );
  };

  return Month;
}(_react.PureComponent);

exports.default = Month;
module.exports = exports['default'];
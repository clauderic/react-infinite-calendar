var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { getDateString } from '../utils';
import format from 'date-fns/format';
import getDay from 'date-fns/get_day';
import isSameYear from 'date-fns/is_same_year';
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
    var monthShort = format(monthDate, 'MMM', { locale: locale.locale });
    var monthRows = [];
    var day = 0;
    var isDisabled = false;
    var isToday = false;
    var date = void 0,
        days = void 0,
        dow = void 0,
        row = void 0;

    // Used for faster comparisons
    var _today = format(today, 'YYYY-MM-DD');
    var _minDate = format(minDate, 'YYYY-MM-DD');
    var _maxDate = format(maxDate, 'YYYY-MM-DD');

    // Oh the things we do in the name of performance...
    for (var i = 0, len = rows.length; i < len; i++) {
      var _classNames;

      row = rows[i];
      days = [];
      dow = getDay(new Date(year, month, row[0]));

      for (var k = 0, _len = row.length; k < _len; k++) {
        day = row[k];

        date = getDateString(year, month, day);
        isToday = date === _today;

        isDisabled = minDate && date < _minDate || maxDate && date > _maxDate || disabledDays && disabledDays.length && disabledDays.indexOf(dow) !== -1 || disabledDates && disabledDates.length && disabledDates.indexOf(date) !== -1;

        days[k] = React.createElement(DayComponent, _extends({
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
      monthRows[i] = React.createElement(
        'ul',
        {
          key: 'Row-' + i,
          className: classNames(styles.row, (_classNames = {}, _classNames[styles.partial] = row.length !== 7, _classNames)),
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

    var dateFormat = isSameYear(monthDate, today) ? 'MMMM' : 'MMMM YYYY';

    return React.createElement(
      'div',
      { className: styles.root, style: _extends({}, style, { lineHeight: rowHeight + 'px' }) },
      React.createElement(
        'div',
        { className: styles.rows },
        this.renderRows(),
        showOverlay && React.createElement(
          'label',
          {
            className: classNames(styles.label, (_classNames2 = {}, _classNames2[styles.partialFirstRow] = rows[0].length !== 7, _classNames2)),
            style: { backgroundColor: theme.overlayColor }
          },
          React.createElement(
            'span',
            null,
            format(monthDate, dateFormat, { locale: locale })
          )
        )
      )
    );
  };

  return Month;
}(PureComponent);

export { Month as default };
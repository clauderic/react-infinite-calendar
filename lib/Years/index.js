'use strict';

exports.__esModule = true;
exports.default = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTinyVirtualList = require('react-tiny-virtual-list');

var _reactTinyVirtualList2 = _interopRequireDefault(_reactTinyVirtualList);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('../utils');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _is_after = require('date-fns/is_after');

var _is_after2 = _interopRequireDefault(_is_after);

var _is_before = require('date-fns/is_before');

var _is_before2 = _interopRequireDefault(_is_before);

var _is_same_month = require('date-fns/is_same_month');

var _is_same_month2 = _interopRequireDefault(_is_same_month);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  'root': 'Cal__Years__root',
  'list': 'Cal__Years__list',
  'center': 'Cal__Years__center',
  'year': 'Cal__Years__year',
  'withMonths': 'Cal__Years__withMonths',
  'currentMonth': 'Cal__Years__currentMonth',
  'selected': 'Cal__Years__selected',
  'disabled': 'Cal__Years__disabled',
  'active': 'Cal__Years__active',
  'currentYear': 'Cal__Years__currentYear',
  'first': 'Cal__Years__first',
  'last': 'Cal__Years__last'
};


var SPACING = 40;

var Years = (_temp = _class = function (_Component) {
  _inherits(Years, _Component);

  function Years() {
    _classCallCheck(this, Years);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Years.prototype.handleClick = function handleClick(date, e) {
    var _props = this.props,
        hideOnSelect = _props.hideOnSelect,
        onSelect = _props.onSelect,
        setDisplay = _props.setDisplay,
        scrollToDate = _props.scrollToDate;


    onSelect(date, e, function (date) {
      return scrollToDate(date);
    });

    if (hideOnSelect) {
      window.requestAnimationFrame(function () {
        return setDisplay('days');
      });
    }
  };

  Years.prototype.renderMonths = function renderMonths(year) {
    var _this2 = this;

    var _props2 = this.props,
        locale = _props2.locale.locale,
        selected = _props2.selected,
        theme = _props2.theme,
        today = _props2.today,
        min = _props2.min,
        max = _props2.max,
        minDate = _props2.minDate,
        maxDate = _props2.maxDate;

    var months = (0, _utils.getMonthsForYear)(year, selected.getDate());

    return _react2.default.createElement(
      'ol',
      null,
      months.map(function (date, index) {
        var _classNames;

        var isSelected = (0, _is_same_month2.default)(date, selected);
        var isCurrentMonth = (0, _is_same_month2.default)(date, today);
        var isDisabled = (0, _is_before2.default)(date, min) || (0, _is_before2.default)(date, minDate) || (0, _is_after2.default)(date, max) || (0, _is_after2.default)(date, maxDate);
        var style = Object.assign({}, isSelected && {
          backgroundColor: typeof theme.selectionColor === 'function' ? theme.selectionColor(date) : theme.selectionColor
        }, isCurrentMonth && {
          borderColor: theme.todayColor
        });

        return _react2.default.createElement(
          'li',
          {
            key: index,
            onClick: function onClick(e) {
              e.stopPropagation();

              if (!isDisabled) {
                _this2.handleClick(date, e);
              }
            },
            className: (0, _classnames2.default)(styles.month, (_classNames = {}, _classNames[styles.selected] = isSelected, _classNames[styles.currentMonth] = isCurrentMonth, _classNames[styles.disabled] = isDisabled, _classNames)),
            style: style,
            title: 'Set date to ' + (0, _format2.default)(date, 'MMMM Do, YYYY')
          },
          (0, _format2.default)(date, 'MMM', { locale: locale })
        );
      })
    );
  };

  Years.prototype.render = function render() {
    var _this3 = this;

    var _props3 = this.props,
        height = _props3.height,
        selected = _props3.selected,
        showMonths = _props3.showMonths,
        theme = _props3.theme,
        today = _props3.today,
        width = _props3.width;

    var currentYear = today.getFullYear();
    var years = this.props.years.slice(0, this.props.years.length);
    var selectedYearIndex = years.indexOf(selected.getFullYear());
    var rowHeight = showMonths ? 110 : 50;
    var heights = years.map(function (val, index) {
      return index === 0 || index === years.length - 1 ? rowHeight + SPACING : rowHeight;
    });
    var containerHeight = years.length * rowHeight < height + 50 ? years.length * rowHeight : height + 50;

    return _react2.default.createElement(
      'div',
      {
        className: styles.root,
        style: { color: theme.selectionColor, height: height + 50 }
      },
      _react2.default.createElement(_reactTinyVirtualList2.default, {
        ref: 'List',
        className: styles.list,
        width: width,
        height: containerHeight,
        itemCount: years.length,
        estimatedItemSize: rowHeight,
        itemSize: function itemSize(index) {
          return heights[index];
        },
        scrollToIndex: selectedYearIndex !== -1 ? selectedYearIndex : null,
        scrollToAlignment: 'center',
        renderItem: function renderItem(_ref) {
          var _classNames2;

          var index = _ref.index,
              style = _ref.style;

          var year = years[index];
          var isActive = index === selectedYearIndex;

          return _react2.default.createElement(
            'div',
            {
              key: index,
              className: (0, _classnames2.default)(styles.year, (_classNames2 = {}, _classNames2[styles.active] = !showMonths && isActive, _classNames2[styles.currentYear] = !showMonths && year === currentYear, _classNames2[styles.withMonths] = showMonths, _classNames2[styles.first] = index === 0, _classNames2[styles.last] = index === years.length - 1, _classNames2)),
              onClick: function onClick() {
                return _this3.handleClick(new Date(selected).setYear(year));
              },
              title: 'Set year to ' + year,
              'data-year': year,
              style: Object.assign({}, style, {
                color: typeof theme.selectionColor === 'function' ? theme.selectionColor(new Date(year, 0, 1)) : theme.selectionColor
              })
            },
            _react2.default.createElement(
              'label',
              null,
              _react2.default.createElement(
                'span',
                {
                  style: !showMonths && year === currentYear ? { borderColor: theme.todayColor } : null
                },
                year
              )
            ),
            showMonths && _this3.renderMonths(year)
          );
        }
      })
    );
  };

  return Years;
}(_react.Component), _class.defaultProps = {
  onSelect: _utils.emptyFn,
  showMonths: true
}, _temp);
exports.default = Years;
process.env.NODE_ENV !== "production" ? Years.propTypes = {
  height: _propTypes2.default.number,
  hideOnSelect: _propTypes2.default.bool,
  locale: _propTypes2.default.object,
  max: _propTypes2.default.object,
  maxDate: _propTypes2.default.object,
  min: _propTypes2.default.object,
  minDate: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  scrollToDate: _propTypes2.default.func,
  selectedYear: _propTypes2.default.number,
  setDisplay: _propTypes2.default.func,
  theme: _propTypes2.default.object,
  width: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  years: _propTypes2.default.array
} : void 0;
module.exports = exports['default'];
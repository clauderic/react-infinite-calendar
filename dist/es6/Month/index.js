import React, { Component } from 'react';
import classNames from 'classnames';
import Day from '../Day';
import Week from '../Week';
import moment from 'moment';
var style = {
	'root': 'Cal__Month__root',
	'row': 'Cal__Month__row',
	'partial': 'Cal__Month__partial',
	'label': 'Cal__Month__label',
	'partialFirstRow': 'Cal__Month__partialFirstRow'
};

var Month = function (_Component) {
	babelHelpers.inherits(Month, _Component);

	function Month() {
		var _Object$getPrototypeO;

		var _temp, _this, _ret;

		babelHelpers.classCallCheck(this, Month);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Month)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.scrollToToday = function () {
			var scrollToDate = _this.props.scrollToDate;

			scrollToDate(moment(), 0);
		}, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
	}

	babelHelpers.createClass(Month, [{
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
						days[0] = React.createElement(Week, {
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

					days[days.length] = React.createElement(Day, {
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
				monthRows[i] = React.createElement(
					'ul',
					{
						className: classNames(style.row, babelHelpers.defineProperty({}, style.partial, row.length !== 7)),
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


			return React.createElement(
				'div',
				{ className: style.root },
				React.createElement(
					'div',
					{ className: style.rows },
					this.renderRows()
				),
				showOverlay && React.createElement(
					'label',
					{ className: classNames(style.label, babelHelpers.defineProperty({}, style.partialFirstRow, rows[0].length !== 7)), style: theme && theme.overlayColor && { backgroundColor: theme.overlayColor } },
					React.createElement(
						'span',
						null,
						'' + displayDate.format('MMMM') + (!displayDate.isSame(today.date, 'year') ? ' ' + displayDate.year() : '')
					)
				)
			);
		}
	}]);
	return Month;
}(Component);

export default Month;
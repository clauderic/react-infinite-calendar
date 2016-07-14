import React, { Component } from 'react';
import classNames from 'classnames';
import Day from '../Day';
import Week from '../Week';
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
		babelHelpers.classCallCheck(this, Month);
		return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(Month).apply(this, arguments));
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
			var rowHeight = _props.rowHeight;
			var rows = _props.rows;
			var weeks = _props.weeks;
			var selectedDate = _props.selectedDate;
			var today = _props.today;
			var theme = _props.theme;
			var displaySelectionText = _props.displaySelectionText;

			var currentYear = today.date.year();
			var monthShort = displayDate.format('MMM');
			var monthRows = [];
			var day = 0;
			var isDisabled = false;
			var isSelected = false;
			var isToday = false;
			var row = void 0,
			    week = void 0,
			    date = void 0,
			    days = void 0;

			// Oh the things we do in the name of performance...
			for (var i = 0, len = rows.length; i < len; i++) {
				row = rows[i];
				days = [];

				for (var k = 0, _len = row.length; k < _len; k++) {
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
							handleDayClick: onDaySelect,
							isDisabled: isDisabled,
							isToday: isToday,
							isSelected: isSelected,
							locale: locale,
							monthShort: monthShort,
							theme: theme
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
						locale: locale,
						monthShort: monthShort,
						theme: theme,
						displaySelectionText: displaySelectionText
					});
				}
				monthRows[i] = React.createElement(
					'ul',
					{ className: classNames(style.row, babelHelpers.defineProperty({}, style.partial, row.length !== 7)), style: { height: rowHeight }, key: 'Row-' + i, role: 'row', 'aria-label': 'Week ' + (i + 1) },
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
			var week = _props2.week;
			var displaySelectionText = _props2.displaySelectionText;


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
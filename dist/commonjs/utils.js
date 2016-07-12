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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment-range');

var _scrollbarSize = require('dom-helpers/util/scrollbarSize');

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
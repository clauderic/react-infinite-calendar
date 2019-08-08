/*!
 * react-infinite-calendar v2.3.1 - https://github.com/clauderic/react-infinite-calendar
 * MIT Licensed
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["InfiniteCalendar"] = factory(require("react"), require("react-dom"));
	else
		root["InfiniteCalendar"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_91__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 92);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var getTimezoneOffsetInMilliseconds = __webpack_require__(31)
var isDate = __webpack_require__(22)

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone) * MILLISECONDS_IN_MINUTE
    } else {
      var fullTime = timestamp + time
      var fullTimeDate = new Date(fullTime)

      offset = getTimezoneOffsetInMilliseconds(fullTimeDate)

      // Adjust time when it's coming from DST
      var fullTimeDateNextDay = new Date(fullTime)
      fullTimeDateNextDay.setDate(fullTimeDate.getDate() + 1)
      var offsetDiff =
        getTimezoneOffsetInMilliseconds(fullTimeDateNextDay) -
        getTimezoneOffsetInMilliseconds(fullTimeDate)
      if (offsetDiff > 0) {
        offset += offsetDiff
      }
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withPropsOnChange__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withPropsOnChange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_withPropsOnChange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_util_scrollbarSize__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_util_scrollbarSize___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_util_scrollbarSize__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_get_days_in_month__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_get_days_in_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_get_days_in_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_get_day__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_get_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_get_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_is_after__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_is_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_is_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_is_before__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_is_before___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_is_before__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_is_same_day__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_is_same_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_is_same_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_start_of_day__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_start_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_start_of_day__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__animate__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__animate__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return keyCodes; });
/* harmony export (immutable) */ __webpack_exports__["f"] = getMonth;
/* harmony export (immutable) */ __webpack_exports__["i"] = getRenderedWeekRows;
/* unused harmony export getWeek */
/* harmony export (immutable) */ __webpack_exports__["g"] = getWeeksInMonth;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ScrollSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return scrollbarSize; });
/* harmony export (immutable) */ __webpack_exports__["b"] = emptyFn;
/* harmony export (immutable) */ __webpack_exports__["m"] = sanitizeDate;
/* harmony export (immutable) */ __webpack_exports__["j"] = getDateString;
/* harmony export (immutable) */ __webpack_exports__["l"] = getMonthsForYear;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withImmutableProps; });
/* harmony export (immutable) */ __webpack_exports__["d"] = debounce;
/* harmony export (immutable) */ __webpack_exports__["e"] = range;


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var keyCodes = {
  command: 91,
  control: 17,
  down: 40,
  enter: 13,
  escape: 27,
  left: 37,
  right: 39,
  shift: 16,
  up: 38
};

/**
 * Given a year and a month, returns the rows for that month to be iterated over
 * @param {Number} year - the year number
 * @param {Number} month - the index of the month
 * @param {Number} weekStartsOn - the index of the first day of the week (from 0 to 6)
 * @return {Object} - Returns the first day of the month and the rows of that month
 */
function getMonth(year, month, weekStartsOn) {
  var rows = [];
  var monthDate = new Date(year, month, 1);
  var daysInMonth = __WEBPACK_IMPORTED_MODULE_2_date_fns_get_days_in_month___default()(monthDate);
  var weekEndsOn = getEndOfWeekIndex(weekStartsOn);

  var dow = __WEBPACK_IMPORTED_MODULE_3_date_fns_get_day___default()(new Date(year, month, 1));
  var week = 0;

  for (var day = 1; day <= daysInMonth; day++) {
    if (!rows[week]) {
      rows[week] = [];
    }

    rows[week].push(day);

    if (dow === weekEndsOn) {
      week++;
    }

    dow = dow < 6 ? dow + 1 : 0;
  }

  return {
    date: monthDate,
    rows: rows
  };
}

function isInCurrentMonth(controlVar, elimVar) {
  if (controlVar.getFullYear() !== elimVar.getFullYear()) return false;

  return controlVar.getMonth() === elimVar.getMonth();
}

function getRenderedWeekRows(start, date, weekStartsOn) {
  var startDate = typeof start === 'number' ? new Date(start, 0, 1) // 1st Jan of the Year
  : start;

  var renderedWeeks = 0;

  // Loop from start to date in monthly steps
  for (var d = startDate; !isInCurrentMonth(d, date); d.setMonth(d.getMonth() + 1)) {
    var numOfWeeks = getWeeksInMonth(d.getMonth(), d.getFullYear(), weekStartsOn);

    renderedWeeks += numOfWeeks;
  }

  // The loop does not consider the weeks in the started month, so
  // we add those by hand
  var startedMonthWeeks = Math.floor(date.getDate() / 7);

  return renderedWeeks + startedMonthWeeks + 1;
}

function getWeek(yearStart, date, weekStartsOn) {
  var yearStartDate = typeof yearStart === 'number' ? new Date(yearStart, 0, 1) // 1st Jan of the Year
  : yearStart;

  return Math.ceil((Math.round((date - yearStartDate) / (60 * 60 * 24 * 1000)) + yearStartDate.getDay() + 1 - weekStartsOn) / 7);
}

/**
 * Get the number of weeks in a given month to be able to calculate the height of that month
 * @param {Number} year - the year number
 * @param {Number} month - the index of the month
 * @param {Number} weekStartsOn - the index of the first day of the week (from 0 to 6)
 * @return {Number} - Returns the number of weeks for the given month
 */
function getWeeksInMonth(month) {
  var year = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date().getFullYear();
  var weekStartsOn = arguments[2];
  var isLastDisplayedMonth = arguments[3];

  var firstOfMonth = new Date(year, month, 1);
  var firstWeekNumber = getWeek(year, firstOfMonth, weekStartsOn);

  var lastOfMonth = new Date(year, month + 1, 0); // Last date of the Month
  var lastWeekNumber = getWeek(year, lastOfMonth, weekStartsOn);

  var rowCount = lastWeekNumber - firstWeekNumber;

  // We also want to include started weeks and the month inidcator
  return rowCount + 2;
}

/**
 * Helper to find out what day the week ends on given the localized start of the week
 * @param {Number} weekStartsOn - the index of the first day of the week (from 0 to 6)
 * @return {Number} - Returns the index of the day the week ends on
 */
function getEndOfWeekIndex(weekStartsOn) {
  var weekEndsOn = weekStartsOn === 0 ? 6 : weekStartsOn - 1;

  return weekEndsOn;
}

var ScrollSpeed = function () {
  function ScrollSpeed() {
    var _this = this;

    _classCallCheck(this, ScrollSpeed);

    this.clear = function () {
      _this.lastPosition = null;
      _this.delta = 0;
    };
  }

  ScrollSpeed.prototype.getScrollSpeed = function getScrollSpeed(scrollOffset) {
    if (this.lastPosition != null) {
      this.delta = scrollOffset - this.lastPosition;
    }
    this.lastPosition = scrollOffset;

    clearTimeout(this._timeout);
    this._timeout = setTimeout(this.clear, 50);

    return this.delta;
  };

  return ScrollSpeed;
}();

var scrollbarSize = __WEBPACK_IMPORTED_MODULE_1_dom_helpers_util_scrollbarSize___default()();

function emptyFn() {
  /* no-op */
}

function sanitizeDate(date, _ref) {
  var _ref$disabledDates = _ref.disabledDates,
      disabledDates = _ref$disabledDates === undefined ? [] : _ref$disabledDates,
      _ref$disabledDays = _ref.disabledDays,
      disabledDays = _ref$disabledDays === undefined ? [] : _ref$disabledDays,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate;

  // Selected date should not be disabled or outside the selectable range
  if (!date || disabledDates.some(function (disabledDate) {
    return __WEBPACK_IMPORTED_MODULE_6_date_fns_is_same_day___default()(disabledDate, date);
  }) || disabledDays && disabledDays.indexOf(__WEBPACK_IMPORTED_MODULE_3_date_fns_get_day___default()(date)) !== -1 || minDate && __WEBPACK_IMPORTED_MODULE_5_date_fns_is_before___default()(date, __WEBPACK_IMPORTED_MODULE_8_date_fns_start_of_day___default()(minDate)) || maxDate && __WEBPACK_IMPORTED_MODULE_4_date_fns_is_after___default()(date, __WEBPACK_IMPORTED_MODULE_7_date_fns_end_of_day___default()(maxDate))) {
    return null;
  }

  return date;
}

function getDateString(year, month, date) {
  return year + '-' + ('0' + (month + 1)).slice(-2) + '-' + ('0' + date).slice(-2);
}

function getMonthsForYear(year) {
  var day = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  return Array.apply(null, Array(12)).map(function (val, index) {
    return new Date(year, index, day);
  });
}

var withImmutableProps = function withImmutableProps(props) {
  return __WEBPACK_IMPORTED_MODULE_0_recompose_withPropsOnChange___default()(function () {
    return false;
  }, props);
};

function debounce(callback, wait) {
  var _this2 = this;

  var timeout = null;
  var callbackArgs = null;

  var later = function later() {
    return callback.apply(_this2, callbackArgs);
  };

  return function () {
    callbackArgs = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

function range(start, stop) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var length = Math.max(Math.ceil((stop - start) / step), 0);
  var range = Array(length);

  for (var i = 0; i < length; i++, start += step) {
    range[i] = start;
  }

  return range;
};



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(25);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(75)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
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
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
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
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(35)
var getISOWeek = __webpack_require__(37)
var getISOYear = __webpack_require__(21)
var parse = __webpack_require__(0)
var isValid = __webpack_require__(40)
var enLocale = __webpack_require__(44)

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var createHelper = function createHelper(func, helperName) {
  var setDisplayName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var noArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if ("development" !== 'production' && setDisplayName) {
    var _ret = function () {
      /* eslint-disable global-require */
      var wrapDisplayName = __webpack_require__(89).default;
      /* eslint-enable global-require */

      if (noArgs) {
        return {
          v: function v(BaseComponent) {
            var Component = func(BaseComponent);
            Component.displayName = wrapDisplayName(BaseComponent, helperName);
            return Component;
          }
        };
      }

      return {
        v: function v() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return function (BaseComponent) {
            var Component = func.apply(undefined, args)(BaseComponent);
            Component.displayName = wrapDisplayName(BaseComponent, helperName);
            return Component;
          };
        }
      };
    }();

    if (typeof _ret === "object") return _ret.v;
  }

  return func;
};

exports.default = createHelper;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_defaultProps__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_defaultProps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_defaultProps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_defaultDisplayOptions__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_defaultDisplayOptions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__utils_defaultDisplayOptions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_defaultLocale__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_defaultLocale___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__utils_defaultLocale__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_defaultTheme__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_defaultTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__utils_defaultTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Today__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Header__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__MonthList__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Weekdays__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Years__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Day__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_parse__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_date_fns_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_day__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_day__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return withDefaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Calendar; });


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class,
    _temp,
    _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Calendar/index.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



















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

var withDefaultProps = __WEBPACK_IMPORTED_MODULE_0_recompose_defaultProps___default()({
  autoFocus: true,
  DayComponent: __WEBPACK_IMPORTED_MODULE_13__Day__["a" /* default */],
  display: 'days',
  displayOptions: {
    showHeader: false,
    showOverlay: false,
    showTodayHelper: false
  },
  HeaderComponent: __WEBPACK_IMPORTED_MODULE_9__Header__["a" /* default */],
  height: 500,
  keyboardSupport: true,
  max: new Date(2050, 11, 31),
  maxDate: new Date(2050, 11, 31),
  min: new Date(1980, 0, 1),
  minDate: new Date(1980, 0, 1),
  onHighlightedDateChange: __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* emptyFn */],
  onScroll: __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* emptyFn */],
  onScrollEnd: __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* emptyFn */],
  onSelect: __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* emptyFn */],
  passThrough: {},
  rowHeight: 35,
  tabIndex: 1,
  width: 400,
  YearsComponent: __WEBPACK_IMPORTED_MODULE_12__Years__["a" /* default */]
});

var Calendar = (_temp = _class = function (_Component) {
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

    _this.getScrollSpeed = new __WEBPACK_IMPORTED_MODULE_4__utils__["c" /* ScrollSpeed */]().getScrollSpeed;

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

    _this.handleScrollEnd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["d" /* debounce */])(function () {
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
        if (showToday !== __WEBPACK_IMPORTED_MODULE_8__Today__["a" /* DIRECTION_UP */]) newState = __WEBPACK_IMPORTED_MODULE_8__Today__["a" /* DIRECTION_UP */];
      }
      // Today is below the fold
      else if (scrollTop <= _this._todayOffset - height / 2 - rowHeight * (todayHelperRowOffset + 1)) {
          if (showToday !== __WEBPACK_IMPORTED_MODULE_8__Today__["b" /* DIRECTION_DOWN */]) newState = __WEBPACK_IMPORTED_MODULE_8__Today__["b" /* DIRECTION_DOWN */];
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

    this._min = __WEBPACK_IMPORTED_MODULE_14_date_fns_parse___default()(props.min);
    this._max = __WEBPACK_IMPORTED_MODULE_14_date_fns_parse___default()(props.max);
    this._minDate = __WEBPACK_IMPORTED_MODULE_14_date_fns_parse___default()(props.minDate);
    this._maxDate = __WEBPACK_IMPORTED_MODULE_14_date_fns_parse___default()(props.maxDate);

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
      return __WEBPACK_IMPORTED_MODULE_15_date_fns_format___default()(__WEBPACK_IMPORTED_MODULE_14_date_fns_parse___default()(date), 'YYYY-MM-DD');
    });
  };

  Calendar.prototype.getDisplayOptions = function getDisplayOptions() {
    var displayOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.displayOptions;

    return Object.assign(this._displayOptions, __WEBPACK_IMPORTED_MODULE_5__utils_defaultDisplayOptions___default.a, displayOptions);
  };

  Calendar.prototype.getLocale = function getLocale() {
    return Object.assign(this._locale, __WEBPACK_IMPORTED_MODULE_6__utils_defaultLocale___default.a, this.props.locale);
  };

  Calendar.prototype.getTheme = function getTheme() {
    return Object.assign(this._theme, __WEBPACK_IMPORTED_MODULE_7__utils_defaultTheme___default.a, this.props.theme);
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
    var today = this.today = __WEBPACK_IMPORTED_MODULE_16_date_fns_start_of_day___default()(new Date());

    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'div',
      _extends({
        tabIndex: tabIndex,
        className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, styles.container.root, (_classNames = {}, _classNames[styles.container.landscape] = layout === 'landscape', _classNames)),
        style: { color: theme.textColor.default, width: width },
        'aria-label': 'Calendar',
        ref: function ref(node) {
          _this2.node = node;
        }
      }, passThrough.rootNode, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        __self: this
      }),
      showHeader && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(HeaderComponent, _extends({
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
      }, passThrough.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      })),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        { className: styles.container.wrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        },
        showWeekdays && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__Weekdays__["a" /* default */], { weekdays: locale.weekdays, weekStartsOn: locale.weekStartsOn, theme: theme, __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { className: styles.container.listWrapper, __source: {
              fileName: _jsxFileName,
              lineNumber: 336
            },
            __self: this
          },
          showTodayHelper && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Today__["c" /* default */], {
            scrollToDate: this.scrollToDate,
            show: showToday,
            today: today,
            theme: theme,
            todayLabel: locale.todayLabel.long,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 338
            },
            __self: this
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__MonthList__["a" /* default */], {
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
            width: width,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 346
            },
            __self: this
          })
        ),
        display === 'years' && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(YearsComponent, _extends({
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
          years: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["e" /* range */])(this._min.getFullYear(), this._max.getFullYear() + 1)
        }, passThrough.Years, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 373
          },
          __self: this
        }))
      )
    );
  };

  return Calendar;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.propTypes = {
  autoFocus: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
  DayComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  disabledDates: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date)),
  disabledDays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number),
  display: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['years', 'days']),
  displayOptions: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    hideYearsOnSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    layout: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['portrait', 'landscape']),
    overscanMonthCount: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
    shouldHeaderAnimate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    showHeader: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    showMonthsForYears: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    showOverlay: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    showTodayHelper: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    showWeekdays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
    todayHelperRowOffset: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number
  }),
  height: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  keyboardSupport: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  locale: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    blank: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    headerFormat: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    todayLabel: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      long: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
      short: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
    }),
    weekdays: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string),
    weekStartsOn: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf([0, 1, 2, 3, 4, 5, 6])
  }),
  max: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  maxDate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  min: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  minDate: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(Date),
  onScroll: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onScrollEnd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  onSelect: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,
  rowHeight: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  tabIndex: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,
  theme: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    floatingNav: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      background: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
      chevron: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
      color: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
    }),
    headerColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    selectionColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func]),
    textColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
      active: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
      default: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
    }),
    todayColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string,
    weekdayColor: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
  }),
  width: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number]),
  YearsComponent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
}, _temp);

;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createEagerElementUtil = __webpack_require__(86);

var _createEagerElementUtil2 = _interopRequireDefault(_createEagerElementUtil);

var _isReferentiallyTransparentFunctionComponent = __webpack_require__(83);

var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(_isReferentiallyTransparentFunctionComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}

module.exports = isBefore


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createHelper = __webpack_require__(6);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _mapProps = __webpack_require__(84);

var _mapProps2 = _interopRequireDefault(_mapProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withProps = function withProps(input) {
  return (0, _mapProps2.default)(function (props) {
    return _extends({}, props, typeof input === 'function' ? input(props) : input);
  });
};

exports.default = (0, _createHelper2.default)(withProps, 'withProps');

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _pick = __webpack_require__(87);

var _pick2 = _interopRequireDefault(_pick);

var _shallowEqual = __webpack_require__(85);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _createHelper = __webpack_require__(6);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(8);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withPropsOnChange = function withPropsOnChange(shouldMapOrKeys, propsMapper) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    var shouldMap = typeof shouldMapOrKeys === 'function' ? shouldMapOrKeys : function (props, nextProps) {
      return !(0, _shallowEqual2.default)((0, _pick2.default)(props, shouldMapOrKeys), (0, _pick2.default)(nextProps, shouldMapOrKeys));
    };

    return function (_Component) {
      _inherits(_class2, _Component);

      function _class2() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.computedProps = propsMapper(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
      }

      _class2.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (shouldMap(this.props, nextProps)) {
          this.computedProps = propsMapper(nextProps);
        }
      };

      _class2.prototype.render = function render() {
        return factory(_extends({}, this.props, this.computedProps));
      };

      return _class2;
    }(_react.Component);
  };
};

exports.default = (0, _createHelper2.default)(withPropsOnChange, 'withPropsOnChange');

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _createHelper = __webpack_require__(6);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(8);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withState = function withState(stateName, stateUpdaterName, initialState) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return function (_Component) {
      _inherits(_class2, _Component);

      function _class2() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
          stateValue: typeof initialState === 'function' ? initialState(_this.props) : initialState
        }, _this.updateStateValue = function (updateFn, callback) {
          return _this.setState(function (_ref) {
            var stateValue = _ref.stateValue;
            return {
              stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
            };
          }, callback);
        }, _temp), _possibleConstructorReturn(_this, _ret);
      }

      _class2.prototype.render = function render() {
        var _extends2;

        return factory(_extends({}, this.props, (_extends2 = {}, _extends2[stateName] = this.state.stateValue, _extends2[stateUpdaterName] = this.updateStateValue, _extends2)));
      };

      return _class2;
    }(_react.Component);
  };
};

exports.default = (0, _createHelper2.default)(withState, 'withState');

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(47)

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_CSSTransitionGroup__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_CSSTransitionGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transition_group_CSSTransitionGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_parse__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_format__);
/* harmony export (immutable) */ __webpack_exports__["a"] = defaultSelectionRenderer;
var _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Header/defaultSelectionRenderer.js';





var styles = {
  'root': 'Cal__Header__root',
  'landscape': 'Cal__Header__landscape',
  'dateWrapper': 'Cal__Header__dateWrapper',
  'day': 'Cal__Header__day',
  'wrapper': 'Cal__Header__wrapper',
  'blank': 'Cal__Header__blank',
  'active': 'Cal__Header__active',
  'year': 'Cal__Header__year',
  'date': 'Cal__Header__date',
  'range': 'Cal__Header__range'
};
var animation = {
  'enter': 'Cal__Animation__enter',
  'enterActive': 'Cal__Animation__enterActive',
  'leave': 'Cal__Animation__leave',
  'leaveActive': 'Cal__Animation__leaveActive'
};


function defaultSelectionRenderer(value, _ref) {
  var _this = this;

  var display = _ref.display,
      key = _ref.key,
      locale = _ref.locale.locale,
      dateFormat = _ref.dateFormat,
      onYearClick = _ref.onYearClick,
      scrollToDate = _ref.scrollToDate,
      setDisplay = _ref.setDisplay,
      shouldAnimate = _ref.shouldAnimate;

  var date = __WEBPACK_IMPORTED_MODULE_3_date_fns_parse___default()(value);
  var values = date && [{
    active: display === 'years',
    handleClick: function handleClick(e) {
      onYearClick(date, e, key);
      setDisplay('years');
    },
    item: 'year',
    title: display === 'days' ? 'Change year' : null,
    value: date.getFullYear()
  }, {
    active: display === 'days',
    handleClick: function handleClick(e) {
      if (display !== 'days') {
        setDisplay('days');
      } else if (date) {
        scrollToDate(date, -40, true);
      }
    },
    item: 'day',
    title: display === 'days' ? 'Scroll to ' + __WEBPACK_IMPORTED_MODULE_4_date_fns_format___default()(date, dateFormat, { locale: locale }) : null,
    value: __WEBPACK_IMPORTED_MODULE_4_date_fns_format___default()(date, dateFormat, { locale: locale })
  }];

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      key: key,
      className: styles.wrapper,
      'aria-label': __WEBPACK_IMPORTED_MODULE_4_date_fns_format___default()(date, dateFormat + ' YYYY', { locale: locale }),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    },
    values.map(function (_ref2) {
      var _classNames;

      var handleClick = _ref2.handleClick,
          item = _ref2.item,
          key = _ref2.key,
          value = _ref2.value,
          active = _ref2.active,
          title = _ref2.title;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          key: item,
          className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(styles.dateWrapper, styles[item], (_classNames = {}, _classNames[styles.active] = active, _classNames)),
          title: title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: _this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_transition_group_CSSTransitionGroup___default.a,
          {
            transitionName: animation,
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250,
            transitionEnter: shouldAnimate,
            transitionLeave: shouldAnimate,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: _this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'span',
            {
              key: item + '-' + value,
              className: styles.date,
              'aria-hidden': true,
              onClick: handleClick,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              },
              __self: _this
            },
            value
          )
        )
      );
    })
  );
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var startOfISOWeek = __webpack_require__(17)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withState__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_withState__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_withProps__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_withProps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_withProps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5____ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_is_before__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Header_withRange__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_parse__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_date_fns_parse__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EVENT_TYPE; });
/* unused harmony export enhanceDay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withRange; });





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var styles = {
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
};


var isTouchDevice = false;

var EVENT_TYPE = {
  END: 3,
  HOVER: 2,
  START: 1
};

// Enhance Day component to display selected state based on an array of selected dates
var enhanceDay = __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange___default()(['selected'], function (_ref) {
  var _classNames;

  var date = _ref.date,
      selected = _ref.selected,
      theme = _ref.theme;

  var isSelected = date >= selected.start && date <= selected.end;
  var isStart = date === selected.start;
  var isEnd = date === selected.end;
  var isRange = !(isStart && isEnd);
  var style = isRange && (isStart || isEnd) && { backgroundColor: theme.accentColor, color: '#FFF' };

  return {
    className: isSelected && isRange && __WEBPACK_IMPORTED_MODULE_4_classnames___default()(styles.range, (_classNames = {}, _classNames[styles.start] = isStart, _classNames[styles.betweenRange] = !isStart && !isEnd, _classNames[styles.end] = isEnd, _classNames)),
    isSelected: isSelected,
    selectionStyle: style
  };
});

// Enhancer to handle selecting and displaying multiple dates
var withRange = __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_5____["b" /* withDefaultProps */], __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default()('scrollDate', 'setScrollDate', getInitialDate), __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default()('displayKey', 'setDisplayKey', getInitialDate), __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default()('selectionStart', 'setSelectionStart', null), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* withImmutableProps */])(function (_ref2) {
  var DayComponent = _ref2.DayComponent,
      HeaderComponent = _ref2.HeaderComponent,
      YearsComponent = _ref2.YearsComponent;
  return {
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__Header_withRange__["a" /* default */])(HeaderComponent)
  };
}), __WEBPACK_IMPORTED_MODULE_2_recompose_withProps___default()(function (_ref3) {
  var displayKey = _ref3.displayKey,
      passThrough = _ref3.passThrough,
      selected = _ref3.selected,
      setDisplayKey = _ref3.setDisplayKey,
      props = _objectWithoutProperties(_ref3, ['displayKey', 'passThrough', 'selected', 'setDisplayKey']);

  return {
    /* eslint-disable sort-keys */
    passThrough: _extends({}, passThrough, {
      Day: {
        onClick: function onClick(date) {
          return handleSelect(date, _extends({ selected: selected }, props));
        },
        handlers: {
          onMouseOver: !isTouchDevice && props.selectionStart ? function (e) {
            return handleMouseOver(e, _extends({ selected: selected }, props));
          } : null
        }
      },
      Years: {
        selected: selected && selected[displayKey],
        onSelect: function onSelect(date) {
          return handleYearSelect(date, _extends({ displayKey: displayKey, selected: selected }, props));
        }
      },
      Header: {
        onYearClick: function onYearClick(date, e, key) {
          return setDisplayKey(key || 'start');
        }
      }
    }),
    selected: {
      start: selected && __WEBPACK_IMPORTED_MODULE_9_date_fns_format___default()(selected.start, 'YYYY-MM-DD'),
      end: selected && __WEBPACK_IMPORTED_MODULE_9_date_fns_format___default()(selected.end, 'YYYY-MM-DD')
    }
  };
}));


function getSortedSelection(_ref4) {
  var start = _ref4.start,
      end = _ref4.end;

  return __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before___default()(start, end) ? { start: start, end: end } : { start: end, end: start };
}

function handleSelect(date, _ref5) {
  var onSelect = _ref5.onSelect,
      selected = _ref5.selected,
      selectionStart = _ref5.selectionStart,
      setSelectionStart = _ref5.setSelectionStart;

  if (selectionStart) {
    onSelect(_extends({
      eventType: EVENT_TYPE.END
    }, getSortedSelection({
      start: selectionStart,
      end: date
    })));
    setSelectionStart(null);
  } else {
    onSelect({ eventType: EVENT_TYPE.START, start: date, end: date });
    setSelectionStart(date);
  }
}

function handleMouseOver(e, _ref6) {
  var onSelect = _ref6.onSelect,
      selectionStart = _ref6.selectionStart;

  var dateStr = e.target.getAttribute('data-date');
  var date = dateStr && __WEBPACK_IMPORTED_MODULE_10_date_fns_parse___default()(dateStr);

  if (!date) {
    return;
  }

  onSelect(_extends({
    eventType: EVENT_TYPE.HOVER
  }, getSortedSelection({
    start: selectionStart,
    end: date
  })));
}

function handleYearSelect(date, _ref7) {
  var _Object$assign;

  var displayKey = _ref7.displayKey,
      onSelect = _ref7.onSelect,
      selected = _ref7.selected,
      setScrollDate = _ref7.setScrollDate;


  setScrollDate(date);
  onSelect(getSortedSelection(Object.assign({}, selected, (_Object$assign = {}, _Object$assign[displayKey] = __WEBPACK_IMPORTED_MODULE_10_date_fns_parse___default()(date), _Object$assign))));
}

function getInitialDate(_ref8) {
  var selected = _ref8.selected;

  return selected && selected.start || new Date();
}

if (typeof window !== 'undefined') {
  window.addEventListener('touchstart', function onTouch() {
    isTouchDevice = true;

    window.removeEventListener('touchstart', onTouch, false);
  });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = __webpack_require__(76);
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* unused harmony export ScrollDirection */



/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var ALIGNMENT;
(function (ALIGNMENT) {
    ALIGNMENT["AUTO"] = "auto";
    ALIGNMENT["START"] = "start";
    ALIGNMENT["CENTER"] = "center";
    ALIGNMENT["END"] = "end";
})(ALIGNMENT || (ALIGNMENT = {}));
var DIRECTION;
(function (DIRECTION) {
    DIRECTION["HORIZONTAL"] = "horizontal";
    DIRECTION["VERTICAL"] = "vertical";
})(DIRECTION || (DIRECTION = {}));
var SCROLL_CHANGE_REASON;
(function (SCROLL_CHANGE_REASON) {
    SCROLL_CHANGE_REASON["OBSERVED"] = "observed";
    SCROLL_CHANGE_REASON["REQUESTED"] = "requested";
})(SCROLL_CHANGE_REASON || (SCROLL_CHANGE_REASON = {}));
var scrollProp = (_a = {}, _a[DIRECTION.VERTICAL] = 'scrollTop', _a[DIRECTION.HORIZONTAL] = 'scrollLeft', _a);
var sizeProp = (_b = {}, _b[DIRECTION.VERTICAL] = 'height', _b[DIRECTION.HORIZONTAL] = 'width', _b);
var positionProp = (_c = {}, _c[DIRECTION.VERTICAL] = 'top', _c[DIRECTION.HORIZONTAL] = 'left', _c);
var marginProp = (_d = {}, _d[DIRECTION.VERTICAL] = 'marginTop', _d[DIRECTION.HORIZONTAL] = 'marginLeft', _d);
var oppositeMarginProp = (_e = {}, _e[DIRECTION.VERTICAL] = 'marginBottom', _e[DIRECTION.HORIZONTAL] = 'marginRight', _e);
var _a;
var _b;
var _c;
var _d;
var _e;

/* Forked from react-virtualized 💖 */
var SizeAndPositionManager = /** @class */function () {
    function SizeAndPositionManager(_a) {
        var itemCount = _a.itemCount,
            itemSizeGetter = _a.itemSizeGetter,
            estimatedItemSize = _a.estimatedItemSize;
        this.itemSizeGetter = itemSizeGetter;
        this.itemCount = itemCount;
        this.estimatedItemSize = estimatedItemSize;
        // Cache of size and position data for items, mapped by item index.
        this.itemSizeAndPositionData = {};
        // Measurements for items up to this index can be trusted; items afterward should be estimated.
        this.lastMeasuredIndex = -1;
    }
    SizeAndPositionManager.prototype.updateConfig = function (_a) {
        var itemCount = _a.itemCount,
            itemSizeGetter = _a.itemSizeGetter,
            estimatedItemSize = _a.estimatedItemSize;
        if (itemCount != null) {
            this.itemCount = itemCount;
        }
        if (estimatedItemSize != null) {
            this.estimatedItemSize = estimatedItemSize;
        }
        if (itemSizeGetter != null) {
            this.itemSizeGetter = itemSizeGetter;
        }
    };
    SizeAndPositionManager.prototype.getLastMeasuredIndex = function () {
        return this.lastMeasuredIndex;
    };
    /**
     * This method returns the size and position for the item at the specified index.
     * It just-in-time calculates (or used cached values) for items leading up to the index.
     */
    SizeAndPositionManager.prototype.getSizeAndPositionForIndex = function (index) {
        if (index < 0 || index >= this.itemCount) {
            throw Error("Requested index " + index + " is outside of range 0.." + this.itemCount);
        }
        if (index > this.lastMeasuredIndex) {
            var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
            var offset = lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size;
            for (var i = this.lastMeasuredIndex + 1; i <= index; i++) {
                var size = this.itemSizeGetter(i);
                if (size == null || isNaN(size)) {
                    throw Error("Invalid size returned for index " + i + " of value " + size);
                }
                this.itemSizeAndPositionData[i] = {
                    offset: offset,
                    size: size
                };
                offset += size;
            }
            this.lastMeasuredIndex = index;
        }
        return this.itemSizeAndPositionData[index];
    };
    SizeAndPositionManager.prototype.getSizeAndPositionOfLastMeasuredItem = function () {
        return this.lastMeasuredIndex >= 0 ? this.itemSizeAndPositionData[this.lastMeasuredIndex] : { offset: 0, size: 0 };
    };
    /**
     * Total size of all items being measured.
     * This value will be completedly estimated initially.
     * As items as measured the estimate will be updated.
     */
    SizeAndPositionManager.prototype.getTotalSize = function () {
        var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
        return lastMeasuredSizeAndPosition.offset + lastMeasuredSizeAndPosition.size + (this.itemCount - this.lastMeasuredIndex - 1) * this.estimatedItemSize;
    };
    /**
     * Determines a new offset that ensures a certain item is visible, given the alignment.
     *
     * @param align Desired alignment within container; one of "start" (default), "center", or "end"
     * @param containerSize Size (width or height) of the container viewport
     * @return Offset to use to ensure the specified item is visible
     */
    SizeAndPositionManager.prototype.getUpdatedOffsetForIndex = function (_a) {
        var _b = _a.align,
            align = _b === void 0 ? ALIGNMENT.START : _b,
            containerSize = _a.containerSize,
            currentOffset = _a.currentOffset,
            targetIndex = _a.targetIndex;
        if (containerSize <= 0) {
            return 0;
        }
        var datum = this.getSizeAndPositionForIndex(targetIndex);
        var maxOffset = datum.offset;
        var minOffset = maxOffset - containerSize + datum.size;
        var idealOffset;
        switch (align) {
            case ALIGNMENT.END:
                idealOffset = minOffset;
                break;
            case ALIGNMENT.CENTER:
                idealOffset = maxOffset - (containerSize - datum.size) / 2;
                break;
            case ALIGNMENT.START:
                idealOffset = maxOffset;
                break;
            default:
                idealOffset = Math.max(minOffset, Math.min(maxOffset, currentOffset));
        }
        var totalSize = this.getTotalSize();
        return Math.max(0, Math.min(totalSize - containerSize, idealOffset));
    };
    SizeAndPositionManager.prototype.getVisibleRange = function (_a) {
        var containerSize = _a.containerSize,
            offset = _a.offset,
            overscanCount = _a.overscanCount;
        var totalSize = this.getTotalSize();
        if (totalSize === 0) {
            return {};
        }
        var maxOffset = offset + containerSize;
        var start = this.findNearestItem(offset);
        if (typeof start === 'undefined') {
            throw Error("Invalid offset " + offset + " specified");
        }
        var datum = this.getSizeAndPositionForIndex(start);
        offset = datum.offset + datum.size;
        var stop = start;
        while (offset < maxOffset && stop < this.itemCount - 1) {
            stop++;
            offset += this.getSizeAndPositionForIndex(stop).size;
        }
        if (overscanCount) {
            start = Math.max(0, start - overscanCount);
            stop = Math.min(stop + overscanCount, this.itemCount - 1);
        }
        return {
            start: start,
            stop: stop
        };
    };
    /**
     * Clear all cached values for items after the specified index.
     * This method should be called for any item that has changed its size.
     * It will not immediately perform any calculations; they'll be performed the next time getSizeAndPositionForIndex() is called.
     */
    SizeAndPositionManager.prototype.resetItem = function (index) {
        this.lastMeasuredIndex = Math.min(this.lastMeasuredIndex, index - 1);
    };
    /**
     * Searches for the item (index) nearest the specified offset.
     *
     * If no exact match is found the next lowest item index will be returned.
     * This allows partially visible items (with offsets just before/above the fold) to be visible.
     */
    SizeAndPositionManager.prototype.findNearestItem = function (offset) {
        if (isNaN(offset)) {
            throw Error("Invalid offset " + offset + " specified");
        }
        // Our search algorithms find the nearest match at or below the specified offset.
        // So make sure the offset is at least 0 or no match will be found.
        offset = Math.max(0, offset);
        var lastMeasuredSizeAndPosition = this.getSizeAndPositionOfLastMeasuredItem();
        var lastMeasuredIndex = Math.max(0, this.lastMeasuredIndex);
        if (lastMeasuredSizeAndPosition.offset >= offset) {
            // If we've already measured items within this range just use a binary search as it's faster.
            return this.binarySearch({
                high: lastMeasuredIndex,
                low: 0,
                offset: offset
            });
        } else {
            // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
            // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
            // The overall complexity for this approach is O(log n).
            return this.exponentialSearch({
                index: lastMeasuredIndex,
                offset: offset
            });
        }
    };
    SizeAndPositionManager.prototype.binarySearch = function (_a) {
        var low = _a.low,
            high = _a.high,
            offset = _a.offset;
        var middle = 0;
        var currentOffset = 0;
        while (low <= high) {
            middle = low + Math.floor((high - low) / 2);
            currentOffset = this.getSizeAndPositionForIndex(middle).offset;
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
        return 0;
    };
    SizeAndPositionManager.prototype.exponentialSearch = function (_a) {
        var index = _a.index,
            offset = _a.offset;
        var interval = 1;
        while (index < this.itemCount && this.getSizeAndPositionForIndex(index).offset < offset) {
            index += interval;
            interval *= 2;
        }
        return this.binarySearch({
            high: Math.min(index, this.itemCount - 1),
            low: Math.floor(index / 2),
            offset: offset
        });
    };
    return SizeAndPositionManager;
}();

var STYLE_WRAPPER = {
    overflow: 'auto',
    willChange: 'transform',
    WebkitOverflowScrolling: 'touch'
};
var STYLE_INNER = {
    position: 'relative',
    width: '100%',
    minHeight: '100%'
};
var STYLE_ITEM = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%'
};
var STYLE_STICKY_ITEM = __assign({}, STYLE_ITEM, { position: 'sticky' });
var VirtualList = /** @class */function (_super) {
    __extends(VirtualList, _super);
    function VirtualList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.itemSizeGetter = function (itemSize) {
            return function (index) {
                return _this.getSize(index, itemSize);
            };
        };
        _this.sizeAndPositionManager = new SizeAndPositionManager({
            itemCount: _this.props.itemCount,
            itemSizeGetter: _this.itemSizeGetter(_this.props.itemSize),
            estimatedItemSize: _this.getEstimatedItemSize()
        });
        _this.state = {
            offset: _this.props.scrollOffset || _this.props.scrollToIndex != null && _this.getOffsetForIndex(_this.props.scrollToIndex) || 0,
            scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
        };
        _this.styleCache = {};
        _this.getRef = function (node) {
            _this.rootNode = node;
        };
        _this.handleScroll = function (event) {
            var onScroll = _this.props.onScroll;
            var offset = _this.getNodeOffset();
            if (offset < 0 || _this.state.offset === offset || event.target !== _this.rootNode) {
                return;
            }
            _this.setState({
                offset: offset,
                scrollChangeReason: SCROLL_CHANGE_REASON.OBSERVED
            });
            if (typeof onScroll === 'function') {
                onScroll(offset, event);
            }
        };
        return _this;
    }
    VirtualList.prototype.componentDidMount = function () {
        var _a = this.props,
            scrollOffset = _a.scrollOffset,
            scrollToIndex = _a.scrollToIndex;
        this.rootNode.addEventListener('scroll', this.handleScroll, {
            passive: true
        });
        if (scrollOffset != null) {
            this.scrollTo(scrollOffset);
        } else if (scrollToIndex != null) {
            this.scrollTo(this.getOffsetForIndex(scrollToIndex));
        }
    };
    VirtualList.prototype.componentWillReceiveProps = function (nextProps) {
        var _a = this.props,
            estimatedItemSize = _a.estimatedItemSize,
            itemCount = _a.itemCount,
            itemSize = _a.itemSize,
            scrollOffset = _a.scrollOffset,
            scrollToAlignment = _a.scrollToAlignment,
            scrollToIndex = _a.scrollToIndex;
        var scrollPropsHaveChanged = nextProps.scrollToIndex !== scrollToIndex || nextProps.scrollToAlignment !== scrollToAlignment;
        var itemPropsHaveChanged = nextProps.itemCount !== itemCount || nextProps.itemSize !== itemSize || nextProps.estimatedItemSize !== estimatedItemSize;
        if (nextProps.itemSize !== itemSize) {
            this.sizeAndPositionManager.updateConfig({
                itemSizeGetter: this.itemSizeGetter(nextProps.itemSize)
            });
        }
        if (nextProps.itemCount !== itemCount || nextProps.estimatedItemSize !== estimatedItemSize) {
            this.sizeAndPositionManager.updateConfig({
                itemCount: nextProps.itemCount,
                estimatedItemSize: this.getEstimatedItemSize(nextProps)
            });
        }
        if (itemPropsHaveChanged) {
            this.recomputeSizes();
        }
        if (nextProps.scrollOffset !== scrollOffset) {
            this.setState({
                offset: nextProps.scrollOffset || 0,
                scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
            });
        } else if (typeof nextProps.scrollToIndex === 'number' && (scrollPropsHaveChanged || itemPropsHaveChanged)) {
            this.setState({
                offset: this.getOffsetForIndex(nextProps.scrollToIndex, nextProps.scrollToAlignment, nextProps.itemCount),
                scrollChangeReason: SCROLL_CHANGE_REASON.REQUESTED
            });
        }
    };
    VirtualList.prototype.componentDidUpdate = function (_, prevState) {
        var _a = this.state,
            offset = _a.offset,
            scrollChangeReason = _a.scrollChangeReason;
        if (prevState.offset !== offset && scrollChangeReason === SCROLL_CHANGE_REASON.REQUESTED) {
            this.scrollTo(offset);
        }
    };
    VirtualList.prototype.componentWillUnmount = function () {
        this.rootNode.removeEventListener('scroll', this.handleScroll);
    };
    VirtualList.prototype.scrollTo = function (value) {
        var _a = this.props.scrollDirection,
            scrollDirection = _a === void 0 ? DIRECTION.VERTICAL : _a;
        this.rootNode[scrollProp[scrollDirection]] = value;
    };
    VirtualList.prototype.getOffsetForIndex = function (index, scrollToAlignment, itemCount) {
        if (scrollToAlignment === void 0) {
            scrollToAlignment = this.props.scrollToAlignment;
        }
        if (itemCount === void 0) {
            itemCount = this.props.itemCount;
        }
        var _a = this.props.scrollDirection,
            scrollDirection = _a === void 0 ? DIRECTION.VERTICAL : _a;
        if (index < 0 || index >= itemCount) {
            index = 0;
        }
        return this.sizeAndPositionManager.getUpdatedOffsetForIndex({
            align: scrollToAlignment,
            containerSize: this.props[sizeProp[scrollDirection]],
            currentOffset: this.state && this.state.offset || 0,
            targetIndex: index
        });
    };
    VirtualList.prototype.recomputeSizes = function (startIndex) {
        if (startIndex === void 0) {
            startIndex = 0;
        }
        this.styleCache = {};
        this.sizeAndPositionManager.resetItem(startIndex);
    };
    VirtualList.prototype.render = function () {
        var _this = this;
        var _a = this.props,
            estimatedItemSize = _a.estimatedItemSize,
            height = _a.height,
            _b = _a.overscanCount,
            overscanCount = _b === void 0 ? 3 : _b,
            renderItem = _a.renderItem,
            itemCount = _a.itemCount,
            itemSize = _a.itemSize,
            onItemsRendered = _a.onItemsRendered,
            onScroll = _a.onScroll,
            _c = _a.scrollDirection,
            scrollDirection = _c === void 0 ? DIRECTION.VERTICAL : _c,
            scrollOffset = _a.scrollOffset,
            scrollToIndex = _a.scrollToIndex,
            scrollToAlignment = _a.scrollToAlignment,
            stickyIndices = _a.stickyIndices,
            style = _a.style,
            width = _a.width,
            props = __rest(_a, ["estimatedItemSize", "height", "overscanCount", "renderItem", "itemCount", "itemSize", "onItemsRendered", "onScroll", "scrollDirection", "scrollOffset", "scrollToIndex", "scrollToAlignment", "stickyIndices", "style", "width"]);
        var offset = this.state.offset;
        var _d = this.sizeAndPositionManager.getVisibleRange({
            containerSize: this.props[sizeProp[scrollDirection]] || 0,
            offset: offset,
            overscanCount: overscanCount
        }),
            start = _d.start,
            stop = _d.stop;
        var items = [];
        var wrapperStyle = __assign({}, STYLE_WRAPPER, style, { height: height, width: width });
        var innerStyle = __assign({}, STYLE_INNER, (_e = {}, _e[sizeProp[scrollDirection]] = this.sizeAndPositionManager.getTotalSize(), _e));
        if (stickyIndices != null && stickyIndices.length !== 0) {
            stickyIndices.forEach(function (index) {
                return items.push(renderItem({
                    index: index,
                    style: _this.getStyle(index, true)
                }));
            });
            if (scrollDirection === DIRECTION.HORIZONTAL) {
                innerStyle.display = 'flex';
            }
        }
        if (typeof start !== 'undefined' && typeof stop !== 'undefined') {
            for (var index = start; index <= stop; index++) {
                if (stickyIndices != null && stickyIndices.includes(index)) {
                    continue;
                }
                items.push(renderItem({
                    index: index,
                    style: this.getStyle(index, false)
                }));
            }
            if (typeof onItemsRendered === 'function') {
                onItemsRendered({
                    startIndex: start,
                    stopIndex: stop
                });
            }
        }
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", __assign({ ref: this.getRef }, props, { style: wrapperStyle }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])("div", { style: innerStyle }, items));
        var _e;
    };
    VirtualList.prototype.getNodeOffset = function () {
        var _a = this.props.scrollDirection,
            scrollDirection = _a === void 0 ? DIRECTION.VERTICAL : _a;
        return this.rootNode[scrollProp[scrollDirection]];
    };
    VirtualList.prototype.getEstimatedItemSize = function (props) {
        if (props === void 0) {
            props = this.props;
        }
        return props.estimatedItemSize || typeof props.itemSize === 'number' && props.itemSize || 50;
    };
    VirtualList.prototype.getSize = function (index, itemSize) {
        if (typeof itemSize === 'function') {
            return itemSize(index);
        }
        return Array.isArray(itemSize) ? itemSize[index] : itemSize;
    };
    VirtualList.prototype.getStyle = function (index, sticky) {
        var style = this.styleCache[index];
        if (style) {
            return style;
        }
        var _a = this.props.scrollDirection,
            scrollDirection = _a === void 0 ? DIRECTION.VERTICAL : _a;
        var _b = this.sizeAndPositionManager.getSizeAndPositionForIndex(index),
            size = _b.size,
            offset = _b.offset;
        return this.styleCache[index] = sticky ? __assign({}, STYLE_STICKY_ITEM, (_c = {}, _c[sizeProp[scrollDirection]] = size, _c[marginProp[scrollDirection]] = offset, _c[oppositeMarginProp[scrollDirection]] = -(offset + size), _c.zIndex = 1, _c)) : __assign({}, STYLE_ITEM, (_d = {}, _d[sizeProp[scrollDirection]] = size, _d[positionProp[scrollDirection]] = offset, _d));
        var _c, _d;
    };
    VirtualList.defaultProps = {
        overscanCount: 3,
        scrollDirection: DIRECTION.VERTICAL,
        width: '100%'
    };
    VirtualList.propTypes = {
        estimatedItemSize: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
        height: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_1_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]]).isRequired,
        itemCount: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"].isRequired,
        itemSize: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_1_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_1_prop_types__["array"], __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"]]).isRequired,
        onScroll: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        onItemsRendered: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"],
        overscanCount: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
        renderItem: __WEBPACK_IMPORTED_MODULE_1_prop_types__["func"].isRequired,
        scrollOffset: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
        scrollToIndex: __WEBPACK_IMPORTED_MODULE_1_prop_types__["number"],
        scrollToAlignment: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOf"])([ALIGNMENT.AUTO, ALIGNMENT.START, ALIGNMENT.CENTER, ALIGNMENT.END]),
        scrollDirection: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOf"])([DIRECTION.HORIZONTAL, DIRECTION.VERTICAL]),
        stickyIndices: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_prop_types__["arrayOf"])(__WEBPACK_IMPORTED_MODULE_1_prop_types__["number"]),
        style: __WEBPACK_IMPORTED_MODULE_1_prop_types__["object"],
        width: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_prop_types__["oneOfType"])([__WEBPACK_IMPORTED_MODULE_1_prop_types__["number"], __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]])
    };
    return VirtualList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);


/* harmony default export */ __webpack_exports__["a"] = VirtualList;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(78);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(77);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  true ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Calendar__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Calendar_withRange__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Calendar", function() { return __WEBPACK_IMPORTED_MODULE_1__Calendar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Calendar_withDateSelection__ = __webpack_require__(56);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withDateSelection", function() { return __WEBPACK_IMPORTED_MODULE_3__Calendar_withDateSelection__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Calendar_withKeyboardSupport__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withKeyboardSupport", function() { return __WEBPACK_IMPORTED_MODULE_4__Calendar_withKeyboardSupport__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Calendar_withMultipleDates__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withMultipleDates", function() { return __WEBPACK_IMPORTED_MODULE_5__Calendar_withMultipleDates__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "defaultMultipleDateInterpolation", function() { return __WEBPACK_IMPORTED_MODULE_5__Calendar_withMultipleDates__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "withRange", function() { return __WEBPACK_IMPORTED_MODULE_2__Calendar_withRange__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT_TYPE", function() { return __WEBPACK_IMPORTED_MODULE_2__Calendar_withRange__["b"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultCalendar; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class,
    _temp2,
    _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/index.js';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











/*
 * By default, Calendar is a controlled component.
 * Export a sensible default for minimal setup
 */
var DefaultCalendar = (_temp2 = _class = function (_Component) {
  _inherits(DefaultCalendar, _Component);

  function DefaultCalendar() {
    var _temp, _this, _ret;

    _classCallCheck(this, DefaultCalendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      selected: typeof _this.props.selected !== 'undefined' ? _this.props.selected : new Date()
    }, _this.handleSelect = function (selected) {
      var _this$props = _this.props,
          onSelect = _this$props.onSelect,
          interpolateSelection = _this$props.interpolateSelection;


      if (typeof onSelect === 'function') {
        onSelect(selected);
      }

      _this.setState({ selected: interpolateSelection(selected, _this.state.selected) });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  DefaultCalendar.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref) {
    var selected = _ref.selected;

    if (selected !== this.props.selected) {
      this.setState({ selected: selected });
    }
  };

  DefaultCalendar.prototype.render = function render() {
    // eslint-disable-next-line no-unused-vars
    var _props = this.props,
        Component = _props.Component,
        interpolateSelection = _props.interpolateSelection,
        props = _objectWithoutProperties(_props, ['Component', 'interpolateSelection']);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, props, {
      onSelect: this.handleSelect,
      selected: this.state.selected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }));
  };

  return DefaultCalendar;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.defaultProps = {
  Component: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__Calendar_withRange__["a" /* withRange */])(__WEBPACK_IMPORTED_MODULE_1__Calendar__["a" /* default */]),
  interpolateSelection: function interpolateSelection(selected) {
    return selected;
  }
}, _temp2);


/***/ }),
/* 30 */
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var MILLISECONDS_IN_MINUTE = 60000

/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
module.exports = function getTimezoneOffsetInMilliseconds (dirtyDate) {
  var date = new Date(dirtyDate.getTime())
  var baseTimezoneOffset = date.getTimezoneOffset()
  date.setSeconds(0, 0)
  var millisecondsPartOfTimezoneOffset = date.getTime() % MILLISECONDS_IN_MINUTE

  return baseTimezoneOffset * MILLISECONDS_IN_MINUTE + millisecondsPartOfTimezoneOffset
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(11)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var startOfYear = __webpack_require__(48)
var differenceInCalendarDays = __webpack_require__(33)

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var startOfISOWeek = __webpack_require__(17)
var startOfISOYear = __webpack_require__(45)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(11)

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(22)

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),
/* 41 */
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),
/* 42 */
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(41)

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(42)
var buildFormatLocale = __webpack_require__(43)

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(21)
var startOfISOWeek = __webpack_require__(17)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(50));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(18));

var transform = 'transform';
exports.transform = transform;
var prefix, transitionEnd, animationEnd;
exports.animationEnd = animationEnd;
exports.transitionEnd = transitionEnd;
var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
exports.transitionDelay = transitionDelay;
exports.transitionTiming = transitionTiming;
exports.transitionDuration = transitionDuration;
exports.transitionProperty = transitionProperty;
var animationName, animationDuration, animationTiming, animationDelay;
exports.animationDelay = animationDelay;
exports.animationTiming = animationTiming;
exports.animationDuration = animationDuration;
exports.animationName = animationName;

if (_inDOM.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
  exports.transform = transform = prefix + "-" + transform;
  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
  exports.animationName = animationName = prefix + "-animation-name";
  exports.animationDuration = animationDuration = prefix + "-animation-duration";
  exports.animationTiming = animationTiming = prefix + "-animation-delay";
  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
}

var _default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};
exports.default = _default;

function getTransitionProperties() {
  var style = document.createElement('div').style;
  var vendorMap = {
    O: function O(e) {
      return "o" + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return "webkit" + e;
    },
    ms: function ms(e) {
      return "MS" + e;
    }
  };
  var vendors = Object.keys(vendorMap);
  var transitionEnd, animationEnd;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + "TransitionProperty" in style) {
      prefix = "-" + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
  style = null;
  return {
    animationEnd: animationEnd,
    transitionEnd: transitionEnd,
    prefix: prefix
  };
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = void 0;

var _inDOM = _interopRequireDefault(__webpack_require__(18));

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}
/* https://github.com/component/raf */


var prev = new Date().getTime();

function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};

compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};

var _default = compatRaf;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(9);

exports.__esModule = true;
exports.default = scrollbarSize;

var _inDOM = _interopRequireDefault(__webpack_require__(18));

var size;

function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM.default) {
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
}

module.exports = exports["default"];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withState__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_withState__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_withProps__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_withProps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_withProps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_parse__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_parse__);
/* unused harmony export enhanceDay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withDateSelection; });





function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }






var enhanceDay = __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange___default()(['selected'], function (props) {
  return {
    isSelected: props.selected === props.date
  };
});

var enhanceYear = __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange___default()(['selected'], function (_ref) {
  var selected = _ref.selected;
  return {
    selected: __WEBPACK_IMPORTED_MODULE_7_date_fns_parse___default()(selected)
  };
});

// Enhancer to handle selecting and displaying a single date
var withDateSelection = __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_4____["b" /* withDefaultProps */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* withImmutableProps */])(function (_ref2) {
  var DayComponent = _ref2.DayComponent,
      onSelect = _ref2.onSelect,
      setScrollDate = _ref2.setScrollDate,
      YearsComponent = _ref2.YearsComponent;
  return {
    DayComponent: enhanceDay(DayComponent),
    YearsComponent: enhanceYear(YearsComponent)
  };
}), __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default()('scrollDate', 'setScrollDate', function (props) {
  return props.selected || new Date();
}), __WEBPACK_IMPORTED_MODULE_2_recompose_withProps___default()(function (_ref3) {
  var _onSelect = _ref3.onSelect,
      setScrollDate = _ref3.setScrollDate,
      props = _objectWithoutProperties(_ref3, ['onSelect', 'setScrollDate']);

  var selected = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["m" /* sanitizeDate */])(props.selected, props);

  return {
    passThrough: {
      Day: {
        onClick: _onSelect
      },
      Years: {
        onSelect: function onSelect(year) {
          return handleYearSelect(year, { onSelect: _onSelect, selected: selected, setScrollDate: setScrollDate });
        }
      }
    },
    selected: selected && __WEBPACK_IMPORTED_MODULE_6_date_fns_format___default()(selected, 'YYYY-MM-DD')
  };
}));


function handleYearSelect(date, _ref4) {
  var setScrollDate = _ref4.setScrollDate,
      selected = _ref4.selected,
      onSelect = _ref4.onSelect;

  var newDate = __WEBPACK_IMPORTED_MODULE_7_date_fns_parse___default()(date);

  onSelect(newDate);
  setScrollDate(newDate);
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withState__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_withState__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_withProps__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_withProps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_withProps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_withHandlers__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_withHandlers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_withHandlers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_add_days__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_add_days___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_add_days__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_is_after__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_is_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_is_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_is_before__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withKeyboardSupport; });





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







var enhanceDay = __WEBPACK_IMPORTED_MODULE_1_recompose_withProps___default()(function (props) {
  return {
    isHighlighted: props.highlightedDate === props.date
  };
});

var withKeyboardSupport = __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_0_recompose_withState___default()('highlightedDate', 'setHighlight'), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils__["a" /* withImmutableProps */])(function (_ref) {
  var DayComponent = _ref.DayComponent;
  return {
    DayComponent: enhanceDay(DayComponent)
  };
}), __WEBPACK_IMPORTED_MODULE_2_recompose_withHandlers___default()({
  onKeyDown: function onKeyDown(props) {
    return function (e) {
      return handleKeyDown(e, props);
    };
  }
}), __WEBPACK_IMPORTED_MODULE_1_recompose_withProps___default()(function (_ref2) {
  var highlightedDate = _ref2.highlightedDate,
      onKeyDown = _ref2.onKeyDown,
      onSelect = _ref2.onSelect,
      passThrough = _ref2.passThrough,
      setHighlight = _ref2.setHighlight;
  return {
    passThrough: _extends({}, passThrough, {
      Day: _extends({}, passThrough.Day, {
        highlightedDate: __WEBPACK_IMPORTED_MODULE_5_date_fns_format___default()(highlightedDate, 'YYYY-MM-DD'),
        onClick: function onClick(date) {
          setHighlight(null);
          passThrough.Day.onClick(date);
        }
      }),
      rootNode: { onKeyDown: onKeyDown }
    })
  };
}));

function handleKeyDown(e, props) {
  var minDate = props.minDate,
      maxDate = props.maxDate,
      onClick = props.passThrough.Day.onClick,
      setScrollDate = props.setScrollDate,
      setHighlight = props.setHighlight;

  var highlightedDate = getInitialDate(props);
  var delta = 0;

  if ([__WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].left, __WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].up, __WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].right, __WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].down].indexOf(e.keyCode) > -1 && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }

  switch (e.keyCode) {
    case __WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].enter:
      onClick && onClick(highlightedDate);
      return;
    case __WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].left:
      delta = -1;
      break;
    case __WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].right:
      delta = +1;
      break;
    case __WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].down:
      delta = +7;
      break;
    case __WEBPACK_IMPORTED_MODULE_8__utils__["n" /* keyCodes */].up:
      delta = -7;
      break;
    default:
      delta = 0;
  }

  if (delta) {
    var newHighlightedDate = __WEBPACK_IMPORTED_MODULE_4_date_fns_add_days___default()(highlightedDate, delta);

    // Make sure the new highlighted date isn't before min / max
    if (__WEBPACK_IMPORTED_MODULE_7_date_fns_is_before___default()(newHighlightedDate, minDate)) {
      newHighlightedDate = new Date(minDate);
    } else if (__WEBPACK_IMPORTED_MODULE_6_date_fns_is_after___default()(newHighlightedDate, maxDate)) {
      newHighlightedDate = new Date(maxDate);
    }

    setScrollDate(newHighlightedDate);
    setHighlight(newHighlightedDate);
  }
}

function getInitialDate(_ref3) {
  var highlightedDate = _ref3.highlightedDate,
      selected = _ref3.selected,
      displayDate = _ref3.displayDate;

  return highlightedDate || selected.start || displayDate || selected || new Date();
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withState__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_recompose_withState__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_withProps__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_recompose_withProps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_recompose_withProps__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_recompose_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_withMultipleDates__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_parse__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_parse__);
/* unused harmony export enhanceDay */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withMultipleDates; });
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultMultipleDateInterpolation;





function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }







// Enhance Day component to display selected state based on an array of selected dates
var enhanceDay = __WEBPACK_IMPORTED_MODULE_1_recompose_withPropsOnChange___default()(['selected'], function (props) {
  return {
    isSelected: props.selected.indexOf(props.date) !== -1
  };
});

// Enhance year component
var enhanceYears = __WEBPACK_IMPORTED_MODULE_2_recompose_withProps___default()(function (_ref) {
  var displayDate = _ref.displayDate;
  return {
    selected: displayDate ? __WEBPACK_IMPORTED_MODULE_8_date_fns_parse___default()(displayDate) : null
  };
});

// Enhancer to handle selecting and displaying multiple dates
var withMultipleDates = __WEBPACK_IMPORTED_MODULE_3_recompose_compose___default()(__WEBPACK_IMPORTED_MODULE_4____["b" /* withDefaultProps */], __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default()('scrollDate', 'setScrollDate', getInitialDate), __WEBPACK_IMPORTED_MODULE_0_recompose_withState___default()('displayDate', 'setDisplayDate', getInitialDate), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["a" /* withImmutableProps */])(function (_ref2) {
  var DayComponent = _ref2.DayComponent,
      HeaderComponent = _ref2.HeaderComponent,
      YearsComponent = _ref2.YearsComponent;
  return {
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__Header_withMultipleDates__["a" /* default */])(HeaderComponent),
    YearsComponent: enhanceYears(YearsComponent)
  };
}), __WEBPACK_IMPORTED_MODULE_2_recompose_withProps___default()(function (_ref3) {
  var displayDate = _ref3.displayDate,
      onSelect = _ref3.onSelect,
      setDisplayDate = _ref3.setDisplayDate,
      scrollToDate = _ref3.scrollToDate,
      props = _objectWithoutProperties(_ref3, ['displayDate', 'onSelect', 'setDisplayDate', 'scrollToDate']);

  return {
    passThrough: {
      Day: {
        onClick: function onClick(date) {
          return handleSelect(date, { onSelect: onSelect, setDisplayDate: setDisplayDate });
        }
      },
      Header: {
        setDisplayDate: setDisplayDate
      },
      Years: {
        displayDate: displayDate,
        onSelect: function onSelect(year, e, callback) {
          return handleYearSelect(year, callback);
        },
        selected: displayDate
      }
    },
    selected: props.selected.filter(function (date) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["m" /* sanitizeDate */])(date, props);
    }).map(function (date) {
      return __WEBPACK_IMPORTED_MODULE_7_date_fns_format___default()(date, 'YYYY-MM-DD');
    })
  };
}));


function handleSelect(date, _ref4) {
  var onSelect = _ref4.onSelect,
      setDisplayDate = _ref4.setDisplayDate;

  onSelect(date);
  setDisplayDate(date);
}

function handleYearSelect(date, callback) {
  callback(__WEBPACK_IMPORTED_MODULE_8_date_fns_parse___default()(date));
}

function getInitialDate(_ref5) {
  var selected = _ref5.selected;

  return selected.length ? selected[0] : new Date();
}

function defaultMultipleDateInterpolation(date, selected) {
  var selectedMap = selected.map(function (date) {
    return __WEBPACK_IMPORTED_MODULE_7_date_fns_format___default()(date, 'YYYY-MM-DD');
  });
  var index = selectedMap.indexOf(__WEBPACK_IMPORTED_MODULE_7_date_fns_format___default()(date, 'YYYY-MM-DD'));

  return index === -1 ? [].concat(selected, [date]) : [].concat(selected.slice(0, index), selected.slice(index + 1));
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_parse__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_parse__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Day; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Day/index.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var styles = {
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
};

var Day = function (_PureComponent) {
  _inherits(Day, _PureComponent);

  function Day() {
    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleClick = function () {
      var _this$props = _this.props,
          date = _this$props.date,
          isDisabled = _this$props.isDisabled,
          onClick = _this$props.onClick;


      if (!isDisabled && typeof onClick === 'function') {
        onClick(__WEBPACK_IMPORTED_MODULE_2_date_fns_parse___default()(date));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Day.prototype.renderSelection = function renderSelection(selectionColor) {
    var _props = this.props,
        day = _props.day,
        date = _props.date,
        textColor = _props.theme.textColor,
        selectionStyle = _props.selectionStyle;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: styles.selection,
        'data-date': date,
        style: _extends({
          backgroundColor: this.selectionColor,
          color: textColor.active
        }, selectionStyle),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        { className: styles.day, __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        },
        day
      )
    );
  };

  Day.prototype.render = function render() {
    var _classNames;

    var _props2 = this.props,
        className = _props2.className,
        date = _props2.date,
        day = _props2.day,
        handlers = _props2.handlers,
        isDisabled = _props2.isDisabled,
        isHighlighted = _props2.isHighlighted,
        isToday = _props2.isToday,
        isSelected = _props2.isSelected,
        _props2$theme = _props2.theme,
        selectionColor = _props2$theme.selectionColor,
        todayColor = _props2$theme.todayColor;

    var color = void 0;

    if (isSelected) {
      color = this.selectionColor = selectionColor;
    } else if (isToday) {
      color = todayColor;
    }

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'li',
      _extends({
        style: color ? { color: color } : null,
        className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(styles.root, (_classNames = {}, _classNames[styles.today] = isToday, _classNames[styles.highlighted] = isHighlighted, _classNames[styles.selected] = isSelected, _classNames[styles.disabled] = isDisabled, _classNames[styles.enabled] = !isDisabled, _classNames), className),
        onClick: this.handleClick,
        'data-date': date
      }, handlers, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }),
      isToday ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'span',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        },
        day
      ) : day,
      isSelected && this.renderSelection()
    );
  };

  return Day;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_CSSTransitionGroup__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_transition_group_CSSTransitionGroup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_transition_group_CSSTransitionGroup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
var _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Header/Slider/index.js',
    _this = this;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var styles = {
  'root': 'Cal__Slider__root',
  'slide': 'Cal__Slider__slide',
  'wrapper': 'Cal__Slider__wrapper',
  'arrow': 'Cal__Slider__arrow',
  'arrowRight': 'Cal__Slider__arrowRight',
  'arrowLeft': 'Cal__Slider__arrowLeft'
};
var transition = {
  'enter': 'Cal__transition__enter',
  'enterActive': 'Cal__transition__enterActive',
  'leave': 'Cal__transition__leave',
  'leaveActive': 'Cal__transition__leaveActive'
};


var DIRECTIONS = {
  LEFT: 0,
  RIGHT: 1
};

var Arrow = function Arrow(_ref) {
  var _classNames;

  var direction = _ref.direction,
      _onClick = _ref.onClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(styles.arrow, (_classNames = {}, _classNames[styles.arrowLeft] = direction === DIRECTIONS.LEFT, _classNames[styles.arrowRight] = direction === DIRECTIONS.RIGHT, _classNames)),
      onClick: function onClick() {
        return _onClick(direction);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: _this
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'svg',
      {
        x: '0px',
        y: '0px',
        viewBox: '0 0 26 46',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: _this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { d: 'M31.232233,34.767767 C32.2085438,35.7440777 33.7914562,35.7440777 34.767767,34.767767 C35.7440777,33.7914562 35.7440777,32.2085438 34.767767,31.232233 L14.767767,11.232233 C13.7914562,10.2559223 12.2085438,10.2559223 11.232233,11.232233 L-8.767767,31.232233 C-9.7440777,32.2085438 -9.7440777,33.7914562 -8.767767,34.767767 C-7.7914562,35.7440777 -6.2085438,35.7440777 -5.232233,34.767767 L12.9997921,16.5357418 L31.232233,34.767767 Z', id: 'Shape', fill: '#FFF', transform: 'translate(13.000000, 23.000000) rotate(90.000000) translate(-13.000000, -23.000000) ', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: _this
      })
    )
  );
};

var Slider = function (_PureComponent) {
  _inherits(Slider, _PureComponent);

  function Slider() {
    var _temp, _this2, _ret;

    _classCallCheck(this, Slider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this2), _this2.handleClick = function (direction) {
      var _this2$props = _this2.props,
          children = _this2$props.children,
          index = _this2$props.index,
          onChange = _this2$props.onChange;


      switch (direction) {
        case DIRECTIONS.LEFT:
          index = Math.max(0, index - 1);
          break;
        case DIRECTIONS.RIGHT:
          index = Math.min(index + 1, children.length);
          break;
        default:
          return;
      }

      onChange(index);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  Slider.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props,
        children = _props.children,
        index = _props.index;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: styles.root, __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      },
      index !== 0 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Arrow, { onClick: this.handleClick, direction: DIRECTIONS.LEFT, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_transition_group_CSSTransitionGroup___default.a,
        {
          className: styles.wrapper,
          component: 'div',
          style: {
            transform: 'translate3d(-' + 100 * index + '%, 0, 0)'
          },
          transitionName: transition,
          transitionEnterTimeout: 300,
          transitionLeaveTimeout: 300,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react__["Children"].map(children, function (child, i) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              key: i,
              className: styles.slide,
              style: { transform: 'translateX(' + 100 * i + '%)' },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              },
              __self: _this3
            },
            child
          );
        })
      ),
      index !== children.length - 1 && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Arrow, { onClick: this.handleClick, direction: DIRECTIONS.RIGHT, __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      })
    );
  };

  return Slider;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__defaultSelectionRenderer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
var _class,
    _temp,
    _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Header/index.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styles = {
  'root': 'Cal__Header__root',
  'landscape': 'Cal__Header__landscape',
  'dateWrapper': 'Cal__Header__dateWrapper',
  'day': 'Cal__Header__day',
  'wrapper': 'Cal__Header__wrapper',
  'blank': 'Cal__Header__blank',
  'active': 'Cal__Header__active',
  'year': 'Cal__Header__year',
  'date': 'Cal__Header__date',
  'range': 'Cal__Header__range'
};
var Header = (_temp = _class = function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        layout = _props.layout,
        blank = _props.locale.blank,
        selected = _props.selected,
        renderSelection = _props.renderSelection,
        theme = _props.theme;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(styles.root, (_classNames = {}, _classNames[styles.landscape] = layout === 'landscape', _classNames)),
        style: {
          backgroundColor: theme.headerColor,
          color: theme.textColor.active
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      },
      selected && renderSelection(selected, this.props) || __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()(styles.wrapper, styles.blank), __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        },
        blank
      )
    );
  };

  return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class.defaultProps = {
  onYearClick: __WEBPACK_IMPORTED_MODULE_2__utils__["b" /* emptyFn */],
  renderSelection: __WEBPACK_IMPORTED_MODULE_3__defaultSelectionRenderer__["a" /* default */]
}, _class.propTypes = {
  dateFormat: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  display: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  layout: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  locale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onYearClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  selected: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  shouldAnimate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
}, _temp);


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultSelectionRenderer__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Slider__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_parse__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_format__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Header/withMultipleDates.js',
    _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* withImmutableProps */])(function (_ref) {
  var renderSelection = _ref.renderSelection,
      setDisplayDate = _ref.setDisplayDate;
  return {
    renderSelection: function renderSelection(values, _ref2) {
      var scrollToDate = _ref2.scrollToDate,
          displayDate = _ref2.displayDate,
          props = _objectWithoutProperties(_ref2, ['scrollToDate', 'displayDate']);

      if (!values.length) {
        return null;
      }

      var dates = values.sort();
      var index = values.indexOf(__WEBPACK_IMPORTED_MODULE_5_date_fns_format___default()(__WEBPACK_IMPORTED_MODULE_4_date_fns_parse___default()(displayDate), 'YYYY-MM-DD'));

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__Slider__["a" /* default */],
        {
          index: index !== -1 ? index : dates.length - 1,
          onChange: function onChange(index) {
            return setDisplayDate(dates[index], function () {
              return setTimeout(function () {
                return scrollToDate(dates[index], 0, true);
              }, 50);
            });
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: _this
        },
        dates.map(function (value) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__defaultSelectionRenderer__["a" /* default */])(value, _extends({}, props, {
            key: index,
            scrollToDate: scrollToDate,
            shouldAnimate: false
          }));
        })
      );
    }
  };
});

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__defaultSelectionRenderer__ = __webpack_require__(19);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Header/withRange.js',
    _this = this;




var styles = {
  'root': 'Cal__Header__root',
  'landscape': 'Cal__Header__landscape',
  'dateWrapper': 'Cal__Header__dateWrapper',
  'day': 'Cal__Header__day',
  'wrapper': 'Cal__Header__wrapper',
  'blank': 'Cal__Header__blank',
  'active': 'Cal__Header__active',
  'year': 'Cal__Header__year',
  'date': 'Cal__Header__date',
  'range': 'Cal__Header__range'
};


/* harmony default export */ __webpack_exports__["a"] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* withImmutableProps */])(function (_ref) {
  var renderSelection = _ref.renderSelection;
  return {
    renderSelection: function renderSelection(values, props) {
      if (!values || !values.start && !values.end) {
        return null;
      }
      if (values.start === values.end) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__defaultSelectionRenderer__["a" /* default */])(values.start, props);
      }

      var dateFormat = props.locale && props.locale.headerFormat || 'MMM Do';

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: styles.range, style: { color: props.theme.headerColor }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: _this
        },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__defaultSelectionRenderer__["a" /* default */])(values.start, _extends({}, props, { dateFormat: dateFormat, key: 'start', shouldAnimate: false })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__defaultSelectionRenderer__["a" /* default */])(values.end, _extends({}, props, { dateFormat: dateFormat, key: 'end', shouldAnimate: false }))
      );
    }
  };
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_get_day__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_date_fns_get_day___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_date_fns_get_day__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Month; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Month/index.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var styles = {
  'root': 'Cal__Month__root',
  'rows': 'Cal__Month__rows',
  'row': 'Cal__Month__row',
  'label': 'Cal__Month__label'
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
    var monthShort = __WEBPACK_IMPORTED_MODULE_3_date_fns_format___default()(monthDate, 'MMM', { locale: locale.locale });
    var monthRows = [];
    var day = 0;
    var isDisabled = false;
    var isToday = false;
    var date = void 0,
        days = void 0,
        dow = void 0,
        row = void 0;

    // Used for faster comparisons
    var _today = __WEBPACK_IMPORTED_MODULE_3_date_fns_format___default()(today, 'YYYY-MM-DD');
    var _minDate = __WEBPACK_IMPORTED_MODULE_3_date_fns_format___default()(minDate, 'YYYY-MM-DD');
    var _maxDate = __WEBPACK_IMPORTED_MODULE_3_date_fns_format___default()(maxDate, 'YYYY-MM-DD');

    // Oh the things we do in the name of performance...
    for (var i = 0, len = rows.length; i < len; i++) {
      var _classNames;

      row = rows[i];
      days = [];
      dow = __WEBPACK_IMPORTED_MODULE_4_date_fns_get_day___default()(new Date(year, month, row[0]));

      for (var k = 0, _len = row.length; k < _len; k++) {
        day = row[k];

        date = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["j" /* getDateString */])(year, month, day);
        isToday = date === _today;

        isDisabled = minDate && date < _minDate || maxDate && date > _maxDate || disabledDays && disabledDays.length && disabledDays.indexOf(dow) !== -1 || disabledDates && disabledDates.length && disabledDates.indexOf(date) !== -1;

        days[k] = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(DayComponent, _extends({
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
        }, passThrough.Day, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }));

        dow += 1;
      }
      monthRows[i] = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'ul',
        {
          key: 'Row-' + i,
          className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(styles.row, (_classNames = {}, _classNames[styles.partial] = row.length !== 7, _classNames)),
          style: { height: rowHeight },
          role: 'row',
          'aria-label': 'Week ' + (i + 1),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        },
        days
      );
    }

    return monthRows;
  };

  Month.prototype.render = function render() {
    var _props2 = this.props,
        locale = _props2.locale.locale,
        monthDate = _props2.monthDate,
        rowHeight = _props2.rowHeight,
        style = _props2.style;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: styles.root, style: _extends({}, style, { lineHeight: rowHeight + 'px' }), __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: styles.label, __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_3_date_fns_format___default()(monthDate, 'MMMM YYYY', { locale: locale })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: styles.rows, __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        },
        this.renderRows()
      )
    );
  };

  return Month;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);



/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tiny_virtual_list__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_parse__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Month__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonthList; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class,
    _temp2,
    _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/MonthList/index.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var styles = {
  'root': 'Cal__MonthList__root',
  'scrolling': 'Cal__MonthList__scrolling'
};


var AVERAGE_ROWS_PER_MONTH = 5;

var MonthList = (_temp2 = _class = function (_Component) {
  _inherits(MonthList, _Component);

  function MonthList() {
    var _this3 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, MonthList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      scrollTop: _this.getDateOffset(_this.props.scrollDate)
    }, _this.cache = {}, _this.memoize = function (param) {
      if (!this.cache[param]) {
        var weekStartsOn = this.props.locale.weekStartsOn;

        var _param$split = param.split(':'),
            year = _param$split[0],
            month = _param$split[1];

        var result = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["f" /* getMonth */])(year, month, weekStartsOn);
        this.cache[param] = result;
      }
      return this.cache[param];
    }, _this.monthHeights = [], _this._getRef = function (instance) {
      _this.VirtualList = instance;
    }, _this.getMonthHeight = function (index) {
      if (!_this.monthHeights[index]) {
        var _this$props = _this.props,
            weekStartsOn = _this$props.locale.weekStartsOn,
            months = _this$props.months,
            rowHeight = _this$props.rowHeight;
        var _months$index = months[index],
            month = _months$index.month,
            year = _months$index.year;

        var weeks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["g" /* getWeeksInMonth */])(month, year, weekStartsOn, index === months.length - 1);
        var height = weeks * rowHeight;
        _this.monthHeights[index] = height;
      }

      return _this.monthHeights[index];
    }, _this.scrollToDate = function (date) {
      for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        rest[_key2 - 2] = arguments[_key2];
      }

      var _this2;

      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var offsetTop = _this.getDateOffset(date);
      (_this2 = _this).scrollTo.apply(_this2, [offsetTop + offset].concat(rest));
    }, _this.scrollTo = function () {
      var scrollTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var shouldAnimate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var onScrollEnd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* emptyFn */];

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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["h" /* animate */])({
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
    }, _this.renderMonth = function (_ref) {
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

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Month__["a" /* default */], _extends({
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
      }, passThrough.Month, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: _this3
      }));
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  MonthList.prototype.componentDidMount = function componentDidMount() {
    this.scrollEl = this.VirtualList.rootNode;
  };

  MonthList.prototype.componentWillReceiveProps = function componentWillReceiveProps(_ref2) {
    var scrollDate = _ref2.scrollDate;

    if (scrollDate !== this.props.scrollDate) {
      this.setState({
        scrollTop: this.getDateOffset(scrollDate)
      });
    }
  };

  MonthList.prototype.getDateOffset = function getDateOffset(date) {
    var _props = this.props,
        min = _props.min,
        rowHeight = _props.rowHeight,
        weekStartsOn = _props.locale.weekStartsOn,
        height = _props.height;

    var weeks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["i" /* getRenderedWeekRows */])(__WEBPACK_IMPORTED_MODULE_6_date_fns_start_of_month___default()(min), __WEBPACK_IMPORTED_MODULE_5_date_fns_parse___default()(date), weekStartsOn);

    return weeks * rowHeight - (height - rowHeight / 2) / 2;
  };

  MonthList.prototype.render = function render() {
    var _classNames;

    var _props2 = this.props,
        height = _props2.height,
        isScrolling = _props2.isScrolling,
        onScroll = _props2.onScroll,
        overscanMonthCount = _props2.overscanMonthCount,
        months = _props2.months,
        rowHeight = _props2.rowHeight,
        width = _props2.width;
    var scrollTop = this.state.scrollTop;


    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_tiny_virtual_list__["a" /* default */], {
      ref: this._getRef,
      width: width,
      height: height,
      itemCount: months.length,
      itemSize: this.getMonthHeight,
      estimatedItemSize: rowHeight * AVERAGE_ROWS_PER_MONTH,
      renderItem: this.renderMonth,
      onScroll: onScroll,
      scrollOffset: scrollTop,
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(styles.root, (_classNames = {}, _classNames[styles.scrolling] = isScrolling, _classNames)),
      style: { lineHeight: rowHeight + 'px' },
      overscanCount: overscanMonthCount,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    });
  };

  return MonthList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  disabledDates: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string),
  disabledDays: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number),
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  isScrolling: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  locale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  maxDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(Date),
  min: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(Date),
  minDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(Date),
  months: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object),
  onDaySelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onScroll: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  overscanMonthCount: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  rowHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  selectedDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(Date),
  showOverlay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  today: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(Date),
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string])
}, _temp2);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DIRECTION_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DIRECTION_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Today; });
var _class,
    _temp2,
    _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Today/index.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var styles = {
  'root': 'Cal__Today__root',
  'show': 'Cal__Today__show',
  'chevron': 'Cal__Today__chevron',
  'chevronUp': 'Cal__Today__chevronUp',
  'chevronDown': 'Cal__Today__chevronDown'
};


var DIRECTION_UP = 1;
var DIRECTION_DOWN = -1;
var CHEVRON = 'M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z';

var Today = (_temp2 = _class = function (_PureComponent) {
  _inherits(Today, _PureComponent);

  function Today() {
    var _temp, _this, _ret;

    _classCallCheck(this, Today);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.scrollToToday = function () {
      var scrollToDate = _this.props.scrollToDate;


      scrollToDate(new Date(), -40, true);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Today.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        todayLabel = _props.todayLabel,
        show = _props.show,
        theme = _props.theme;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(styles.root, (_classNames = {}, _classNames[styles.show] = show, _classNames[styles.chevronUp] = show === DIRECTION_UP, _classNames[styles.chevronDown] = show === DIRECTION_DOWN, _classNames)),
        style: {
          backgroundColor: theme.floatingNav.background,
          color: theme.floatingNav.color
        },
        onClick: this.scrollToToday,
        ref: 'node',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      },
      todayLabel,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'svg',
        {
          className: styles.chevron,
          x: '0px',
          y: '0px',
          width: '14px',
          height: '14px',
          viewBox: '0 0 512 512',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
          fill: theme.floatingNav.chevron || theme.floatingNav.color,
          d: CHEVRON,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        })
      )
    );
  };

  return Today;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class.propTypes = {
  scrollToDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  show: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  todayLabel: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string
}, _temp2);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weekdays; });
var _class,
    _temp,
    _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Weekdays/index.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var styles = {
  'root': 'Cal__Weekdays__root',
  'day': 'Cal__Weekdays__day'
};
var Weekdays = (_temp = _class = function (_PureComponent) {
  _inherits(Weekdays, _PureComponent);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Weekdays.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        weekdays = _props.weekdays,
        weekStartsOn = _props.weekStartsOn;

    var orderedWeekdays = [].concat(weekdays.slice(weekStartsOn, 7), weekdays.slice(0, weekStartsOn));

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ul',
      {
        className: styles.root,
        style: {
          paddingRight: __WEBPACK_IMPORTED_MODULE_2__utils__["k" /* scrollbarSize */]
        },
        'aria-hidden': true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      },
      orderedWeekdays.map(function (val, index) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { key: 'Weekday-' + index, className: styles.day, __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: _this2
          },
          val
        );
      })
    );
  };

  return Weekdays;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]), _class.propTypes = {
  locale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
}, _temp);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_tiny_virtual_list__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_format__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_date_fns_format___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_date_fns_format__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_is_after__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_date_fns_is_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_date_fns_is_after__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_date_fns_is_before__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_is_same_month__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_date_fns_is_same_month___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_date_fns_is_same_month__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Years; });
var _class,
    _temp,
    _jsxFileName = '/Users/chrispop/dev/hy-infinite-calendar/src/Years/index.js';

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

    var months = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* getMonthsForYear */])(year, selected.getDate());

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'ol',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      },
      months.map(function (date, index) {
        var _classNames;

        var isSelected = __WEBPACK_IMPORTED_MODULE_8_date_fns_is_same_month___default()(date, selected);
        var isCurrentMonth = __WEBPACK_IMPORTED_MODULE_8_date_fns_is_same_month___default()(date, today);
        var isDisabled = __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before___default()(date, min) || __WEBPACK_IMPORTED_MODULE_7_date_fns_is_before___default()(date, minDate) || __WEBPACK_IMPORTED_MODULE_6_date_fns_is_after___default()(date, max) || __WEBPACK_IMPORTED_MODULE_6_date_fns_is_after___default()(date, maxDate);
        var style = Object.assign({}, isSelected && {
          backgroundColor: typeof theme.selectionColor === 'function' ? theme.selectionColor(date) : theme.selectionColor
        }, isCurrentMonth && {
          borderColor: theme.todayColor
        });

        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          {
            key: index,
            onClick: function onClick(e) {
              e.stopPropagation();

              if (!isDisabled) {
                _this2.handleClick(date, e);
              }
            },
            className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(styles.month, (_classNames = {}, _classNames[styles.selected] = isSelected, _classNames[styles.currentMonth] = isCurrentMonth, _classNames[styles.disabled] = isDisabled, _classNames)),
            style: style,
            title: 'Set date to ' + __WEBPACK_IMPORTED_MODULE_5_date_fns_format___default()(date, 'MMMM Do, YYYY'),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: _this2
          },
          __WEBPACK_IMPORTED_MODULE_5_date_fns_format___default()(date, 'MMM', { locale: locale })
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

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      {
        className: styles.root,
        style: { color: theme.selectionColor, height: height + 50 },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_tiny_virtual_list__["a" /* default */], {
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

          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              key: index,
              className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(styles.year, (_classNames2 = {}, _classNames2[styles.active] = !showMonths && isActive, _classNames2[styles.currentYear] = !showMonths && year === currentYear, _classNames2[styles.withMonths] = showMonths, _classNames2[styles.first] = index === 0, _classNames2[styles.last] = index === years.length - 1, _classNames2)),
              onClick: function onClick() {
                return _this3.handleClick(new Date(selected).setYear(year));
              },
              title: 'Set year to ' + year,
              'data-year': year,
              style: Object.assign({}, style, {
                color: typeof theme.selectionColor === 'function' ? theme.selectionColor(new Date(year, 0, 1)) : theme.selectionColor
              }),
              __source: {
                fileName: _jsxFileName,
                lineNumber: 136
              },
              __self: _this3
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'label',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 156
                },
                __self: _this3
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                {
                  style: !showMonths && year === currentYear ? { borderColor: theme.todayColor } : null,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 157
                  },
                  __self: _this3
                },
                year
              )
            ),
            showMonths && _this3.renderMonths(year)
          );
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      })
    );
  };

  return Years;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]), _class.propTypes = {
  height: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  hideOnSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  locale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  max: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  maxDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  min: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  minDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  onSelect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  scrollToDate: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  selectedYear: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
  setDisplay: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  width: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string]),
  years: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array
}, _class.defaultProps = {
  onSelect: __WEBPACK_IMPORTED_MODULE_4__utils__["b" /* emptyFn */],
  showMonths: true
}, _temp);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = animate;
function easing(time) {
  return 1 - --time * time * time * time;
};

/**
 * Given a start/end point of a scroll and time elapsed, calculate the scroll position we should be at
 * @param {Number} start - the initial value
 * @param {Number} stop - the final desired value
 * @param {Number} elapsed - the amount of time elapsed since we started animating
 * @param {Number} - duration - the duration of the animation
 * @return {Number} - The value we should use on the next tick
 */
function getValue(start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easing(elapsed / duration);
};

/**
 * Smoothly animate between two values
 * @param {Number} fromValue - the initial value
 * @param {Function} onUpdate - A function that is called on each tick
 * @param {Function} onComplete - A callback that is fired once the scroll animation ends
 * @param {Number} duration - the desired duration of the scroll animation
 */
function animate(_ref) {
  var fromValue = _ref.fromValue,
      toValue = _ref.toValue,
      onUpdate = _ref.onUpdate,
      onComplete = _ref.onComplete,
      _ref$duration = _ref.duration,
      duration = _ref$duration === undefined ? 600 : _ref$duration;

  var startTime = performance.now();

  var tick = function tick() {
    var elapsed = performance.now() - startTime;

    window.requestAnimationFrame(function () {
      return onUpdate(getValue(fromValue, toValue, elapsed, duration),
      // Callback
      elapsed <= duration ? tick : onComplete);
    });
  };

  tick();
};

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {
  hideYearsOnSelect: true,
  layout: 'portrait',
  overscanMonthCount: 2,
  shouldHeaderAnimate: true,
  showHeader: true,
  showMonthsForYears: true,
  showOverlay: true,
  showTodayHelper: true,
  showWeekdays: true,
  todayHelperRowOffset: 4
};

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = {
  blank: 'Select a date...',
  headerFormat: 'ddd, MMM Do',
  todayLabel: {
    long: 'Today'
  },
  weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  weekStartsOn: 0
};

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = {
  accentColor: '#0078ec',
  floatingNav: {
    background: 'rgba(56, 87, 138, 0.94)',
    chevron: '#FFA726',
    color: '#FFF'
  },
  headerColor: '#448AFF',
  selectionColor: '#CBE3FB',
  textColor: {
    active: '#183e62',
    default: '#183e62'
  },
  todayColor: '#e73c58',
  weekdayColor: '#559FFF'
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(24);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(25);
var assign = __webpack_require__(73);

var ReactPropTypesSecret = __webpack_require__(24);
var checkPropTypes = __webpack_require__(74);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(49);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(51);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(53);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(52);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(91);

var _PropTypes = __webpack_require__(28);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  true ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(30);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(90);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         true ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  true ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(1);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createHelper = __webpack_require__(6);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(8);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultProps = function defaultProps(props) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    var DefaultProps = function DefaultProps(ownerProps) {
      return factory(ownerProps);
    };
    DefaultProps.defaultProps = props;
    return DefaultProps;
  };
};

exports.default = (0, _createHelper2.default)(defaultProps, 'defaultProps');

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.isReactComponent === 'object');
};

exports.default = isClassComponent;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isClassComponent = __webpack_require__(82);

var _isClassComponent2 = _interopRequireDefault(_isClassComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && ("development" === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createHelper = __webpack_require__(6);

var _createHelper2 = _interopRequireDefault(_createHelper);

var _createEagerFactory = __webpack_require__(8);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapProps = function mapProps(propsMapper) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return function (props) {
      return factory(propsMapper(props));
    };
  };
};

exports.default = (0, _createHelper2.default)(mapProps, 'mapProps');

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _shallowEqual = __webpack_require__(55);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var pick = function pick(obj, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  }
  return result;
};

exports.default = pick;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _createEagerFactory = __webpack_require__(8);

var _createEagerFactory2 = _interopRequireDefault(_createEagerFactory);

var _createHelper = __webpack_require__(6);

var _createHelper2 = _interopRequireDefault(_createHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result;
};

var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var _class, _temp2, _initialiseProps;

    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    return _temp2 = _class = function (_Component) {
      _inherits(_class, _Component);

      function _class() {
        var _temp, _this, _ret;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
      }

      _class.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        this.cachedHandlers = {};
      };

      _class.prototype.render = function render() {
        return factory(_extends({}, this.props, this.handlers));
      };

      return _class;
    }(_react.Component), _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.cachedHandlers = {};
      this.handlers = mapValues(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler, handlerName) {
        return function () {
          var cachedHandler = _this2.cachedHandlers[handlerName];
          if (cachedHandler) {
            return cachedHandler.apply(undefined, arguments);
          }

          var handler = createHandler(_this2.props);
          _this2.cachedHandlers[handlerName] = handler;

          if ("development" !== 'production' && typeof handler !== 'function') {
            console.error( // eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
          }

          return handler.apply(undefined, arguments);
        };
      });
    }, _temp2;
  };
};

exports.default = (0, _createHelper2.default)(withHandlers, 'withHandlers');

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(81);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_91__;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(29);


/***/ })
/******/ ]);
});
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import getDaysInMonth from 'date-fns/get_days_in_month';
import getDay from 'date-fns/get_day';
import isAfter from 'date-fns/is_after';
import isBefore from 'date-fns/is_before';
import isSameDay from 'date-fns/is_same_day';
import startOfDay from 'date-fns/start_of_day';

export const keyCodes = {
  command: 91,
  control: 17,
  down: 40,
  enter: 13,
  escape: 27,
  left: 37,
  right: 39,
  shift: 16,
  up: 38,
};

/**
 * Given a year and a month, returns the rows for that month to be iterated over
 * @param {Number} year - the year number
 * @param {Number} month - the index of the month
 * @param {Number} weekStartsOn - the index of the first day of the week (from 0 to 6)
 * @return {Object} - Returns the first day of the month and the rows of that month
 */
export function getMonth(year, month, weekStartsOn) {
  const rows = [];
  const monthDate = new Date(year, month, 1);
  const daysInMonth = getDaysInMonth(monthDate);
  const weekEndsOn = getEndOfWeekIndex(weekStartsOn);

  let dow = getDay(new Date(year, month, 1));
  let week = 0;

  for (let day = 1; day <= daysInMonth; day++) {
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
    rows,
  };
}

/**
 * Get the localized week number of a given month based on the first day of the week
 * @param {Number} year - the year number
 * @param {Date} date - the date for which we're trying to get the week number
 * @param {Number} weekStartsOn - the index of the first day of the week (from 0 to 6)
 * @return {Object} - Returns the week index for that date
 */
export function getWeek(year, date, weekStartsOn) {
  const yearStart = new Date(year, 0, 1); // 1st Jan of the Year

  return Math.ceil(
    ((date - yearStart) / (60 * 60 * 24 * 1000) +
      yearStart.getDay() +
      1 -
      weekStartsOn) /
      7,
  );
}

/**
 * Get the number of weeks in a given month to be able to calculate the height of that month
 * @param {Number} year - the year number
 * @param {Number} month - the index of the month
 * @param {Number} weekStartsOn - the index of the first day of the week (from 0 to 6)
 * @return {Number} - Returns the number of weeks for the given month
 */
export function getWeeksInMonth(
  month,
  year = new Date().getFullYear(),
  weekStartsOn,
) {
  const weekEndsOn = getEndOfWeekIndex(weekStartsOn);

  const firstOfMonth = new Date(year, month, 1);
  const firstWeekNumber = getWeek(year, firstOfMonth, weekStartsOn);

  const lastOfMonth = new Date(year, month + 1, 0); // Last date of the Month
  const lastWeekNumber = getWeek(year, lastOfMonth, weekStartsOn);

  let rowCount = lastWeekNumber - firstWeekNumber;

  // If the last week contains 7 days, we need to add an extra row
  if (lastOfMonth.getDay() === weekEndsOn) {
    rowCount++;
  }

  return rowCount;
}

/**
 * Helper to find out what day the week ends on given the localized start of the week
 * @param {Number} weekStartsOn - the index of the first day of the week (from 0 to 6)
 * @return {Number} - Returns the index of the day the week ends on
 */
function getEndOfWeekIndex(weekStartsOn) {
  const weekEndsOn = weekStartsOn === 0 ? 6 : weekStartsOn - 1;

  return weekEndsOn;
}

export class ScrollSpeed {
  clear = () => {
    this.lastPosition = null;
    this.delta = 0;
  };
  getScrollSpeed(scrollOffset) {
    if (this.lastPosition != null) {
      this.delta = scrollOffset - this.lastPosition;
    }
    this.lastPosition = scrollOffset;

    clearTimeout(this._timeout);
    this._timeout = setTimeout(this.clear, 50);

    return this.delta;
  }
}

export const scrollbarSize = getScrollbarSize();

export function emptyFn() {
  /* no-op */
}


export function sanitizeDate(date, {
  disabledDates = [],
  disabledDays = [],
  minDate,
  maxDate,
}) {
  // Selected date should not be disabled or outside the selectable range
  if (
    !date ||
    disabledDates.some(disabledDate => isSameDay(disabledDate, date)) ||
    disabledDays && disabledDays.indexOf(getDay(date)) !== -1 ||
    minDate && isBefore(date, startOfDay(minDate)) ||
    maxDate && isAfter(date, startOfDay(maxDate))
  ) {
    return null;
  }

  return date;
}

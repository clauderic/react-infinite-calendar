import getScrollbarSize from 'dom-helpers/util/scrollbarSize';
import getDaysInMonth from 'date-fns/get_days_in_month';
import getDay from 'date-fns/get_day';

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

function getWeek(year, date, weekStartsOn) {
  const yearStart = new Date(year, 0, 1); // 1st Jan of the Year

  return Math.ceil(
    ((date - yearStart) / 86400000 + yearStart.getDay() + 1 - weekStartsOn) / 7
  );
}

export function getWeeksInMonth(
  month,
  year = new Date().getFullYear(),
  weekStartsOn
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

function getEndOfWeekIndex(weekStartsOn) {
  const weekEndsOn = (weekStartsOn === 0) ? 6 : weekStartsOn - 1;

  return weekEndsOn;
}

export function getScrollSpeed(
  settings = {
    delay: 50, // in ms, higher means lower fidelity
  }
) {
  let lastPos;
  let newPos;
  let timer;
  let delta;

  function clear() {
    lastPos = null;
    delta = 0;
  }

  clear();

  return function(scrollY) {
    newPos = scrollY;
    if (lastPos != null) {
      delta = newPos - lastPos;
    }
    lastPos = newPos;
    clearTimeout(timer);
    timer = setTimeout(clear, settings.delay);
    return delta;
  };
}

export const scrollbarSize = getScrollbarSize();

export function emptyFn() { /* no-op */ }

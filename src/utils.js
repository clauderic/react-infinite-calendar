import moment from 'moment';
import 'moment-range';
import getScrollbarSize from 'dom-helpers/util/scrollbarSize';

export const keyCodes = {
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

export function getDaysInMonth(date) {
    return moment(date).range('month').toArray('days');
}

export function getMonthsForYear(year, min, max) {
    let months;

    if (min && min.year() == year) {
        months = moment.range([min, (max && max.year() == year) ? max : moment(min).endOf('year')]);
    } else if (max && max.year() == year) {
        months = moment.range([(min && min.year() == year) ? min : moment(year, 'YYYY').startOf('year'), max]);
    } else if (year) {
        months = moment(year, 'YYYY').range('year');
    } else {
        months = moment().range('year');
    }

    return months.toArray('months');
}

export function getMonth(monthDate) {
	let rows = {};
	let daysInMonth = monthDate.daysInMonth();
	let year = monthDate.year();
	let month = monthDate.month();

	let week, date, lastWeekVal;
	let weekIndex = -1;

	for (let i = 0; i < daysInMonth; i++) {
		date = moment(new Date(year,month,i+1));
		week = date.week();

		if (week !== lastWeekVal) {
			lastWeekVal = week;
			weekIndex++;
		}

		if (!rows[weekIndex]) {
			rows[weekIndex] = [];
		}

		rows[weekIndex].push({
			date,
			yyyymmdd: date.format('YYYYMMDD')
		});
	}

	return {
		date: monthDate,
		rows: Object.keys(rows).map((row) => rows[row])
	};
}

export function getWeeksInMonth(date, locale) {
	let first = moment(date).startOf('month');
	let last = moment(date).endOf('month');
	let firstWeek = first.locale(locale.name).week();
	let lastWeek = last.locale(locale.name).week();

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

	let rows = lastWeek - firstWeek;

	// If the last week contains 7 days, we need to add an extra row
	if (last.clone().subtract(6,'day').locale(locale.name).day() == locale.week.dow) {
		rows++;
	}

	return rows;
}

export function getScrollSpeed(settings) {
    settings = settings || {};

    var lastPos, newPos, timer, delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
      lastPos = null;
      delta = 0;
    }

    clear();

    return function(scrollY){
      newPos = scrollY;
      if ( lastPos != null ){ // && newPos < maxScroll
        delta = newPos -  lastPos;
      }
      lastPos = newPos;
      clearTimeout(timer);
      timer = setTimeout(clear, delay);
      return delta;
    };
}

export function parseDate (date) {
    if (date) {
        if (!date._isAMomentObject) date = moment(date);

        return {
            date,
            yyyymmdd: date.format('YYYYMMDD')
        }
    }
}

// Custom date prop validation
export function validDate(props, propName, componentName) {
    if (props[propName] && !moment(props[propName]).isValid()) {
        return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}. Should be a format supported by Moment.js, see http://momentjs.com/docs/.`);
    }
}

// Custom date prop validation
export function validParsedDate(props, propName, componentName) {
    let prop = props[propName];

    if (prop.date && moment(prop.date).isValid() && prop.yyyymmdd && prop.yyyymmdd.length == 8) {
        // valid
    } else {
        return new Error(`Invalid prop \`${propName}\` supplied to ${componentName}.`);
    }
}

export const scrollbarSize = getScrollbarSize();

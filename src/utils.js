import moment from 'moment';
import 'moment-range';

// Object.assign Polyfill
if (typeof Object.assign != 'function') {
	(function () {
		Object.assign = function (target) {
			'use strict';
			if (target === undefined || target === null) {
				throw new TypeError('Cannot convert undefined or null to object');
			}

			var output = Object(target);
			for (var index = 1; index < arguments.length; index++) {
				var source = arguments[index];
				if (source !== undefined && source !== null) {
					for (var nextKey in source) {
						if (Object.prototype.hasOwnProperty.call(source, nextKey)) {
							output[nextKey] = source[nextKey];
						}
					}
				}
			}
			return output;
		};
	})();
}

export const keyCodes = {
    enter: 13,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    shift: 16,
    control: 17,
    command: 91
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
        months = moment.range('year');
    }

    return months.toArray('months');
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

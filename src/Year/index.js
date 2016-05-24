import {getDaysInMonth, getMonthsForYear} from '../utils';

export default function Year({min, max, year, rowHeight}) {
	return getMonthsForYear(year, min, max).map((monthDate) => {
		let rows = {};
		let daysInMonth = getDaysInMonth(monthDate);

		let week, date, lastWeekVal;
		let weekIndex = -1;

		for (let i = 0, len = daysInMonth.length; i < len; i++) {
			date = daysInMonth[i];
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

		rows = Object.keys(rows).map((row) => rows[row]);
		let lastWeek = rows[rows.length - 1];
		let height = (rows.length >= 6 || rows.length >= 5 && lastWeek.length === 7) ? rowHeight * 5 : rowHeight * 4;

		return {
			date,
			rows,
			height
		};
	});
}

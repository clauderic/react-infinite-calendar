'use strict';

module.exports = {
  name: 'sv',
  todayLabel: {
    long: 'Idag'
  },
  blank: 'Välj ett datum...',
  headerFormat: 'ddd, MMM Do',
  week: {
    dow: 1,
    doy: 4
  },
  months: 'Januari_Februari_Mars_April_Maj_Juni_Juli_Augusti_September_Oktober_November_December'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
  weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
  weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
  weekdaysMin: 'Sö_Må_Ti_On_To_Fr_Lö'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    L: 'YYYY-MM-DD',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY LT',
    LLLL: 'dddd D MMMM YYYY LT'
  },
  calendar: {
    sameDay: '[Idag] LT',
    nextDay: '[Imorgon] LT',
    lastDay: '[Igår] LT',
    nextWeek: 'dddd LT',
    lastWeek: '[Förra] dddd[en] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'om %s',
    past: 'för %s sedan',
    s: 'några sekunder',
    m: 'en minut',
    mm: '%d minuter',
    h: 'en timme',
    hh: '%d timmar',
    d: 'en dag',
    dd: '%d dagar',
    M: 'en månad',
    MM: '%d månader',
    y: 'ett år',
    yy: '%d år'
  },
  ordinalParse: /\d{1,2}(e|a)/,
  ordinal: function ordinal(number) {
    var b = number % 10,
        output = ~~(number % 100 / 10) === 1 ? 'e' : b === 1 ? 'a' : b === 2 ? 'a' : b === 3 ? 'e' : 'e';
    return number + output;
  }
};
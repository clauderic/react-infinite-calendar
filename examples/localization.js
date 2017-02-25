import React from 'react';
import {render} from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const locale = {
  blank: 'Aucune date sélectionnée',
  headerFormat: 'dddd, D MMM',
  locale: require('date-fns/locale/fr'), // You need to pass in the date-fns locale for the language you want (unless it's EN)
  todayLabel: {
    long: "Aujourd'hui",
    short: 'Auj.',
  },
  weekdays: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'],
  weekStartsOn: 1, // Start the week on Monday
};

// All props are optional, so this is the minimum setup you need
render(<InfiniteCalendar locale={locale} />, document.querySelector('#root'));

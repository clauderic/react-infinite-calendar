import _withState from 'recompose/withState';
import _withPropsOnChange from 'recompose/withPropsOnChange';
import _withProps from 'recompose/withProps';
import _compose from 'recompose/compose';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { withDefaultProps } from './';
import { sanitizeDate, withImmutableProps } from '../utils';
import enhanceHeader from '../Header/withMultipleDates';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

// Enhance Day component to display selected state based on an array of selected dates
export var enhanceDay = _withPropsOnChange(['selected'], function (props) {
  return {
    isSelected: props.selected.indexOf(props.date) !== -1
  };
});

// Enhance year component
var enhanceYears = _withProps(function (_ref) {
  var displayDate = _ref.displayDate;
  return {
    selected: displayDate ? parse(displayDate) : null
  };
});

// Enhancer to handle selecting and displaying multiple dates
var withMultipleDates = _compose(withDefaultProps, _withState('scrollDate', 'setScrollDate', getInitialDate), _withState('displayDate', 'setDisplayDate', getInitialDate), withImmutableProps(function (_ref2) {
  var DayComponent = _ref2.DayComponent,
      HeaderComponent = _ref2.HeaderComponent,
      YearsComponent = _ref2.YearsComponent;
  return {
    DayComponent: enhanceDay(DayComponent),
    HeaderComponent: enhanceHeader(HeaderComponent),
    YearsComponent: enhanceYears(YearsComponent)
  };
}), _withProps(function (_ref3) {
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
      return sanitizeDate(date, props);
    }).map(function (date) {
      return format(date, 'YYYY-MM-DD');
    })
  };
}));

export { withMultipleDates };
function handleSelect(date, _ref4) {
  var onSelect = _ref4.onSelect,
      setDisplayDate = _ref4.setDisplayDate;

  onSelect(date);
  setDisplayDate(date);
}

function handleYearSelect(date, callback) {
  callback(parse(date));
}

function getInitialDate(_ref5) {
  var selected = _ref5.selected;

  return selected.length ? selected[0] : new Date();
}

export function defaultMultipleDateInterpolation(date, selected) {
  var selectedMap = selected.map(function (date) {
    return format(date, 'YYYY-MM-DD');
  });
  var index = selectedMap.indexOf(format(date, 'YYYY-MM-DD'));

  return index === -1 ? [].concat(selected, [date]) : [].concat(selected.slice(0, index), selected.slice(index + 1));
}
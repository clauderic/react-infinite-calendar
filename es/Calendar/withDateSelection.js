import _withState from 'recompose/withState';
import _withPropsOnChange from 'recompose/withPropsOnChange';
import _withProps from 'recompose/withProps';
import _compose from 'recompose/compose';

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import { withDefaultProps } from './';
import { sanitizeDate, withImmutableProps } from '../utils';
import format from 'date-fns/format';
import parse from 'date-fns/parse';

export var enhanceDay = _withPropsOnChange(['selected'], function (props) {
  return {
    isSelected: props.selected === props.date
  };
});

var enhanceYear = _withPropsOnChange(['selected'], function (_ref) {
  var selected = _ref.selected;
  return {
    selected: parse(selected)
  };
});

// Enhancer to handle selecting and displaying a single date
var withDateSelection = _compose(withDefaultProps, withImmutableProps(function (_ref2) {
  var DayComponent = _ref2.DayComponent,
      onSelect = _ref2.onSelect,
      setScrollDate = _ref2.setScrollDate,
      YearsComponent = _ref2.YearsComponent;
  return {
    DayComponent: enhanceDay(DayComponent),
    YearsComponent: enhanceYear(YearsComponent)
  };
}), _withState('scrollDate', 'setScrollDate', function (props) {
  return props.selected || new Date();
}), _withProps(function (_ref3) {
  var _onSelect = _ref3.onSelect,
      setScrollDate = _ref3.setScrollDate,
      props = _objectWithoutProperties(_ref3, ['onSelect', 'setScrollDate']);

  var selected = sanitizeDate(props.selected, props);

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
    selected: selected && format(selected, 'YYYY-MM-DD')
  };
}));

export { withDateSelection };
function handleYearSelect(date, _ref4) {
  var setScrollDate = _ref4.setScrollDate,
      selected = _ref4.selected,
      onSelect = _ref4.onSelect;

  var newDate = parse(date);

  onSelect(newDate);
  setScrollDate(newDate);
}
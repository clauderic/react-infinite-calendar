var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import { withImmutableProps } from '../utils';
import defaultSelectionRenderer from './defaultSelectionRenderer';
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


export default withImmutableProps(function (_ref) {
  var renderSelection = _ref.renderSelection;
  return {
    renderSelection: function renderSelection(values, props) {
      if (!values || !values.start && !values.end) {
        return null;
      }
      if (values.start === values.end) {
        return defaultSelectionRenderer(values.start, props);
      }

      var dateFormat = props.locale && props.locale.headerFormat || 'MMM Do';

      return React.createElement(
        'div',
        { className: styles.range, style: { color: props.theme.headerColor } },
        defaultSelectionRenderer(values.start, _extends({}, props, { dateFormat: dateFormat, key: 'start', shouldAnimate: false })),
        defaultSelectionRenderer(values.end, _extends({}, props, { dateFormat: dateFormat, key: 'end', shouldAnimate: false }))
      );
    }
  };
});
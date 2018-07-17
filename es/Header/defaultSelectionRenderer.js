import React from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
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
var animation = {
  'enter': 'Cal__Animation__enter',
  'enterActive': 'Cal__Animation__enterActive',
  'exit': 'Cal__Animation__exit',
  'exitActive': 'Cal__Animation__exitActive'
};


export default function defaultSelectionRenderer(value, _ref) {
  var display = _ref.display,
      key = _ref.key,
      locale = _ref.locale.locale,
      dateFormat = _ref.dateFormat,
      onYearClick = _ref.onYearClick,
      scrollToDate = _ref.scrollToDate,
      setDisplay = _ref.setDisplay,
      shouldAnimate = _ref.shouldAnimate;

  var date = parse(value);
  var values = date && [{
    active: display === 'years',
    handleClick: function handleClick(e) {
      onYearClick(date, e, key);
      setDisplay('years');
    },
    item: 'year',
    title: display === 'days' ? 'Change year' : null,
    value: date.getFullYear()
  }, {
    active: display === 'days',
    handleClick: function handleClick(e) {
      if (display !== 'days') {
        setDisplay('days');
      } else if (date) {
        scrollToDate(date, -40, true);
      }
    },
    item: 'day',
    title: display === 'days' ? 'Scroll to ' + format(date, dateFormat, { locale: locale }) : null,
    value: format(date, dateFormat, { locale: locale })
  }];

  return React.createElement(
    'div',
    {
      key: key,
      className: styles.wrapper,
      'aria-label': format(date, dateFormat + ' YYYY', { locale: locale })
    },
    values.map(function (_ref2) {
      var _classNames;

      var handleClick = _ref2.handleClick,
          item = _ref2.item,
          key = _ref2.key,
          value = _ref2.value,
          active = _ref2.active,
          title = _ref2.title;

      return React.createElement(
        'div',
        {
          key: item,
          className: classNames(styles.dateWrapper, styles[item], (_classNames = {}, _classNames[styles.active] = active, _classNames)),
          title: title
        },
        React.createElement(
          CSSTransition,
          {
            timeout: 250,
            classNames: animation,
            enter: shouldAnimate,
            exit: shouldAnimate
          },
          React.createElement(
            'span',
            {
              key: item + '-' + value,
              className: styles.date,
              'aria-hidden': true,
              onClick: handleClick
            },
            value.toString().split(' ').map(function (value, index) {
              return React.createElement(
                'span',
                { key: index },
                value,
                ' '
              );
            })
          )
        )
      );
    })
  );
}
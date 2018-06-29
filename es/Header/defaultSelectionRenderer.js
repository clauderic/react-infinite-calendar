import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
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
  'leave': 'Cal__Animation__leave',
  'leaveActive': 'Cal__Animation__leaveActive'
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
          CSSTransitionGroup,
          {
            transitionName: animation,
            transitionEnterTimeout: 250,
            transitionLeaveTimeout: 250,
            transitionEnter: shouldAnimate,
            transitionLeave: shouldAnimate
          },
          React.createElement(
            'span',
            {
              key: item + '-' + value,
              className: styles.date,
              'aria-hidden': true,
              onClick: handleClick
            },
            value
          )
        )
      );
    })
  );
}
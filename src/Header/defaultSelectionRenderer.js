import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import styles from './Header.scss';
import animation from './Animation.scss';

export default function defaultSelectionRenderer(value, {
  index = 0,
  display,
  locale: {headerFormat, locale},
  scrollToDate,
  setDisplay,
  shouldAnimate,
}) {
  const date = parse(value);
  const values = date && [
    {
      active: display === 'years',
      handleClick: e => {
        e && e.stopPropagation();
        setDisplay('years');
      },
      item: 'year',
      title: display === 'days' ? `Change year` : null,
      value: date.getFullYear(),
    },
    {
      active: display === 'days',
      handleClick: e => {
        e && e.stopPropagation();

        if (display !== 'days') {
          setDisplay('days');
        } else if (date) {
          scrollToDate(date, -40, true);
        }
      },
      item: 'day',
      title: display === 'days'
        ? `Scroll to ${format(date, headerFormat, {locale})}`
        : null,
      value: format(date, headerFormat, {locale}),
    },
  ];

  return (
    <div
      key={index}
      className={styles.wrapper}
      aria-label={format(format, headerFormat + ' YYYY', {locale})}
    >
      {values.map(({handleClick, item, key, value, active, title}) => {
        return (
          <div
            key={item}
            className={classNames(styles.dateWrapper, styles[item], {
              [styles.active]: active,
            })}
            title={title}
          >
            <ReactCSSTransitionGroup
              transitionName={animation}
              transitionEnterTimeout={250}
              transitionLeaveTimeout={250}
              transitionEnter={shouldAnimate}
              transitionLeave={shouldAnimate}
            >
              <span
                key={`${item}-${value}`}
                className={styles.date}
                aria-hidden={true}
                onClick={handleClick}
              >
                {value}
              </span>
            </ReactCSSTransitionGroup>
          </div>
        );
      })}
    </div>
  );
}

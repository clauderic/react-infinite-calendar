import React from 'react';
import {CSSTransition} from 'react-transition-group';
import classNames from 'classnames';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import styles from './Header.scss';
import animation from './Animation.scss';

export default function defaultSelectionRenderer(value, {
  display,
  key,
  locale: {locale},
  dateFormat,
  onYearClick,
  scrollToDate,
  setDisplay,
  shouldAnimate,
}) {
  const date = parse(value);
  const values = date && [
    {
      active: display === 'years',
      handleClick: e => {
        onYearClick(date, e, key);
        setDisplay('years');
      },
      item: 'year',
      title: display === 'days' ? `Change year` : null,
      value: date.getFullYear(),
    },
    {
      active: display === 'days',
      handleClick: e => {
        if (display !== 'days') {
          setDisplay('days');
        } else if (date) {
          scrollToDate(date, -40, true);
        }
      },
      item: 'day',
      title: display === 'days'
        ? `Scroll to ${format(date, dateFormat, {locale})}`
        : null,
      value: format(date, dateFormat, {locale}),
    },
  ];

  return (

    <div
      key={key}
      className={styles.wrapper}
      aria-label={format(date, dateFormat + ' YYYY', {locale})}
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
            <CSSTransition
              timeout={250}
              classNames={animation}
              enter={shouldAnimate}
              exit={shouldAnimate}
            >
              <span
                key={`${item}-${value}`}
                className={styles.date}
                aria-hidden={true}
                onClick={handleClick}
              >
                {value.toString().split(' ').map((value, index) =>
                  (<span key={index}>{value}{' '}</span>)
                )}
              </span>
            </CSSTransition>
          </div>
        );
      })}
    </div>
  );
}

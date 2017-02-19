import React, {PureComponent, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import format from 'date-fns/format';
import styles from './Header.scss';
import animation from './Animation.scss';

export default class Header extends PureComponent {
  static propTypes = {
    display: PropTypes.string,
    layout: PropTypes.string,
    locale: PropTypes.object,
    onClick: PropTypes.func,
    selectedDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.bool,
    ]),
    shouldHeaderAnimate: PropTypes.bool,
    theme: PropTypes.object,
  };
  render() {
    let {
      display,
      layout,
      locale: {blank, headerFormat, locale},
      scrollToDate,
      selectedDate,
      setDisplay,
      shouldHeaderAnimate,
      theme,
    } = this.props;
    let values = selectedDate && [
      {
        active: display === 'years',
        handleClick: e => {
          e && e.stopPropagation();
          setDisplay('years');
        },
        item: 'year',
        title: display === 'days' ? `Change year` : null,
        value: selectedDate.getFullYear(),
      },
      {
        active: display === 'days',
        handleClick: e => {
          e && e.stopPropagation();

          if (display !== 'days') {
            setDisplay('days');
          } else if (selectedDate) {
            scrollToDate(selectedDate, -40);
          }
        },
        item: 'day',
        key: format(selectedDate, 'YYYYMMDD', {locale}),
        title: display === 'days'
          ? `Scroll to ${format(format, headerFormat, {locale})}`
          : null,
        value: format(selectedDate, headerFormat, {locale}),
      },
    ];

    return (
      <div
        className={classNames(styles.root, {
          [styles.blank]: !selectedDate,
          [styles.landscape]: layout === 'landscape',
        })}
        style={{
          backgroundColor: theme.headerColor,
          color: theme.textColor.active,
        }}
      >
        {selectedDate
          ? <div
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
                      transitionEnter={shouldHeaderAnimate}
                      transitionLeave={shouldHeaderAnimate}
                    >
                      <span
                        key={`${item}-${key || value}`}
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
          : <div className={styles.wrapper}>{blank}</div>}
      </div>
    );
  }
}

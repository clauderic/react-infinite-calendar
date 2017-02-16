import React, {PureComponent, PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import format from 'date-fns/format';
import styles from './Header.scss';
import animation from './Animation.scss';

export default class Header extends PureComponent {
  static propTypes = {
    layout: PropTypes.string,
    locale: PropTypes.object,
    onClick: PropTypes.func,
    selectedDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.bool]),
    shouldHeaderAnimate: PropTypes.bool,
    theme: PropTypes.object,
    display: PropTypes.string
  };
  render() {
    let {
      display,
      layout,
      locale,
      scrollToDate,
      selectedDate,
      setDisplay,
      shouldHeaderAnimate,
      theme
    } = this.props;
    let values = selectedDate &&
      [
        {
          item: 'year',
          value: selectedDate.getFullYear(),
          active: display === 'years',
          title: display === 'days' ? `Change year` : null,
          handleClick: e => {
            e && e.stopPropagation();
            setDisplay('years');
          }
        },
        {
          item: 'day',
          key: format(selectedDate, 'YYYYMMDD'),
          value: format(selectedDate, locale.headerFormat),
          active: display === 'days',
          title: (
            display === 'days'
              ? `Scroll to ${format(format, locale.headerFormat)}`
              : null
          ),
          handleClick: e => {
            e && e.stopPropagation();

            if (display !== 'days') {
              setDisplay('days');
            } else if (selectedDate) {
              scrollToDate(selectedDate, -40);
            }
          }
        }
      ];

    return (
      <div
        className={classNames(styles.root, {
          [styles.blank]: !selectedDate,
          [styles.landscape]: layout === 'landscape'
        })}
        style={
          theme &&
            {backgroundColor: theme.headerColor, color: theme.textColor.active}
        }
      >
        {selectedDate
          ? <div
              className={styles.wrapper}
              aria-label={format(format, locale.headerFormat + ' YYYY')}
            >
              {values.map(({handleClick, item, key, value, active, title}) => {
                return (
                  <div
                    key={item}
                    className={classNames(styles.dateWrapper, styles[item], {
                      [styles.active]: active
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
          : <div className={styles.wrapper}>{locale.blank}</div>}
      </div>
    );
  }
}

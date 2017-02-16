import React, {PureComponent, PropTypes} from 'react';
import {scrollbarSize} from '../utils';
import styles from './Weekdays.scss';

export default class Weekdays extends PureComponent {
  static propTypes = {
    locale: PropTypes.object,
    theme: PropTypes.object
  };
  render() {
    let {locale: {weekdays}, theme} = this.props;

    return (
      <ul
        className={styles.root}
        style={{
          backgroundColor: theme.weekdayColor,
          color: theme.textColor.active,
          paddingRight: scrollbarSize
        }}
        aria-hidden={true}
      >
        {weekdays.map((val, index) => (
          <li key={`Weekday-${index}`} className={styles.day}>{val}</li>
        ))}
      </ul>
    );
  }
}

import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './Today.scss';

const CHEVRON = 'M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z';

export default class Today extends Component {
  static propTypes = {
    locale: PropTypes.object,
    scrollToDate: PropTypes.func,
    show: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    theme: PropTypes.object
  };
  shouldComponentUpdate(nextProps) {
    let {locale, show, theme} = this.props;
    return nextProps.locale !== locale ||
      nextProps.show !== show ||
      nextProps.theme !== theme;
  }
  scrollToToday = () => {
    let {scrollToDate} = this.props;

    scrollToDate(new Date(), -40);
  };
  render() {
    let {locale, show, theme} = this.props;
    return (
      <div
        className={classNames(styles.root, {
          [styles.show]: show,
          [styles.chevronUp]: show === 1,
          [styles.chevronDown]: show === -1
        })}
        style={{
          color: theme.floatingNav.color,
          backgroundColor: theme.floatingNav.background
        }}
        onClick={this.scrollToToday}
        ref="node"
      >
        {locale.todayLabel.long}
        <svg
          className={styles.chevron}
          x="0px"
          y="0px"
          width="14px"
          height="14px"
          viewBox="0 0 512 512"
        >
          <path
            fill={theme.floatingNav.chevron || theme.floatingNav.color}
            d={CHEVRON}
          />
        </svg>
      </div>
    );
  }
}

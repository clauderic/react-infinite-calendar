import React, {Children, PureComponent} from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import classNames from 'classnames';
import styles from './Slider.scss';
import transition from './transition.scss';

const DIRECTIONS = {
  LEFT: 0,
  RIGHT: 1,
};

const Arrow = ({direction, onClick}) => (
  <div
    className={classNames(styles.arrow, {
      [styles.arrowLeft]: direction === DIRECTIONS.LEFT,
      [styles.arrowRight]: direction === DIRECTIONS.RIGHT,
    })}
    onClick={() => onClick(direction)}
  >
    <svg
      x="0px"
      y="0px"
      viewBox="0 0 26 46"
    >
      <path d="M31.232233,34.767767 C32.2085438,35.7440777 33.7914562,35.7440777 34.767767,34.767767 C35.7440777,33.7914562 35.7440777,32.2085438 34.767767,31.232233 L14.767767,11.232233 C13.7914562,10.2559223 12.2085438,10.2559223 11.232233,11.232233 L-8.767767,31.232233 C-9.7440777,32.2085438 -9.7440777,33.7914562 -8.767767,34.767767 C-7.7914562,35.7440777 -6.2085438,35.7440777 -5.232233,34.767767 L12.9997921,16.5357418 L31.232233,34.767767 Z" id="Shape" fill="#FFF" transform="translate(13.000000, 23.000000) rotate(90.000000) translate(-13.000000, -23.000000) "></path>
    </svg>
  </div>
);

export default class Slider extends PureComponent {
  handleClick = (direction) => {
    let {children, index, onChange} = this.props;

    switch (direction) {
      case DIRECTIONS.LEFT:
        index = Math.max(0, index - 1);
        break;
      case DIRECTIONS.RIGHT:
        index = Math.min(index + 1, children.length);
        break;
      default:
        return;
    }

    onChange(index);
  }
  render() {
    const {children, index} = this.props;

    return (
      <div className={styles.root}>
        {index !== 0 &&
          <Arrow onClick={this.handleClick} direction={DIRECTIONS.LEFT} />
        }
        <CSSTransitionGroup
          className={styles.wrapper}
          component='div'
          style={{
            transform: `translate3d(-${100 * index}%, 0, 0)`,
          }}
          transitionName={transition}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {Children.map(children, (child, i) => (
            <div
              key={i}
              className={styles.slide}
              style={{transform: `translateX(${100 * i}%)`}}
            >
              {child}
            </div>
          ))}
        </CSSTransitionGroup>
        {index !== children.length - 1 &&
          <Arrow onClick={this.handleClick} direction={DIRECTIONS.RIGHT} />
        }
      </div>
    );
  }
}

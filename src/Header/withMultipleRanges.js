import React from 'react';
import {withImmutableProps} from '../utils';
import defaultSelectionRenderer from './defaultSelectionRenderer';
import styles from './Header.scss';
import Slider from './Slider';

export default withImmutableProps(({renderSelection}) => ({
  renderSelection: (values, props) => {
    if (!values.length || !values[0].start && !values[0].end) {
      return null;
    }

    const dates = values.sort(function (a, b) {
      return a.start > b.start;
    });
    const index = props.displayIndex;

    const dateFormat = props.locale && props.locale.headerFormat || 'MMM Do';

    const dateElements = values.map((value, idx) => {
      if (value.start === value.end) {
        return defaultSelectionRenderer(value.start, {...props, key: value.start+idx});
      } else {
        return (
          <div key={value.start+idx} className={styles.range} style={{color: props.theme.headerColor}}>
            {defaultSelectionRenderer(value.start, {...props, dateFormat, idx, key: 'start', shouldAnimate: false})}
            {defaultSelectionRenderer(value.end, {...props, dateFormat, idx, key: 'end', shouldAnimate: false})}
          </div>
        );
      }
    });
    return (
      <Slider
        index={index !== -1 ? index : dates.length - 1}
        onChange={chIndex =>
          props.setDisplayIndex(chIndex, () =>
            setTimeout(() => props.scrollToDate(dates[chIndex].start, 0, true), 50)
          )
        }
      >
        {dateElements}
      </Slider>
    );
  },
}));

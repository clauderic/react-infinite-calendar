import React from 'react';
import {withImmutableProps} from '../utils';
import defaultSelectionRenderer from './defaultSelectionRenderer';
import styles from './Header.scss';

export default withImmutableProps(({renderSelection}) => ({
  renderSelection: (values, props) => {
    if (!values || !values.start && !values.end) {
      return null;
    }
    if (values.start === values.end) {
      return defaultSelectionRenderer(values.start, props);
    }

    const dateFormat = props.locale && props.locale.headerFormat || 'MMM Do';

    return (
      <div className={styles.range} style={{color: props.theme.headerColor}}>
        {defaultSelectionRenderer(values.start, {...props, dateFormat, key: 'start', shouldAnimate: false})}
        {defaultSelectionRenderer(values.end, {...props, dateFormat, key: 'end', shouldAnimate: false})}
      </div>
    );
  },
}));

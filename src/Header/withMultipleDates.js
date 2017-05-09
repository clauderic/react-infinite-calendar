import React from 'react';
import {withImmutableProps} from '../utils';
import defaultSelectionRenderer from './defaultSelectionRenderer';
import Slider from './Slider';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

export default withImmutableProps(({renderSelection, setDisplayDate}) => ({
  renderSelection: (values, {scrollToDate, displayDate, ...props}) => {
    if (!values.length) {
      return null;
    }

    const dates = values.sort();
    const index = values.indexOf(format(parse(displayDate), 'YYYY-MM-DD'));

    return (
      <Slider
        index={index !== -1 ? index : dates.length - 1}
        onChange={index =>
          setDisplayDate(dates[index], () =>
            setTimeout(() => scrollToDate(dates[index], 0, true), 50)
          )
        }
      >
        {dates.map(value =>
          defaultSelectionRenderer(value, {
            ...props,
            key: index,
            scrollToDate,
            shouldAnimate: false,
          }))}
      </Slider>
    );
  },
}));

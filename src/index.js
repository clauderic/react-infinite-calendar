import React, {Component} from 'react';
import Calendar from './Calendar';
import {withDateSelection} from './Calendar/withDateSelection';

export {default as Calendar} from './Calendar';
export {withDateSelection} from './Calendar/withDateSelection';
export {withKeyboardSupport} from './Calendar/withKeyboardSupport';
export {withMultipleDates, defaultMultipleDateInterpolation} from './Calendar/withMultipleDates';
export {withRange, EVENT_TYPE} from './Calendar/withRange';

/*
 * By default, Calendar is a controlled component.
 * Export a sensible default for minimal setup
 */
export default class DefaultCalendar extends Component {
  static defaultProps = {
    Component: withDateSelection(Calendar),
    interpolateSelection: (selected) => selected,
  };
  state = {
    selected: typeof this.props.selected !== 'undefined'
      ? this.props.selected
      : new Date(),
  };
  componentWillReceiveProps({selected}) {
    if (selected !== this.props.selected) {
      this.setState({selected});
    }
  }
  handleSelect = (selected) => {
    const {onSelect, interpolateSelection} = this.props;

    if (typeof onSelect === 'function') { onSelect(selected); }

    this.setState({selected: interpolateSelection(selected, this.state.selected)});
  }
  render() {
    // eslint-disable-next-line no-unused-vars
    const {Component, interpolateSelection, ...props} = this.props;

    return (
      <Component
        {...props}
        onSelect={this.handleSelect}
        selected={this.state.selected}
      />
    );
  }
}

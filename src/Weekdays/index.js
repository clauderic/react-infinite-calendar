import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import moment from 'moment';
import range from 'lodash/range';
import {scrollbarSize} from '../utils';
const style = require('./Weekdays.scss');

export default class Weekdays extends Component {
	static propTypes = {
		locale: PropTypes.object,
		theme: PropTypes.object,
	};

	shouldComponentUpdate(nextProps) {
		return shallowCompare(this, nextProps);
	}

	render() {
		let {theme, locale} = this.props;

		return (
			<ul className={style.root} style={{backgroundColor: theme.weekdayColor, color: theme.textColor.default}}>
				{range(0,8).map((val, index) => {
				  if (index === 0) {
            return (
      				<li key={`Week-column`} className={style.weekColumn}>V.</li>
				  	);
				  } else {
            return (
						  <li key={`Weekday-${index}`} className={style.day}>{moment().weekday(index - 1).format('dd')}</li>
					  );
				  }
				})}
			</ul>
		);
	}
}

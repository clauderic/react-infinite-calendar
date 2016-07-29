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
		scrollToDate: PropTypes.func,
	};

	shouldComponentUpdate(nextProps) {
		return shallowCompare(this, nextProps);
	}

	scrollToToday = () => {
		let {scrollToDate} = this.props;
		scrollToDate(moment(), -40);
	};

	render() {
		let {theme, locale} = this.props;

		return (
			<ul className={style.root} style={{backgroundColor: theme.weekdayColor, color: theme.textColor.default, paddingRight: scrollbarSize}} aria-hidden={true}>
				{range(0,8).map((val, index) => {
				  if (index === 0) {
            return (
						  <li key={`Weekday-today`} className={style.today + " " + style.day} onClick={this.scrollToToday}>{locale.todayLabel.long}</li>
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

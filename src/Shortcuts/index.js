import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import moment from 'moment';
import range from 'lodash/range';
import {scrollbarSize} from '../utils';
import classNames from 'classnames';
const style = require('./Shortcuts.scss');


export default class Shortcuts extends Component {
	static propTypes = {
		locale: PropTypes.object,
		theme: PropTypes.object,
		handleTodayClick: PropTypes.func,
		scrollToDate: PropTypes.func,
	};

	shouldComponentUpdate(nextProps) {
		return shallowCompare(this, nextProps);
	}

	handleTodayClick = () => {
		let {handleTodayClick} = this.props;

		handleTodayClick(moment());
	};

	handleJumpClick = (distance) => {
		let {scrollToDate, handleTodayClick} = this.props;
		
		handleTodayClick(moment().add(distance, 'weeks'));
		scrollToDate(moment().add(distance, 'weeks'), 0);
	};

	render() {
		let {theme, locale} = this.props;

		return (
			<ul className={style.root} style={{backgroundColor: '#F5F5F5'}}>
  				<li key={`Shortcut-0`} className={classNames(style.root, style.shortcut, style.today)}><span onClick={this.handleTodayClick}>{locale.todayLabel.long}</span></li>
  				<li key={`Shortcut-1`} className={classNames(style.root, style.shortcut)}><span onClick={() => this.handleJumpClick(4)}>+4</span></li>
  				<li key={`Shortcut-3`} className={classNames(style.root, style.shortcut)}><span onClick={() => this.handleJumpClick(6)}>+6</span></li>
  				<li key={`Shortcut-4`} className={classNames(style.root, style.shortcut)}><span onClick={() => this.handleJumpClick(7)}>+7</span></li>
  				<li key={`Shortcut-5`} className={classNames(style.root, style.shortcut)}><span onClick={() => this.handleJumpClick(8)}>+8</span></li>
  				<li key={`Shortcut-6`} className={classNames(style.root, style.shortcut)}><span onClick={() => this.handleJumpClick(9)}>+9</span></li>
			</ul>
		);
	}
}

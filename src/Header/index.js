import React, {Component, PropTypes} from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
const style = require('./Header.scss');
const animation = require('./Animation.scss');

export default class Header extends Component {
	static propTypes = {
		layout: PropTypes.string,
		locale: PropTypes.object,
		onClick: PropTypes.func,
		selectedDate: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
		shouldHeaderAnimate: PropTypes.bool,
		theme: PropTypes.object
	};
	shouldComponentUpdate(nextProps) {
		return shallowCompare(this, nextProps);
	}
	render() {
		let {display, layout, locale, scrollToDate, selectedDate, setDisplay, shouldHeaderAnimate, theme} = this.props;
		let values = selectedDate && [
			{
				item: 'year',
				value: selectedDate.year(),
				active: (display === 'years'),
				title: (display === 'days') ? `Change year` : null,
				handleClick: (e) => {
					e && e.stopPropagation();
					setDisplay('years');
				}
			},
			{
				item: 'day',
				key: selectedDate.format('YYYYMMDD'),
				value: selectedDate.format(locale.headerFormat),
				active: (display === 'days'),
				title: (display === 'days') ? `Scroll to ${selectedDate.format(locale.headerFormat)}` : null,
				handleClick: (e) => {
					e && e.stopPropagation();

					if (display !== 'days') {
						setDisplay('days');
					} else if (selectedDate) {
						scrollToDate(selectedDate, -40);
					}
				}
			}
		];

		return (
			<div className={classNames(style.root, {[style.blank]: !selectedDate, [style.landscape]: layout == 'landscape'})} style={theme && {backgroundColor: theme.headerColor, color: theme.textColor.active}}>
				{(selectedDate) ?
					<div className={style.wrapper} aria-label={selectedDate.format(locale.headerFormat + ' YYYY')}>
						{values.map(({handleClick, item, key, value, active, title}) => {
							var output = (
								<span key={`${item}-${key || value}`} className={style.date} aria-hidden={true} onClick={handleClick}>
									{value}
								</span>
							);

							return (
								<div key={item} className={classNames(style.dateWrapper, style[item], {[style.active]: active})} title={title}>
									{(shouldHeaderAnimate) ?
										<ReactCSSTransitionGroup transitionName={animation} transitionEnterTimeout={250} transitionLeaveTimeout={250}>
											{output}
										</ReactCSSTransitionGroup>
									: output}
								</div>
							);
						})}
					</div>
				: <div className={style.wrapper}>{locale.blank}</div>}
			</div>
		);
	}
}

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
		rangeSelectionEndDate: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
		shouldHeaderAnimate: PropTypes.bool,
		theme: PropTypes.object,
		display: PropTypes.string
	};
	shouldComponentUpdate(nextProps) {
		return shallowCompare(this, nextProps);
	}
	getDateValues(selectedDate) {
		let {display, locale, scrollToDate, setDisplay} = this.props;

		return [
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
	}
	renderSelection() {
		const {selectedDate, shouldHeaderAnimate} = this.props;
		const selected = this.getDateValues(selectedDate);

		return selected.map(({handleClick, item, key, value, active, title}) => {
			return (
				<div key={item} className={classNames(style.dateWrapper, style[item], {[style.active]: active})} title={title}>
					<ReactCSSTransitionGroup transitionName={animation} transitionEnterTimeout={250} transitionLeaveTimeout={250} transitionEnter={shouldHeaderAnimate} transitionLeave={shouldHeaderAnimate}>
						<span key={`${item}-${key || value}`} className={style.date} aria-hidden={true} onClick={handleClick}>
							{value}
						</span>
					</ReactCSSTransitionGroup>
				</div>
			);
		})
	}
	renderRangeSelection() {
		const {rangeSelectionEndDate, selectedDate, theme} = this.props;

		return (
			<ul className={style.range} style={theme && {color: theme.headerColor}}>
				<li style={theme && {color: theme.textColor.active}}>
					<strong>From</strong>
					<span>{selectedDate.format('MMM Do')}</span>
				</li>
				<li style={theme && {color: theme.textColor.active}}>
					<strong>To</strong>
					<span>{rangeSelectionEndDate.format('MMM Do')}</span>
				</li>
			</ul>
		);
	}
	render() {
		let {layout, locale, selectedDate, rangeSelectionEndDate, theme} = this.props;
		// let numDays = rangeSelectionEndDate.diff(selectedDate,'days');

		return (
			<div className={classNames(style.root, {[style.blank]: !selectedDate, [style.landscape]: layout == 'landscape'})} style={theme && {backgroundColor: theme.headerColor, color: theme.textColor.active}}>
				{(selectedDate) ?
					<div className={style.wrapper} aria-label={selectedDate.format(locale.headerFormat + ' YYYY')}>
						{rangeSelectionEndDate.isSame(selectedDate, 'day')
							? this.renderSelection()
							: this.renderRangeSelection()
						}
					</div>
				: <div className={style.wrapper}>{locale.blank}</div>}
			</div>
		);
	}
}

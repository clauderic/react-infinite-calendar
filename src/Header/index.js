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
		let {layout, locale, onClick, selectedDate, shouldHeaderAnimate, theme} = this.props;
		let values = selectedDate && [
			{
				item: 'year',
				value: selectedDate.year()
			},
			{
				item: 'day',
				key: selectedDate.format('YYYYMMDD'),
				value: selectedDate.format(locale.headerFormat)
			}
		];

		return (
			<div className={classNames(style.root, {[style.blank]: !selectedDate, [style.landscape]: layout == 'landscape'})} style={theme && {backgroundColor: theme.headerColor, color: theme.textColor.active}} onClick={selectedDate ? () => onClick(selectedDate) : null}>
				{(selectedDate) ?
					<div className={style.wrapper} title={`Scroll to ${selectedDate.format(locale.headerFormat)}`} aria-label={selectedDate.format(locale.headerFormat + ' YYYY')}>
						{values.map(({item, key, value}) => {
							var output = (
								<span key={`${item}-${key || value}`} className={style.date} aria-hidden={true}>
									{value}
								</span>
							);

							return (
								<div key={item} className={classNames(style.dateWrapper, style[item])}>
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

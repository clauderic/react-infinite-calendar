import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import moment from 'moment';
const style = require('./Today.scss');

export default class Today extends Component {
	static propTypes = {
		locale: PropTypes.object,
		scrollToDate: PropTypes.func,
		show: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
		theme: PropTypes.object
	};
	shouldComponentUpdate(nextProps) {
		let {locale, show, theme} = this.props;
		return (nextProps.locale !== locale || nextProps.show !== show || nextProps.theme !== theme);
	}
	scrollToToday = () => {
		let {scrollToDate} = this.props;

		scrollToDate(moment(), -40);
	};
	render() {
		let {locale, show, theme} = this.props;

		return (
			<div className={classNames(style.root, {[style.show]: show, [style.chevronUp]: show == 1})} style={{color: theme.floatingNav.color, backgroundColor: theme.floatingNav.background}} onClick={this.scrollToToday} ref="node">
				<div className={style.wrapper}>
					{locale.todayLabel.long}
					<img className={style.chevron} width="14" src={`data:image/svg+xml;utf8,<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path fill="${theme.floatingNav.chevron || theme.floatingNav.color}" d="M256,298.3L256,298.3L256,298.3l174.2-167.2c4.3-4.2,11.4-4.1,15.8,0.2l30.6,29.9c4.4,4.3,4.5,11.3,0.2,15.5L264.1,380.9 c-2.2,2.2-5.2,3.2-8.1,3c-3,0.1-5.9-0.9-8.1-3L35.2,176.7c-4.3-4.2-4.2-11.2,0.2-15.5L66,131.3c4.4-4.3,11.5-4.4,15.8-0.2L256,298.3 z"/></svg>`} />
				</div>
			</div>
		);
	}
}

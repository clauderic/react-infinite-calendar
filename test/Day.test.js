import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';
import defaultTheme from '../src/theme';
import defaultLocale from '../src/locale';
import style from '../src/Day/Day.scss';
import Day from '../src/Day';

chai.use(chaiEnzyme());

describe("<Day/>", () => {
	it('fires a callback when clicked', () => {
		const date = moment('20160505', 'YYYYMMDD');
		const onClick = sinon.spy();
        const wrapper = shallow(
			<Day
				currentYear={2016}
				date={{date, yyyymmdd: date.format('YYYYMMDD')}}
				day={5}
				handleDayClick={onClick}
				locale={defaultLocale}
				theme={defaultTheme}
			/>
		);
		wrapper.find(`.${style.root}`).simulate('click');
		expect(onClick.calledOnce).to.equal(true);
	})
	it('does not fire a callback when disabled', () => {
		const date = moment('20180110', 'YYYYMMDD');
		const onClick = sinon.spy();
        const wrapper = shallow(
			<Day
				currentYear={2016}
				date={{date, yyyymmdd: date.format('YYYYMMDD')}}
				day={10}
				handleDayClick={onClick}
				isDisabled={true}
				locale={defaultLocale}
				theme={defaultTheme}
			/>
		);
		wrapper.find(`.${style.root}`).simulate('click');
		expect(onClick.called).to.equal(false);
	})
	it('honours custom theme color when selected', () => {
		const date = moment('20160308', 'YYYYMMDD');
        const wrapper = mount(
			<Day
				currentYear={2016}
				date={{date, yyyymmdd: date.format('YYYYMMDD')}}
				day={8}
				isSelected={true}
				locale={defaultLocale}
				theme={{
					selectionColor: 'red',
					textColor: {
						active: 'blue'
					}
				}}
			/>
		);
		expect(wrapper.find(`.${style.selection}`)).to.have.style('background-color', 'red');
		expect(wrapper.find(`.${style.selection}`)).to.have.style('color', 'blue');
	})
	it('supports dynamically setting the selection color with a function', () => {
		const date = moment('20160308', 'YYYYMMDD');
        const wrapper = mount(
			<Day
				currentYear={2016}
				date={{date, yyyymmdd: date.format('YYYYMMDD')}}
				day={8}
				isSelected={true}
				locale={defaultLocale}
				theme={{
					selectionColor: function() {return 'orange'},
					textColor: {
						active: 'blue'
					}
				}}
			/>
		);
		expect(wrapper.find(`.${style.selection}`)).to.have.style('background-color', 'orange');
	})
});

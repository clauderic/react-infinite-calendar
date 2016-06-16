import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';
import Header from '../src/Header';
import defaultLocale from '../src/locale';
import style from '../src/Header/Header.scss';

chai.use(chaiEnzyme());

describe("<Header/>", () => {
	it('renders the selected date', () => {
		const selectedDate = moment();
        const wrapper = mount(<Header selectedDate={selectedDate} locale={defaultLocale}/>);

        expect(wrapper.find(`.${style.year}`).text()).to.equal(selectedDate.format('YYYY'));
		expect(wrapper.find(`.${style.day}`).text()).to.equal(selectedDate.format(defaultLocale.headerFormat));
	})
    it('renders a blank state if no selected date', () => {
        const wrapper = mount(<Header locale={defaultLocale}/>);

        expect(wrapper.find(`.${style.root}`).hasClass(style.blank)).to.equal(true);
        expect(wrapper.text()).to.equal(defaultLocale.blank);
	})
	it('renders a blank state with custom text if no selected date and text is specified', () => {
		const customText = 'Custom text';
		const wrapper = mount(<Header selectedDate={false} noSelectedDateHeaderText={customText}/>);

		expect(wrapper.find(`.${style.root}`).hasClass(style.blank)).to.equal(true);
		expect(wrapper.text()).to.equal(customText);
	})
    it('switches display from years to date', () => {
		const onClick = sinon.spy();
        const wrapper = shallow(<Header display={'years'} selectedDate={moment()} setDisplay={onClick} locale={defaultLocale}/>);

        wrapper.find(`.${style.day} .${style.date}`).simulate('click');
        expect(onClick.calledOnce).to.equal(true);
	})
	it('scrolls to the selected date when date is clicked', () => {
		// But only if display={'days'}!
		const onClick = sinon.spy();
        const wrapper = shallow(<Header display={'days'} selectedDate={moment()} scrollToDate={onClick} locale={defaultLocale}/>);

        wrapper.find(`.${style.day} .${style.date}`).simulate('click');
        expect(onClick.calledOnce).to.equal(true);
	})
    it('switches display from date to years', () => {
		const onClick = sinon.spy();
        const wrapper = shallow(<Header display={'days'} selectedDate={moment()} setDisplay={onClick} locale={defaultLocale}/>);

        wrapper.find(`.${style.year} .${style.date}`).simulate('click');
        expect(onClick.called).to.equal(true);
	})
    it('honors the current theme', () => {
        const wrapper = mount(<Header theme={{headerColor: 'red', textColor: {active: 'blue'}}} locale={defaultLocale}/>);
        const rootEl = wrapper.find(`.${style.root}`);

        expect(rootEl).to.have.style('background-color', 'red');
        expect(rootEl).to.have.style('color', 'blue');
    })
});

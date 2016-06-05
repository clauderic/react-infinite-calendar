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
    it('honors the current theme', () => {
        const wrapper = mount(<Header theme={{headerColor: 'red', textColor: {active: 'blue'}}} locale={defaultLocale}/>);
        const rootEl = wrapper.find(`.${style.root}`);

        expect(rootEl).to.have.style('background-color', 'red');
        expect(rootEl).to.have.style('color', 'blue');
    })
});

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
    it('fires a callback when clicked on', () => {
		const onClick = sinon.spy();
        const wrapper = shallow(<Header selectedDate={moment()} onClick={onClick} locale={defaultLocale}/>);

        wrapper.simulate('click');
        expect(onClick.calledOnce).to.equal(true);
	})
    it('does not fire a callback when clicked on if there is no selectedDate', () => {
		const onClick = sinon.spy();
        const wrapper = shallow(<Header onClick={onClick} locale={defaultLocale}/>);

        wrapper.simulate('click');
        expect(onClick.called).to.equal(false);
	})
    it('honors the current theme', () => {
        const wrapper = mount(<Header theme={{headerColor: 'red', textColor: {active: 'blue'}}} locale={defaultLocale}/>);
        const rootEl = wrapper.find(`.${style.root}`);

        expect(rootEl).to.have.style('background-color', 'red');
        expect(rootEl).to.have.style('color', 'blue');
    })
});

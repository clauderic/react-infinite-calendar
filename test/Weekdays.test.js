import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import defaultTheme from '../src/theme';
import defaultLocale from '../src/locale';
import style from '../src/Weekdays/Weekdays.scss';
import Weekdays from '../src/Weekdays';

chai.use(chaiEnzyme());

describe("<Weekdays/>", () => {
	it('renders all seven days of the week', () => {
        const wrapper = shallow(<Weekdays theme={defaultTheme} />);
		expect(wrapper.find(`.${style.day}`)).to.have.length(7);
	})
    it('honours custom themes', () => {
        const wrapper = mount(<Weekdays theme={{weekdayColor: 'red', textColor: {active: 'blue'}}} />);
        expect(wrapper.find(`.${style.root}`)).to.have.style('background-color', 'red');
        expect(wrapper.find(`.${style.root}`)).to.have.style('color', 'blue');
	})
    it('renders the first day of the week based on locale', () => {
        defaultLocale.week.dow = 1; // Monday
        moment.updateLocale(defaultLocale.name, defaultLocale);
		moment.locale(defaultLocale.name);

        const wrapper = shallow(<Weekdays theme={defaultTheme} />);
		expect(wrapper.find(`.${style.day}`).at(0).text().toLowerCase()).to.equal('mon');
	})
    it('supports different languages', () => {
        const locale = {
            name: 'fr',
            weekdaysShort: "Dim_Lun_Mar_Mer_Jeu_Ven_Sam".split("_")
        };

        moment.updateLocale(locale.name, locale);
		moment.locale(locale.name);

        const wrapper = shallow(<Weekdays theme={defaultTheme} />);
		let days = wrapper.find(`.${style.day}`);

		locale.weekdaysShort.forEach((val, index) => {
			expect(days.at(index).text()).to.equal(val);
		});
	});
});

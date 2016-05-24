import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import moment from 'moment';
import {parseDate} from '../src/utils';
import Month from '../src/Month';
import Day from '../src/Day';
import Year from '../src/Year';

chai.use(chaiEnzyme());

describe("<Month/>", () => {
	const year = 2016;
	const min = moment();
	const max = moment().endOf('month');
	const month = Year({min, max, year})[0];
	const today = parseDate(moment());

	it('renders all days of a given month', () => {
		let {date, rows} = month;

        const wrapper = shallow(
			<Month
				displayDate={date}
				rows={rows}
				today={today}
			/>
		);
		expect(wrapper.find(Day)).to.have.length(moment().daysInMonth());
	})
});

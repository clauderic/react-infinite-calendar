import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import moment from 'moment';
import {getMonth, parseDate} from '../src/utils';
import Month from '../src/Month';

chai.use(chaiEnzyme());

describe("<Month/>", () => {
	const month = moment();
	const today = parseDate(moment());

	it('renders all days of a given month', () => {
		let {date, rows} = getMonth(month);

        const wrapper = shallow(
			<Month
				displayDate={date}
				rows={rows}
				today={today}
			/>
		);
		expect(wrapper.find('Day')).to.have.length(moment().daysInMonth());
	})
});

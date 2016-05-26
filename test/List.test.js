import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import {getMonthsForYear, parseDate} from '../src/utils';
import defaultLocale from '../src/locale';
import defaultTheme from '../src/theme';
import List from '../src/List';

import ReactDOM from 'react-dom';

chai.use(chaiEnzyme());

describe("<List/>", function() {
    const months = getMonthsForYear();
	const today = parseDate(moment());
    const min = parseDate(moment().startOf('year'));
    const max = parseDate(moment({year: 2050, month: 11, day: 31}));
    const list = (
        <List
            width={400}
            height={400}
            rowHeight={47}
            selectedDate={today}
            months={months}
            onDaySelect={function(){}}
            onScroll={function(){}}
            isScrolling={false}
            today={today}
            max={max}
            min={min}
            minDate={min}
            maxDate={max}
            theme={defaultTheme}
            locale={defaultLocale}
            overscanMonthCount={4}
        />
    );

	it('returns the correct month index for a given date', () => {
        const wrapper = shallow(list);
        const inst = wrapper.instance();
        const expectedIndex = moment().month();
        const actualIndex = inst.getMonthIndex(moment());

		expect(actualIndex).to.equal(expectedIndex);
	})
    it('returns the correct scrollTop offset for a given date', () => {
        const wrapper = mount(list);
        const inst = wrapper.instance();
        const expectedOffset = inst.getDateOffset(moment().startOf('year').add('5', 'day'));
        const actualOffset = 0;

        expect(actualOffset).to.equal(expectedOffset);
        expect(inst.getCurrentOffset()).to.equal(actualOffset);
    })
    it('scrolls to a given date when scrollToDate is called', (done) => {
        this.timeout(500);
        // Bootstrapping
        const div = document.createElement('div');
        document.body.appendChild(div);
        const inst = ReactDOM.render(list, div);

        // Test case
        const now = moment();
        const expectedOffset = inst.getDateOffset(now);

        inst.scrollToDate(now);

        setTimeout(() => {
            const actualOffset = inst.getCurrentOffset();
            expect(actualOffset).to.equal(expectedOffset);

            // Unmount the component
            ReactDOM.unmountComponentAtNode(div);
            done();
        }, 500);
    })
});

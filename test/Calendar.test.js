import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';
import {keyCodes} from '../src/utils';
import InfiniteCalendar from '../src/';
import Day from '../src/Day';

const style = {
	day: require('../src/Day/Day.scss')
};

chai.use(chaiEnzyme());

describe("<InfiniteCalendar/> Selected Date", () => {
	it('should default to `today` if no selected date is provided', () => {
		const wrapper = mount(<InfiniteCalendar/>);
		let selected = wrapper.find(`.${style.day.selected}`);

		expect(selected).to.have.length(1);
		expect(selected).to.have.data('date').equal(moment().format('YYYYMMDD'));
	})
	it('should allow for no initial selected date', () => {
		const wrapper = mount(<InfiniteCalendar selectedDate={false} />);

		expect(wrapper.find(`.${style.day.selected}`)).to.have.length(0);
	})
	it('should scroll to `today` when there is no initial selected date', () => {
		const wrapper = mount(<InfiniteCalendar selectedDate={false} />);

		expect(wrapper.find(`.${style.day.today}`)).to.have.length(1);
	})
});

describe("<InfiniteCalendar/> Callback Events", () => {
	it('should fire a callback onKeyDown', () => {
		const onKeyDown = sinon.spy();
		const wrapper = mount(<InfiniteCalendar onKeyDown={onKeyDown} keyboardSupport={true} />);
		wrapper.simulate('keydown', {keyCode: keyCodes.right});

		expect(onKeyDown.calledOnce).to.equal(true);
	})
	it('should fire a callback onScroll', () => {
		const onScroll = sinon.spy();

		// No need to simulate a scroll event, <InfiniteCalendar/> already scrolls to the selected date on componentDidMount
		mount(<InfiniteCalendar onScroll={onScroll} />);
		expect(onScroll.calledOnce).to.equal(true);
	})
	it('should fire a callback beforeSelect', () => {
		const beforeSelect = sinon.spy();
		const wrapper = mount(<InfiniteCalendar beforeSelect={beforeSelect} />);
		wrapper.find(Day).first().simulate('click');

		expect(beforeSelect.calledOnce).to.equal(true);
	})
	it('should fire a callback onSelect', () => {
		const onSelect = sinon.spy();
		const wrapper = mount(<InfiniteCalendar onSelect={onSelect} />);
		wrapper.find(Day).first().simulate('click');

		expect(onSelect.calledOnce).to.equal(true);
	})
	it('should fire a callback afterSelect', () => {
		const afterSelect = sinon.spy();
		const wrapper = mount(<InfiniteCalendar afterSelect={afterSelect} />);
		wrapper.find(Day).first().simulate('click');

		expect(afterSelect.calledOnce).to.equal(true);
	})
	it('should allow for select event to be cancelled', () => {
		const expected = moment();
		const beforeSelect = function() {
			return false;
		};
		const onSelect = sinon.spy();
		const afterSelect = sinon.spy();
		const wrapper = mount(<InfiniteCalendar selectedDate={expected} beforeSelect={beforeSelect} onSelect={onSelect} afterSelect={afterSelect} />);

		wrapper.find(Day).first().simulate('click');

		expect(onSelect.called).to.equal(false);
		expect(afterSelect.called).to.equal(false);
		expect(wrapper.state().selectedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
	})
});

describe("<InfiniteCalendar/> Keyboard Support", function() {
	it('should add one day when pressing the right arrow', () => {
		const original = moment();
		const expected = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={original} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.right});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
	})
	it('should subtract one day when pressing the left arrow', () => {
		const original = moment();
		const expected = moment().subtract(1, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={original} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.left});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
	})
	it('should add seven days when pressing the down arrow', () => {
		const original = moment();
		const expected = moment().add(7, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={original} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.down});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
	})
	it('should subtract seven days when pressing the up arrow', () => {
		const original = moment();
		const expected = moment().subtract(7, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={original} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.up});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
	})
	it('should not subtract past minDate', () => {
		const minDate = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar minDate={minDate} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.left});
		wrapper.simulate('keydown', {keyCode: keyCodes.up});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(minDate.format('YYYYMMDD'));
	})
	it('should not add past minDate', () => {
		const maxDate = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar maxDate={maxDate} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.right});
		wrapper.simulate('keydown', {keyCode: keyCodes.down});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(maxDate.format('YYYYMMDD'));
	})
	it('should select the highlighted date when pressing enter', () => {
		const expected = moment().add(7, 'day');
		const wrapper = mount(<InfiniteCalendar keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.down});
		wrapper.simulate('keydown', {keyCode: keyCodes.enter});
		expect(wrapper.state().selectedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
	})
});

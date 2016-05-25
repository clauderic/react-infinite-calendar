import React from 'react';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';
import {keyCodes} from '../src/utils';
import InfiniteCalendar from '../src/';
import Day from '../src/Day';

const style = {
	day: require('../src/Day/Day.scss')
};

chai.use(chaiEnzyme());

describe("<InfiniteCalendar/> Selected Date", function() {
	this.timeout(5000);

	it('should default to `today` if no selected date is provided', (done) => {
		const wrapper = mount(<InfiniteCalendar/>);
		let selected = wrapper.find(`.${style.day.selected}`);

		expect(selected).to.have.length(1);
		expect(selected).to.have.data('date').equal(moment().format('YYYYMMDD'));
		setTimeout(done);
	})
	it('should allow for no initial selected date', (done) => {
		const wrapper = mount(<InfiniteCalendar selectedDate={false} />);

		expect(wrapper.find(`.${style.day.selected}`)).to.have.length(0);
		setTimeout(done);
	})
	it('should scroll to `today` when there is no initial selected date', (done) => {
		const wrapper = mount(<InfiniteCalendar selectedDate={false} />);
        const inst = wrapper.instance();
        const list = inst.refs.List;
		const expectedOffset = list.getDateOffset(moment());
		const currentOffset = inst.getCurrentOffset();

		expect(currentOffset).to.equal(expectedOffset);
		expect(wrapper.find(`.${style.day.today}`)).to.have.length(1);
		setTimeout(done);
	})
});

describe("<InfiniteCalendar/> Methods", function() {
	it('should scroll to a given date when scrollToDate is called', () => {
		// Bootstrapping
        const div = document.createElement('div');
        document.body.appendChild(div);
        const inst = ReactDOM.render(<InfiniteCalendar/>, div);

		inst.scrollToDate(); // Should default to moment();

		const expectedOffset = inst.getDateOffset(moment());
		const actualOffset = inst.getCurrentOffset();
		expect(expectedOffset).to.equal(actualOffset);
		ReactDOM.unmountComponentAtNode(div);
	})
});

describe("<InfiniteCalendar/> Callback Events", function() {
	this.timeout(5000);

	it('should fire a callback onKeyDown', (done) => {
		const onKeyDown = sinon.spy();
		const wrapper = mount(<InfiniteCalendar onKeyDown={onKeyDown} keyboardSupport={true} />);
		wrapper.simulate('keydown', {keyCode: keyCodes.right});

		expect(onKeyDown.calledOnce).to.equal(true);
		setTimeout(done);
	})
	it('should fire a callback onScroll', (done) => {
		const onScroll = sinon.spy();

		// No need to simulate a scroll event, <InfiniteCalendar/> already scrolls to the selected date on componentDidMount
		mount(<InfiniteCalendar onScroll={onScroll} />);
		expect(onScroll.calledOnce).to.equal(true);
		setTimeout(done);
	})
	it('should fire a callback beforeSelect', (done) => {
		const beforeSelect = sinon.spy();
		const wrapper = mount(<InfiniteCalendar beforeSelect={beforeSelect} />);
		wrapper.find(Day).first().simulate('click');

		expect(beforeSelect.calledOnce).to.equal(true);
		setTimeout(done);
	})
	it('should fire a callback onSelect', (done) => {
		const onSelect = sinon.spy();
		const wrapper = mount(<InfiniteCalendar onSelect={onSelect} />);
		wrapper.find(Day).first().simulate('click');

		expect(onSelect.calledOnce).to.equal(true);
		setTimeout(done);
	})
	it('should fire a callback afterSelect', (done) => {
		const afterSelect = sinon.spy();
		const wrapper = mount(<InfiniteCalendar afterSelect={afterSelect} />);
		wrapper.find(Day).first().simulate('click');

		expect(afterSelect.calledOnce).to.equal(true);
		setTimeout(done);
	})
	it('should allow for select event to be cancelled', (done) => {
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
		setTimeout(done);
	})
});

describe("<InfiniteCalendar/> Keyboard Support", function() {
	this.timeout(5000);

	it('should add one day when pressing the right arrow', (done) => {
		const original = moment();
		const expected = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={original} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.right});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
		setTimeout(done);
	})
	it('should subtract one day when pressing the left arrow', (done) => {
		const original = moment();
		const expected = moment().subtract(1, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={original} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.left});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
		setTimeout(done);
	})
	it('should add seven days when pressing the down arrow', (done) => {
		const original = moment();
		const expected = moment().add(7, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={original} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.down});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
		setTimeout(done);
	})
	it('should subtract seven days when pressing the up arrow', (done) => {
		const original = moment();
		const expected = moment().subtract(7, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={original} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.up});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
		setTimeout(done);
	})
	it('should not subtract past minDate', (done) => {
		const minDate = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar minDate={minDate} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.left});
		wrapper.simulate('keydown', {keyCode: keyCodes.up});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(minDate.format('YYYYMMDD'));
		setTimeout(done);
	})
	it('should not add past minDate', (done) => {
		const maxDate = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar maxDate={maxDate} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.right});
		wrapper.simulate('keydown', {keyCode: keyCodes.down});
		expect(wrapper.state().highlightedDate.format('YYYYMMDD')).to.equal(maxDate.format('YYYYMMDD'));
		setTimeout(done);
	})
	it('should select the highlighted date when pressing enter', (done) => {
		const expected = moment().add(7, 'day');
		const wrapper = mount(<InfiniteCalendar keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.down});
		wrapper.simulate('keydown', {keyCode: keyCodes.enter});
		expect(wrapper.state().selectedDate.format('YYYYMMDD')).to.equal(expected.format('YYYYMMDD'));
		setTimeout(done);
	})
	it('should fire an onSelect callback when pressing enter', (done) => {
		const onSelect = sinon.spy();
		const wrapper = mount(<InfiniteCalendar onSelect={onSelect} keyboardSupport={true} />);

		wrapper.simulate('keydown', {keyCode: keyCodes.down});
		wrapper.simulate('keydown', {keyCode: keyCodes.enter});
		expect(onSelect.calledOnce).to.equal(true);
		setTimeout(done);
	})
});

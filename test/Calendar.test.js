import React from 'react';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';
import {keyCodes} from '../src/utils';
import InfiniteCalendar from '../src/';
import Day from '../src/Day';

const style = {
	day: require('../src/Day/Day.scss'),
	header: require('../src/Header/Header.scss')
};

chai.use(chaiEnzyme());

describe("<InfiniteCalendar/> Selected Date", function() {
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
	it('should allow for initial selected date range', () => {
		const start = moment();
		const end = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar allowRanges={true} selectedDate={start} selectedDateEnd={end} />);

		expect(wrapper.find(`.${style.day.selected}`)).to.have.length(2);
	})
	it('should allow for no initial selected range when start date is not set', () => {
		const end = moment();
		const wrapper = mount(<InfiniteCalendar selectedDate={false} selectedDateEnd={end} />);

		expect(wrapper.find(`.${style.day.selected}`)).to.have.length(0);
	})
	it('should reverse date range when with start>end', () => {
		const end = moment();
		const start = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar allowRanges={true} selectedDate={start} selectedDateEnd={end} />);

		expect(wrapper.find(`.${style.day.selected}`)).to.have.length(2);
		expect(wrapper.state().selectedDate.format('x')).to.be.below(wrapper.state().selectedDateEnd.format('x'));
	})
	it('should scroll to `today` when there is no initial selected date', () => {
		const wrapper = mount(<InfiniteCalendar selectedDate={false} />);
        const inst = wrapper.instance();
        const list = inst.refs.List;
		const expectedOffset = list.getDateOffset(moment());
		const currentOffset = inst.getCurrentOffset();

		expect(currentOffset).to.equal(expectedOffset);
		expect(wrapper.find(`.${style.day.today}`)).to.have.length(1);
	})
	it('should default to maxDate if the selectedDate is after maxDate', () => {
		const max = moment();
		const wrapper = mount(<InfiniteCalendar selectedDate={moment().add(1, 'day')} maxDate={max} />);

		expect(wrapper.state().selectedDate.format('x')).to.equal(max.format('x'));
	})
	it('should default to minDate if the selectedDate is before minDate', () => {
		const min = moment();
		const wrapper = mount(<InfiniteCalendar selectedDate={moment().subtract(1, 'day')} minDate={min} />);

		expect(wrapper.state().selectedDate.format('x')).to.equal(min.format('x'));
	})
	it('should not allow selectedDate to be disabled', () => {
		const wrapper = mount(<InfiniteCalendar selectedDate={moment()} disabledDates={[moment()]} />);

		expect(wrapper.find(`.{style.day.selected}`)).to.have.length(0);
	})
});

describe("<InfiniteCalendar/> Lifecycle Methods", function() {
	it('calls componentDidMount', () => {
		const spy = sinon.spy(InfiniteCalendar.prototype, 'componentDidMount');
		mount(<InfiniteCalendar />);
		expect(spy.calledOnce).to.equal(true);
	})
	it('calls componentWillReceiveProps when props change', () => {
		const spy = sinon.spy(InfiniteCalendar.prototype, 'componentWillReceiveProps');
		const wrapper = mount(<InfiniteCalendar />);
		wrapper.setProps({selectedDate: false});
		expect(spy.calledOnce).to.equal(true);
	})
	it('updates the selectedDate state when props.selectedDate changes', () => {
		const initial = moment();
		const updated = moment('2016-01-01', 'YYYY-MM-DD');
		const wrapper = mount(<InfiniteCalendar selectedDate={initial}/>);
		wrapper.setProps({selectedDate: updated});
		expect(wrapper.props().selectedDate).to.equal(updated);
		expect(wrapper.state().selectedDate.format('x')).to.equal(updated.format('x'));
	})
	it('updates the selectedDateEnd state when props.selectedDateEnd changes', () => {
		const start = moment();
		const initial = moment();
		const updated = moment().add(1, 'day');
		const wrapper = mount(<InfiniteCalendar selectedDate={start} selectedDateEnd={initial}/>);
		wrapper.setProps({selectedDateEnd: updated});
		expect(wrapper.props().selectedDateEnd).to.equal(updated);
		expect(wrapper.state().selectedDateEnd.format('x')).to.equal(updated.format('x'));
	})
	it('updates when props.minDate changes', (done) => {
		this.timeout(500);
		const minDate = moment().add(10, 'day');
		const wrapper = mount(<InfiniteCalendar />);

		setTimeout(() => {
			const spy = sinon.spy(InfiniteCalendar.prototype, 'updateYears');
			wrapper.setProps({minDate});
			expect(spy.calledOnce).to.equal(true);
			done();
		}, 500)
	})
	it('updates locale when props.locale changes', (done) => {
		this.timeout(500);
		const selectedDate = moment();
		const wrapper = mount(<InfiniteCalendar selectedDate={moment()} />);
		const locale = {
			name: 'fr',
			headerFormat: 'dddd, Do MMM',
			months: ["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"],
			monthsShort: ["Janv","Fevr","Mars","Avr","Mai","Juin","Juil","Aout","Sept","Oct","Nov","Dec"],
			weekdays: ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"],
			weekdaysShort: ["Dim","Lun","Mar","Mer","Jeu","Ven","Sam"],
			blank: 'Aucune date selectionnee',
			todayLabel: {
				long: 'Aujourd\'hui',
				short: 'Auj.'
			}
		};

		setTimeout(() => {
			const spy = sinon.spy(InfiniteCalendar.prototype, 'updateLocale');
			wrapper.setProps({locale});
			expect(spy.calledOnce).to.equal(true);
			expect(wrapper.find(`.${style.header.day} .${style.header.date}`).text()).to.equal(selectedDate.format(locale.headerFormat));
			expect(wrapper.find(`.${style.day.today} .${style.day.selection} .${style.day.month}`).text()).to.equal(locale.todayLabel.short);
			done();
		}, 500)
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
	this.timeout(3000);

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

describe("<InfiniteCalendar/> Range Selection", function() {
	this.timeout(3000);

	it('should select a range when clicking two days', (done) => {
		const wrapper = mount(<InfiniteCalendar allowRanges={true} />);
		wrapper.find(Day).first().simulate('mousedown');
		wrapper.find(Day).first().simulate('mouseup');
		wrapper.find(Day).first().simulate('click');

		// wrapper.find(Day).second().simulate('mousedown');
		// wrapper.find(Day).second().simulate('mouseup');
		// wrapper.find(Day).second().simulate('click');

		//TODO: how do I assert that the proper days were selected

		setTimeout(done);
	})
	it('should select a range when clicking and dragging', (done) => {
		const wrapper = mount(<InfiniteCalendar allowRanges={true} rangeSelectWithDrag={true} />);
		wrapper.find(Day).first().simulate('mousedown');
		// wrapper.find(Day).second().simulate('mouseover');
		// wrapper.find(Day).third().simulate('mouseup');

		//TODO: how do I assert that the proper days were selected

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

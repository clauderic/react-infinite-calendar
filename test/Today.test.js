import React from 'react';
import ReactDOM from 'react-dom';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import moment from 'moment';
import Today from '../src/Today';
import InfiniteCalendar from '../src/index';
import defaultTheme from '../src/theme';
import defaultLocale from '../src/locale';

chai.use(chaiEnzyme());

describe("<Today/>", function () {
    it('should fire a callback once when clicked on', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(<Today locale={defaultLocale} theme={defaultTheme} scrollToDate={onClick}/>);
        wrapper.simulate('click');
        expect(onClick.calledOnce).to.equal(true);
    })
    it('should not be visible when scrollTop is zero', (done) => {
        this.timeout(300);
        // Bootstrapping
        const div = document.createElement('div');
        document.body.appendChild(div);
        const inst = ReactDOM.render(<InfiniteCalendar/>, div);

		inst.refs.List.scrollTo(0); // Should default to moment();

        setTimeout(() => {
            expect(inst.state.showToday).to.equal(false);
            ReactDOM.unmountComponentAtNode(div);
            done();
        }, 300)
    })
    it('should be visible when the user scrolls past the current date', (done) => {
        this.timeout(400);
        // Bootstrapping
        const div = document.createElement('div');
        document.body.appendChild(div);
        const inst = ReactDOM.render(<InfiniteCalendar/>, div);

		inst.refs.List.scrollTo(inst.getDateOffset(moment().add(3, 'month')))

        setTimeout(() => {
            expect(inst.state.showToday).to.equal(1);

            inst.refs.List.scrollTo(inst.getDateOffset(moment().subtract(4, 'month')))
            setTimeout(() => {
                expect(inst.state.showToday).to.equal(-1);
                ReactDOM.unmountComponentAtNode(div);
                done();
            }, 200)
        }, 200)
    })
    it('should not be initially visible, no matter the selected date', () => {
        const wrapper = shallow(<InfiniteCalendar/>);
        expect(wrapper.state().showToday).to.equal(undefined);
    })
});

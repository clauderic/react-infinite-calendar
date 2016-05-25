import React from 'react';
import chai, {expect} from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Today from '../src/Today';
import defaultTheme from '../src/theme';
import defaultLocale from '../src/locale';

chai.use(chaiEnzyme());

describe("<Month/>", function () {
    it('should fire a callback once when clicked on', () => {
        const onClick = sinon.spy();
        const wrapper = shallow(<Today locale={defaultLocale} theme={defaultTheme} scrollToDate={onClick}/>);
        wrapper.simulate('click');
        expect(onClick.calledOnce).to.equal(true);
    })
});

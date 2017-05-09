import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import Routes from './../../components/Routes.jsx';

describe('Routes Component', () => {
  const spy = sinon.spy(Routes.prototype, 'requireAuth');
  const wrapper = shallow(<Routes />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be react router', () => {
    const actual = wrapper.type().displayName;
    const expected = 'Router';
    expect(actual).toEqual(expected);
  });

  it('should have an authentication', () => {
    wrapper.instance().requireAuth();
    sinon.assert.calledOnce(spy);
  });
});


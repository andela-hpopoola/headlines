import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Logout from './../../components/Logout.jsx';

describe('Logout Component', () => {
  const spyLogOut = sinon.spy(Logout.prototype, 'logOut');
  const wrapper = shallow(<Logout />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });
});


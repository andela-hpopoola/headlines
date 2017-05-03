import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Login from './../../components/Login.jsx';

describe('Login Component', () => {
  const wrapper = shallow(<Login />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `login__page`', () => {
    const actual = wrapper.node.props.className.includes('login__page');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});


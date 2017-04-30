import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Nav from '../../components/Nav.jsx';

describe('Nav Component', () => {
  const wrapper = shallow(<Nav />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a navigation item', () => {
    const actual = wrapper.type();
    const expected = 'nav';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `navbar`', () => {
    const actual = wrapper.node.props.className.includes('navbar');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});


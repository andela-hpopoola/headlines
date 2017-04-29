import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Home from '../../components/Home.jsx';

describe('Home Component', () => {
  const wrapper = shallow(<Home />);
  const childNode = wrapper.children().nodes;

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('should contain a top level header (h1)', () => {
    const actual = childNode[0].type;
    const expected = 'h1';
    expect(actual).toEqual(expected);
  });
});


import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Share from './../../components/Share.jsx';

describe('Share Component', () => {
  const wrapper = shallow(<Share />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `Share__container`', () => {
    const actual = wrapper.node.props.className.includes('Share__container');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});


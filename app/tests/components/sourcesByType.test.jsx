import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SourcesByType from './../../components/SourcesByType.jsx';

describe('SourcesByType Component', () => {
  const params = { sport: ['bbc-sport_BBC_top'], entertainment: ['bbc_BBC_top'] };
  const wrapper = shallow(
    <SourcesByType
      sourcesObj = {params}
    />
  );

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `widget`', () => {
    const actual = wrapper.node.props.className.includes('widget');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});


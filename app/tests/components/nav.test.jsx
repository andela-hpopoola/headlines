import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Nav from '../../components/Nav.jsx';

describe('Nav Component', () => {
  const wrapper = shallow(<Nav />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'nav';
    expect(actual).toEqual(expected);
  });
});


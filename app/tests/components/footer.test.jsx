
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Footer from './../../components/Footer.jsx';

describe('Footer Component', () => {
  const wrapper = shallow(<Footer />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a Footeritem', () => {
    const actual = wrapper.type();
    const expected = 'footer';
    expect(actual).toEqual(expected);
  });
});


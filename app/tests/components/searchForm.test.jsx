import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SearchForm from '../../components/SearchForm.jsx';

describe('SearchForm Component', () => {
  const wrapper = shallow(<SearchForm />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });
});


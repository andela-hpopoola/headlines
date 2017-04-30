import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
// import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
import SearchForm from '../../components/SearchForm.jsx';

expect.extend(expectJSX);

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

  it('has a class name of `search`', () => {
    const actual = wrapper.node.props.className.includes('search');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});


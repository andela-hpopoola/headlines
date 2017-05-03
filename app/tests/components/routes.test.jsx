import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Routes from './../../components/Routes.jsx';

describe('Routes Component', () => {
  const wrapper = shallow(<Routes />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be react router', () => {
    const actual = wrapper.type().displayName;
    const expected = 'Router';
    expect(actual).toEqual(expected);
  });
});


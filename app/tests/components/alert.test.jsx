import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import Alert from '../../components/Alert.jsx';

describe('Alert', () => {
  const wrapper = shallow(<Alert />);
  const props = { alertType: 'success', message: 'testing' };

  wrapper.setProps(props);
  const alertProps = wrapper.props().children.props;

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `alert`', () => {
    const actual = alertProps.className.includes('alert');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});


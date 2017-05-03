import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
import Alert from './../../components/Alert.jsx';

expect.extend(expectJSX);

describe('Alert Component', () => {
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

  it('should render the alert type', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Alert alertType={ props.alertType } message={ props.message } />);
    const actual = renderer.getRenderOutput();
    const expected = <div className={ `alert alert-${props.alertType}` } role="alert"> { props.message } </div>;

    expect(actual).toIncludeJSX(expected);
  });
});


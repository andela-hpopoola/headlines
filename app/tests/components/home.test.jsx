import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import Home from './../../components/Home.jsx';

describe('Home Component', () => {
  const spyOnChange = sinon.spy(Home.prototype, 'onChange');
  const spyComponentDidMount = sinon.spy(Home.prototype, 'componentDidMount');
  const spyComponentWillUnmount = sinon.spy(Home.prototype, 'componentWillUnmount');
  const spySearchSources = sinon.spy(Home.prototype, 'searchSources');
  const wrapper = shallow(<Home />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('searchSources Method is called once', () => {
    wrapper.instance().searchSources('1');
    sinon.assert.calledOnce(spySearchSources);
  });

  it('OnChange method is called once', () => {
    wrapper.instance().onChange();
    sinon.assert.calledOnce(spyOnChange);
  });

  it('Component did mount method is called once', () => {
    wrapper.instance().componentDidMount();
    sinon.assert.calledOnce(spyComponentDidMount);
  });

  it('Component will unmount method is called once', () => {
    wrapper.instance().componentWillUnmount();
    sinon.assert.calledOnce(spyComponentWillUnmount);
  });
});


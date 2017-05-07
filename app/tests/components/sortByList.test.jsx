import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import SortByList from './../../components/SortByList.jsx';

describe('SortByList Component', () => {
  const spy = sinon.spy(SortByList.prototype, 'handleSort');
  const onClick = () => true;
  const wrapper = shallow(
    <SortByList
      sort = {['top', 'latest']}
      sourceID = 'cnn'
      currentSort = 'latest'
      onClick = {onClick}
    />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `btn-group`', () => {
    const actual = wrapper.node.props.className.includes('btn-group');
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('should have the handleSort Method', () => {
    wrapper.instance().handleSort('cnn', 'top');
    sinon.assert.calledOnce(spy);
  });
});


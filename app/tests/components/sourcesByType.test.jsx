import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import sinon from 'sinon';
import SourcesByType from './../../components/SourcesByType.jsx';

describe('SourcesByType Component', () => {
  const spy = sinon.spy(SourcesByType.prototype, 'loadPage');
  const onClick = () => true;
  const params = {
    sport: ['bbc-sport_BBC_top'],
    entertainment: ['bbc_BBC_top']
  };
  const wrapper = shallow(
    <SourcesByType
      sourcesObj = {params} onClick={onClick}
    />
  );

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'ul';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `widget`', () => {
    const actual = wrapper.node.props.className.includes('widget');
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('should have the loadPage Method', () => {
    wrapper.instance().loadPage('cnn', 'top');
    sinon.assert.calledOnce(spy);
  });
});


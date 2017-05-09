import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import expect from 'expect';
import News from './../../components/News.jsx';

describe('News Component', () => {
  const spyLoadPage = sinon.spy(News.prototype, 'loadPage');
  const spyLogChange = sinon.spy(News.prototype, 'logChange');
  const spyLoadSortPage = sinon.spy(News.prototype, 'loadSortPage');
  const spyOnChange = sinon.spy(News.prototype, 'onChange');
  const params = { source: 'cnn', sortby: 'top' };
  const wrapper = shallow(<News params={params} />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `News__page`', () => {
    const actual = wrapper.node.props.className.includes('News__page');
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('Load Page is called once', () => {
    wrapper.instance().loadPage();
    sinon.assert.calledOnce(spyLoadPage);
  });

  it('Log Change is called once', () => {
    wrapper.instance().logChange({ value: 'cnn' });
    sinon.assert.calledOnce(spyLogChange);
  });

  it('Load Sort Page is called once', () => {
    wrapper.instance().loadSortPage('cnn', 'top');
    sinon.assert.calledOnce(spyLoadSortPage);
  });

  it('OnChange method is called once', () => {
    wrapper.instance().onChange();
    sinon.assert.calledOnce(spyOnChange);
  });
});


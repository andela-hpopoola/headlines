import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import News from '../../components/News.jsx';

describe('News Component', () => {
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
});


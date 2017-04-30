import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import NewsSingle from '../../components/NewsSingle.jsx';

describe('NewsSingle Component', () => {
  const article = {
    title: 'Sample Article',
    url: 'http://www.andela.com',
    urlToImage: 'sample_image.jpg',
    author: 'Haruna Popoola',
    publishedAt: '2017-08-01'
  };

  const wrapper = shallow(<NewsSingle article={article} />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('have a class name of `col-sm-6`', () => {
    const actual = wrapper.node.props.className.includes('col-sm-6');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});


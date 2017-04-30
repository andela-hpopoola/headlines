import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import NewsList from '../../components/NewsList.jsx';

describe('NewsList Component', () => {
  const articles = [
    {
      title: 'Sample Article 1',
      url: 'http://www.andela.com',
      urlToImage: 'sample_image.jpg',
      author: 'Haruna Popoola',
      publishedAt: '2017-08-01'
    },
    {
      title: 'Sample Article2',
      url: 'http://www.andela.com',
      urlToImage: 'sample_image2.jpg',
      author: 'Haruna Popoola',
      publishedAt: '2017-08-01'
    },
  ];

  let wrapper = shallow(<NewsList />);

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
    wrapper = shallow(<NewsList articles={articles} />);
    const actual = wrapper.type();
    const expected = 'div';
    expect(actual).toEqual(expected);
  });

  it('has a class name of `row`', () => {
    const actual = wrapper.node.props.className.includes('row');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});


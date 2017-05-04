import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import SourcesList from './../../components/SourcesList.jsx';

describe('SourcesList Component', () => {
  const wrapper = shallow(
    <SourcesList
      sources = {[
        { id: 'cnn', sortBysAvailable: ['top'] },
        { id: 'techcrunch', sortBysAvailable: ['top', 'latest'] }
      ]}
    />
  );

  it('should exists', () => {
    expect(wrapper).toExist();
  });

  it('should be a div item', () => {
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


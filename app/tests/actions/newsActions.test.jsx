// import React from 'react';
// import { shallow } from 'enzyme';
import expect from 'expect';
// import TestUtils from 'react-addons-test-utils';
import expectJSX from 'expect-jsx';
import NewsActions from '../../actions/newsActions';

expect.extend(expectJSX);

describe('News Action', () => {
  it('should exists', () => {
    expect(NewsActions).toExist();
  });

  // it('should get all sources', () => {
  //   expect(NewsActions.getAllSources()).toExist();
  // });
});


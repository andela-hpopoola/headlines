import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';
import NewsList from '../../components/NewsList.jsx';

describe('Newslist', () => {
  it('should exist', () => {
    expect(NewsList).toExist();
  });
});

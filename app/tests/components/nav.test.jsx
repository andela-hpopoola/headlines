import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';
import Nav from '../../components/Nav.jsx';

describe('Nav', () => {
  it('should exist', () => {
    expect(Nav).toExist();
  });
});

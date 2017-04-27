import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';
import Logout from '../../components/Logout.jsx';

describe('Logout', () => {
  it('should exist', () => {
    expect(Logout).toExist();
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';
import Login from '../../components/Login.jsx';

describe('Login', () => {
  it('should exist', () => {
    expect(Login).toExist();
  });
});

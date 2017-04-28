import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import Home from '../../components/Home.jsx';

describe('Home', () => {
  it('should exist', () => {
    expect(Home).toExist();
  });
});

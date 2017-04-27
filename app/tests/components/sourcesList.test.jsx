import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-dom/test-utils';
import SourcesList from '../../components/SourcesList.jsx';

describe('SourcesList', () => {
  it('should exist', () => {
    expect(SourcesList).toExist();
  });
});

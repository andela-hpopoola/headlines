import expect from 'expect';
import ActionTypes from './../../constants/actionTypes';

describe('ActionTypes Constant', () => {
  it('should exists', () => {
    expect(ActionTypes).toExist();
  });

  it('should output `ALL_NEWS` for ALL_NEWS', () => {
    const actual = ActionTypes.ALL_NEWS;
    const expected = 'ALL_NEWS';
    expect(actual).toEqual(expected);
  });

  it('should output `ALL_SOURCES` for ALL_SOURCES', () => {
    const actual = ActionTypes.ALL_SOURCES;
    const expected = 'ALL_SOURCES';
    expect(actual).toEqual(expected);
  });

  it('should output `SEARCH_SOURCES` for SEARCH_SOURCES', () => {
    const actual = ActionTypes.SEARCH_SOURCES;
    const expected = 'SEARCH_SOURCES';
    expect(actual).toEqual(expected);
  });
});


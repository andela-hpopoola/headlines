import expect from 'expect';
import Dispatcher from '../../dispatcher/appDispatcher';
import NewsStore from '../../stores/newsStore';
import ActionTypes from '../../constants/actionTypes';

describe('Source Store', () => {
  const sources = [
    { id: 'abc-news-au', name: 'ABC News (AU)', category: 'general' },
    { id: 'al-jazeera-english', name: 'Al Jazeera English', category: 'general' },
    { id: 'ars-technica', name: 'Ars Technica', category: 'technology' },
    { id: 'associated-press', name: 'Associated Press', category: 'general' },
    { id: 'bbc-news', name: 'BBC News', category: 'general' },
    { id: 'bbc-sport', name: 'BBC Sport', category: 'sport' },
  ];

  const filteredSources = [
    { id: 'bbc-news', name: 'BBC News', category: 'general' },
    { id: 'bbc-sport', name: 'BBC Sport', category: 'sport' },
  ];

  it('should exists', () => {
    expect(NewsStore).toExist();
  });

  Dispatcher.dispatch({
    actionType: ActionTypes.ALL_SOURCES,
    sources
  });

  Dispatcher.dispatch({
    actionType: ActionTypes.SEARCH_SOURCES,
    queryString: 'bbc'
  });

  it('should receive sources from Dispatcher', () => {
    const actual = NewsStore.getAllSources();
    const expected = sources;
    expect(actual).toEqual(expected);
  });

  it('should search and the filtered source when bbc is searched', () => {
    const actual = NewsStore.getSources();
    const expected = filteredSources;
    expect(actual).toEqual(expected);
  });

  it('should search and return a length of 2 when bbc is searched', () => {
    const actual = NewsStore.getSources();
    const expected = 2;
    expect(actual.length).toEqual(expected);
  });

  it('should return all sources when needed', () => {
    const actual = NewsStore.getAllSources();
    const expected = sources;
    expect(actual).toEqual(expected);
  });

  it('should return a given source when searched by id', () => {
    const actualObj = NewsStore.getSourceObj('bbc-news');
    const actual = actualObj.name;
    const expected = 'BBC News';
    expect(actual).toEqual(expected);
  });

  it('should return an empty object with a non-existent object', () => {
    const actual = NewsStore.getSourceObj('non-existent-source');
    const expected = {};
    expect(actual).toEqual(expected);
  });

  it('should return empty array when an invalid source is searched', () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.SEARCH_SOURCES,
      queryString: 'non-existent-source'
    });
    const actual = NewsStore.getSources();
    const expected = [];
    expect(actual).toEqual(expected);
  });
});


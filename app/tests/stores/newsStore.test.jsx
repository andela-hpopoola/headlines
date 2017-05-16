import expect from 'expect';
import Dispatcher from './../../dispatcher/appDispatcher';
import NewsStore from './../../stores/newsStore';
import ActionTypes from './../../constants/actionTypes';
import { News, Sources } from './../helper/newsMockData';

describe('News Store', () => {
  it('should exists', () => {
    expect(NewsStore).toExist();
  });

  Dispatcher.dispatch({
    actionType: ActionTypes.ALL_NEWS,
    articles: News
  });

  Dispatcher.dispatch({
    actionType: ActionTypes.ALL_SOURCES,
    sources: Sources
  });

  Dispatcher.dispatch({
    actionType: ActionTypes.SEARCH_SOURCES,
    queryString: 'bbc'
  });

  it('should receive all News from Dispatcher', () => {
    const actual = NewsStore.getNews();
    const expected = News;
    expect(actual).toEqual(expected);
  });

  it('should receive sources from Dispatcher', () => {
    const actual = NewsStore.getAllSources();
    const expected = Sources;
    expect(actual).toEqual(expected);
  });

  it('should get source object by category', () => {
    const actual = NewsStore.selectSourcesByCategory();
    const expected = 3;
    expect(Object.keys(actual).length).toEqual(expected);
  });

  it('should reformat sources for select form field', () => {
    const actual = NewsStore.selectSources();
    const expected = 6;
    expect(actual.length).toEqual(expected);
  });

  it('should return all sources when needed', () => {
    const actual = NewsStore.getAllSources();
    const expected = Sources;
    expect(actual).toEqual(expected);
  });

  it('should return a given source when searched by id', () => {
    const actualCategory = NewsStore.getSourceCategory('bbc-news');
    const actual = actualCategory.name;
    const expected = 'BBC News';
    expect(actual).toEqual(expected);
  });

  it('should return an empty object with a non-existent object', () => {
    const actual = NewsStore.getSourceCategory('non-existent-source');
    const expected = {};
    expect(actual).toEqual(expected);
  });

  it('should return empty array when an invalid source is searched', () => {
    Dispatcher.dispatch({
      actionType: ActionTypes.SEARCH_SOURCES,
      queryString: 'non-existent-source'
    });
    const actual = NewsStore.getFilteredSources();
    const expected = [];
    expect(actual).toEqual(expected);
  });
});

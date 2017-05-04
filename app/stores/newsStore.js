
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

const CHANGE_EVENT = 'change';
let sources = [];
let filteredSources = [];
let news = [];

const NewsStore = Object.assign(EventEmitter.prototype, {

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getNews() {
    return news;
  },

  getAllSources() {
    return sources;
  },

  getSources() {
    return filteredSources;
  },

  getSourceObj(sourceId) {
    if (sources) {
      const returnedSources = sources.filter(
        source => source.id === sourceId
      );
      if (typeof returnedSources[0] !== 'undefined') {
        return {
          id: sourceId,
          name: returnedSources[0].name,
          sortBy: returnedSources[0].sortBysAvailable,
          description: returnedSources[0].description,
          category: returnedSources[0].category,
        };
      }
      return {};
    }
  },

  searchSources(queryText) {
    return sources.filter(
      source => source.name.toLowerCase().indexOf(queryText) !== -1
    );
  },

  /**
   * The method is used to reformat sources for the select field
   * @param {string} sources - get the sources to redefine
   * @return {object} sets the state based on sources
   */
  selectSources() {
    return sources.map(source => ({
      value: source.id,
      label: source.name,
      clearableValue: true
    }));
  },


  /**
   * The method is used to reformat sources for the select field
   * @param {string} sources - get the sources to redefine
   * @return {object} sets the state based on sources
   */
  selectSourcesByCategory() {
    const sourceObj = {};
    sources.forEach((source) => {
      if (sourceObj[source.category] !== undefined) {
        sourceObj[source.category].push(source.name);
      } else {
        sourceObj[source.category] = [];
        sourceObj[source.category].push(source.name);
      }
    });
    return sourceObj;
  },

  dispatcherIndex: Dispatcher.register((action) => {
    switch (action.actionType) {
      case ActionTypes.ALL_SOURCES:
        sources = action.sources;
        break;

      case ActionTypes.ALL_NEWS:
        news = action.articles;
        break;

      case ActionTypes.SEARCH_SOURCES:
        filteredSources = NewsStore.searchSources(action.queryString);
        break;

      default:
      // no operation
    }
    NewsStore.emitChange();
  })
});

export default NewsStore;

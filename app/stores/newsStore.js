
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
    // console.log(sources,'In get all sources');
    // sources = NewsApi.getAllSources();
    return sources;
  },

  getSources() {
    return filteredSources;
  },

  getSourceObj(sourceId) {
    if (sources) {
      // console.log(sources, 'All Sources');
      const returnedSources = sources.filter(
        source => source.id === sourceId
      );
      // console.log(returnedSources[0], 'Returned Sources');
      if (typeof returnedSources[0] !== 'undefined') {
        return {
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


  dispatcherIndex: Dispatcher.register((action) => {
    switch (action.actionType) {
      case ActionTypes.ALL_SOURCES:
        sources = action.sources;
        break;

      case ActionTypes.ALL_NEWS:
        news = action.articles;
        // console.log(news, 'these are the news');
        break;

      case ActionTypes.SEARCH_SOURCES:
        filteredSources = NewsStore.searchSources(action.queryString);
        break;

      default:
      // no op
    }
    NewsStore.emitChange();
  })
});

export default NewsStore;

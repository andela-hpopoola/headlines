
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

const CHANGE_EVENT = 'change';

/**
 * @class NewStore
 * @extends {EventEmitter}
 */
class NewsStore extends EventEmitter {
 /**
   * @desc Represent a NewsStore.
   * @constructor
   */
  constructor() {
    super();
    /**
     * Instantiate the needed parameters
     */
    this.sources = [];
    this.filteredSources = [];
    this.news = [];
  }

  /**
   * @desc emit changes made when the event changes
   * @returns {object} emits changes made by onChange event
   */
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  /**
   * @desc listen and run the callback function when onChange event is fired
   * @param {func} callback - the function to listen to
   * @returns {event} emits changes made by onChange event
   */
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  /**
   * @desc stop listening to callback function when onChange event is fired
   * @param {func} callback - the function to listen to
   * @returns {event} dont emit changes made by onChange event
   */
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  /**
   * @desc Get all the news from store
   * @returns {object} all news in the store
   */
  getNews() {
    return this.news;
  }

  /**
   * @desc get all sources from the store
   * @returns {object} all sources in the store
   */
  getAllSources() {
    return this.sources;
  }

  /**
   * @desc get filtered sources from the store
   * @returns {object} filtered sources in the store
   */
  getSources() {
    return this.filteredSources;
  }

  /**
   * @desc get the information for a given source
   * @param {string} sourceId - the id of source to get its information
   * @returns {object} an object containing the object information
   */
  getSourceObject(sourceId) {
    if (this.sources) {
      const returnedSources = this.sources.filter(
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
  }

  /**
   * The method is used to reformat sources for the select field
   * @param {string} queryText - get the sources to redefine
   * @return {object} sets the state based on sources
   */
  searchSources(queryText) {
    return this.sources.filter(
      source => source.name.toLowerCase().indexOf(queryText) !== -1
    );
  }

  /**
   * The method is used to reformat sources for the select field
   * @param {string} sources - get the sources to redefine
   * @return {object} sets the state based on sources
   */
  selectSources() {
    return this.sources.map(source => ({
      value: source.id,
      label: source.name,
      clearableValue: true
    }));
  }

  /**
   * The method is used to reformat sources for the select field
   * @param {string} sources - get the sources to redefine
   * @return {object} sets the state based on sources
   */
  selectSourcesByCategory() {
    const sourceObj = {};
    this.sources.forEach((source) => {
      if (sourceObj[source.category] !== undefined) {
        sourceObj[source.category]
          .push(`${source.id}_${source.name}_${source.sortBysAvailable[0]}`);
      } else {
        sourceObj[source.category] = [];
        sourceObj[source.category]
          .push(`${source.id}_${source.name}_${source.sortBysAvailable[0]}`);
      }
    });
    return sourceObj;
  }

  /**
   * The method is used to by the Dispatcher
   * @param {string} action - the action to dispatch
   * @return {*} the dispatched action
   */
  handleActions(action) {
    switch (action.actionType) {
      case ActionTypes.ALL_SOURCES:
        this.sources = action.sources;
        break;

      case ActionTypes.ALL_NEWS:
        this.news = action.articles;
        break;

      case ActionTypes.SEARCH_SOURCES:
        this.filteredSources = this.searchSources(action.queryString);
        break;

      default:
      // no operation
    }
    this.emitChange();
  }
}

const newsStore = new NewsStore();
Dispatcher.register(newsStore.handleActions.bind(newsStore));

export default newsStore;

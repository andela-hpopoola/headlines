import request from 'superagent';
import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

/**
 * NewsActions
 * @desc These are objects passed to the Dispatcher
 */
const NewsActions = {

  /**
   * @desc gets all sources from News API
   * @returns {object} actionType and sources
   */
  getAllSources: () => {
    const SOURCE_URL = 'https://newsapi.org/v1/sources';

    // Use request module to load source from NewsAPI
    request
      .get(SOURCE_URL)
        .end((err, res) => {
          Dispatcher.dispatch({
            actionType: ActionTypes.ALL_SOURCES,
            sources: res.body.sources
          });
        });
  },

  /**
   * @desc gets all articles from News API
   * @param {string} source - the source you wish to get articles
   * @param {string} sortBy - the sort by criteria to get articles
   * @returns {object} all articles from source in NewsAPI
   */
  getNews: (source, sortBy) => {
    const apiKey = process.env.NEWS_API_KEY;
    const NEWS_URL = `https://newsapi.org/v1/articles?apiKey=${apiKey}`;

    // Use request module to load articles from NewsAPI
    request
      .get(NEWS_URL)
      .query({ source })
      .query({ sortBy })
      .end((err, res) => {
        Dispatcher.dispatch({
          actionType: ActionTypes.ALL_NEWS,
          articles: res.body.articles
        });
      });
  },

  /**
   * @desc gets all filtered sources
   * @param {string} queryString - the query the user wants to search
   * @returns {object} all sources that matches queryString
   */
  searchSources: (queryString) => {
    Dispatcher.dispatch({
      actionType: ActionTypes.SEARCH_SOURCES,
      queryString
    });
  },
};

module.exports = NewsActions;

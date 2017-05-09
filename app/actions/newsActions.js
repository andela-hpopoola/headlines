import request from 'superagent';
import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../constants/actionTypes';

const NewsActions = {

  getAllSources: () => {
    const SOURCE_URL = 'https://newsapi.org/v1/sources';

    request
      .get(SOURCE_URL)
        .end((err, res) => {
          Dispatcher.dispatch({
            actionType: ActionTypes.ALL_SOURCES,
            sources: res.body.sources
          });
        });
  },

  getNews: (source, sortBy) => {
    const apiKey = process.env.NEWS_API_KEY;
    const NEWS_URL = `https://newsapi.org/v1/articles?apiKey=${apiKey}`;

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

  searchSources: (queryString) => {
    Dispatcher.dispatch({
      actionType: ActionTypes.SEARCH_SOURCES,
      queryString
    });
  },
};

module.exports = NewsActions;

import request from 'superagent';
import Dispatcher from '../dispatcher/appDispatcher';
import NewsApi from '../api/NewsApi';
import ActionTypes from '../constants/actionTypes';


const NewsActions = {
  getAll(news) {
    const allNews = NewsApi.getAllNews();

    Dispatcher.dispatch({
      actionType: ActionTypes.ALL_NEWS,
      articles: allNews
    });
  },

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
    const NEWS_URL = 'https://newsapi.org/v1/articles?apiKey=213327409d384371851777e7c7f78dfe';

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

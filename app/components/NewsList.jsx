import React from 'react';
import PropTypes from 'prop-types';
import NewsSingle from './NewsSingle.jsx';

/**
 * News List - Process articles in group
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
const NewsList = (props) => {
  let articles = [];
  if (props.articles) {
    articles = props.articles.map(
      (article, index) => <NewsSingle article={article} key={index}/>
    );
  }
  return (
      <div className="row">
        { articles }
      </div>
  );
};

/**
 * Set the PropTypes for NewsList
 */
NewsList.propTypes = {
  articles: PropTypes.array,
  newsSortBy: PropTypes.string,
  newsSource: PropTypes.string
};

export default NewsList;

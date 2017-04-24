import React from 'react';
import PropTypes from 'prop-types';

/**
 * News Single - Process a single article
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
const NewsSingle = (props) => {
  const article = props.article;
  const mydate = Date.parse(article.publishedAt);
  const publishedDate = new Date(mydate).toDateString();
  return (
    <div>
      <h3><a href={article.url} target="_blank">{article.title} </a><br />
      <small>{article.author} - {publishedDate}</small></h3>
      <p> {article.description} </p>
    </div>
  );
};

/**
 * Set the PropTypes for NewsSingle
 */
NewsSingle.propTypes = {
  article: PropTypes.object
};

export default NewsSingle;

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
  const publishedDate = new Date(mydate).toLocaleDateString();
  return (
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <img src={ article.urlToImage } alt={ article.title } />
          <div className="caption">
            <p className="text-muted">{publishedDate}</p>
            <h3><a href={ article.url } target="_blank">{ article.title } </a></h3>
            <hr />
            <div>
              <p className="pull-left"> by <strong>{ article.author }</strong></p>
              <p className="pull-right"><a href={ article.url } target="_blank" className="btn btn-info" role="button">Read More</a></p>
            </div>
          </div>
        </div>
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

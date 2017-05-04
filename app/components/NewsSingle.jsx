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
      <div className="col-sm-6">
        <div className="thumbnail article">
          <a href={ article.url } target="_blank">
            <div className="article__image">
              <img src={ article.urlToImage } alt={ article.title } className="img-responsive" />
            </div>
            <div className="caption article__body">
              <p className="article__intro">{publishedDate}</p>
              <h3 className="article__title">{ article.title }</h3>
              <hr />
              <div>
                <p className="article__lower">
                  <strong className="article__author">{ article.author }</strong>
                </p>
              </div>
            </div>
          </a>
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

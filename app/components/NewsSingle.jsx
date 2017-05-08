import React from 'react';
import PropTypes from 'prop-types';
import Share from './Share.jsx';

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
            <div className="article__image">
              <img src={ article.urlToImage } alt={ article.title } className="img-responsive" />
            </div>
            <div className="caption article__body">
              <p className="article__intro">{publishedDate}</p>
              <h3 className="article__title">{ article.title }</h3>

              <div>
                <p className="article__lower">
                  <strong className="article__author">{ article.author }</strong>
                </p>
              </div>

              <hr />

              <div className="row">
                <div className="col-xs-8">
                  <Share url={article.url} title={article.title} />
                </div>
                <div className="col-xs-4">
                  <a href={ article.url } className="btn btn-primary btn-read-more" target="_blank">Read More</a>
                </div>
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

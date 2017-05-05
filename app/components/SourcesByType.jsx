import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router';

/**
 * Sources By Type - List all the sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
class SourcesByType extends Component {
  /**
   * Returns the value in the Search Field
   * @param {string} source - source of news
   * @param {string} sortBy - sorting type
   * @return {string} Value in String Field
   */
  loadPage(source, sortBy) {
    this.props.onClick(source, sortBy);
  }

  output(sourcesObj) {
    return Object.keys(sourcesObj).map((key) => {
      const body = sourcesObj[key].map((source) => {
        const [linkID, linkSource, linkSortBy] = source.split('_');
        return <Link
          className="Collapsible__link"
          to={`news/${linkID}/${linkSortBy}`}
          onClick={this.loadPage.bind(this, linkID, linkSortBy)}
          >
          {linkSource}
          </Link>;
      });

      return <Collapsible trigger={key.toUpperCase()}>
          {body}
        </Collapsible>;
    });
  }

  render() {
    return (
        <div className="widget thumbnail Collapsible">
          <h3> News Source by Category </h3><br />
          {this.output(this.props.sourcesObj)}
        </div>
    );
  }
}

/**
 * Set the PropTypes for Sources List
 */
SourcesByType.propTypes = {
  sourcesObj: PropTypes.object,
  onClick: PropTypes.func
};

export default SourcesByType;

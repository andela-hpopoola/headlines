import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * Sources By Type - List all the sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
class SourcesByType extends Component {

  /**
   * Set the Initial conditions for Sources By Type
   * @param {object} props - The property of the Sources by Type Class
   */
  constructor(props) {
    super(props);
    this.loadPage = this.loadPage.bind(this);
  }
  /**
   * Returns the value in the Search Field
   * @param {string} source - source of news
   * @param {string} sortBy - sorting type
   * @return {string} Value in String Field
   */
  loadPage(source, sortBy) {
    this.props.onClick(source, sortBy);
  }

  /**
   * Returns the sources sorted by categories
   * @param {string} sourcesObj - source of news to sort
   * @return {object} The sorted sources by category
   */
  generateAccordion(sourcesObj) {
    return Object.keys(sourcesObj).map((key) => {
      const body = sourcesObj[key].map((source, index) => {
        const [linkID, linkSource, linkSortBy] = source.split('_');
        return <li key={index}><Link
          className="Collapsible__link"
          to={`news/${linkID}/${linkSortBy}`}
          onClick={this.loadPage.bind(this, linkID, linkSortBy)}
          >
          {linkSource}
          </Link></li>;
      });

      return (
        <li className="panel" key={key}>
          <a
            data-toggle="collapse"
            data-parent="#accordion"
            href={ `#${key}` }>
            {key.toUpperCase()}
          </a>
            <ul id={key} className="collapse">
                {body}
            </ul>
        </li>
      );
    });
  }

  /**
   * Display the sorted sources
   * @return {jsx} The Sorted Sources
   */
  render() {
    return (
        <ul id="accordion" className="widget thumbnail Collapsible">
          <h3> News Source by Category </h3><br />
          {this.generateAccordion(this.props.sourcesObj)}
        </ul>
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

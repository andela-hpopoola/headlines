import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * @class SortByList
 * @desc  List all the sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
class SortByList extends Component {
  /**
   * @desc Returns the value in the Search Field
   * @param {string} source - source of news
   * @param {string} sortBy - sorting type
   * @return {string} Value in String Field
   */
  handleSort(source, sortBy) {
    this.props.onClick(source, sortBy);
  }

  /**
   * Display the News
   * @return {jsx} The News Content
   */
  render() {
    const currentSort = this.props.currentSort;
    let showSortText = false;
    if (this.props.sort.length > 1) {
      showSortText = true;
    }
    const listOfSort = this.props.sort.map(
      (sorting, index) =>
        <Link
          to={`news/${this.props.sourceID}/${this.props.sort[index]}`}
          key={index}
          className={
            currentSort === this.props.sort[index]
            ? 'btn btn-default disabled' : 'btn btn-primary'
          }
          aria-label={index}
          onClick={this.handleSort.bind(this,
            this.props.sourceID, this.props.sort[index])}
        >
          View { this.props.sort[index]} news
       </Link>
    );
    return (
      <div className="btn-group" role="group" aria-label="Sort Articles">
        {/* Show sort text if there are more than one category */}
        { showSortText ? listOfSort : ' ' }
        <div className="sorting__text">
          Currently viewing { currentSort } news
        </div>
      </div>
    );
  }
}
/**
 * Set the PropTypes for Sources List
 */
SortByList.propTypes = {
  sourceID: PropTypes.string,
  currentSort: PropTypes.string,
  sort: PropTypes.array,
  onClick: PropTypes.func
};

export default SortByList;

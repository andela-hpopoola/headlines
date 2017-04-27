import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * Source List - List all the sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
class SortByList extends Component {
  constructor(props) {
    super(props);
  }
  /**
   * Returns the value in the Search Field
   * @param {function} e - event of the field
   * @return {string} Value in String Field
   */
  handleSort(source, sortBy) {
    this.props.onClick(source, sortBy);
  }

  render() {
    const currentSort = this.props.currentSort;
    let showSortText = false;
    if (this.props.sort.length >= 1){
      showSortText = true;
    }
    const listOfSort = this.props.sort.map(
      (sorting, index) =>
        <Link
          to={`news/${this.props.sourceID}/${this.props.sort[index]}`}
          key={index}
          className={currentSort === this.props.sort[index] ? 'btn btn-default disabled' : 'btn btn-primary'}
          aria-label={index}
          onClick={this.handleSort.bind(this, this.props.sourceID, this.props.sort[index])}
        >
          View { this.props.sort[index]} top
       </Link>
    );
    return (
      <div className="btn-group" role="group" aria-label="Sort Articles">
        { listOfSort }
        { showSortText ?
        <div className="sorting__current">
          Currently viewing { currentSort } news
        </div>
        : ' ' }
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

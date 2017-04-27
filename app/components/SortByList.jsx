import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * Source List - List all the sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
class SortByList extends Component {
  constructor(props){
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

  render(){
    const listOfSort = this.props.sort.map(
      (sorting, index) =>
        <Link
          to={`news/${this.props.sourceID}/${this.props.sort[index]}`}
          key={index}
          onClick={this.handleSort.bind(this, this.props.sourceID, this.props.sort[index])}
        >
          { this.props.sort[index]}
       </Link>
    );
    return (
      <div>
        <h3>Sort By</h3>
          { listOfSort }
      </div>
    );
  }
}
/**
 * Set the PropTypes for Sources List
 */
SortByList.propTypes = {
  sourceID: PropTypes.string,
  sort: PropTypes.array,
  onClick: PropTypes.func
};

export default SortByList;

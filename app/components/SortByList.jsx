import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * Source List - List all the sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
const SortByList = (props) => {
  console.log(props);
  const listOfSort = props.sort.map(
    (article, index) => <Link to={`news/${props.sourceID}/${props.sort[index]}`} key={index}>{ props.sort[index]}</Link>
  );
  return (
    <div>
      <h3>Sort By</h3>
        { listOfSort }
    </div>
  );
};
/**
 * Set the PropTypes for Sources List
 */
SortByList.propTypes = {
  sourceName: PropTypes.string,
  sort: PropTypes.array,
};

export default SortByList;

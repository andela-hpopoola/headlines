import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

/**
 * Source List - List all the sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
const SourcesList = (props) => {
  const sources = props.sources.map(
    (source, index) => <Link to={`news/${source.id}/${source.sortBysAvailable[0]}`} key={index}> {source.name} </Link>
  );
  return (
      <div>
          <h3> List of Sources </h3>
          {sources}
      </div>
  );
};

/**
 * Set the PropTypes for Sources List
 */
SourcesList.propTypes = {
  sources: PropTypes.array
};

export default SourcesList;

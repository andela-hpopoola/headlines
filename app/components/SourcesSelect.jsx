import React from 'react';
import PropTypes from 'prop-types';
import SourcesOption from './SourcesOption.jsx';

/**
 * Source Select - Create a select box from all sources
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
const SourcesSelect = (props) => {
  const sources = props.sources.map(
    (source, index) => <SourcesOption source={source} key={index} />
  );

  return (
      <div>
        <select ref={props.refName} className="form-control">
          {sources}
        </select>
      </div>
  );
};

SourcesSelect.propTypes = {
  sources: PropTypes.object,
  refName: PropTypes.string
};

export default SourcesSelect;

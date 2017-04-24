import React from 'react';
import PropTypes from 'prop-types';

/**
 * Source Option - A single source
 * @param {object} props get the properties
 * @returns {jsx} the page navigation
 */
const SourcesOption = props => (
  <option value={props.source.id}> {props.source.name} </option>
);

/**
 * Set the PropTypes for Sources Option
 */
SourcesOption.propTypes = {
  source: PropTypes.object
};

export default SourcesOption;

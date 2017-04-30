import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
    <div className="container">
      { props.children }
    </div>
);

/**
 * Set the PropTypes for Main
 */
Main.propTypes = {
  children: PropTypes.element
};

export default Main;

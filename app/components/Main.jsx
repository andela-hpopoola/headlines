import React from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav.jsx';

const Main = props => (
    <div>
      <div className="container">
        {/* Navigation is placed here*/}
        <Nav />
        { props.children }
      </div>
    </div>
);

/**
 * Set the PropTypes for Main
 */
Main.propTypes = {
  children: PropTypes.element
};

export default Main;

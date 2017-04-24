import React from 'react';
import { Link, IndexLink } from 'react-router';

/**
 * Page Navigation
 * @returns {jsx} the page navigation
 */
const Nav = () => (
      <div>
        <h2>Nav Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Home</IndexLink>
        <Link to="/news" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>News</Link>
        <Link to="/login" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>Login</Link>
      </div>
);

export default Nav;

import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * Page Navigation
 * @returns {jsx} the page navigation
 */
class Nav extends Component {
  /**
   * Renders the Top Navigation
   * @return {string} Navigation
   */
  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">

            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Headlines</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="logout"> Logout </Link></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
};

export default Nav;


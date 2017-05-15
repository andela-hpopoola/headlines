import React, { Component } from 'react';
import { Link } from 'react-router';

/**
 * @class Nav
 * @desc Page Navigation
 * @returns {jsx} the page navigation
 */
class Nav extends Component {
  /**
   * @desc Renders the Top Navigation
   * @return {string} Navigation
   */
  render() {
    this.name = 'Nav';
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">

            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar-target"
                aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#/news">
                <img src="./images/logo.png" alt="Headlines Logo"/>
              </a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-target">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="logout"> Logout </Link></li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Nav;


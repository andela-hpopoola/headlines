import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';

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
              <a className="navbar-brand" href="#">Brand</a>
            </div>
            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li><a href="#">Something else here</a></li>
                    <li role="separator" className="divider"></li>
                    <li><Link to="logout"> Logout </Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
};

export default Nav;


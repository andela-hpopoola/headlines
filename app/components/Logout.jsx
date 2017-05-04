import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import Nav from './Nav.jsx';

/**
 * Log the user out when visited
 * @return {null} redirects user to login page
 */
const logOut = () => {
  const history = createHistory({ forceRefresh: true });
  if (global.window.localStorage.getItem('profile')) {
    global.window.localStorage.removeItem('profile');
    history.push('/#/');
    global.window.location.reload();
  }
};

/**
 * Class displaying Logout Page
 * @extends React.Component
 */
class Logout extends Component {
  /**
   * Show the Logout Component
   * @return {jsx} Show the Logout component
   */
  render() {
    this.name = 'Logging Out';
    logOut();
    return (
      <div>
        <Nav />
        <h1> Logging Out </h1>
      </div>
    );
  }
}

export default Logout;

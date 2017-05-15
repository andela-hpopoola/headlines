import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

/**
 * @desc Log the user out when visited
 * @return {null} redirects user to login page
 */
const signOut = () => {
  const history = createHistory({ forceRefresh: true });
  if (global.window.localStorage.getItem('profile')) {
    global.window.localStorage.removeItem('profile');
    history.push('/#/');
    global.window.location.reload();
  }
};

/**
 * @class Logout
 * @desc Class displaying Logout Page
 * @extends React.Component
 */
class Logout extends Component {
/**
 * @desc Log the user out when visited
 * @return {null} redirects user to login page
 */
  logOut() {
    this.name = 'Logging Out';
    signOut();
  }
  /**
   * @desc Show the Logout Component
   * @return {jsx} Show the Logout component
   */
  render() {
    this.logOut();
    return (
      <div>
        <Nav />
        <h1> Logging Out </h1>
        <Footer />
      </div>
    );
  }
}

export default Logout;

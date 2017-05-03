import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

/**
 * Class displaying Logout Page
 * @extends React.Component
 */
class Logout extends Component {

  /**
   * Log the user out when visited
   * @return {null} redirects user to login page
   */
  componentWillMount() {
    const history = createHistory({
      forceRefresh: true,
    });

    this.setState({
      status: 'Logging out'
    });

    global.window.localStorage.removeItem('profile');
    history.push('/#/');
    global.window.location.reload();
  }


  /**
   * Show the Logout Component
   * @return {jsx} Show the Logout component
   */
  render() {
    return (<h1> { this.state.status } </h1>);
  }
}

export default Logout;

import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Main from './Main.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import News from './News.jsx';

/**
 * Class to route all the pages
 * @extends React.Component
 */
class Routes extends Component {

  /**
   * Check if the user is logged in
   * @param {string} nextState the next state to load
   * @param {string} replace the page to replace
   * @return {boolean} the login status
   */
  requireAuth(nextState, replace) {
    this.name = 'Logging In';
    if (!global.window.localStorage.getItem('profile')) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
  }
  /**
   * Render the Routes of the News Page
   * @return {Page} the routes of the page
   */
  render() {
    this.name = 'Router';
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Login} />
          <Route
            path="news/:source/:sortby"
            component={News}
            onEnter={ Routes.requireAuth }
          />
          <Route
            path="news"
            component={Home}
            onEnter={ Routes.requireAuth }
          />
          <Route
            path="logout"
            component={Logout}
            onEnter={ Routes.requireAuth }
          />
        </Route>
      </Router>
    );
  }
}

export default Routes;

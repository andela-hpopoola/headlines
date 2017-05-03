import React, { Component } from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Main from './Main.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import News from './News.jsx';

/**
 * Check if the user is logged in
 * @return {boolean} the login status
 */
const requireAuth = (nextState, replace) => {
  if (!localStorage.getItem('profile')) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};

/**
 * Class to route all the pages
 * @extends React.Component
 */
class Routes extends Component {

  /**
   * Render the Routes of the News Page
   * @return {Page} the routes of the page
   */
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Login} />
          <Route path="news/:source/:sortby" component={News} onEnter={ requireAuth } />
          <Route path="news" component={Home} onEnter={ requireAuth } />
          <Route path="logout" component={Logout} />
        </Route>
      </Router>
    );
  }
}

export default Routes;

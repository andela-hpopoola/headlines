import React, { Component } from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import Main from './Main.jsx';
import Home from './Home.jsx';
import Login from './Login.jsx';
import News from './News.jsx';
import Storage from './../storage/localStorage';

/**
 * Check if the user is logged in
 * @return {boolean} the login status
 */
const requireAuth = () => {
  if (!Storage.get('profile')) {
    Route.replace({
      pathname: '/login',
      state: { nextPathname: Route.nextState.location.pathname }
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
      <Router history={browserHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
          <Route path="news(/:source/:sortby)" component={News}/>
          <Route path="login" component={Login} />
          {/*<Route path="news" component={News} onEnter={requireAuth} />*/}
        </Route>
      </Router>
    );
  }
}

export default Routes;

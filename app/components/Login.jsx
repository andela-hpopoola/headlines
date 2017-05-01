import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import GoogleLogin from 'react-google-login';

/**
 * Class displaying Login Page
 * @extends React.Component
 */
class Login extends Component {

  /**
   * Returns the Success Message.
   * @param {object} response - Returns the User Profile
   * @return {object} the error message
   */
  responseFromGoogle(response) {
    const profile = response.profileObj;
    const history = createHistory({
      forceRefresh: true,
    });

    // console.log(profile);
    if (profile) {
      // Storage.set('profile', JSON.stringify(profile));
      global.window.localStorage.setItem('profile', JSON.stringify(profile));
      // console.log(JSON.parse(Storage.get('profile')));
      // this.setState({ profile: JSON.parse(localStorage.getItem('profile'))});
      history.push('/#/news');
      global.window.location.reload();
    } else {
      // TODO: Process error message here
      // console.log(profile);
    }
  }

  /**
   * Show the Login Component
   * @return {jsx} Show the login component
   */
  render() {
    return (
      <div className="login__page full">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="login">
                <h3 className="login__title">Welcome to Headlines</h3>
                <p className="lead">Get News from over 70 Sources</p>
                <GoogleLogin
                  clientId="85385577141-0nb9rf764mh1eetjmd8p5jjmthr8e8hq.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={this.responseFromGoogle}
                  onFailure={this.responseFromGoogle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

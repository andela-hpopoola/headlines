import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import GoogleLogin from 'react-google-login';


/**
 * Returns the Success Message.
 * @param {object} response - Returns the User Profile
 * @return {object} the error message
 */
const responseFromGoogle = (response) => {
  const profile = response.profileObj;
  const history = createHistory({ forceRefresh: true });
  if (profile) {
    global.window.localStorage.setItem('profile', JSON.stringify(profile));
    history.push('/#/news');
    global.window.location.reload();
  }
};

/**
 * Class displaying Login Page
 * @extends React.Component
 */
class Login extends Component {
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
                  onSuccess={responseFromGoogle}
                  onFailure={responseFromGoogle}
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

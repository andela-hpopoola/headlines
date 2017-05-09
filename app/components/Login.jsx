import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import GoogleLogin from 'react-google-login';


/**
 * Returns the Success Message.
 * @param {object} response - Returns the User Profile
 * @return {object} the error message
 */
const getResponseFromGoogle = (response) => {
  const profile = response.profileObj;
  const history = createHistory({ forceRefresh: true });
  if (profile) {
    // Save Output from Google
    global.window.localStorage.setItem('profile', JSON.stringify(profile));

    // Set Expiry Datevar today = new Date();
    const today = new Date();
    const expiryDate = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    global.window.localStorage.setItem('expiryDate', JSON.stringify(expiryDate));
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
    this.bgImage = { backgroundImage: 'url(./bg.jpg)' };
    return (
      <div className="login__page full" style={ this.bgImage }>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="login">
                <h3 className="login__title">Welcome to Headlines</h3>
                <p className="lead">Get News from over 70 Sources</p>
                <GoogleLogin
                  clientId="85385577141-0nb9rf764mh1eetjmd8p5jjmthr8e8hq.apps.googleusercontent.com"
                  buttonText="Login with Google"
                  onSuccess={getResponseFromGoogle}
                  onFailure={getResponseFromGoogle}
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

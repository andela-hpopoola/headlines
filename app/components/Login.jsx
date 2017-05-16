import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import GoogleLogin from 'react-google-login';


/**
 * @desc Returns the Success Message.
 * @param {object} response - Returns the User Profile
 * @return {object} the error message
 */
const getResponseFromGoogle = (response) => {
  // get the profileObj from Google response
  const profile = response.profileObj;
  const history = createHistory({ forceRefresh: true });
  if (profile) {
    // Set Expiry Date and add to profile
    const today = new Date();
    profile.expiryDate = new Date(today.getTime() + (24 * 60 * 60 * 1000));
    // Save Output from Google with expiryDate
    global.window.localStorage.setItem('profile', JSON.stringify(profile));
    // Redirect to news page
    history.push('/#/news');
    global.window.location.reload();
  }
};

// Google Client ID
let clientID = '85385577141-0nb9rf764mh1eetjmd8p5jjmthr8e8hq';
clientID += '.apps.googleusercontent.com';
/**
 * Class displaying Login Page
 * @extends React.Component
 */
class Login extends Component {
  /**
   * @desc Show the Login Component
   * @return {jsx} Show the login component
   */
  render() {
    this.bgImage = { backgroundImage: 'url(./bg.jpg)' };
    return (
      <div className="login__page full" style={this.bgImage}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="login">
                <img src="./images/logo_inverse.png" alt="Headlines Logo"/>
                <h3>Get Live Headlines from over 70 Sources</h3>
                <GoogleLogin
                  clientId= {clientID}
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

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import GoogleLogin from 'react-google-login';
import Storage from './../storage/localStorage';

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
    // console.log(profile);
    if (profile) {
      Storage.set('profile', JSON.stringify(profile));
      console.log(JSON.parse(localStorage.getItem('profile')));
      this.setState({ profile: JSON.parse(localStorage.getItem('profile'))});
      console.log(response.profileObj.name);
      browserHistory.push('/');
    } else {
      this.setState({ errors: 'Unable to Login' });
    }
  }

  /**
   * Show the Login Component
   * @return {jsx} Show the login component
   */
  render() {
    return (
      <div>
        <h3>Login Component</h3>
        <GoogleLogin
            clientId="85385577141-0nb9rf764mh1eetjmd8p5jjmthr8e8hq.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseFromGoogle}
            onFailure={this.responseFromGoogle}
        />
      </div>
    );
  }
}

export default Login;

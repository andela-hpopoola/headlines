import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import GoogleLogout from 'react-google-login';
import Storage from './../storage/localStorage';

const history = createHistory({
  forceRefresh: true,
});

// if (Storage.get('profile')) {
//   history.push('/#/news');
//   window.location.reload();
// }

/**
 * Class displaying Logout Page
 * @extends React.Component
 */
class Logout extends Component {

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
      console.log(JSON.parse(Storage.get('profile')));
      // this.setState({ profile: JSON.parse(localStorage.getItem('profile'))});
      history.push('/#/news');
      window.location.reload();
    } else {
      // TODO: Process error message here
      console.log(profile);
    }
  }

  /**
   * Show the Logout Component
   * @return {jsx} Show the Logout component
   */
  render() {
    return (
      <div className="full">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="Logout">
                <h3 className="Logout__title">Welcome to Headlines</h3>
                <p className="lead">Get News from over 70 Sources</p>
                <GoogleLogout
                  clientId="85385577141-0nb9rf764mh1eetjmd8p5jjmthr8e8hq.apps.googleusercontent.com"
                  buttonText="Logout"
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

export default Logout;

import createHistory from 'history/createBrowserHistory';
import Storage from './../storage/localStorage';

const history = createHistory({
  forceRefresh: true,
});

if (Storage.get('profile')) {
  Storage.delete('profile');
}
history.push('/');
window.location.reload();

/**
 * Class displaying Login Page
 * @extends React.Component
 */
class Logout extends Component {
  /**
   * Show the Login Component
   * @return {jsx} Show the login component
   */
  render() {
    return (
      <div>
        <h3>Logging you out...</h3>
      </div>
    );
  }
}

export default Logout;

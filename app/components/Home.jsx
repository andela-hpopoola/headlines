import React, { Component } from 'react';
import SourcesList from './SourcesList.jsx';
import SearchForm from './SearchForm.jsx';
import NewsStore from '../stores/newsStore';
import NewsActions from '../actions/newsActions';
import Nav from './Nav.jsx';


/**
 * Class to display the Home Page
 * @extends React.Component
 */
class Home extends Component {

  /**
   * Set the Initial conditions for showing the News
   * @param {object} props - The property of the News Class
   */
  constructor(props) {
    super(props);
    this.state = { sources: [] };
    this.onChange = this.onChange.bind(this);
    // this.searchSources.bind(this);
  }

  /**
   * Invoked immediately after a component is mounted
   * @return {void} returns nothing
   */
  componentDidMount() {
    NewsStore.addChangeListener(this.onChange);
    NewsActions.getAllSources();
  }

  /**
   * Invoked immediately when a component is unmounted
   * @return {void} returns nothing
   */
  componentWillUnmount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  /**
   * The method that for handling change
   * @return {void} returns nothing
   */
  onChange() {
    this.setState({
      sources: NewsStore.getAllSources() || [],
    });
  }

  /**
   * Search for sources
   * @param {string} queryText what we wish to search for
   * @return {void} returns nothing
   */
  searchSources(queryText) {
    const query = queryText.toLowerCase();
    NewsActions.searchSources(query);
    this.setState({ sources: NewsStore.getSources() });
  }

  /**
   * Display the News
   * @return {jsx} The News Content
   */
  render() {
    return (
        <div>
            <Nav />
            <h1 className="text-center">All Sources</h1>
            <SearchForm
              onChange={ this.searchSources.bind(this) }
              sources={ this.state.sources }
            />
            <SourcesList sources={ this.state.sources } />
        </div>
    );
  }
}

export default Home;

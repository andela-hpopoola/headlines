import React, { Component } from 'react';
import SourcesList from './SourcesList.jsx';
import SearchForm from './SearchForm.jsx';
import NewsStore from '../stores/newsStore';
import NewsActions from '../actions/newsActions';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';


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
    this.searchSources = this.searchSources.bind(this);
    NewsActions.getAllSources();
  }

  /**
   * Invoked immediately after a component is mounted
   * @return {void} returns nothing
   */
  componentDidMount() {
    NewsStore.addChangeListener(this.onChange);
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
    this.bgImage = { backgroundImage: 'url(./images/general.jpg)' };
    return (
        <div>
          <Nav />
          <section className="top-page-title page-header text-center">
            <div className="top-page-title__parallax" style={ this.bgImage }></div>
            <div className="top-page-title__overlay"></div>
            <div className="top-page-title__content">
              <div className="container">
                <div className="top-page-title__content-text">
                  <h3>All Sources</h3>
                  <div className="row">
                    <div className="lead col-sm-offset-2 col-sm-8">
                      Get Live Headlines from over 70 Sources.
                      <SearchForm
                        onChange={ this.searchSources }
                        sources={ this.state.sources }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container gutter-top">
              <SourcesList sources={ this.state.sources } />
          </div>
          <Footer />
        </div>
    );
  }
}

export default Home;

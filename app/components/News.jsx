import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Link } from 'react-router';
import NewsList from './NewsList.jsx';
import NewsStore from '../stores/newsStore';
import NewsActions from '../actions/newsActions';
import SortByList from './SortByList.jsx';
import SourcesByType from './SourcesByType.jsx';
import Nav from './Nav.jsx';
import Footer from './Footer.jsx';

/**
 * Class to display news
 * @extends React.Component
 */
class News extends Component {

  /**
   * Set the Initial conditions for showing the News
   * @param {object} props - The property of the News Class
   */
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sortBy: this.props.params.sortby || '',
      source: this.props.params.source || '',
      sources: [],
      selectedSourceObject: {},
      currentSourceObject: {},
      selectedSortedBy: ''
    };

    NewsActions.getNews(this.props.params.source, this.props.params.sortby);
    NewsActions.getAllSources();
    this.onChange = this.onChange.bind(this);
    this.loadSortPage = this.loadSortPage.bind(this);
    this.logChange = this.logChange.bind(this);
    this.loadPage = this.loadPage.bind(this);
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
    const currentSourceObject = NewsStore.getSourceObject(this.state.source);
    this.setState({
      articles: NewsStore.getNews(this.state.source, this.state.sortBy) || [],
      sourceObj: NewsStore.getSourceObject(this.state.source) || [],
      sources: NewsStore.getAllSources() || [],
      currentSourceObject
    });
  }

  /**
   * The method that for handling change
   * @param {string} value - the selected value from select field
   * @return {object} sets the state based on value
   */
  logChange(value) {
    // get the object
    const selectedSourceObject = NewsStore.getSourceObject(value.value);
    const selectedSortedBy = selectedSourceObject.sortBy ?
      selectedSourceObject.sortBy[0].toString() : 'none - ';
    this.setState({
      source: value.value,
      sortBy: this.state.sortBy,
      selectedSourceObject,
      selectedSortedBy
    });
  }

  /**
   * This loads the page in the application
   * @param {string} source - the source of news to load
   * @param {string} sortby - the sorting criterion
   * @return {object} get the news based on selected source
  */
  loadPage(source, sortby) {
    const currentSourceObject = NewsStore.getSourceObject(source);
    this.setState({
      currentSourceObject,
      source,
      selectedSourceObject: currentSourceObject
    });
    NewsActions.getNews(source, sortby);
  }

  /**
   * The method that for handling change
   * @param {string} source - the source you wish to load
   * @param {string} sortBy - the sorting criterion
   * @return {object} sets the state based on value
   */
  loadSortPage(source, sortBy) {
    this.setState({ source, sortBy });
    NewsActions.getNews(source, sortBy);
  }

  /**
   * Display the News
   * @return {jsx} The News Content
   */
  render() {
    this.bgImage = {
      backgroundImage:
        `url(./images/${this.state.currentSourceObject.category}.jpg)`
    };
    const selectOptions = NewsStore.selectSources();
    const newsURL = `news/${this.state.source}/${this.state.selectedSortedBy}`;
    return (
        <div className="News__page">
            <Nav />
            <section className="top-page-title page-header text-center">
              <div
                className="top-page-title__parallax"
                style={this.bgImage} />
              <div className="top-page-title__overlay" />
              <div className="top-page-title__content">
                <div className="container">
                  <div className="top-page-title__content-text">
                    <h3>{ this.state.currentSourceObject.name }</h3>
                    <div className="row">
                      <div className="lead col-sm-offset-2 col-sm-8">
                        { this.state.currentSourceObject.description }
                      </div>
                    </div>
                    <SortByList
                      sort = {this.state.currentSourceObject.sortBy || []}
                      sourceID = {this.state.source}
                      currentSort = {this.state.sortBy}
                      onClick={this.loadSortPage}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="container gutter-top">
              <div className="row">
                <div className="col-sm-8">
                  <NewsList
                    articles={this.state.articles}
                    newsSource={this.state.source}
                    newsSortBy={this.state.sortBy}
                  />
                </div>

                <div className="col-sm-4">
                  <div className="widget thumbnail">

                    <h3>Select Source</h3>
                    <Select
                      name="get_sources_select"
                      value={this.state.selectedSourceObject.id}
                      options={selectOptions}
                      onChange={this.logChange}
                      clearableValue= {false}
                    />

                    {/* Show Description */}
                    { Object.keys(
                      this.state.selectedSourceObject).length !== 0 ?

                    <div className="description__text">
                      <h5>{this.state.selectedSourceObject.name}</h5>
                      {this.state.selectedSourceObject.description}

                      <div className="description__button">
                      <Link
                        to={newsURL}
                        className="btn btn-primary"
                        onClick= {
                          this.loadPage.bind(
                            this, this.state.source, this.state.selectedSortedBy
                          )
                        } >
                        View {this.state.selectedSourceObject.name }
                      </Link>
                      </div>
                    </div>
                    : ''
                    }
                  </div>
                  <SourcesByType
                    sourcesObj = {NewsStore.selectSourcesByCategory()}
                    onClick={this.loadPage}
                  />
                </div>
              </div>
            </section>

            <Footer />
        </div>
    );
  }
}

/**
 * Set the PropTypes for News
 */
News.propTypes = {
  params: PropTypes.object,
  source: PropTypes.array,
  sortby: PropTypes.string
};


export default News;

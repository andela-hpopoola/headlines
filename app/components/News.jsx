import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Link } from 'react-router';
import NewsList from './NewsList.jsx';
import NewsStore from '../stores/newsStore';
import NewsActions from '../actions/newsActions';
import SortByList from './SortByList.jsx';
import Nav from './Nav.jsx';

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
      sortBy: this.props.params.sortby,
      source: this.props.params.source,
      sources: [],
      selectedSourceObj: {},
      currentSourceObj: {},
      selectedSortedBy: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  /**
   * Invoked immediately after a component is mounted
   * @return {void} returns nothing
   */
  componentDidMount() {
    NewsStore.addChangeListener(this.onChange);
    // TODO: CHECK IF COMPONENT IS MOUNTED§
    NewsActions.getNews(this.props.params.source, this.props.params.sortby);
    NewsActions.getAllSources();
  }

  /**
   * Invoked immediately when a component is unmounted
   * @return {void} returns nothing
   */
  componentWillUnMount() {
    NewsStore.removeChangeListener(this.onChange);
  }

  /**
   * The method that for handling change
   * @return {void} returns nothing
   */
  onChange() {
    const currentSourceObj = NewsStore.getSourceObj(this.state.source);
    console.log(currentSourceObj, 'current soruce');
    this.setState({
      articles: NewsStore.getNews(this.state.source, this.state.sortBy) || [],
      sourceObj: NewsStore.getSourceObj(this.state.source) || [],
      sources: NewsStore.getAllSources() || [],
      currentSourceObj,
      // sortByType: currentSourceObj.sortByType,
      // sourceName: currentSourceObj.sourceName,
      // sourceDescription: currentSourceObj.sourceDescription
    });
  }

  logChange(value) {
    console.log(value.value);
    // get the object
    const selectedSourceObj = NewsStore.getSourceObj(value.value);
    console.log(selectedSourceObj,'selected when logchange');
    const selectedSortedBy = selectedSourceObj.sortBy ? selectedSourceObj.sortBy[0].toString() : 'none - ';
    this.setState({
      source: value.value,
      sortBy: this.state.sortBy,
      selectedSourceObj,
      selectedSortedBy
    });
  }

  loadPage() {
    // const sortByDefaultArray = this.state.selectedSourceObj.sortBy.split(',');
    // const sortByDefault = sortByDefaultArray[0].join('');
    NewsActions.getNews(this.state.selectedSourceObj.id, 'top');
    // NewsActions.getNews(this.state.selectedSourceObj.id, sortByDefault);
  }

  loadSortPage(source, sortBy) {
    // console.log('Load Sort Page Clicked ', source, sortBy);
    this.setState({
      source,
      sortBy
    });
    NewsActions.getNews(source, sortBy);
  }

  selectSources(sources) {
    return sources.map(source => ({
      value: source.id,
      label: source.name,
      clearableValue: true
    }));
  }

  /**
   * Display the News
   * @return {jsx} The News Content
   */
  render() {
    console.log(this.state.selectedSortedBy, 'selected source in render');
    return (
        <div className="News__page">
            {/* Navigation is placed here*/}
            <Nav />
            <div className="page-header text-center">
              <h1>{ this.state.currentSourceObj.name }</h1>
              <div className="lead">{ this.state.currentSourceObj.description }</div>
                <SortByList
                sort = { this.state.currentSourceObj.sortBy || [] }
                sourceID = { this.state.source }
                currentSort = { this.state.sortBy }
                onClick={ this.loadSortPage.bind(this) } />
            </div>

            <div className="col-sm-8">
              <NewsList
                articles={ this.state.articles }
                newsSource={ this.state.source }
                newsSortBy={ this.state.sortBy }
              />
            </div>

            <div className="col-sm-4">
              <div className="widget thumbnail">

                <h3>Select Source</h3>
                <Select
                  name="get_sources_select"
                  value={this.state.selectedSourceObj.id}
                  options={ this.selectSources(this.state.sources) }
                  onChange={ this.logChange.bind(this) }
                  clearableValue= {true}
                />

                {/* Is there a description to show */}
                { Object.keys(this.state.selectedSourceObj).length !== 0 ?
                <div className="description__text">
                  { this.state.selectedSourceObj.description }

                  <div className="description__button">
                    <Link
                      to={`news/${this.state.source}/${this.state.selectedSortedBy}`}
                      className="btn btn-primary"
                      onClick={ this.loadPage.bind(this) }>
                      View {this.state.selectedSourceObj.name }
                    </Link>
                  </div>
                </div>
                : ''
                 }
              </div>

            </div>
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

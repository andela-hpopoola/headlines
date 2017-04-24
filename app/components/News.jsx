import React, { Component } from 'react';
import NewsList from './NewsList.jsx';
import SourcesList from './SourcesList.jsx';
import SearchForm from './SearchForm.jsx';
import NewsStore from '../stores/newsStore';
import NewsActions from '../actions/newsActions';

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
      sourceObj: {},
      sources: []
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
    NewsActions.getNews(this.state.source, this.state.sortBy);
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
    this.setState({
      articles: NewsStore.getNews(this.state.source, this.state.sortBy) || [],
      sourceObj: NewsStore.getSourceObj(this.state.source) || [],
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

  getSortBy(){
    const sortByMe = NewsStore.getSourceObj(this.props.params.source);
    const sortLength = sortByMe.sortBy.length;
    let sortByType = '';
    if (sortLength > 1){
      for (let i = 0; i < sortLength; i += 1) {
        sortByType += `${sortByMe.sortBy[i]} `;
      }
    }
  }
  /**
   * Display the News
   * @return {jsx} The News Content
   */
  render() {
    const sortByType = this.getSortBy();
    return (
        <div>
            <h3>News Component { this.props.params.source }</h3>
            {sortByType}
            <NewsList
              articles={ this.state.articles }
              newsSource={ this.state.source }
              newsSortBy={ this.state.sortBy }
            />
            <h3>All Sources</h3>
            <SourcesList sources={ this.state.sources } />
            <SearchForm
              onChange={ this.searchSources.bind(this) }
              sources={ this.state.sources }
            />
        </div>
  );
  }
}

export default News;

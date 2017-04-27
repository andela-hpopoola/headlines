import React, { Component } from 'react';
import Select from 'react-select';
import { Link } from 'react-router';
import NewsList from './NewsList.jsx';
import SourcesList from './SourcesList.jsx';
import SearchForm from './SearchForm.jsx';
import NewsStore from '../stores/newsStore';
import NewsActions from '../actions/newsActions';
import SortByList from './SortByList.jsx';

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
      selectedSource: '',
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
    const currentObj = this.getSortBy();
    this.setState({
      articles: NewsStore.getNews(this.state.source, this.state.sortBy) || [],
      sourceObj: NewsStore.getSourceObj(this.state.source) || [],
      sources: NewsStore.getAllSources() || [],
      sortByType: currentObj.sortByType,
      sourceName: currentObj.sourceName,
      sourceDescription: currentObj.sourceDescription
    });
  }
  
  logChange(value){
    this.setState({
      source: value.value,
      sortBy: this.state.sortBy,
      selectedSource: value.label
    });
  }

  loadPage(){
    console.log ('Load Page clicked');
    NewsActions.getNews(this.state.source, this.state.sortBy);
  }

  /**
   * Search for sources
   * @param {string} queryText what we wish to search for
   * @return {void} returns nothing
   */
  // searchSources(queryText) {
  //   const query = queryText.toLowerCase();
  //   // NewsActions.searchSources(query);
  // }


  selectSources(sources) {
    return sources.map(source => ({
      value: source.id,
      label: source.name
    }));
  }

  getSortBy() {
    const singleSource = NewsStore.getSourceObj(this.props.params.source);
    // console.log(singleSource);
    if (typeof singleSource.name !== 'undefined') {
      const sortLength = singleSource.sortBy.length;
      const sourceName = singleSource.name;
      const sourceDescription = singleSource.description;
      const sortByType = singleSource.sortBy;
      if (sortLength >= 1) {
        return { sortByType, sourceName, sourceDescription };
      }
    }
    return { sortByType: 'no type', sourceName: 'no source Name', sourceDescription: 'no Description' };
  }
  /**
   * Display the News
   * @return {jsx} The News Content
   */
  render() {
    // const mySortBy = this.getSortBy().map((sortByList, index) =>
    //   <SortByList sortBy={sortByList} key={index} sourceID = {this.state.source} />
    // );
    return (
        <div>
            <div className="page-header text-center">
              <h1>{ this.state.sourceName }</h1>
              <div className="lead">{ this.state.sourceDescription }</div>
              <div className="lead"> {this.state.sortByType }
                <SortByList
                sort ={ this.state.sortByType || [] }
                sourceID = {this.state.source} onClick={ this.loadPage.bind(this) } />
              </div>
            </div>

            <div className="col-sm-8">
              <NewsList
                articles={ this.state.articles }
                newsSource={ this.state.source }
                newsSortBy={ this.state.sortBy }
              />
            </div>

            <div className="col-sm-4">
              <div className="widget">

                <h3>All Sources</h3>
                <Select
                  name="get_sources_select"
                  value={this.state.source}
                  options={ this.selectSources(this.state.sources) }
                  onChange={ this.logChange.bind(this) }
                />
                <Link to={`news/${this.state.source}/top`} className="btn btn-primary" onClick={ this.loadPage.bind(this) }>
                  View {this.state.selectedSource } News
                </Link>
              </div>

              <div className="widget">
              </div>
            </div>
            {/*<SourcesList sources={ this.state.sources } />*/}
            {/*<SearchForm
              onChange={ this.searchSources.bind(this) }
              sources={ this.state.sources }
            />*/}
        </div>
    );
  }
}

export default News;

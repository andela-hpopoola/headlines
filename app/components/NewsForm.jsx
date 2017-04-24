import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Class displaying the New Form
 * @extends React.Component
 */
class NewsForm extends Component {
  /**
   * Returns the Search Result.
   * @param {object} e - Event.
   * @return {object} Search Result
   */
  onFormSubmit(e) {
    e.preventDefault();
    const newsSource = this.refs.newsSource.value;
    const newsSortBy = this.refs.newsSortBy.value;
    this.props.onSearch(newsSource, newsSortBy);
  }

  /**
   * Renders the Alert Message
   * @return {string} Form Element
   */
  render() {
    const sources = this.props.sources.map(
      (source, index) => <option value={source.id} key={index}> {source.name} </option>
    );
    return (
        <div>
          <form onSubmit={this.onFormSubmit}>
             <select ref="newsSource" className="form-control">
                {sources}
            </select>
            <select ref="newsSortBy" className="form-control">
                <option value="top"> Top </option>
                <option value="latest"> Latest </option>
                <option value="popular"> Popular </option>
            </select>
            <button type="Submit">Get News</button>
          </form>
        </div>
    );
  }
}

NewsForm.propTypes = {
  sources: PropTypes.array,
  onSearch: PropTypes.func
};

export default NewsForm;

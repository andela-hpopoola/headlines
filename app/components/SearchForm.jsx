import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SourcesList from './SourcesList.jsx';

/**
 * Class displaying the Search Form
 * @extends React.Component
 */
class SearchForm extends Component {

  /**
   * Returns the value in the Search Field
   * @param {function} e - event of the field
   * @return {string} Value in String Field
   */
  handleSearch(e) {
    this.props.onChange(e.target.value);
  }

  /**
   * Renders the Alert Message
   * @return {string} Search Form
   */
  render() {
    return (
      <div>
        <div>
          <form>
            <input className="form-control" onChange={this.handleSearch.bind(this)} />
          </form>
        </div>
      </div>
    );
  }
}

/**
 * Set the PropTypes for Search Form
 */
SearchForm.propTypes = {
  sources: PropTypes.array,
  onChange: PropTypes.func
};

export default SearchForm;

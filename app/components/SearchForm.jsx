import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * @class SearchForm
 * @desc Class displaying the Search Form
 * @extends React.Component
 */
class SearchForm extends Component {

  /**
   * @desc Set the Initial conditions for showing the Search Form
   * @param {object} props - The property of the Search Form Class
   */
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
  }
  /**
   * @desc Returns the value in the Search Field
   * @param {function} e - event of the field
   * @return {string} Value in String Field
   */
  handleSearch(e) {
    this.props.onChange(e.target.value);
  }

  /**
   * @desc Renders the Search Input
   * @return {string} Search Form
   */
  render() {
    return (
      <div className="row search">
        <form className="col-md-8 col-sm-10 col-sm-offset-1 col-md-offset-2">
          <input
            className="form-control search__input"
            onChange={this.handleSearch}
            placeholder="Search for a News Source"
          />
        </form>
      </div>
    );
  }
}

/**
 * @desc Set the PropTypes for Search Form
 */
SearchForm.propTypes = {
  sources: PropTypes.array,
  onChange: PropTypes.func
};

export default SearchForm;

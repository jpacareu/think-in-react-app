import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  render() {
    return <input placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange}/>
  }
}

Search.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}
Search.defaultProps = {
  value: '',
  placeholder: 'Search...',
  onChange: null,
};
export default Search;

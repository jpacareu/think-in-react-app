import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryRow extends Component {
  render() {
    return (<tr key={this.props.keyProp}><td colSpan={2} className='row-category'>  { this.props.category } </td></tr>)
  }
}
CategoryRow.defaultProps = {

};

CategoryRow.propTypes = {
  category: PropTypes.string
}
export default CategoryRow;

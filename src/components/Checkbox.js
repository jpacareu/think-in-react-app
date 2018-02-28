import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class Checkbox extends Component {
  componentWillMount(){
    this.id = uuid.v4();
  }
  render() {
    return (<div>
              <input id={ this.props.id } type='checkbox' checked={ this.props.checked }  onChange={ this.props.onChange }/>
              <label htmlFor={ this.props.id }>{ this.props.title }</label>
           </div>)
  }
}
Checkbox.defaultProps = {
  checked: false,
  title: '',
  onChange: null,
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  title: PropTypes.string,
  onChange: PropTypes.func,
}
export default Checkbox;

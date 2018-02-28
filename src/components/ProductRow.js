import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductRow extends Component {
 render() {
   let outOfStockClass = this.props.product.stocked ? '' : 'out-of-stock';
    return (<tr>
              <td className={ outOfStockClass }> { this.props.product.name } </td>
              <td> { this.props.product.price } </td>
            </tr>)
  }
}
ProductRow.defaultProps = {

};

ProductRow.propTypes = {
  product: PropTypes.object,
}
export default ProductRow;

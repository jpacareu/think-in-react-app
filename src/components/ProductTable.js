import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';
import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';
import '../assets/css/ProductTable.css';

// import Header from './Header';

class ProductTable extends Component {
  constructor(props){
    super(props);
    this.filterByCategory = this.filterByCategory.bind(this);
    this.getRows = this.getRows.bind(this);
  }
  filterByCategory(){
    this.prodByCateg = {};
    this.props.products.forEach(product => {
      if(!this.prodByCateg.hasOwnProperty(product.category)){
        this.prodByCateg[product.category] = [product];
      }else{
        this.prodByCateg[product.category].push(product);
      }
    })
  }
  getRows(){
    let rowsProd = null;
    return Object.keys(this.prodByCateg)
      .map(category => {
      rowsProd = this.prodByCateg[category]
      .map(product => <ProductRow key={ uuid.v4() } product={product}/>);
      return (
        <React.Fragment key={ uuid.v4() }>
          <CategoryRow category={ category }/>
          { rowsProd }
        </React.Fragment>
      )
    })

  }
  render() {
    this.filterByCategory();
    return (<table>
               <thead>
                <tr>
                   <th>Name</th>
                   <th>Pricing</th>
                </tr>
               </thead>
               <tbody>
                { this.getRows() }
               </tbody>
            </table>)
  }
}
ProductTable.defaultProps = {

};

ProductTable.propTypes = {
  products: PropTypes.array
}
export default ProductTable;

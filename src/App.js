import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import Checkbox from './components/Checkbox';
import ProductTable from './components/ProductTable';
import { products } from './mock/mock';

class App extends Component {
  constructor(props){
    super(props);
    this.state  = {
      search: '',
      inStock: false,
      products
    }
    this.getProducts = this.getProducts.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleInStockCheckBoxChange = this.handleInStockCheckBoxChange.bind(this);
  }
  handleSearchChange(event){
    this.setState({
      search:event.target.value
    },() => {
      let prod = this.getProducts();

    });
  }
  handleInStockCheckBoxChange(event){
    this.setState({
      inStock:event.target.checked
    });
  }
  getProducts(){
    let search = this.state.search,
        inStock = this.state.inStock,
        prod = null;
    if(inStock && search){
      return this.state.products.filter(p => p.stocked && p.name.match(new RegExp(search,"gi")))
    }
    if(inStock){
      return this.state.products.filter(p => p.stocked);
    }
    if(search){
      return this.state.products.filter(p => p.name.match(new RegExp(search,"gi")))      
    }
    return this.state.products;
  }
  render() {
    return (<div>
              <Search
              value={ this.state.search }
              onChange={ this.handleSearchChange }
              />
              <Checkbox
                title='Only show products in stock'
                checked={ this.state.inStock }
                onChange={ this.handleInStockCheckBoxChange }
                />
                <ProductTable products={ this.getProducts() }/>
            </div>)
  }
}

export default App;

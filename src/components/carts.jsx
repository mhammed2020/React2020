import React, { Component } from 'react'
import Product from './products'

class ShoppingCart extends Component {
   

    render() { 
        return ( 
           <React.Fragment>
        <h2> Shopping cart</h2> 
        <button 
        onClick={this.props.onReset}  
        className="btn btn-secondary btn-sm m-2">
            Reset
            </button>

       {this.props.products.map(product => (
       
       <Product 
       key ={product.id} 
       product =  {product} 
       onDelete ={this.props.onDelete} 
       onIncrement = {this.props.onIncrement}
        
        />

       
       ))}


        </React.Fragment>
        );
    }
}
 
export default ShoppingCart;
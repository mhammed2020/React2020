import React, { Component } from 'react'
import Product from './products'

class ShoppingCart extends Component {
   

//uusing constractor

constructor(props) {
    super(props);
    console.log("Shopping cart ==> Constractor");
}

//calling backend server 
componentDidMount(){

    console.log("Shopping cart ==> component didmount");


}


    render() { 

        console.log("Shopping cart ==> render");

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
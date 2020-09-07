import React, { Component } from 'react'
import Product from './products'

class ShoppingCart extends Component {
    state = {  
products :[
    {id:1,name:"Burger",count :2},
    {id:2,name:"Fries",count :1},
    {id:3,name:"Cola",count :3}
]

    };

handeleDelete = (product) => {
//clone , edit and setState
const products = this.state.products.filter(p => p.id !== product.id);
this.setState({products});

};

handeleReset = () => {

 //clone , edit and setState
 let products = [...this.state.products];

 products = products.map(p =>  {
     p.count = 0 ;
     return p;
 });
 this.setState({products});
};

    render() { 
        return ( 
           <React.Fragment>
        <h2> Shopping cart</h2> 
        <button 
        onClick={this.handeleReset}  
        className="btn btn-secondary btn-sm m-2">Reset</button>
       {this.state.products.map(product => (
       <Product 
       key ={product.id} 
       onDelete ={this.handeleDelete} 
        product =  {product} 
        
        />

       
       ))}


        </React.Fragment>
        );
    }
}
 
export default ShoppingCart;
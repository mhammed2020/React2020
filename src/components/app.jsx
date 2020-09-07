import React, { Component } from 'react'
import NavBar from './navbar'
import ShoppingCart from './carts'

class App extends Component {
   

    state = {  
        products :[
            {id:1,name:"Burger",count :2},
            {id:2,name:"Fries",count :0},
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
        
        //handelincrmnt
        
        
        click_handler_INCRMT = product => {
        
        //clone edit set
        const products = [...this.state.products]
        const index = products.indexOf(product) ;
        products[index] = {...products[index]} ; 
        
        products[index].count++ ;
        
        this.setState({products});
        }
        





    render() { 
        return ( 

<React.Fragment>

    <NavBar productsCount = {this.state.products.filter(p => p.count > 0).length} />
    <main className="container">
        <ShoppingCart products = {this.state.products}
        onIncrement = {this.click_handler_INCRMT}
        onDelete = {this.handeleDelete}
        onReset = {this.handeleReset}
        
        
        />
    </main>
</React.Fragment>

        );
    }
}
 
export default App;
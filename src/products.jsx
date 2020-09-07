import React, { Component } from 'react'


class Product extends Component {
    state = { 
     name:this.props.product.name,
     count: this.props.product.count
    

     };

     get_classes() {

        return      this.state.count === 0
        ? "badge badge-warning m-2"
        : "badge badge-primary m-2" ;
     }
// 1 method
     renderNames() {
         if (this.state.names.length === 0) {
            return <h2>No Names </h2> ;
         } 
         return ( 
            <ul>
            {this.state.names.map(name => (
            <li  key ={name} > {name} </li>
            ))}
           
        </ul> 
        );
         
     }

     click_handler_INCRMT = () => {
         this.setState({count:this.state.count + 1 }) ;
     };




    render() { 
      

        return (
        <div>
    
           <span>  {this.state.name} </span>
           <span className = {this.get_classes()}>{this.state.count }</span>
      
      
  <button 
  onClick = {this.click_handler_INCRMT} 
  className ="btn btn-primary btn-sm ">
       + 
       </button>
     <span>

         <i className="fas fa-trash m-2"></i>
     </span>
        </div>
        );
    }
}
 
export default Product;
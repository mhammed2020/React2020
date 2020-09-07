import React, { Component } from 'react'


class Product extends Component {
    // state = { 
    //  name:this.props.product.name,
    //  count: this.props.product.count
    

    //  };

     get_classes() {

        return  this.props.product.count === 0
        ? "badge badge-warning m-2"
        : "badge badge-primary m-2" ;
     }
// 1 method


     click_handler_INCRMT = () => {
         this.setState({count: this.props.product.count + 1 }) ;
     };




    render() { 
      

        return (
      
    
    <div className="row">
       
        <div className="col-2">
        <span>  {this.props.product.name} </span>
        </div>

        <div className="col">
            
        <span className = {this.get_classes()}>{this.props.product.count }</span>
        <button 
  onClick = {this.click_handler_INCRMT} 
  className ="btn btn-primary btn-sm ">
       + 
       </button>
     <span onClick={ () => this.props.onDelete(this.props.product)}>

         <i className="fas fa-trash m-2"></i>
     </span>


        </div>


    </div>
      
      
 
    
        );
    }
}
 
export default Product;
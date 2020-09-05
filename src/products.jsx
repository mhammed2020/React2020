import React, { Component } from 'react'


class Product extends Component {
    state = { 
     name:"Burger",
     count: 3,
     imgURL: "logo192.png",
     names :  ["jedou","saber","ali"]

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


     //rebind using constractor
// constructor(){
//          super();
//          //1.rebind this

//          this.click_handler = this.click_handler.bind(this);
//      }


//2.rebind using arrow this =>
     click_handler_INCRMT = num => {
         this.setState({count:this.state.count + num }) ;
     };


//      increment = () => {
// this.click_handler_INCRMT(2) ;
//      };




    render() { 

      

    
        return (
        <div>
            {/* 2 method */}
{/* {this.state.names.length === 0 && <h3> no names </h3> }
         <ul>
            {this.state.names.map(name => (
            <li  key ={name} > {name} </li>
            ))}
           
        </ul>  */}



            <img src={this.state.imgURL} alt=""/>
           <span>  {this.state.name} </span>
           <span className = {this.get_classes()}>{this.state.count }</span>
      
      
  <button 
  onClick = {() => this.click_handler_INCRMT(2)} 
  className ="btn btn-primary btn-sm ">
       + 
       </button>

        </div>
        );
    }
}
 
export default Product;
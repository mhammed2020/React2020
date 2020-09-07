import React, { Component } from 'react'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Navbar</a>
  
    <span className="badge badge-primary">{this.props.productsCount}</span>
  
   </nav>  
      
      );
    }
}
 
export default NavBar;
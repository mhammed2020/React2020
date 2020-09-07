import React from 'react';
import ReactDOM from 'react-dom';

//import the component
//import Product from './products'
import ShoppingCart from './carts'
//import library bootstrap

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(<ShoppingCart/> ,document.querySelector("#root"));
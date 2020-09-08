import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import App from './components/app';

//import the component
//import Product from './products'
// import ShoppingCart from './components/carts'

//import library bootstrap

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
<BrowserRouter>

<App/>

</BrowserRouter>
 ,

document.querySelector("#root"));
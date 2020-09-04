import React from 'react';
import ReactDOM from 'react-dom';

//import the component
import Product from './products'

//import library bootstrap

import '../node_modules/bootstrap/dist/css/bootstrap.css'
ReactDOM.render(<Product/> ,document.querySelector("#root"));
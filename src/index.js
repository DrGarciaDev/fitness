// const element = document.createElement('h1')
// element.innerText = 'Hello World'
// // eslint-disable-next-line no-unused-vars
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react';
import ReactDom from 'react-dom';

import Exercises from './pages/Exercises'
// Importacion de bootstrap 
import 'bootstrap/dist/css/bootstrap.css';


const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDom.render( <Exercises /> , container);
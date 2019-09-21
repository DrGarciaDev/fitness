// const element = document.createElement('h1')
// element.innerText = 'Hello World'
// // eslint-disable-next-line no-unused-vars
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react';
import ReactDom from 'react-dom';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css';


const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDom.render(<Card
                        title="Technique Guides"
                        description="Learn amazong street"
                        img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
                        leftColor="#A74CF2"
                        rigthtColor="#617BFB"
                        />, container);
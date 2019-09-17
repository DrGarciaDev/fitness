// const element = document.createElement('h1')
// element.innerText = 'Hello World'
// // eslint-disable-next-line no-unused-vars
// const container = document.getElementById('root')
// container.appendChild(element)

import React from 'react';
import ReactDom from 'react-dom'

// const nombre = 'Luis';

const user = {
    firstName: 'Luis',
    lastName: 'García',
    avatar: 'Iagen'
}

function getName(user) {
    return `${ user.firstName } ${ user.lastName }`
}

function getGreeting(user) {
    if (user) {
        return <h1>Hello { getName(user) }</h1>
    }
    return <h1>Hello Extraño</h1>
}

const element = (
    <div>
        <h1>{getGreeting(user)}</h1>
    </div>
)

// const element = <h1>{ getGreeting(user) }</h1>
// haciendo uso de la sintaxis de JSX

const container = document.getElementById('root')

// ReactDOM.render(__QUE__, __DONDE__)
ReactDom.render(element, container);
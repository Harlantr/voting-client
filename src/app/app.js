import React from 'react';
import './app.css';
import {List} from 'immutable';

const App = (props) => {
    const pair = List.of('Enema of the State', 'Dookie');
    return React.cloneElement(props.children, {pair: pair});
}

export default App;
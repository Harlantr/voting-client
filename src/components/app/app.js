import React, { Component } from 'react';
import './app.css';
import Voting from '../voting/voting';

class App extends Component {
    render() {
        const pair = ['Enema of the State', 'Dookie'];
        return (
            <Voting pair={pair}/>
        );
    }
}

export default App;

import React, { Component } from 'react';
import './voting.css';

export default class Voting extends Component {
    getPair () {
        return this.props.pair || [];
    }

    render() {
        const buttons = this.getPair().map(entry =>
            <button key={entry}>
                <h1>{entry}</h1>
            </button>
        );
        return (
            <div className="voting">
                {buttons}
            </div>
        );
    }
}

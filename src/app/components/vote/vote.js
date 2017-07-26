import React, { Component } from 'react';

class Vote extends Component {
    getPair () {
        return this.props.pair || [];
    }

    render() {
        const buttons = this.getPair().map(entry =>
            <button
                key={entry}
                onClick={() => this.props.vote(entry)}
                disabled={this.props.hasVoted}>
                <h1>{entry}</h1>
                {
                    this.props.hasVoted === entry ? <div className="label">Voted</div> : null
                }
            </button>
        );
        return (
            <div className="voting">
                {buttons}
            </div>
        );
    }
}

export default Vote;
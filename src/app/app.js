import React from 'react';
import './app.css';
import VotingScreen from './components/votingScreen/votingScreen';

const App = (props) => {
    const pair = ['Enema of the State', 'Dookie'];
    return (
        <VotingScreen pair={pair} hasVoted={pair[0]} winner={pair[1]}/>
    );
}


export default App;
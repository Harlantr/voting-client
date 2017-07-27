import React from 'react';
import Winner from '../winner/winner';
import Vote from '../vote/vote';
import './votingScreen.css';

const VotingScreen = (props) => {
    // console.log(props.pair);
    return (
        <div>
            {
                props.winner ? <Winner winner={props.winner} /> : <Vote {...props}/>
            }
        </div>
    );
}

export default VotingScreen;
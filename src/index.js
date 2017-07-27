import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router'
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './app/app';
import VotingScreen from './app/components/votingScreen/votingScreen';
import Results from './app/components/results/results';

const routes = (
    <Route component={App}>
        <Route path="/" component={VotingScreen} />
        <Route path="/results" component={Results} />
    </Route>
);

ReactDOM.render(
  <Router history={hashHistory}>{routes}</Router>,
  document.getElementById('root')
);

registerServiceWorker();

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Player from './components/Player/Player';
import Players from './components/Players/Players';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Team from './components/Team/Team';
import Teams from './components/Teams/Teams';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Scoreboard} />
        <Route exact path="/player/:id" component={Player} />
        <Route exact path="/players/" component={Players} />
        <Route exact path="/team/:id" component={Team} />
        <Route exact path="/teams/" component={Teams} />
      </Switch>
    </Router>
  );
}

export default App;

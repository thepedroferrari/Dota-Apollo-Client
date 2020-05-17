import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Players from './components/Players';
import Scoreboard from './components/Scoreboard';
import Team from './components/Team';
import Teams from './components/Teams';
import Menu from './components/Menu/Menu';

function App() {
  return (
    <Router>
      <Menu />
      <Switch>
        <Route exact path="/" component={Scoreboard} />
        <Route exact path="/players/" component={Players} />
        <Route exact path="/team/:rosterId" component={Team} />
        <Route exact path="/teams/" component={Teams} />
      </Switch>
    </Router>
  );
}

export default App;

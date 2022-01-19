import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Feedback from './Feedback';
import Game from './Game';

import HomeTemp from './HomeTemp';
import Ranking from './Ranking';
import Settings from './Settings';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/game" component={ Game } />
        <Route exact path="/ranking" component={ Ranking } />
        <Route exact path="/feedback" component={ Feedback } />
        <Route exact path="/" component={ HomeTemp } />
      </Switch>
    );
  }
}

export default Routes;

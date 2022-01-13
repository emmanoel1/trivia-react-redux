import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import HomeTemp from './HomeTemp';
import Settings from './Settings';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/settings" component={ Settings } />
        <Route exact path="/" component={ HomeTemp } />
      </Switch>
    );
  }
}

export default Routes;

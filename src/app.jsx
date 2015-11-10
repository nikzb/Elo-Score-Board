import React from 'react';
import { Router, Route } from 'react-router';
import GameTable from './components/GameTable';
import PlayerDash from './components/PlayerDash'

const NoMatch = React.createClass({
  render() { return <div>Route not Found</div>; }
});

React.render((
  <Router>
    <Route path="/" component={GameTable}>
      <Route path="league/:leagueName" component={GameTable} />
    </Route>
    <Route path="/player/:playerId" component={PlayerDash} />
    <Route path="*" component={NoMatch}/>
  </Router>

), document.getElementById('app-container'));

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from "react-router";
import { createBrowserHistory } from "history";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const customHistory = createBrowserHistory();

const App = () => (
  <Router history={customHistory}>
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/login' component={Login} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
);

export default App;

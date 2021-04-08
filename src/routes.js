import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Calculator from './pages/Calculator';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/calculator" component={Calculator} />
    </Switch>
  </Router>
);

export default Routes;

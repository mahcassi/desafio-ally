import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Dashboard from '../components/Dashboard/Index';
import Form from '../components/Form/Index';
const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={Form} />
        <Route path="/edit/:id" component={Form} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Root;
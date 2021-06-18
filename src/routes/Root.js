import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard/Index';

import CreateCourse from '../pages/CreateCourse/Index';
const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={CreateCourse} />
        <Route path="/edit/:id" component={CreateCourse} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Root;
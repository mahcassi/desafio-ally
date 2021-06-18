import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard/Index';

import PagesCourseForm from '../pages/PagesCourseForm/Index';
const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create" component={PagesCourseForm} />
        <Route path="/edit/:id" component={PagesCourseForm} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Root;
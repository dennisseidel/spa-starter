import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';


export default ({ childProps }) => (
  <Switch>
    <Route path="/" exact component={Home} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);

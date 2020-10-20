import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import Route from './Route';

// Pages
import SignIn from '../pages/SignIn';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SignIn} />
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from './Route';

// Pages - Public
import SignIn from '../pages/public/SignIn';
import SignUp from '../pages/public/SignUp';
import Dashboard from '../pages/public/Dashboard';
import Event from '../pages/public/Event';
import NotFound from '../pages/public/NotFound';

// Pages - Private
import Profile from '../pages/private/Profile';
import MyTickets from '../pages/private/MyTickets';
import MyEvents from '../pages/private/MyEvents';
import CreateEvent from '../pages/private/CreateEvent';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/event/:id" component={Event} />
        <Route path="/profile/:name" component={Profile} isPrivate />
        <Route path="/my-tickets" component={MyTickets} isPrivate />
        <Route path="/my-events" component={MyEvents} isPrivate />
        <Route path="/create-event" component={CreateEvent} isPrivate />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default Routes;

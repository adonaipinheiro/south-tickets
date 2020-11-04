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
        <Route path="/" routeName="South Tickets" exact component={Dashboard} />
        <Route
          path="/signin"
          routeName="Entrar | South Tickets"
          component={SignIn}
        />
        <Route
          path="/signup"
          routeName="Cadastrar | South Tickets"
          component={SignUp}
        />
        <Route
          path="/event/:id"
          routeName="Evento | South Tickets"
          component={Event}
        />
        <Route
          path="/profile/:name"
          routeName="Perfil | South Tickets"
          component={Profile}
          isPrivate
        />
        <Route
          path="/my-tickets"
          routeName="Meus ingressos | South Tickets"
          component={MyTickets}
          isPrivate
        />
        <Route
          path="/my-events"
          routeName="Meus Eventos | South Tickets"
          component={MyEvents}
          isPrivate
        />
        <Route
          path="/create-event"
          routeName="Criar evento | South Tickets"
          component={CreateEvent}
          isPrivate
        />
        <Route
          path="*"
          routeName="Página não encontrada | South Tickets"
          component={NotFound}
        />
      </Switch>
    </Router>
  );
};

export default Routes;

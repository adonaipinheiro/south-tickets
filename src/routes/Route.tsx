import React from 'react';
import { useSelector } from 'react-redux';
import {
  Route as ReactRoute,
  Redirect,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';

// Components
import LoadingPage from '../components/LoadingPage';

// Interface
import { ApplicationState } from '../store';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({ isPrivate, component: Component, ...rest }: RouteProps) => {
  const { isLogged, isLoading } = useSelector(
    (state: ApplicationState) => state.auth,
  );

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isLoading ? (
          <LoadingPage />
        ) : isPrivate === isLogged || !isPrivate ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isLogged ? '/' : '/signin' }} />
        );
      }}
    />
  );
};

Route.defaultProps = {
  isPrivate: false,
};

export default Route;

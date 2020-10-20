import React, { useCallback, useEffect, useState } from 'react';
import {
  Route as ReactRoute,
  Redirect,
  RouteProps as ReactRouteProps,
} from 'react-router-dom';
import LoadingPage from '../components/LoadingPage';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route = ({ isPrivate, component: Component, ...rest }: RouteProps) => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const loadTime = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    loadTime();
  }, [loadTime]);

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isLoading ? (
          <LoadingPage />
        ) : isPrivate ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        );
      }}
    />
  );
};

Route.defaultProps = {
  isPrivate: true,
};

export default Route;

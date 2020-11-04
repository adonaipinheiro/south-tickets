import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Route as ReactRoute,
  Redirect,
  RouteProps as ReactRouteProps,
  useLocation,
} from 'react-router-dom';

// Components
import LoadingPage from '../components/LoadingPage';

// Firebase
import firebase from '../services/apiConnection';

// Interface
import { ApplicationState } from '../store';
import { logInError } from '../store/ducks/auth/actions';

// UserActions
import { userGetInfo } from '../store/ducks/user/actions';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  routeName: string;
  component: React.ComponentType;
}

const Route = ({
  isPrivate,
  routeName,
  component: Component,
  ...rest
}: RouteProps) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);

  const { isLogged, isLoading } = useSelector(
    (state: ApplicationState) => state.auth,
  );
  const { name } = useSelector((state: ApplicationState) => state.user);

  const checkHasUser = useCallback(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(userGetInfo(user.uid));
      }
      dispatch(logInError());
      setLoading(false);
    });
  }, [dispatch]);

  useEffect(() => {
    checkHasUser();
  }, [checkHasUser]);

  useEffect(() => {
    if (loading || isLoading) {
      document.title = 'Carregando...';
    } else {
      switch (location.pathname) {
        case '/':
          document.title = routeName;
          break;
        case '/signin':
          document.title = routeName;
          break;
        case '/signup':
          document.title = routeName;
          break;
        case '/event/:id':
          document.title = routeName;
          break;
        case `/profile/${name}`:
          document.title = `Perfil ${name}`;
          break;
        case '/my-tickets':
          document.title = routeName;
          break;
        case '/my-events':
          document.title = routeName;
          break;
        case '/create-event':
          document.title = routeName;
          break;

        default:
          document.title = routeName;
          break;
      }
    }
  }, [location, loading, isLoading, routeName, name]);

  return (
    <ReactRoute
      {...rest}
      render={() => {
        return isLoading || loading ? (
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

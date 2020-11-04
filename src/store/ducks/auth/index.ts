import { Reducer } from 'redux';

// Types
import { AuthState, AuthTypes, ActionsTypes } from './types';

const INITIAL_STATE: AuthState = {
  isLoading: true,
  isLogged: !!localStorage.getItem('isLogged'),
  error: false,
};

const auth: Reducer<AuthState, ActionsTypes> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case AuthTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case AuthTypes.CHECK_USER:
      return {
        ...state,
        isLoading: true,
      };

    case AuthTypes.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      };

    case AuthTypes.LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        error: true,
      };

    case AuthTypes.LOAD_OUT:
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default auth;

import { Reducer } from 'redux';

// Types
import { AuthState, AuthTypes, ActionsTypes } from './types';

const INITIAL_STATE: AuthState = {
  email: '',
  pass: '',
  isLoading: false,
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

    case AuthTypes.LOAD_SUCCESS:
      localStorage.setItem('isLogged', 'true');
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      };

    case AuthTypes.LOAD_ERROR:
      return {
        ...state,
        error: true,
      };

    case AuthTypes.LOAD_OUT:
      localStorage.removeItem('isLogged');
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default auth;

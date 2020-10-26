import { Reducer } from 'redux';

// Types
import { AuthState, AuthTypes, ActionsTypes } from './types';

const INITIAL_STATE: AuthState = {
  email: 'teste 2',
  pass: '',
  isLoading: false,
  isLogged: false,
  error: false
}

const auth: Reducer<AuthState, ActionsTypes> = (state = INITIAL_STATE, action)  => {
  switch (action.type) {
    case AuthTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case AuthTypes.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      }

    case AuthTypes.LOAD_ERROR:
      return {
        ...state,
        error: true
      }

    default:
      return state;
  }
}

export default auth;

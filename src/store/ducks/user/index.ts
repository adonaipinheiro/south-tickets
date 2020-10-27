import { Reducer } from 'redux';

// Types
import { UserState, UserTypes, ActionsTypes } from './types';

const INITIAL_STATE: UserState = {
  email: '',
  pass: '',
  isLoading: false,
  isLogged: false,
  error: false
}

const user: Reducer<UserState, ActionsTypes> = (state = INITIAL_STATE, action)  => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case UserTypes.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
      }

    case UserTypes.LOAD_ERROR:
      return {
        ...state,
        error: true
      }

    default:
      return state;
  }
}

export default user;

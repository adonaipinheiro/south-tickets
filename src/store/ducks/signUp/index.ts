import { Reducer } from 'redux';

// Types
import { SignUpState, SignUpTypes, ActionsTypes } from './types';

const INITIAL_STATE: SignUpState = {
  isLoading: false,
  error: false,
};

const auth: Reducer<SignUpState, ActionsTypes> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case SignUpTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SignUpTypes.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case SignUpTypes.LOAD_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default auth;

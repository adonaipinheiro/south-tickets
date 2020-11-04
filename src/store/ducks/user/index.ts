import { Reducer } from 'redux';

// Types
import { UserState, UserTypes, ActionsTypes } from './types';

const INITIAL_STATE: UserState = {
  email: '',
  events: [],
  name: 'Bem-vindo(a)',
  photo: '',
  tickets: [],
  uid: '',
  isLoading: false,
  error: false,
};

const user: Reducer<UserState, ActionsTypes> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case UserTypes.LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case UserTypes.UPDATE_USER:
      return {
        ...state,
        email: action.payload.email,
        events: action.payload.events,
        name: action.payload.name,
        photo: action.payload.photo,
        tickets: action.payload.tickets,
        uid: action.payload.uid,
        isLoading: false,
      };

    case UserTypes.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case UserTypes.LOAD_ERROR:
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default user;

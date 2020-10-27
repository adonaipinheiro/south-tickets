import { Reducer } from 'redux';
import { uuid } from 'uuidv4';

// Types
import { ToastState, ToastTypes, ActionsTypes } from './types';

const INITIAL_STATE: ToastState = {
  messages: [],
};

const toast: Reducer<ToastState, ActionsTypes> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case ToastTypes.ADD_TOAST:
      const id = uuid();

      const toastMessage = {
        id,
        type: action.payload.message.type,
        title: action.payload.message.title,
        description: action.payload.message.description,
      };

      const addMessages = [...state.messages, toastMessage];

      return {
        ...state,
        messages: addMessages,
      };

    case ToastTypes.REMOVE_TOAST:
      const messagesLeft = state.messages.filter(
        message => message.id !== action.payload.id,
      );

      return {
        ...state,
        messages: messagesLeft,
      };

    default:
      return state;
  }
};

export default toast;

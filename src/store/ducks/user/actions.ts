import { action } from 'typesafe-actions';
import { UserTypes } from './types';

export const logInUser = (email: string, password: string) =>
  action(UserTypes.LOAD_REQUEST, {
    email,
    password,
  });

export const logInSuccess = () => action(UserTypes.LOAD_SUCCESS);

export const logInError = () => action(UserTypes.LOAD_ERROR);

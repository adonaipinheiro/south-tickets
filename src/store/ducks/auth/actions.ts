import { action } from "typesafe-actions";
import { AuthTypes } from './types';

export const logIn = (email: string, password: string)  => action(AuthTypes.LOAD_REQUEST, {
  email,
  password
});

export const logInSuccess = ()  => action(AuthTypes.LOAD_SUCCESS);

export const logInError = ()  => action(AuthTypes.LOAD_ERROR);

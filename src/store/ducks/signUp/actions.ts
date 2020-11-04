import { action } from 'typesafe-actions';
import { SignUpTypes } from './types';

export const createUser = (email: string, password: string) =>
  action(SignUpTypes.LOAD_REQUEST, {
    email,
    password,
  });

export const createUserSuccess = () => action(SignUpTypes.LOAD_SUCCESS);

export const createUserError = () => action(SignUpTypes.LOAD_ERROR);

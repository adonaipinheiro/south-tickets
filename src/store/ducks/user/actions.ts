import { action } from 'typesafe-actions';
import { UserTypes } from './types';

export const userGetInfo = (id: string) =>
  action(UserTypes.LOAD_REQUEST, {
    id,
  });

export const updateUserInfo = (
  email: string,
  events: Array<any>,
  name: string,
  photo: string,
  tickets: Array<any>,
  uid: string,
) =>
  action(UserTypes.UPDATE_USER, {
    email,
    events,
    name,
    photo,
    tickets,
    uid,
  });

export const userSuccess = () => action(UserTypes.LOAD_SUCCESS);

export const userError = () => action(UserTypes.LOAD_ERROR);

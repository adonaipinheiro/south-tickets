import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/**
 * Types
 */
export enum UserTypes {
  LOAD_REQUEST = '@user/LOAD_REQUEST',
  UPDATE_USER = '@user/UPDATE_USER',
  LOAD_SUCCESS = '@user/LOAD_SUCCESS',
  LOAD_ERROR = '@user/LOAD_ERROR',
}

/**
 * State Type
 */
export interface UserState {
  readonly email: string;
  readonly events: Array<any>;
  readonly name: string;
  readonly photo: string;
  readonly tickets: Array<any>;
  readonly uid: string;
  readonly isLoading: boolean;
  readonly error: boolean;
}

/**
 * Actions Types
 */
export type ActionsTypes = ActionType<typeof actions>;

import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/**
 * Types
 */
export enum UserTypes {
  LOAD_REQUEST = '@user/LOAD_REQUEST',
  LOAD_SUCCESS = '@user/LOAD_SUCCESS',
  LOAD_ERROR = '@user/LOAD_ERROR',
}

/**
 * State Type
 */
export interface UserState {
  readonly email: string;
  readonly pass: string;
  readonly isLoading: boolean;
  readonly isLogged: boolean;
  readonly error: boolean;
}

/**
 * Actions Types
 */
export type ActionsTypes = ActionType<typeof actions>

import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/**
 * Types
 */
export enum AuthTypes {
  LOAD_REQUEST = '@auth/LOAD_REQUEST',
  CHECK_USER = '@auth/CHECK_USER',
  LOAD_SUCCESS = '@auth/LOAD_SUCCESS',
  LOAD_ERROR = '@auth/LOAD_ERROR',
  LOAD_OUT = '@auth/LOAD_OUT',
}

/**
 * State Type
 */
export interface AuthState {
  readonly isLoading: boolean;
  readonly isLogged: boolean;
  readonly error: boolean;
}

/**
 * Actions Types
 */
export type ActionsTypes = ActionType<typeof actions>;

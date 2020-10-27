import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/**
 * Types
 */
export enum AuthTypes {
  LOAD_REQUEST = '@auth/LOAD_REQUEST',
  LOAD_SUCCESS = '@auth/LOAD_SUCCESS',
  LOAD_ERROR = '@auth/LOAD_ERROR',
}

/**
 * State Type
 */
export interface AuthState {
  readonly email: string;
  readonly pass: string;
  readonly isLoading: boolean;
  readonly isLogged: boolean;
  readonly error: boolean;
}

/**
 * Actions Types
 */
export type ActionsTypes = ActionType<typeof actions>;

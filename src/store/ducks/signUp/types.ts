import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/**
 * Types
 */
export enum SignUpTypes {
  LOAD_REQUEST = '@signUp/LOAD_REQUEST',
  LOAD_SUCCESS = '@signUp/LOAD_SUCCESS',
  LOAD_ERROR = '@signUp/LOAD_ERROR',
}

/**
 * State Type
 */
export interface SignUpState {
  readonly isLoading: boolean;
  readonly error: boolean;
}

/**
 * Actions Types
 */
export type ActionsTypes = ActionType<typeof actions>;

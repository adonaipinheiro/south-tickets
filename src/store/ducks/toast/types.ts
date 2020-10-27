import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/**
 * Types
 */
export enum ToastTypes {
  ADD_TOAST = '@toast/ADD_TOAST',
  REMOVE_TOAST = '@toast/REMOVE_TOAST',
}

/**
 * State Type
 */
export interface Toast {
  readonly id: string;
  readonly type?: 'success' | 'error' | 'info';
  readonly title: string;
  readonly description?: string;
}

export interface ToastState {
  readonly messages: Toast[];
}

/**
 * Actions Types
 */
export type ActionsTypes = ActionType<typeof actions>;

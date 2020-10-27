import { action } from 'typesafe-actions';
import { ToastTypes, Toast } from './types';

export const addToast = (message: Omit<Toast, 'id'>) =>
  action(ToastTypes.ADD_TOAST, { message });

export const removeToast = (id: string) =>
  action(ToastTypes.REMOVE_TOAST, { id });

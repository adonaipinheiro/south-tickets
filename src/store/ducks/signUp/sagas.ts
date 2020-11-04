import { put, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

// Actions
import * as actions from './actions';
import { createUserSuccess, createUserError } from './actions';

export function* createUser({
  payload,
}: ActionType<typeof actions.createUser>) {
  try {
    const { email, password } = payload;
    const resp = yield call(api.createUserWithEmailAndPass, email, password);
    console.log(resp);
    console.log(email, password);
    yield put(createUserSuccess());
  } catch (error) {
    console.error(error);
    yield put(createUserError());
  }
}

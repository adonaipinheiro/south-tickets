import { put, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

// Actions
import * as actions from './actions';
import { logInSuccess, logInError } from './actions';

// User Actions
import { logInUser } from '../user/actions';
import { addToast } from '../toast/actions';

export function* logIn({ payload }: ActionType<typeof actions.logIn>) {
  try {
    const { email, password } = payload;
    const getUser = yield call(api.getUser, 'uuid');
    const getAllUsers = yield call(api.getAllUsers);
    console.log(getUser);
    console.log(getAllUsers);
    console.log(email, password);
    yield put(logInUser(email, password));
    yield put(logInSuccess());
    yield put(addToast({ title: getUser.first, description: getUser.last }));
  } catch (error) {
    console.log(error);
    yield put(logInError());
  }
}

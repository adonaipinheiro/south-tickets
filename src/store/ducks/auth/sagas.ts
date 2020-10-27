import { put } from 'redux-saga/effects';
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
    const getUser = yield api.getUser('uuid');
    const getAllUsers = yield api.getAllUsers();
    console.log(getUser);
    console.log(getAllUsers);
    console.log(email, password);
    yield put(logInSuccess());
    yield put(logInUser(email, password));
    yield put(addToast({ title: 'Teste', description: 'Teste Description' }));
  } catch (error) {
    console.log(error);
    yield put(logInError());
  }
}

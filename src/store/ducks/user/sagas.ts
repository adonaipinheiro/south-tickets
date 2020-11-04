import { put } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

// Actions
import * as actions from './actions';
import { userSuccess, userError, updateUserInfo } from './actions';

// Auth Acitons
import { logInSuccess } from '../auth/actions';

export function* getUserInfo({
  payload,
}: ActionType<typeof actions.userGetInfo>) {
  try {
    const getUser = yield api.getUser(payload.id);
    console.log(getUser);
    yield put(
      updateUserInfo(
        getUser.email,
        getUser.events,
        getUser.name,
        getUser.photo,
        getUser.tickets,
        getUser.uid,
      ),
    );
    yield put(userSuccess());
    yield put(logInSuccess());
  } catch (error) {
    console.log(error);
    yield put(userError());
  }
}

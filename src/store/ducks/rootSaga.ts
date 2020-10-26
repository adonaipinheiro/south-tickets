import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from './auth/types';
import { logIn } from './auth/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOAD_REQUEST, logIn)
  ]);
}

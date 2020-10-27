import { all, takeLatest } from 'redux-saga/effects';

// Auth
import { AuthTypes } from './auth/types';
import { logIn } from './auth/sagas';

// User
import { UserTypes } from './user/types';
import { logInUser } from './user/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOAD_REQUEST, logIn),
    takeLatest(UserTypes.LOAD_REQUEST, logInUser),
  ]);
}

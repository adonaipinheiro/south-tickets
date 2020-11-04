import { all, takeLatest } from 'redux-saga/effects';

// Auth
import { AuthTypes } from './auth/types';
import { logIn, logOff } from './auth/sagas';

// User
import { UserTypes } from './user/types';
import { getUserInfo } from './user/sagas';

// SignUp
import { SignUpTypes } from './signUp/types';
import { createUser } from './signUp/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.LOAD_REQUEST, logIn),
    takeLatest(AuthTypes.LOAD_OUT, logOff),
    takeLatest(UserTypes.LOAD_REQUEST, getUserInfo),
    takeLatest(SignUpTypes.LOAD_REQUEST, createUser),
  ]);
}

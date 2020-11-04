import { put, call } from 'redux-saga/effects';
import { ActionType } from 'typesafe-actions';
import api from '../../../services/api';

// Actions
import * as actions from './actions';
import { logInSuccess, logInError } from './actions';

// Toast Actions
import { addToast } from '../toast/actions';

// User Actions
import { userGetInfo } from '../user/actions';

export function* logIn({ payload }: ActionType<typeof actions.logIn>) {
  try {
    const { email, password } = payload;
    const user = yield call(api.loginWithEmailAndPass, email, password);
    console.log(user);
    localStorage.setItem('isLogged', 'true');
    localStorage.setItem('uuid', user);
    yield put(userGetInfo(user));
    yield put(logInSuccess());
    yield put(
      addToast({
        title: `Bem-vindo(a)`,
        description: 'Veja as novidades dos shows!',
        type: 'success',
      }),
    );
  } catch (error) {
    yield put(
      addToast({
        title: 'Alguma coisa deu errado!',
        description: error.message,
        type: 'error',
      }),
    );
    yield put(logInError());
  }
}

export function* getHasUser() {
  try {
    yield call(api.logOff);
    localStorage.removeItem('isLogged');
    localStorage.removeItem('uuid');
    yield put(addToast({ title: 'Até logo!', type: 'success' }));
  } catch (error) {
    yield put(
      addToast({
        title: 'Alguma coisa deu errado!',
        description: error.message,
        type: 'error',
      }),
    );
  }
}

export function* logOff() {
  try {
    yield call(api.logOff);
    localStorage.removeItem('isLogged');
    localStorage.removeItem('uuid');
    yield put(addToast({ title: 'Até logo!', type: 'success' }));
  } catch (error) {
    yield put(
      addToast({
        title: 'Alguma coisa deu errado!',
        description: error.message,
        type: 'error',
      }),
    );
  }
}

import { createStore, Store, Middleware, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import rootReducer from './ducks/rootReducer';

// Sagas
import rootSaga from './ducks/rootSaga';

// Types
import { AuthState } from './ducks/auth/types';

export interface ApplicationState {
  auth: AuthState
}

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware]

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export { store };

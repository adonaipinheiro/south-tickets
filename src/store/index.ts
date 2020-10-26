import { createStore, Store, Middleware, applyMiddleware, compose } from 'redux';
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

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares: Middleware[] = [sagaMiddleware]

const store: Store<ApplicationState> = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export { store };

// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools, devToolsEnhancer } from 'redux-devtools-extension';

// Imports: Redux Root Reducer
import rootReducer from '../reducers/index';

// Imports: Redux Root Saga
import { rootSaga } from '../sagas/index';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Redux: Store
const store = createStore(
  rootReducer, {},
  composeWithDevTools(applyMiddleware(
    sagaMiddleware
  ))
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Exports
export {
  store,
}
/* global window */
/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }] */
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import {
  redirect,
  systemExceptionHandler,
} from 'middleware';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import initialState from './initialState';


export default (history) => {
  const createStoreWithMiddleware = compose(applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    redirect(history),
    systemExceptionHandler,
    createLogger(),
  ))(createStore);

  const store = createStoreWithMiddleware(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  // Hot Module Replacement API
  if (module.hot) {
    /* eslint-disable global-require */
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers/index');
      store.replaceReducer(nextReducers);
    });
  }
  return store;
};


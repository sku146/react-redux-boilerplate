// @flow
/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import createSagaMiddleware, { END } from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import {
  redirect,
  systemExceptionHandler,
} from 'middleware';
import { createLogger } from 'redux-logger';
import rootReducer from 'reducers';
import { Types } from 'constants';

export default (history: Types.History, debug: boolean = false) => {
  const composeEnhancers = (debug && global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, redirect(history), systemExceptionHandler];
  if (debug) {
    middleware.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  if (debug && module.hot) {
    /* eslint-disable global-require */
    // $FlowFixMe
    module.hot.accept('../reducers', () => {
      const nextReducers = require('../reducers/index');
      store.replaceReducer(nextReducers);
    });
  }

  return store;
};

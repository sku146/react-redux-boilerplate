import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import {
  redirect,
  systemExceptionHandler,
} from 'middleware';
import rootReducer from 'reducers';
import initialState from './initialState';

export default (history) => {
  const createStoreWithMiddleware = applyMiddleware(
    apiMiddleware,
    thunkMiddleware,
    redirect(history),
    systemExceptionHandler,
  )(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};


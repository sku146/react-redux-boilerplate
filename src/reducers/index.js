import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import application from './application';
import requestError from './request-error';

const rootReducer = combineReducers({
  form,
  application,
  requestError,
});

export default rootReducer;

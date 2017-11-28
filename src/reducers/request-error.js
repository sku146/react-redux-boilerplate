// @flow
import { handleActions } from 'redux-actions';
import assignIn from 'lodash/assignIn';
import {
  RequestErrorActions,
} from 'actions';

export default handleActions({
  [RequestErrorActions.requestError]: (state, action) => assignIn({}, state, action.payload),
  [RequestErrorActions.resetError]: state => assignIn({}, state, { status: null, retry: null }),
}, {});

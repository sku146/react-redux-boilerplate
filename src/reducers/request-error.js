import { handleActions } from 'redux-actions';
import assignIn from 'lodash/assignIn';
import initialState from 'store/initialState';
import {
  RequestErrorActions,
} from 'actions';

export default handleActions({
  [RequestErrorActions.requestError]: (state, action) => assignIn({}, state, action.payload),
  [RequestErrorActions.resetError]: state => assignIn({}, state, { status: null, retry: null }),
}, initialState.requestError);

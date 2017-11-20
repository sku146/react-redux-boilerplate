import { handleActions } from 'redux-actions';
import assignIn from 'lodash/assignIn';
import initialState from 'store/initialState';
import {
  ApplicationActions,
} from 'actions';
import {
  UIConstants,
} from 'constants';

export default handleActions({
  [ApplicationActions.applicationStarted]: state => (assignIn({}, state, {
    applicationId: UIConstants.applicationIdRandomNo,
  })),
  [ApplicationActions.exampleListRequest]: (state, action) => assignIn({}, state, {
    isFetching: !action.error,
  }),
  [ApplicationActions.exampleListResponse]: (state, action) => assignIn({}, state, {
    isFetching: false,
    exampleList: action.payload,
  }),
  [ApplicationActions.exampleListFailure]: state => assignIn({}, state, {
    isFetching: false,
    exampleList: [],
  }),
}, initialState.application);

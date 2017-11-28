// @flow
import { handleActions } from 'redux-actions';
import assignIn from 'lodash/assignIn';
import {
  ApplicationActions,
} from 'actions';
import {
  UIConstants,
  Types,
} from 'constants';

export default handleActions({
  [ApplicationActions.applicationStarted]: (state: Types.State) => (assignIn({}, state, {
    applicationId: UIConstants.applicationIdRandomNo,
  })),
  [ApplicationActions.exampleListRequest]: (state: Types.State, action: Types.Action) => assignIn({}, state, {
    isFetching: !action.error,
  }),
  [ApplicationActions.exampleListResponse]: (state: Types.State, action: Types.Action) => assignIn({}, state, {
    isFetching: false,
    exampleList: action.payload,
  }),
  [ApplicationActions.exampleListFailure]: (state: Types.State) => assignIn({}, state, {
    isFetching: false,
    exampleList: [],
  }),
}, {});

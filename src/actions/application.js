import { createAction } from 'redux-actions';
import { ActionTypes } from 'constants';

export const applicationStarted = createAction(ActionTypes.APPLICATION_STARTED);
export const exampleListRequest = createAction(ActionTypes.EXAMPLE_LIST_REQUEST);
export const exampleListResponse = createAction(ActionTypes.EXAMPLE_LIST_RESPONSE);
export const exampleListFailure = createAction(ActionTypes.EXAMPLE_LIST_FAILURE);

export default {};

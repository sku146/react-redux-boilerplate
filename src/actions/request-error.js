// @flow
import { createAction } from 'redux-actions';
import { ActionTypes } from 'constants';

export const requestError = createAction(ActionTypes.REQUEST_ERROR);
export const resetError = createAction(ActionTypes.RESET_ERROR);

export default {};

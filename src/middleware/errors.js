// @flow
/* eslint-disable default-case */
import { Types, ActionTypes } from 'constants';

export default () => (next: Types.Next) => (action: Types.Action) => {
  const { payload } = action;

  if (action.error) {
    if (payload && payload.status) {
      switch (payload.status) {
        // technical error code
        case 404:
        case 405:
        case 500:
        case 501:
        case 502:
        case 503:
          next({
            type: ActionTypes.REQUEST_ERROR,
            payload: { status: payload.status, retry: false },
          });
          break;

        // unauthorizes
        case 401:
          next({ type: ActionTypes.UNAUTHORIZED }); // TODO this might be a redirect in the future
          break;

        // forbidden
        case 403:
          next({ type: ActionTypes.FORBIDDEN }); // TODO this might be a redirect in the future
          break;

        // request timeout
        case 408:
        case 504:
          next({
            type: ActionTypes.REQUEST_ERROR,
            payload: { status: payload.status, retry: true },
          });
          break;
      }
    } else {
      // request error like no internet connection
      next({ type: ActionTypes.REQUEST_ERROR, payload: { status: 500, retry: false } });
    }
  }

  return next(action);
};
